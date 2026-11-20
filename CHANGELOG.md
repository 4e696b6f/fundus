# Änderungen

Je Version: was sich geändert hat und ob bestehende Wikis etwas übernehmen
müssen. Ab 0.5 übernimmt das der Agent: ZIP in den Wiki-Ordner legen,
„aktualisieren“ sagen (`handbuch/EINRICHTEN.md` → *Neue Fundus-Version*).
Bis 0.4 hieß Übernehmen: die genannten Dateien aus der neuen Version in das
eigene Wiki kopieren; welche das sind, steht ab 0.4 in `agent/KERN.txt`.
`SOUL.md`, `EINRICHTUNG.md`, `eigen/`, `wiki/` und `quellen/` (bis 0.3 auch
`agent/gedaechtnis/`) bleiben dabei immer unberührt.

## 0.5 · 2026-11-20 · Entwurf

**Neu: Auswertung.** Die Ansicht hat einen dritten Reiter: wie weit deine
Leitfragen sind, wie gut jeder Bereich belegt ist, auf welchen Quellen dein
Wissen ruht, was wann dazukam, was in den nächsten zwölf Monaten abläuft und
wie viel davon in deinen Worten steht. Jede Zahl sagt, was sie zählt.

**Neu: eigene Ansichten.** „Bau mir eine Übersicht, die …“ (oder
`/ansicht-bauen`): Der Agent baut dir eine Auswertung oder Grafik nach
`agent/ablaeufe/ansicht-bauen.md`, als Diagramm in einer Seite, als Karte in
Obsidian oder als eigene Ansicht in `eigen/ansichten/`. Neue harte
Leitplanke `L05`: Eine Ansicht lädt nichts aus dem Netz, sendet nichts und
schreibt nichts. Seiten dürfen Mermaid-Diagramme enthalten
(`agent/regeln/SCHEMA.md` → *Diagramme*); `prüfen` und die Übersicht
(Kachel *Eigene Ansichten*) melden HTML-Dateien in `eigen/ansichten/` und
`ausgaben/`, die gegen `L05` verstoßen, auch solche, die du selbst
angelegt hast.

**Neu: aktualisieren.** Neue Versionen übernimmt der Agent: ZIP in den
Wiki-Ordner legen, „aktualisieren“ sagen. Er sichert vorher, ersetzt nur
die Pfade aus `agent/KERN.txt` und arbeitet die Migrationsdatei ab
(`agent/migration/`); deine Dateien bleiben unberührt.

**Kleineres.** Die Prüfdaten der Leitplanken laufen bis 2027-11-20. Die
Auswertung zählt veraltete und ersetzte Seiten nicht mit.

Übernehmen von 0.4: ZIP in den Wiki-Ordner legen und schreiben:
„Aktualisiere Fundus mit der ZIP im Ordner. Der Ablauf steht in der ZIP
unter agent/ablaeufe/aktualisieren.md.“ Von Hand geht es wie unter 0.4,
Schritt 3, dazu der Ordner `eigen/ansichten/`; was neu ist, steht in
`agent/migration/0.4-zu-0.5.md` → *An die Person*.

## 0.4.1 · 2026-11-20 · Entwurf

**Ohne Terminal.** Das Handbuch führt jetzt über die Claude-App für Mac und
Windows: installieren, links **Code**, unter dem Eingabefeld den
Wiki-Ordner öffnen. Kein Befehl zum Abtippen mehr, auch nicht beim
täglichen Start. Das Terminal bleibt als Weg für Kundige.
Änderungen an den Regeln des Agenten gibt es keine.

Übernehmen: nichts. Wer will, kopiert `handbuch/EINRICHTEN.md`, `README.md`
und `agent/VERSION` aus der neuen Version.

## 0.4 · 2026-11-18 · Entwurf

Enthält alles aus 0.3, das nicht einzeln veröffentlicht wurde. Ziel: ZIP
laden, Obsidian öffnen, dem Agenten „Richte mein Wiki ein“ sagen, und das
Wiki ist auf dich zugeschnitten.

