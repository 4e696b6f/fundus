# Änderungen

Je Version: was sich geändert hat und ob bestehende Wikis etwas übernehmen
müssen. Übernehmen heißt: die genannten Dateien aus der neuen Version in das
eigene Wiki kopieren. `SOUL.md`, `wiki/`, `quellen/` und `gedaechtnis/` bleiben
dabei immer unberührt.

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
Veröffentlicht als Entwurf unter GPL-3.0 (vorher MIT).

**Einsteigerweg.** README und `handbuch/EINRICHTEN.md` führen ohne Vorwissen
bis zur ersten aufgenommenen Quelle: Download als ZIP statt `git`, ein eigener
Schritt für Terminal, Installation und Anmeldung von Claude Code, ein Hinweis,
was an den Anbieter geht, ein Sicherheitsnetz ohne `git` und eine Tabelle
*Wenn es hakt*. `handbuch/MODULE.md` trennt das Einhängen eines Moduls vom
Teil für Leute, die eins bauen.

**Regelwerk nach zwei Probeläufen.**

- Der Agent liest `SOUL.md` zu Beginn jeder Sitzung. Bereiche aus `SOUL.md` →
  *Themenbereiche* legt er ohne Nachfrage an, jeden anderen erst nach
  Rückfrage.
- Die Pflichtfelder stehen nur noch in einer Tabelle in `regeln/SCHEMA.md`.
  Eine `notiz` hat kein `sicherheit:` und bleibt `stimme: ich`. Was der Agent
  ergänzt, steht unter der Zeile `*Ergänzt vom Agenten:*`. `quelle`-Seiten
  tragen `quelle-` vorn im Dateinamen.
- Backticks: Bei einer eigenen Notiz kommt der ganze Wortlaut in einen
  `[!ich]`-Block, bei einer fremden Quelle mit Anmerkungen wird jede Stelle
  ein eigener Block.
- Widersprüche: `strittig` wird nur die Seite, deren Kernaussage betroffen
  ist. Das Format in `wiki/meta/widersprueche.md` nennt zusätzlich die Seite,
  auf der beide Aussagen stehen.
- Die Übergabe zählt die Quellen seit der letzten Prüfung und führt *Fällig*
  und *Bald fällig*. Der Agent schlägt die Prüfung ab zehn Quellen oder bei
  einem Prüfdatum in der Vergangenheit vor.
- Die Prüfung geht ohne Codeausführung und umfasst `wiki/` und die Prüfdaten
  der Leitplanken. Links in Codeblöcken zählen nicht, und passt ein Datum
  nicht zum Text der Seite, fragt der Agent, statt zu markieren.
- Meta-Seiten (`index.md`, `log.md`, alles in `wiki/meta/`) sind von der
  Gegenlink-Pflicht ausgenommen, in beide Richtungen.
- Verknüpfen läuft einmal nach jedem Auftrag zum Aufnehmen, über dessen
  Seiten. Ein Muster bekommt beim dritten Vorkommen eine Seite in
  `wiki/muster/`.
- Den eigenen Log-Eintrag derselben Sitzung darf der Agent berichtigen. Neue
  Zeilen unter `## Verlauf` kommen ans Ende. Eigene Fehlgriffe landen wie
  Korrekturen in `gedaechtnis/REIBUNG.md`.
- `L02`: Eine Gegenposition braucht keine Fundstelle, Zahlen darin schon.
  `L03`: Kontaktdaten eines Menschen übernimmt der Agent nie ohne Auftrag.
  Wer in einer veröffentlichten Quelle fachlich zitiert wird, darf mit Name
  und Rolle an der Fundstelle stehen.

**Modul-Integration.**

- Der Agent merkt sich zu Sitzungsbeginn die Titel der Module. Er lädt ein
  Modul, sobald eine Frage, eine neue Quelle oder eine Seite, die er schreibt,
  dessen Fachgebiet berührt.
- Vorrang je Handlung (`leitplanken/FORMAT.md`): Eine harte Leitplanke eines
  Moduls geht jeder fachlichen der Basis vor, sonst gilt die strengere.
  Leitplanken gehen `SOUL.md` vor.
- Einstellungen vor Ort stehen in `module/<modulname>.lokal.md`. Die Datei
  gehört der Person und bleibt bei jedem Update erhalten (Ausnahme in `L01`).
  Neue Felder in `MODUL.md`: `lokal:` und `ergebnisse:`.
- Die Prüfung nimmt die Prüfdaten der Module auf. Eine abgelaufene Leitplanke
  gilt weiter, bis ein Update sie ersetzt.
- Widerspricht eine Quelle einer Moduldatei, steht das mit deren Pfad in
  `widersprueche.md`. Kein Dateiname in `wiki/` gleicht einem in `module/`.

**Ansicht.** `ansicht/uebersicht.html` zeigt den Vault im Browser: Ordner
wählen, dann Übersicht (Fällig, Bald fällig, Eingang, Lücken, Widersprüche,
Bereiche, Module, zuletzt geändert, Übergabe), Listen mit Filtern und Suche,
Dokumentansicht mit Rückverweisen und „In Obsidian öffnen“. Eine Datei, kein
Netz, liest nur. Anleitung: `handbuch/ANSICHT.md`.

**Vorlagen.** `vorlagen/` enthält eine Obsidian-Vorlage je Seitentyp,
abgeglichen mit `regeln/SCHEMA.md` und `regeln/LINSEN.md`. `.obsidian/` bringt
drei Voreinstellungen mit: den Vorlagenordner, `quellen/anhaenge/` als Ablage
für Anhänge und ein eigenes Aussehen für den `[!ich]`-Block.

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
