# Ablauf: schreiben

**Wofür:** Brief, Rundschreiben oder anderen Text aus deinem Wiki entwerfen.

## 1 · Zielperson und Zweck

Wer liest, was soll danach geschehen, Anrede, Umfang: Was der Auftrag
offenlässt, fragst du vor dem Entwurf in einer Nachricht oder nennst es als
Annahme mit Grund.

## 2 · Im Wiki suchen

Je Thema wie `agent/ablaeufe/fragen.md` § 1 und § 2. Der Text sagt nur, was
dort steht. Hat das Wiki nichts Tragendes zum Thema, sagst du das vor dem
Entwurf und fragst, ob ein Gerüst mit offenen Stellen gewünscht ist.

## 3 · Entwurf

- Der Text bleibt frei von Belegzeichen. Am Ende steht
  `## Belege (vor dem Versand löschen)`, je Tatsache eine Zeile
  `Stichwort der Aussage → [[seite]]`, eine Moduldatei als Pfad wie in
  `agent/ablaeufe/fragen.md` § 3.
- Was die Person im Auftrag selbst angibt (Frist, eigene Position), belegst
  du mit `Angabe im Auftrag, JJJJ-MM-TT`.
- Fehlt ein Beleg, bleibt die Stelle offen, nie aus allgemeinem Wissen
  gefüllt: im Chat nennen, in `wiki/meta/luecken.md` eintragen (§ 4 geht
  vor).
- Was eine Seite mit `status: veraltet` oder `ersetzt`,
  `sicherheit: strittig`, vorbeigegangenem `pruefen_bis:` oder als nicht
  mehr gültig („galt bis“) führt, steht nicht als geltend im Text; du nennst
  es im Chat.
- Kurztitel, `zielperson:` und Log nennen eine Rolle, nie einen Namen. Im
  Text gilt `L03` wie im Wiki; einen Namen aus dem Auftrag übernimmst du,
  wie die Person ihn schreibt, ohne Vorname oder Titel aus anderen Dateien.
- Vor dem Speichern die Belegprobe (`agent/regeln/SCHEMA.md` →
  *Belegprobe*), auch für Angaben aus dem Auftrag: Du fügst ihnen nichts
  hinzu. Ein errechneter Termin ist eine Frist
  (`agent/ablaeufe/feierabend.md` § 1).

## 4 · Datei

`ausgaben/JJJJ-MM-TT-kurztitel.md` nach `agent/regeln/SCHEMA.md` →
*Ausgaben*. Berührt der Auftrag das Fachgebiet eines Moduls mit
`ergebnisse: nur-bericht`, geht der Text in den Chat; kein Eintrag in
`luecken.md`, keine Log-Zeile (`agent/leitplanken/FORMAT.md` → *Module*).

Überarbeiten nur auf Auftrag, in derselben Datei; vorher neu lesen. Was die
Person geändert hat, bleibt; Tatsachen darin ohne Beleg nennst du im Chat,
statt sie zu ändern. Eine neue Datei nur für einen neuen Auftrag.

## 5 · Abschließen

- Log-Eintrag vom Typ `ausgabe`, auch nach einer Überarbeitung, mit den
  Zeilen `Datei:` (Pfad in Backticks, nie `[[…]]`), `Benutzt:` (die
  Seiten) und `Belegprobe:`.
- **Prüfwerkzeug:** `node agent/werkzeug/pruefen.js`
  (`agent/ablaeufe/pruefen.md` § 0); es meldet auch einen falschen
  Wochentag in `ausgaben/`.
- An die Person: die Datei (bei `nur-bericht` der Text), offene Stellen,
  Annahmen.
- Steht im Text eine Einsicht, die noch keine Seite hat, bietest du sie als
  Seite an (`agent/ablaeufe/fragen.md` § 4), belegt mit Wiki-Seiten, nie mit
  der Ausgabe. Sonst ändert sich im Wiki nichts.
