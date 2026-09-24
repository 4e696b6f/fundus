# Änderungen

Je Version: was sich geändert hat und ob bestehende Wikis etwas übernehmen
müssen. Übernehmen heißt: die genannten Dateien aus der neuen Version in das
eigene Wiki kopieren. `SOUL.md`, `wiki/`, `quellen/` und `gedaechtnis/` bleiben
dabei immer unberührt.

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
  `L01` bis `L03`, dazu `handbuch/`, `module/LIESMICH.md`, `README.md` und
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
