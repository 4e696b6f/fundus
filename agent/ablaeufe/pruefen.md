# Ablauf: prüfen

**Wofür:** Wiki durchsehen: Fehler, Veraltetes, Widersprüche, Lücken.

Du prüfst und berichtest. Was sich eindeutig und klein beheben lässt
(fehlender Gegenlink, rotes Frontmatter, abweichender `[!ich]`-Block,
Bereich fehlt im Index), behebst du, mit neuem `updated:` und einer Zeile
unter `## Verlauf` (`L04`). Alles andere schlägst du vor.

## 0 · Zuerst das Prüfwerkzeug

- **Prüfwerkzeug:** `node agent/werkzeug/pruefen.js` im Wiki-Ordner (gilt
  nicht das Systemdatum, mit `--heute JJJJ-MM-TT`). Es liest nur und meldet
  je Befund den Prüfpunkt aus § 1 oder § 2, am Ende die Zeile `Zahlen:`.
  Seine Befunde übernimmst du ungekürzt in den Bericht; selbst prüfst du
  nur, was Urteil braucht: die Punkte mit *(du)*, § 3 und § 4.
- **Läuft es nicht** (`agent/regeln/PROGRAMME.md`), prüfst du § 1 und § 2
  von Hand, Punkt für Punkt, und sagst das unter *Wie geprüft*; denselben
  Bericht zeigt `ansicht/uebersicht.html` unter „Prüfung“. Ein eigenes Skript legst du nicht im Wiki-Ordner ab.
- **Nach jedem Auftrag, der Seiten ändert, und vor „Feierabend“** läuft nur
  das Prüfwerkzeug, ohne Bericht und Log-Eintrag: *Muss behoben werden* und
  was es zur Übergabe, zum Protokoll und zu Seiten dieses Auftrags meldet,
  behebst du sofort, wenn es eindeutig und klein ist, sonst nennst du es der
  Person in einer Zeile.
- **Umfang:** `wiki/`, Übergabe und Eingang; `pruefen_bis:` jeder
  Leitplanke, auch der eigenen und der Module, und jeder `MODUL.md`; HTML in
  `eigen/ansichten/` und `ausgaben/`; nicht `agent/vorlagen/`, `handbuch/`
  und `module/`. Links in Codeblöcken und Inline-Code zählen nie; Ziel eines
  Links ist der Teil vor `|` oder `#`. Meta-Seiten
  (`agent/regeln/SCHEMA.md` → *Dateinamen und Links*) zählen bei Links in
  keiner Richtung.
- **Heute:** nach `AGENTS.md` → *Sitzungsbeginn*; ein abweichendes Datum der
  Person nennst du vor dem Bericht.

## 1 · Aufbau

Die Prüfpunkte des Werkzeugs stehen nur hier und in § 2, unter dem Namen,
den es meldet. **M** heißt *Muss behoben werden*, **K** *Zur Kenntnis*, ohne
Angabe *Sollte behoben werden*.

- **Tote Links** (M): `[[ziel]]` ohne Seite, auch wenn nur eine gleichnamige
  Datei in Bestand oder Modul passt.
- **Doppelte Dateinamen** (M): ein Name zweimal in `wiki/`. Gleicht eine
  Seite einer Datei in `quellen/bestand/` oder `module/`: K (`L01`).
  Umbenennen schlägst du nur vor.
- **Waisen:** Seite ohne eingehenden Link. Einzige Seite ihres Bereichs: K.
- **Fehlende Gegenlinks:** A verlinkt B, B nicht A.
- **Zu wenig Links:** `agent/regeln/SCHEMA.md` → *Wann eine Seite fertig
  ist*.
- **Frontmatter:** Pflichtfeld fehlt oder leer, Wert nicht in der Liste,
  `sicherheit:` bei einer `notiz` (`agent/regeln/SCHEMA.md` →
  *Frontmatter*). Fehlt der Block oder parst er nicht: M. *(du)*: `quellen:`
  bei einer `notiz` aus einer Datei, `verfaellt:` bei einer `meta`-Seite.
- **Stimme:** `notiz` ohne `stimme: ich`; `[!ich]`-Block bei `stimme: agent`;
  `gemischt` ohne Block.
