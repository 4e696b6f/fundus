# Ablauf: das Wiki prüfen

Auslöser: „prüfen“, „aufräumen“ oder dein angenommener Prüfvorschlag.

Du prüfst und berichtest. Was sich eindeutig und klein beheben lässt
(fehlender Gegenlink, rotes Frontmatter, abweichender `[!ich]`-Block),
behebst du, mit neuem `updated:` und einer Zeile unter `## Verlauf`
(`L04`). Alles andere schlägst du vor.

## 0 · Grundlagen

- **Umfang:** `wiki/`, dazu `pruefen_bis:` jeder Leitplanke, auch der
  Module, und jeder `MODUL.md`; sonst nichts aus `vorlagen/`, `handbuch/` und
  `module/`.
- **Werkzeug:** Lesen und Suchen genügt; läuft Code, legst du kein Skript im
  Repo ab.
- **Heute:** nach `AGENTS.md` → *Sitzungsbeginn*; ein abweichendes Datum der
  Person nennst du vor dem Bericht.
- **Meta-Seiten:** `regeln/SCHEMA.md` → *Dateinamen und Links*.
- Links in Codeblöcken und Inline-Code zählen bei keinem Prüfpunkt.

## 1 · Aufbau

- **Tote Links** → *Muss behoben werden*: `[[ziel]]` ohne Datei (Ziel: Teil
  vor `|` oder `#`).
- **Doppelte Dateinamen** → *Muss behoben werden*: Ein Name aus `wiki/` kommt
  im Vault zweimal vor. Umbenennen schlägst du nur vor.
- **Waisen:** Seiten ohne eingehenden Link. Ein Link von einer Meta-Seite
  zählt nicht, Meta-Seiten selbst prüfst du nicht. Die erste Seite eines
  neuen Bereichs, solange sie dort die einzige ist → *Zur Kenntnis*.
- **Fehlende Gegenlinks:** A verlinkt auf B, B nicht zurück (Ausnahmen:
  `regeln/SCHEMA.md` → *Dateinamen und Links*).
- **Zu wenig Links:** weniger ausgehende, als
  `regeln/SCHEMA.md` → *Wann eine Seite fertig ist* verlangt.
- **Frontmatter:** Ein Pflichtfeld fehlt oder ist leer, oder ein Wert steht
  nicht in der Liste in `regeln/SCHEMA.md`. Parst der Block nicht (etwa freier
  Text mit `:`, `#` oder `[[` ohne einfache Anführungszeichen, ein Tabulator,
  ein doppelter Schlüssel) → *Muss behoben werden*.
- **Einzel-Tags:** ein Tag, den nur eine Seite trägt, außer ihrem ersten Tag,
  `bruecke` und einem Bereichsnamen.
- **Quellenpfade** → *Muss behoben werden*: `quellen:` zeigt auf eine fehlende
  Datei.
- **Stau im Eingang:** Dateien, die länger als zwei Wochen in
  `quellen/eingang/` liegen (Änderungsdatum, soweit dein Werkzeug es zeigt,
  sonst nur nennen); bei `Entschieden:` in der Übergabe nennst du die
  Entscheidung, statt zu fragen.

## 2 · Verfall

- **Seite mit `pruefen_bis:` vorbei** → *Sollte behoben werden*, „neu
  prüfen“; `status: veraltet` erst, wenn eine Quelle einen neuen Stand
  belegt, gelöscht wird nichts (`L04`).
- **`meta`-Seite mit `verfaellt:` vorbei** → *Zur Kenntnis*, sie bleibt.
- **Leitplanke mit `pruefen_bis:` vorbei**, auch eines Moduls → *Muss behoben
  werden*; sie gilt weiter, bis ein Update sie ersetzt. **`MODUL.md` mit
  `pruefen_bis:` vorbei:** Update vorschlagen (`handbuch/MODULE.md` →
  *Einhängen*), in `module/` nichts markieren (`L01`).
- **Alte Quelle, schnelles Thema:** `status: aktiv`, jüngste Quelle alt,
  Thema schnelllebig (Technik, Recht, Preise); die Grenze setzt du je Bereich
  und nennst sie.
- **Feld gegen Text:** Nennt der Text ein künftiges Gültigkeitsende, das nicht
  zu `pruefen_bis:` oder `verfaellt:` passt, ohne Halbsatz „Wiedervorlage“
  oder „galt bis“, fragst du die Person, statt zu ändern.