**Neu: einrichten.** `EINRICHTUNG.md` ist ein Steckbrief mit acht Fragen,
freiwillig; Beispiele liegen in `handbuch/steckbriefe/`. Sagst du
„einrichten“ (oder `/einrichten`), liest der Agent ihn, fragt in höchstens
drei Runden nach, zeigt `SOUL.md`, Bereiche und Leitfragen als Entwurf und
schreibt erst nach deinem Ja. Was du über ein Thema schon weißt, wird eine
Notiz in deinen Worten; Tatsachen ergänzt er dabei keine. Auf Wunsch legt er
ein `git`-Sicherheitsnetz an. Ein zweiter Lauf („Fokus ändern“) ergänzt nur.
Solange `SOUL.md` keine Themenbereiche nennt, schlägt er das Einrichten zu
Beginn jeder Sitzung vor.

**Neu: Leitfragen.** `wiki/meta/leitfragen.md` sammelt, was dein Wiki einmal
beantworten soll. Trägt eine belegte Seite eine Frage, markiert der Agent sie
als beantwortet und sagt es dir. Die Ansicht zeigt die offenen als Kachel.

**Neu: stand.** „Wo stehen wir?“ (oder `/stand`) fasst die Übergabe
zusammen und schlägt genau einen nächsten Schritt vor.

**Kurzbefehle und neue Namen.** Jeder Ablauf hat einen gleichnamigen
Kurzbefehl in `.claude/commands/`, den Claude Code zeigt, wenn du `/`
tippst; die Sätze funktionieren weiter, auch in anderen Programmen. Drei
Abläufe heißen jetzt wie ihr Befehl: `bestand` → `uebernehmen`,
`verknuepfen` → `zusammenhaenge`, `sitzung-beenden` → `feierabend`. Die
Log-Vorgänge behalten ihre Namen. Eigene Kurzbefehle legst du als
`.claude/commands/eigen-<name>.md` an; die ersetzt kein Update. Jeder Ablauf beginnt mit einer Zeile
*Wofür*. Neu: `handbuch/GLOSSAR.md` mit zehn Wörtern.

**Neu: `eigen/`.** Was du an Fundus anpasst, steht in `eigen/EIGEN.md`:
Abweichungen von fachlichen Leitplanken, eigene Leitplanken
(`eigen/leitplanken/`, Kürzel `E-L01`), eigene Abläufe und Denkwerkzeuge und
Regeln, die aus Korrekturen entstanden sind. Kein Update überschreibt
`eigen/`. Das Gedächtnis zieht dorthin um: `eigen/gedaechtnis/UEBERGABE.md`
und `eigen/gedaechtnis/KORREKTUREN.md` (vorher `REIBUNG.md`). Welche Dateien
ein Update ersetzt, steht in `agent/KERN.txt`, die Version in
`agent/VERSION`.

**Weniger Überraschungen.** Berührt ein Auftrag mehr als drei Seiten, sagt
der Agent vorher in einem Satz, was er anlegt und ändert. Nach jedem
abgeschlossenen Auftrag zieht er die Übergabe nach, ein vergessener
„Feierabend“ kostet also nichts mehr. Ein Datum, das du nennst, gilt nur für
die Sitzung. Eindeutige Dateinamen verlangt er nur noch für Namen, die er in
`wiki/` vergibt; trifft ein Name aus dem Bestand oder einem Modul, meldet die
Prüfung das nur zur Kenntnis.

**Aufgeräumt.** `module/README.md` und die README in `handbuch/steckbriefe/`
entfallen; was darin stand, steht in `handbuch/MODULE.md` und
`handbuch/EINRICHTEN.md`. Wie man ein Modul baut, steht jetzt in
`handbuch/MODULE-BAUEN.md`, nur im Repository, nicht im ZIP. Neu ist eine
`.gitignore`, damit persönliche Dateien von Obsidian und Claude Code
(`.obsidian/workspace.json`, `.claude/settings.local.json`) nie in einem
`git`-Verlauf landen.

**Kleineres.** Die Prüfdaten der Leitplanken L01–L04 und `FORMAT.md` laufen
jetzt bis 2027-11-18. Die Vorlage `meta` setzt `sicherheit: hoch`. Der Graph
in Obsidian zeigt nur Wiki-Seiten, ohne Index, Log und Meta-Seiten. Die
Ansicht findet die Übergabe am neuen Ort und zeigt eigene Leitplanken.
README und `handbuch/EINRICHTEN.md` führen über den Steckbrief und
„einrichten“; die README sagt, welche Dateien gehen und was Fundus nicht ist.