- **Pflichtabschnitte:** `agent/regeln/SCHEMA.md` → *Aufbau einer Seite*;
  fehlt nur `## Verlauf`: *Zur Kenntnis*.
- **Dateinamen:** `agent/regeln/SCHEMA.md` → *Dateinamen und Links*, auch
  für Ordner; `bruecke` außerhalb von `wiki/bruecken/`.
- **Erster Tag:** nicht der Bereich.
- **Einzel-Tags:** Thementag auf nur einer Seite.
- **Quellenpfade** (M): `quellen:` nennt eine fehlende Datei. Liegt sie
  nicht in Archiv, Bestand oder Modul: *Sollte*.
- **Gelesen** (K): `quelle` ohne `gelesen:`; du trägst es nach, wenn du die
  Seite das nächste Mal anfasst.
- **Datum in der Zukunft** (M): `created:`, `updated:`, Log-Eintrag oder
  Übergabe nach heute.
- **Wochentag** (M): Wochentag passt nicht zum Datum dahinter, in `wiki/`
  und `ausgaben/`.
- **Protokoll:** Kopfzeile, Vorgang, Titel oder Reihenfolge der Daten nicht
  nach `agent/regeln/SCHEMA.md` → *Protokoll*. Ältere Einträge meldest du
  nur.
- **Index:** Ein Ordner in `wiki/` (auch `bruecken`, `muster`) fehlt dort;
  `Tempo:` nicht `langsam`, `mittel`, `schnell`. Ohne `Tempo:`: K.
- **Leitfragen:** Zeile nicht nach `agent/regeln/SCHEMA.md` → *Leitfragen*.
- **Übergabe:** Format oder Zahlen nicht nach
  `agent/ablaeufe/feierabend.md` § 1. Eingangsdatei ohne Zeile, anderer
  Zeilenanfang unter *Offen*: K.
- **Stau im Eingang:** Datei liegt länger als zwei Wochen dort. Mit
  `Entschieden:`: K, du nennst die Entscheidung, statt zu fragen.
- **Wortlaut:** `[!ich]`-Block weicht von seiner Rohdatei ab, soweit sie
  Text ist (`.md`, `.txt`; sonst § 4).
- **Ansichten** (Suche wie `agent/ablaeufe/ansicht-bauen.md` § 4): Verstoß
  gegen `L05` in einer, die du gebaut hast (`<meta name="fundus-kern">`
  oder Log `ansicht`): M; in einer der Person: K, ändern nur auf Auftrag.
  Andere Hauptversion von `fundus-kern` als `KERN_VERSION` in
  `ansicht/uebersicht.html`: *Sollte*.

## 2 · Verfall

- **Verfall:** `pruefen_bis:` oder `verfaellt:` ist vorbei oder kein Datum.
  - Seite: „neu prüfen“; `status: veraltet` erst, wenn eine Quelle einen
    neuen Stand belegt (`L04`).
  - `meta`-Seite mit `verfaellt:` (K): Sie bleibt.
  - Leitplanke, auch eines Moduls (M): Sie gilt weiter, bis ein Update sie
    ersetzt.
  - `MODUL.md`: Update vorschlagen (`handbuch/MODULE.md` → *Einhängen*), in
    `module/` nichts markieren (`L01`).
  - Bald fällig (K): dasselbe in den nächsten zwei Wochen.
- **Alte Quelle, schnelles Thema** *(du)*: `status: aktiv`, jüngste Quelle
  älter als die Grenze des Bereichs. Sie folgt `Tempo:` im Index
  (`schnell`: ein Jahr, `mittel`: drei Jahre, `langsam`: keine); ohne
  `Tempo:` setzt du sie und nennst sie.
- **Feld gegen Text** *(du)*: Nennt der Text ein künftiges Gültigkeitsende,
  das nicht zu `pruefen_bis:` oder `verfaellt:` passt, fragst du die Person,
  statt zu ändern.

## 3 · Denken

- **Widersprüche:** Hat eine neue Quelle einen offenen Eintrag in
  `wiki/meta/widersprueche.md` geklärt (`agent/regeln/SCHEMA.md` →
  `sicherheit:`)?
- **Themenseiten:** Bereiche mit vielen Quellen, aber keiner
  `begriff`-Seite.
