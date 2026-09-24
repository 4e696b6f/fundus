# Ablauf: das Wiki prüfen

Auslöser: Die Person sagt „prüfen“ oder „aufräumen“, oder sie nimmt deinen
Vorschlag vom Sitzungsbeginn an. Den machst du, wenn die Übergabe zehn oder
mehr Quellen seit der letzten Prüfung oder ein Prüfdatum in der Vergangenheit
nennt (`ablaeufe/sitzung-beenden.md`); ein Datum unter *Bald fällig*, das noch
kommt, löst ihn nicht aus.

Du prüfst und berichtest. Was sich eindeutig und klein beheben lässt
(Gegenlink fehlt, Frontmatter rot), behebst du, mit neuem `updated:` und einer
Zeile unter `## Verlauf` der Seite (`L04`). Alles andere schlägst du vor.

**Umfang:** `wiki/` und die Prüfdaten (`pruefen_bis:`) der Leitplanken in
`leitplanken/` und in den Modulen sowie das `pruefen_bis:` in der `MODUL.md`
jedes Moduls. `vorlagen/`, `handbuch/` und den übrigen Inhalt von `module/`
prüfst du nicht. Das gilt auch für einen Parser: Die Datumsplatzhalter in
`vorlagen/` parsen roh nicht als YAML, das ist gewollt.

**Werkzeug:** Die Prüfung geht ohne Codeausführung: Seiten lesen, im Wiki
suchen (Obsidian-Suche oder das Suchwerkzeug deines Agenten), in Obsidian der
Graph und die Liste „Nicht aufgelöste Links“. Kann dein Werkzeug Code
ausführen, darfst du damit schneller prüfen, legst aber kein Skript im Repo
ab. Im Bericht steht, wie du geprüft hast. Was du nicht prüfen konntest,
nennst du, statt es als in Ordnung zu melden.

## 1 · Aufbau

- **Tote Links:** `[[ziel]]`, zu dem keine Datei existiert. Suche nach `[[` in
  `wiki/` und prüfe je Ziel, ob es die Datei gibt. Ziel ist der Teil vor `|`
  oder `#`. In Obsidian zeigt das der Graph oder die Liste „Nicht aufgelöste
  Links“. Links in Codeblöcken (zwischen zwei Zeilen mit drei Backticks) und
  in Inline-Code sind Beispiele und zählen bei der Prüfung nicht, auch nicht
  bei Waisen und Gegenlinks.
- **Verwaiste Seiten:** Seiten, auf die nichts verlinkt (Suche nach
  `[[dateiname`). `index.md`, `log.md` und `meta/` zählen nicht.
- **Fehlende Gegenlinks:** A verlinkt auf B, B nicht zurück. Links auf
  Moduldateien brauchen keinen. Meta-Seiten (`index.md`, `log.md`, alles in
  `meta/`) sind in beide Richtungen ausgenommen, `wiki/muster/` nicht
  (`regeln/SCHEMA.md` → *Dateinamen und Links*).
- **Frontmatter:** Pflichtfelder fehlen oder sind leer (Tabelle in
  `regeln/SCHEMA.md`), ein Wert von `type`, `sicherheit`, `status` oder
  `stimme` steht nicht in der Liste dort, oder der Block parst nicht. Ohne
  Parser liest du ihn auf das, was ihn rot macht: freier Text mit `:`, `#`
  oder `[[` ohne einfache Anführungszeichen, eine offene Klammer oder
  Anführung, ein Tabulator, ein Schlüssel, der zweimal vorkommt, eine fehlende
  `---`-Zeile.
- **Quellenpfade:** `quellen:` zeigt auf eine Datei, die es nicht gibt, in
  `quellen/archiv/` oder in einem Modul.
- **Stau im Eingang:** Dateien, die länger als zwei Wochen in
  `quellen/eingang/` liegen (Dateien mit Punkt am Anfang zählen nicht). Das
  Alter ist das Änderungsdatum der Datei, soweit dein Werkzeug es zeigt; sonst
  nennst du nur, was dort liegt.

## 2 · Verfall

- Seiten mit `pruefen_bis:` in der Vergangenheit
- `meta`-Seiten mit `verfaellt:` in der Vergangenheit
- Leitplanken mit `pruefen_bis:` in der Vergangenheit, auch die der Module,
  und jede `MODUL.md` mit `pruefen_bis:` in der Vergangenheit
- Seiten mit `status: aktiv`, deren jüngste Quelle alt ist, während das Thema
  sich schnell ändert (Technik, Recht, Preise). Die Grenze setzt du je
  Themenbereich mit Augenmaß und nennst sie im Bericht.

Seiten, Leitplanken und `MODUL.md` mit einem Datum in den nächsten zwei
Wochen (*Bald fällig*) nennst du im Bericht unter *Zur Kenntnis*.

Veraltetes markierst du `status: veraltet`, du löschst es nicht (`L04`).
Passt ein `pruefen_bis:`- oder `verfaellt:`-Datum nicht zum Text der Seite
(etwa: Feld 2. September, Text 2. Oktober), fragst du die Person, statt zu
markieren.
In `module/` markierst du nichts (`L01`). Eine abgelaufene Leitplanke gilt
weiter, bis ein Update sie ersetzt; du meldest sie unter *Muss behoben
werden*. Für ein abgelaufenes Modul schlägst du das Update vor (Handgriff:
`handbuch/MODULE.md` → *Einhängen*).

## 3 · Denken

- `begriff` und `bruecke` ohne `gegenposition:`
- `bruecke` ohne `gleiche_form:`
- offene Einträge in `wiki/meta/widersprueche.md`: Hat eine neue Quelle sie
  entschieden?
- Themenbereiche mit vielen Quellen, aber keiner `begriff`-Seite: Dort wurde
  gesammelt, aber nicht verstanden.
- Seiten, die kaum verlinkt sind und dasselbe sagen wie eine andere: dort
  `mehrwert: niedrig` setzen (`regeln/LINSEN.md`) und das Zusammenlegen
  vorschlagen. Entscheiden tut die Person (`L04`).

## 4 · Lücken

Welche Fragen tauchen in mehreren Seiten unter `## Offene Fragen` auf? Welche
Themen werden oft verlinkt, haben aber keine eigene Seite? Beides nach
`wiki/meta/luecken.md`.

## 5 · Bericht

```markdown
## Prüfung [Datum]

### Muss behoben werden
### Sollte behoben werden
### Zur Kenntnis
### Selbst behoben
### Wie geprüft
```

Der Bericht geht an die Person. Als Datei `wiki/meta/pruefung-<datum>.md`
speicherst du ihn nur auf Wunsch, mit `verfaellt:` einen Monat später.
Eintrag in `wiki/log.md` vom Typ `pruefen`. Ab hier zählen die Quellen seit
der letzten Prüfung wieder von null.