Übernehmen, wenn du mit 0.2 angefangen hast: erst die Liste unter 0.3, dann
diese. Mit 0.3 aus dem Repository, in dieser Reihenfolge:

1. **Sichern.** Kopier den ganzen Wiki-Ordner an einen anderen Ort.
2. **Eigenes nach `eigen/`.** Leg im Hauptordner `eigen` an, darin
   `leitplanken` und `ablaeufe`. Schieb `agent/gedaechtnis` nach `eigen/`,
   sodass `eigen/gedaechtnis/` entsteht, und benenn darin `REIBUNG.md` in
   `KORREKTUREN.md` um. Kopier `eigen/EIGEN.md` aus der neuen Version hinein.
   Dann trägst du dort ein, was du bisher an Fundus-Dateien angepasst hast:
   - eigene Leitplanken: von `agent/leitplanken/` nach `eigen/leitplanken/`
     schieben, im Dateinamen und im Feld `id:` das Kürzel auf `E-L01`,
     `E-L02` … ändern, je eine Zeile unter *Eigene Leitplanken*;
   - Abweichungen und Verschärfungen aus `AGENTS.md` unter *Abweichungen*;
   - eigene Linsen aus `agent/regeln/LINSEN.md` unter *Eigene Denkwerkzeuge*;
   - eigene oder angepasste Vorlagen in `agent/vorlagen/`: in `eigen-<name>.md`
     umbenennen und beiseitelegen, nach Schritt 3 zurück nach
     `agent/vorlagen/`;
   - was du sonst in `agent/` geändert hast: als Regel in `eigen/EIGEN.md`.
3. **Ersetzen.** Jeden Pfad, der in `agent/KERN.txt` der neuen Version
   steht: löschen und aus der neuen Version hineinkopieren; ein Ordner mit
   `/` am Ende ganz. Lösch danach in `agent/ablaeufe/` die alten
   `bestand.md`, `verknuepfen.md` und `sitzung-beenden.md`, dazu
   `module/README.md`.
4. **Neu dazu:** `EINRICHTUNG.md`, wenn du den Steckbrief nutzen willst, und
   `wiki/meta/leitfragen.md`; trag in `wiki/index.md` unter *Meta* die Zeile
   `- [[leitfragen]]: was das Wiki einmal beantworten soll` ein. Vergisst du
   es, legt der Agent die Seite an, sobald er sie braucht.
5. **Was bleibt:** `SOUL.md` ist deine. Die Zeile *Erfahrung* kannst du aus
   der Vorlage übernehmen. Stehen deine Themenbereiche dort schon, gilt das
   Wiki als eingerichtet; sonst schlägt der Agent `einrichten` vor.
6. **Obsidian:** `.obsidian/` kopierst du nicht. Für den Graphen trägst du
   in Obsidian im Graph unter *Filter* → *Suche* ein:
   `path:wiki/ -path:"wiki/meta/" -path:"wiki/index.md" -path:"wiki/log.md"`.

## 0.3 · in 0.4 aufgegangen

**Umzug.** Die Ordner des Agenten `regeln/`, `ablaeufe/`, `leitplanken/`,
`vorlagen/` und `gedaechtnis/` liegen jetzt zusammen in `agent/`. So stehen
im Hauptordner vor allem deine Sachen, und die Suche in Obsidian findet deine
Seiten statt seiner Regeln: Obsidian blendet `agent/` in Suche und Graph aus.
`SOUL.md`, `AGENTS.md` und `CLAUDE.md` bleiben oben, weil Claude Code sie dort
sucht.

**Neu: Schreiben.** Sagst du „Schreib mir ein Rundschreiben zu …“ (auch Brief
oder Stellungnahme), sucht der Agent in deinem Wiki und legt einen Entwurf
als Datei in `ausgaben/` ab. Der Text selbst bleibt frei von Belegzeichen;
woher jede Tatsache stammt, steht in einem Abschnitt darunter, den du vor
dem Versand als Ganzes löschst. Was dein Wiki nicht belegt, lässt er offen
und sagt es dir. `ausgaben/` gehört dir: Der Agent schreibt dort nur auf
Auftrag, ändert eine Ausgabe nur, wenn du darum bittest, und nimmt nichts
daraus ins Wiki auf. Ein Modul kann seine Ergebnisse mit
`ergebnisse: ausgaben` dorthin legen; bei `nur-bericht` bleibt es beim Chat.
Die Ansicht zeigt deine Ausgaben als eigene Liste.