- **Dubletten:** kaum verlinkte Seiten, die dasselbe sagen wie eine andere,
  beide genannt; `mehrwert: niedrig` setzen (`agent/regeln/LINSEN.md`),
  Zusammenlegen nur vorschlagen (`L04`).
- **Leitfragen:** Trägt eine Seite eine offene Frage, schlägst du
  „beantwortet“ vor (`agent/regeln/SCHEMA.md` → *Leitfragen*), im Bericht
  ein Satz. Zurückholen nach *Offen* → *Selbst behoben*.
- **Einstieg im Index:** je Bereich neu bestimmen (`agent/regeln/SCHEMA.md`
  → *Index*); geändert → *Selbst behoben*.
- **Lücken:** Fragen, die in mehreren Seiten unter `## Offene Fragen`
  stehen, und oft verlinkte Themen ohne eigene Seite kommen nach
  `wiki/meta/luecken.md`.

## 4 · Wortlaut und Belege

Umfang: seit der letzten Prüfung neue oder geänderte Seiten (`wiki/log.md`),
von den übrigen eine Stichprobe, genannt unter *Wie geprüft*.

- **`[!ich]`-Blöcke mit Rohdatei** (die Seite nennt in `quellen:` eine Datei
  in `quellen/archiv/`, oder der Block verlinkt die Seite, von der er
  stammt): Ist die Rohdatei kein Text oder lief das Prüfwerkzeug nicht,
  hältst du jeden Block, auch jede Kopie, Zeile für Zeile gegen sie
  (`agent/regeln/SCHEMA.md` → *Die Stimme der Person*, mit den erlaubten
  Abweichungen). Einen abweichenden kopierst du neu; steht er auf einer
  Seite mit `stimme: agent`, setzt du `gemischt`. Beides → *Selbst behoben*.
- **Ohne Rohdatei** (Zeile `*im Gespräch am …*` oder
  `*aus dem Steckbrief am …*`, oder von der Person im Wiki geschrieben):
  kein Abgleich.
- **Fundstelle je Kernaussage:** Jede Aussage unter `## Kernaussagen` nennt,
  wo sie sich nachprüfen lässt.
- **Stichprobe:** drei Kernaussagen von `begriff`- oder `bruecke`-Seiten (gibt
  es weniger, alle), möglichst mit Zahlen und aus verschiedenen Bereichen,
  gelesen gegen die Quellseite, bei einer Brücke gegen die Seite, von der die
  Aussage stammt, und diese gegen die Rohdatei. Verdichtungsfehler → *Muss
  behoben werden*, Satz der Seite und der Quelle nebeneinander: **Zahl**
  anders, gerundet, falsche Bezugsgröße · **Richtung** umgekehrt ·
  **Bedingung** der Quelle fehlt · **Zeitraum** verschoben.
- **Keine Ausrede:** Was du beim Aufnehmen lesen konntest (auch ein PDF),
  kannst du prüfen; „nicht abgleichbar“ gibt es nicht. Geht es wirklich
  nicht, steht die Aussage mit Grund unter *Wie geprüft*.

## 5 · Bericht

```markdown
## Prüfung [Datum]

### Muss behoben werden
### Sollte behoben werden
### Zur Kenntnis
### Selbst behoben
### Wie geprüft
```

Ein leerer Abschnitt bleibt mit „nichts“ stehen. Unter *Wie geprüft* steht,
ob das Prüfwerkzeug lief oder du von Hand geprüft hast, die Zahl der
abgeglichenen und der nicht geprüften `[!ich]`-Blöcke, die Stichprobe und
was du nicht prüfen konntest.

Als Datei `wiki/meta/pruefung-<datum>.md` speicherst du den Bericht nur auf
Wunsch, mit `verfaellt:` einen Monat später.

## 6 · Nach dem Bericht

- **Log:** ein Eintrag vom Typ `pruefen`. Ein fehlendes Ziel steht darin in
  Backticks, nicht als `[[ziel]]`.
- **Übergabe:** die ersten vier Zeilen unter *Nicht vergessen* neu (*Quellen
  seit letzter Prüfung* jetzt 0) und die `Rückfrage:`-Zeilen aus § 3, nach
  `agent/ablaeufe/feierabend.md` § 1. Alles andere bleibt.
