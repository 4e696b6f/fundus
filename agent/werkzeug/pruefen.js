#!/usr/bin/env node
/* Prüfwerkzeug von Fundus.
 *
 * Wozu: Es rechnet die mechanischen Prüfpunkte eines Wiki-Ordners aus (Links, Frontmatter, Daten, Protokoll, Übergabe,
 * Fälligkeiten …), damit der Agent nicht zählen, vergleichen oder Kalender rechnen muss. Welche Prüfpunkte es gibt und
 * was mit einem Befund geschieht, steht nur in agent/ablaeufe/pruefen.md (§ 0, § 1, § 2).
 *
 * Das Werkzeug liest nur. Es schreibt, verschiebt und löscht nichts und braucht kein Netz.
 *
 * Es enthält selbst keine Regeln: Die Prüfung ist der Kern der Ansicht (Skript „fundus-kern“ in ansicht/uebersicht.html).
 * Denselben Bericht zeigt die Ansicht im Reiter „Prüfung“. Ohne node prüft der Agent von Hand und sagt das.
 *
 * Aufruf:
 *   node agent/werkzeug/pruefen.js [--heute JJJJ-MM-TT] [ordner]   Prüfbericht; ordner: Standard ist der Ordner mit agent/
 *   node agent/werkzeug/pruefen.js tag JJJJ-MM-TT [+n|-n]           Wochentag und Datum, um n Tage verschoben
 *                                                                   (ohne Datum: heute nach der Uhr des Rechners)
 * Ende: 0, bei einem Laufzeit- oder Aufruffehler 2. Befunde ändern den Code nicht.
 */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');

const HILFE = 'Aufruf:\n  node agent/werkzeug/pruefen.js [--heute JJJJ-MM-TT] [ordner]\n  node agent/werkzeug/pruefen.js tag JJJJ-MM-TT [+n|-n]';
function abbruch(text) { process.stderr.write(text + '\n'); process.exit(2); }

function ladeKern() {
  const datei = path.join(__dirname, '..', '..', 'ansicht', 'uebersicht.html');
  const html = fs.readFileSync(datei, 'utf8');
  const kern = /<script id="fundus-kern">([\s\S]*?)<\/script>/.exec(html);
  if (!kern) throw new Error('In ' + datei + ' fehlt das Skript „fundus-kern“.');
  const csp = /<meta\s+http-equiv=["']Content-Security-Policy["']\s+content=(["'])([\s\S]*?)\1/i.exec(html);
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(kern[1] + '\nthis.K = FundusKern;', ctx, { filename: 'fundus-kern' });
  return { K: ctx.K, referenz: { csp: csp ? csp[2] : '', kern: kern[1] } };
}

/* Alle Dateien des Ordners, nur lesend. Text nur, wo der Kern ihn braucht: .md, .txt in quellen/, HTML in eigen/ und
   ausgaben/. Ordner mit Punkt vorn und Verknüpfungen auf Ordner bleiben draußen. */
function dateien(wurzel) {
  const aus = [];
  (function lauf(dir, rel) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (e.name.charAt(0) === '.') continue;
      const p = rel ? rel + '/' + e.name : e.name, abs = path.join(dir, e.name);
      if (e.isDirectory()) { lauf(abs, p); continue; }
      let st;
      try { st = fs.statSync(abs); } catch (err) { continue; }
      if (!st.isFile()) continue;
      const mitText = /\.md$/i.test(p) || (/\.html?$/i.test(p) && /^(eigen|ausgaben)\//.test(p)) || (/\.txt$/i.test(p) && /^quellen\//.test(p) && st.size <= 2097152);
      aus.push({ pfad: p, groesse: st.size, geaendert: st.mtimeMs, text: mitText ? fs.readFileSync(abs, 'utf8') : undefined });
    }
  })(wurzel, '');
  return aus;
}

function main(arg) {
  const { K, referenz } = ladeKern();
  if (arg[0] === 'tag') {
    const basis = arg[1] == null ? K.heuteIso() : K.datum(arg[1]), schub = arg[2] == null ? 0 : /^[+-]\d{1,5}$/.test(arg[2]) ? parseInt(arg[2], 10) : NaN;
    if (!basis || isNaN(schub) || arg.length > 3) abbruch('Kein gültiges Datum oder keine gültige Verschiebung.\n' + HILFE);
    const tag = K.plusTage(basis, schub);
    process.stdout.write(K.wochentag(tag) + ', ' + tag + '\n');
    return;
  }
  let heute = K.heuteIso(), ordner = null;
  for (let i = 0; i < arg.length; i++) {
    if (arg[i] === '--heute') { heute = K.datum(arg[++i] || ''); if (!heute) abbruch('--heute braucht ein Datum JJJJ-MM-TT.\n' + HILFE); }
    else if (arg[i] === '--hilfe' || arg[i] === '-h' || arg[i] === '--help') { process.stdout.write(HILFE + '\n'); return; }
    else if (arg[i].charAt(0) === '-' || ordner != null) abbruch('Unbekannte Angabe: ' + arg[i] + '\n' + HILFE);
    else ordner = arg[i];
  }
  const wurzel = path.resolve(ordner == null ? path.join(__dirname, '..', '..') : ordner);
  if (!fs.existsSync(wurzel) || !fs.statSync(wurzel).isDirectory()) abbruch('Kein Ordner: ' + wurzel);
  const idx = K.baueIndex(path.basename(wurzel), dateien(wurzel));
  if (!idx.docs.some(function (d) { return d.zone === 'wiki'; })) abbruch('In ' + wurzel + ' liegt kein wiki/. Gemeint ist der Ordner, in dem AGENTS.md liegt.');
  process.stdout.write(K.pruefberichtText(K.pruefbericht(idx, heute, referenz), idx.vault) + '\n');
}

try { main(process.argv.slice(2)); } catch (e) { abbruch('Prüfwerkzeug: ' + (e && e.message ? e.message : e)); }