**Neu: Bestand.** Alte Notizen und Dateien, auch ein alter Obsidian-Vault,
kommen nach `quellen/bestand/` (kopieren, nicht verschieben; Dateien mit
Angaben über andere Menschen vorher herausnehmen). Sagst du „Übernimm meinen
Bestand“, macht der Agent eine Liste in `wiki/meta/bestand.md`. Um Angaben
über andere Menschen zu erkennen, muss er eine Datei lesen; findet er
welche, liest er nicht weiter, nennt dir die Datei zuerst und verarbeitet
sie nicht, bis du entschieden hast. Er schlägt Themenbereiche vor, verlinkt
zur Probe höchstens zehn Dateien aus Wiki-Seiten und macht dann Runde für
Runde weiter oder, wenn du es sagst, in einem Zug. Die Dateien selbst
ändert, verschiebt und löscht er nie. Was er nicht lesen kann, etwa
Word-Dateien, zählt er nur; speichere sie als PDF. Der Bestand zählt nicht
als neue Quellen seit der letzten Prüfung, die Übergabe nennt nur den
Zähler. Die Ansicht zeigt ihn unter Quellen; Links, Frontmatter und Tags
alter Notizen zählen dort nicht zu deinem Wiki. Anleitung:
`handbuch/EINRICHTEN.md` → *Du hast schon Notizen?*

**Woran ich gerade arbeite.** Die Vorlage `SOUL.md` hat nach *Wofür das Wiki
da ist* einen neuen Abschnitt für bis zu drei Vorhaben, die du selbst
pflegst. Steht dort etwas, sagt dir der Agent beim Verknüpfen, welche neuen
Seiten ein Vorhaben berühren; ist er leer, fragt er nicht nach.

**Dubletten.** Sagt eine kaum verlinkte Seite dasselbe wie eine andere,
meldet die Prüfung beide unter *Sollte behoben werden*. Zusammengelegt wird
nur auf deinen Auftrag.

Übernehmen, wenn du mit 0.2 angefangen hast:

- Leg im Hauptordner einen Ordner `agent` an, klein geschrieben, und schieb
  die fünf Ordner `regeln`, `ablaeufe`, `leitplanken`, `vorlagen` und
  `gedaechtnis` hinein. Was du in `gedaechtnis/` geändert hast, wandert so
  einfach mit.
- Leg zwei leere Ordner an, ebenfalls klein geschrieben: `ausgaben` im
  Hauptordner und `bestand` in `quellen/`.
- `wiki/`, `quellen/` und deine `SOUL.md` bleiben, wo sie sind. In deiner
  `SOUL.md` steht einmal `regeln/LINSEN.md`: Mach daraus
  `agent/regeln/LINSEN.md`. Willst du den Abschnitt *Woran ich gerade
  arbeite*, kopier ihn aus der neuen Vorlage hinein.
- Ersetzen: `AGENTS.md`, die Dateien in `agent/regeln/`, `agent/ablaeufe/`
  (dazu neu `schreiben.md` und `bestand.md`), `agent/leitplanken/` (eigene
  Leitplanken bleiben liegen) und `agent/vorlagen/`, dazu `handbuch/`,
  `ansicht/uebersicht.html`, `README.md` und `CHANGELOG.md`.
- Die Dateien in `.obsidian/` kopierst du nicht, sie würden deine
  Obsidian-Einstellungen überschreiben. Stell stattdessen in Obsidian ein:
  unter *Vorlagen* (Templates) → *Speicherort für Vorlagen* den Ordner
  `agent/vorlagen`, unter *Dateien & Links* (Files and links) → *Ignorierte
  Dateien* (Excluded files) den Ordner `agent/`.