*Bald fällig* (die nächsten zwei Wochen) nennst du unter *Zur Kenntnis*.

## 3 · Denken

- `begriff` und `bruecke` ohne `gegenposition:`, `bruecke` ohne
  `gleiche_form:`
- offene Einträge in `wiki/meta/widersprueche.md`: Hat eine neue Quelle sie
  entschieden?
- Themenbereiche mit vielen Quellen, aber keiner `begriff`-Seite
- kaum verlinkte Seiten, die dasselbe sagen wie eine andere:
  `mehrwert: niedrig` setzen (`regeln/LINSEN.md`) und das Zusammenlegen
  vorschlagen (`L04`)
- **Lücken:** Fragen, die in mehreren Seiten unter `## Offene Fragen`
  stehen, und oft verlinkte Themen ohne eigene Seite kommen nach
  `wiki/meta/luecken.md`.

## 4 · Wortlaut und Belege

Umfang: seit der letzten Prüfung neue oder geänderte Seiten (`wiki/log.md`),
von den übrigen eine Stichprobe, genannt unter *Wie geprüft*.

- **`[!ich]`-Blöcke mit Rohdatei:** Eine Rohdatei hat ein Block, wenn seine
  Seite in `quellen:` auf eine Datei in `quellen/archiv/` zeigt oder der Block
  die Seite verlinkt, von der er stammt (dann deren `quellen:`). Jeden solchen
  Block, auch jede Kopie, hältst du Zeile für Zeile gegen die Rohdatei, nach
  `regeln/SCHEMA.md` → *Die Stimme der Person*. Weicht er ab, kopierst du ihn
  neu; steht er auf einer Seite mit `stimme: agent`, setzt du `gemischt`.
  Beides → *Selbst behoben*.
- **`[!ich]`-Blöcke ohne Rohdatei** (Zeile `*im Gespräch am …*` oder von der
  Person im Wiki geschrieben) prüfst du nicht.
- **Fundstelle je Kernaussage:** Jede Aussage unter `## Kernaussagen` nennt,
  wo sie sich nachprüfen lässt.
- **Stichprobe:** drei Kernaussagen von `begriff`- oder `bruecke`-Seiten (gibt
  es weniger, alle), möglichst mit Zahlen und aus verschiedenen Bereichen,
  gelesen gegen die Quellseite, bei einer Brücke gegen die Seite, von der die
  Aussage stammt, und diese gegen die Rohdatei. Verdichtungsfehler → *Muss
  behoben werden*, Satz der Seite und der Quelle nebeneinander: **Zahl**
  anders, gerundet, falsche Bezugsgröße · **Richtung** umgekehrt ·
  **Bedingung** der Quelle fehlt · **Zeitraum** verschoben. Verfehlt eine
  dabei gelesene Seite sonst `regeln/SCHEMA.md` → *Wann eine Seite fertig
  ist*, meldest du das auch.

## 5 · Bericht

```markdown
## Prüfung [Datum]

### Muss behoben werden
### Sollte behoben werden
### Zur Kenntnis
### Selbst behoben
### Wie geprüft
```

Wohin ein Befund gehört, steht beim Prüfpunkt; ohne Angabe unter *Sollte
behoben werden*. Ein leerer Abschnitt bleibt mit „nichts“ stehen. Unter *Wie
geprüft* stehen die Werkzeuge (auch ob Code lief), die Zahl der abgeglichenen
und der nicht geprüften `[!ich]`-Blöcke, die Stichprobe, die auf Fundstellen
gelesenen Seiten und was du nicht prüfen konntest.

Als Datei `wiki/meta/pruefung-<datum>.md` speicherst du den Bericht nur auf
Wunsch, mit `verfaellt:` einen Monat später.

## 6 · Nach dem Bericht

- **Log:** ein Eintrag vom Typ `pruefen`. Ein fehlendes Ziel steht darin in
  Backticks, nicht als `[[ziel]]`.
- **Übergabe:** In `gedaechtnis/UEBERGABE.md` schreibst du die Zeilen *Quellen
  seit letzter Prüfung* (jetzt 0), *Fällig* und *Bald fällig* neu, nach
  `ablaeufe/sitzung-beenden.md` § 1. Alles andere bleibt.