- Hast du `AGENTS.md` angepasst (eine Abweichung, eine Verschärfung, eine
  eigene Leitplanke), trag das danach wieder ein, jede eigene Leitplanke als
  Zeile unter *Leitplanken*. Sonst kennt der Agent sie nicht mehr. Pfade
  darin, auch in deinen eigenen Leitplanken, bekommen `agent/` davor, etwa
  `agent/leitplanken/FORMAT.md`.
- Im Kopftext von `wiki/index.md`, `wiki/log.md` und den Seiten in
  `wiki/meta/` stehen noch die alten Pfade. Das darf so bleiben, oder du
  sagst deinem Agenten: „Zieh die Pfade im Kopftext nach.“

## 0.2.1 · 2026-09-24 · Entwurf

Nach dem ersten echten Testdurchgang und drei Testsitzungen mit dem
veröffentlichten Stand. Die meisten Befunde betrafen dieselben Stellen: den
Wortlaut der Person, das Prüfdatum und Rückfragen mitten im Aufnehmen.

**Wortlaut der Person.** Jeder `[!ich]`-Block wird aus der Rohdatei kopiert,
auch die zweite Kopie desselben Zitats. Eine eigene Notiz (Art B) kommt
vollständig in den Block, samt Datumszeile, Listenpunkten und Backticks.
Anmerkungen in einer fremden Quelle (Art C) stehen im Block ohne die
umschließenden Backticks; ein Wort mit `#` am Anfang bleibt in Backticks.
Wortlaut aus dem Gespräch trägt die Zeile `*im Gespräch am …*`. Die Prüfung
gleicht Blöcke mit Rohdatei ab.

**Prüfdatum.** `pruefen_bis:` nur für datierten Kernstoff; ohne Ablaufdatum
in der Quelle ein Jahr; ein schon vergangenes Gültigkeitsende wird im Text als
veraltet gekennzeichnet. Datierte Nebenangaben wie ein Anmeldeschluss kommen
als Frist in die Übergabe.

**Aufnehmen und Übergabe.** Quelle für Quelle; eine Rückfrage hält die übrigen
Quellen nicht auf (`ablaeufe/aufnehmen.md` § 7). Entscheidungen, nach denen
sonst erneut gefragt würde, kommen als `entscheidung` ins Log und in die
Übergabe. Aufgaben der Person wie `` `#später` `` erscheinen in der Übergabe
unter *Von dir vorgemerkt*.

**Brücken und Muster.** Brücken liegen in `wiki/bruecken/`, Musterseiten
heißen `muster-<wert>.md`; Dateinamen sind im ganzen Vault eindeutig.

**Prüfen.** Neuer `§ 0 · Grundlagen` (Umfang, Werkzeug, Heute, Meta-Seiten).
`§ 4` heißt jetzt *Wortlaut und Belege*: `[!ich]`-Abgleich, Fundstelle je
Kernaussage und eine Stichprobe von bis zu drei Kernaussagen gegen die Quelle.
Die bisherigen Lücken stehen in § 3. Nach der Prüfung schreibt der Agent
*Fällig*, *Bald fällig* und den Zähler in der Übergabe neu.

**Sitzungsbeginn und Module.** Der Sitzungsbeginn ist eine Prüfliste, die jede
Sitzung ganz abarbeitet. Die vier Leitplanken stehen in Kurzform in
`AGENTS.md`, die der Agent in jeder Sitzung ohnehin kennt; die Datei liest er
im Zweifel oder vor einer Ausnahme. Bei Modularbeit liest er alle Leitplanken
des Moduls; was er bei `lokal:` und `ergebnisse:` tut, steht jetzt in
`leitplanken/FORMAT.md` → *Module*. Eine harte Regel lockert
niemand, auch keine Einrichtungsdatei, und der Agent zeigt keinen Weg um sie
herum (`leitplanken/FORMAT.md` → *Vorrang*).

**Ansicht.** Umlaute in Dateinamen (NFC/NFD), Links in Markdown-Links, einzelne
Backticks, Zählung von Lücken und Bereichen, Setext-Überschriften, weitere
YAML-Formen; Dateien ohne Markdown erscheinen in der Wiki-Liste.

**Schlanker.** Jede Regel steht an einer Stelle, die anderen verweisen. Das
Regelwerk ist trotz der neuen Regeln kürzer als in 0.2.0 (rund 7.000 statt
7.200 Wörter), die Vorlagen sind auf das Nötige gekürzt, das Handbuch um gut
ein Viertel, die README auf eine Seite. Die Regel für `gedaechtnis/REIBUNG.md`
steht jetzt in `ablaeufe/sitzung-beenden.md` § 3.

Übernehmen, wenn du mit 0.2.0 angefangen hast:

- Ersetzen: `AGENTS.md`, `regeln/`, `ablaeufe/`, `leitplanken/` (alle
  Dateien; eigene Leitplanken bleiben liegen), `vorlagen/`, `handbuch/`,
  `ansicht/uebersicht.html`, `module/README.md`, `README.md`, `CHANGELOG.md`.
- Hast du `AGENTS.md` angepasst (eine Abweichung, eine Verschärfung, eine
  eigene Leitplanke), trag das danach wieder ein, jede eigene Leitplanke als
  Zeile unter *Leitplanken*. Sonst kennt der Agent sie nicht mehr.
- `SOUL.md`, `gedaechtnis/REIBUNG.md` und die Seiten in `wiki/meta/` bleiben
  deine. Ihr alter Kopftext und in `SOUL.md` der alte Abschnitt *Was du nie
  tust* dürfen stehen bleiben.
- `module/LIESMICH.md` aus 0.2.0 kannst du löschen, sie heißt jetzt
  `module/README.md`.
- `gedaechtnis/UEBERGABE.md` bleibt deine. Die nächste Sitzung schreibt sie in
  der neuen Form, mit dem Abschnitt *Nicht vergessen*.
- Eine Brücke, die schon in einem Themenbereich liegt, darf dort bleiben oder
  nach `wiki/bruecken/` umziehen; der Agent fragt vorher.

## 0.2.0 · 2026-09-23 · Entwurf

Nach einem Lektorat und zwei Probeläufen, einer davon mit eingehängtem Modul.
Veröffentlicht als Entwurf unter GPL-3.0 (vorher MIT). Neu waren der
Einsteigerweg im Handbuch, die Pflichtfelder in einer Tabelle, Übergabe mit
Zähler und Fristen, die Integration von Modulen (`lokal:`, `ergebnisse:`,
Vorrang), die Ansicht und die Vorlagen für Obsidian. Die ausführliche
Beschreibung steht in der Versionsgeschichte des Repositorys.

Übernehmen, wenn du mit 0.1.0 angefangen hast:

- Ersetzen: `AGENTS.md`, `regeln/SCHEMA.md`, `regeln/LINSEN.md`, alle fünf
  Dateien in `ablaeufe/`, in `leitplanken/` die Dateien `FORMAT.md` und
  `L01` bis `L03`, dazu `handbuch/`, `module/README.md`, `README.md` und
  `CHANGELOG.md`. Hast du eine dieser Dateien selbst geändert, etwa eine
  Abweichung in `AGENTS.md` festgehalten, trag deine Änderung danach wieder
  ein. Eigene Leitplanken in `leitplanken/` bleiben liegen.
- Neu dazu: die Ordner `vorlagen/` und `ansicht/`, dazu die Datei
  `.obsidian/snippets/ich-callout.css`. Die übrigen Dateien in `.obsidian/`
  kopierst du nicht, sie würden deine Obsidian-Einstellungen überschreiben.
  Stell stattdessen in Obsidian ein: das Kernplugin „Vorlagen“ (Templates)
  mit dem Ordner `vorlagen`, als Ordner für Anhänge `quellen/anhaenge` und
  unter „Darstellung“ (Appearance) das CSS-Snippet `ich-callout`.
- Nie: `SOUL.md`, `wiki/`, `quellen/`, `gedaechtnis/`. Zwei Stellen darin
  kannst du von Hand nachziehen: in `SOUL.md` die Zeile **Themenbereiche:**
  samt dem Absatz darunter und in `wiki/meta/widersprueche.md` den
  Formatblock samt Erklärung. Offene Einträge dort ergänzt der Agent auf
  Zuruf um „beide Aussagen auf“.

## 0.1.0 · 2026-09-23 · Entwurf

Erste Fassung: Steuerung, Seitenformat, Linsen, vier Leitplanken, fünf
Abläufe, Handbuch zum Einrichten, Modulvertrag.

Übernehmen: entfällt, erste Version.
