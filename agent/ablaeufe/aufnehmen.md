# Ablauf: aufnehmen

**Wofür:** Neue Dateien aus dem Eingang ins Wiki holen.

**Quelle für Quelle.** Jede Datei geht ganz durch § 1 bis § 6, bevor du die
nächste öffnest; ein Abbruch soll einen sauberen Stand lassen. Einzige
Ausnahme: Vorab siehst du Dateinamen und Größe an, um Reihenfolge und
Rückfragen (§ 7) zu klären. Eine Quelle darf zehn bis fünfzehn Seiten
berühren.

## 1 · Lesen und einordnen

Lies die Quelle ganz; `gelesen: 'ganz'` nur, wenn du jede Seite gelesen hast.
Was sich nicht in einem Zug lesen lässt (Richtwert: über 30 Seiten), liest
du nach Leitfragen und Vorhaben;
geben die nichts her, fragst du, worauf. Dann gilt:

- `gelesen:` hält Ausschnitt und Suchwörter fest (`agent/regeln/SCHEMA.md` →
  `gelesen:`).
- „X steht nicht drin“ nur mit dem Suchweg im Satz und nie über
  `sicherheit: mittel`.

Dann die Art (Text in Backticks ist die Stimme der Person,
`agent/regeln/SCHEMA.md` → *Die Stimme der Person*):

| Art | Woran erkennbar | Was daraus wird |
|---|---|---|
| **A · fremde Quelle** | Artikel, Studie, Buchauszug, Transkript, Webseite | eine `quelle`-Seite (§ 3) und Themenseiten (§ 4) |
| **B · eigene Notiz** | von der Person geschrieben, oft kurz, oft ungeordnet | eine `notiz` mit `stimme: ich`, der ganze Wortlaut in einem `> [!ich]`-Block |
| **C · gemischt** | eine fremde Quelle mit Anmerkungen der Person | wie A, jede Anmerkung als eigener `> [!ich]`-Block, `stimme: gemischt` |

## 2 · Bereich wählen

Neue Seiten kommen in einen bestehenden Bereich oder einen aus `SOUL.md` →
*Themenbereiche*. Passt keiner, fragst du im Bericht am Ende des Auftrags,
ob du einen neuen Bereich anlegen darfst; bis zur Antwort gilt § 7. Einen
genehmigten Bereich trägst du nicht selbst in `SOUL.md` ein.

Ist das Wiki nicht eingerichtet (`AGENTS.md` → *Sitzungsbeginn* 1) und gibt
es noch keinen Bereich, fragst du vor dem ersten Lesen, ob die Person erst
einrichten will oder du einen Bereich vorschlagen sollst, und wartest.

Berührt die Quelle das Fachgebiet eines Moduls, gelten seine Leitplanken für
jede Seite dieses Auftrags, auch für die Zusammenfassung der Quelle.

## 3 · Die Hauptseite schreiben

Nach `agent/regeln/SCHEMA.md`, der Dateiname eindeutig im Vault. Dazu:

- `quellen:` auf den späteren Archivpfad (`quellen/archiv/<dateiname>`), bei
  jeder Art
- `## Kernaussagen`: nur, was die Quelle sagt, in eigenen Worten, jede mit
  Fundstelle (`agent/regeln/SCHEMA.md` → *Wann eine Seite fertig ist*);
  Wörtliches steht als Zitat
- `pruefen_bis:` nach `agent/regeln/SCHEMA.md` → `pruefen_bis:`
- Im Log-Eintrag dieser Quelle: jede datierte Nebenangabe als
  `Offen: Frist JJJJ-MM-TT: was · [[seite]]`, jede von der Person
  vorgemerkte Aufgabe als `Offen: Von dir vorgemerkt: Aufgabe · [[seite]]`.

## 4 · Themenseiten

Pflicht. Je tragendem Gegenstand der Quelle schreibst du die Themenseite
(`begriff`) fort (Suche wie `agent/ablaeufe/fragen.md` § 1) oder legst sie
an. **Tragend** ist ein Gegenstand, der

- eine Leitfrage oder ein Vorhaben der Person berührt, oder
- schon in einer zweiten Quelle steht.

Höchstens drei neue Themenseiten je Quelle, aus einer Notiz (Art B) allein
keine; jeder weitere Gegenstand wird eine Zeile unter `## Offene Fragen` der
`quelle`-Seite. Eine `akteur`-Seite bekommen nur öffentlich Handelnde
(`L03`).

Auf der Themenseite und jeder anderen berührten Seite:

- Aussage ergänzen oder präzisieren, mit Fundstelle und Link auf die
  `quelle`-Seite, die Rohdatei in `quellen:`; Gegenlinks setzen
- Weicht eigene Erfahrung der Person von einer Quelle ab, steht sie als
  `[!ich]`-Block aus der Rohdatei neben der Aussage (`stimme: gemischt`),
  nicht in `widersprueche.md`.

Widerspricht die Quelle einer Seite, einer anderen Quelle oder einer
Moduldatei:

1. Nicht entscheiden: beide Aussagen nebeneinander auf der Themenseite, je
   mit Fundstelle. Gibt es keine, legt der Widerspruch sie an; die
   `quelle`-Seite bleibt bei dem, was die Quelle sagt.
2. `sicherheit: strittig` auf der Themenseite.
3. Eine Zeile in `wiki/meta/widersprueche.md` (Format dort).

Klärt die Quelle einen offenen Widerspruch, markierst du dessen Zeile als
geklärt (`agent/regeln/SCHEMA.md` → `sicherheit:`).

## 5 · Linsen

Eine neue `begriff`- oder `bruecke`-Seite bekommt `gegenposition:`, die
übrigen Linsen nur, wo sie etwas zeigen (`agent/regeln/LINSEN.md`).

## 6 · Abschließen

1. Jeden `[!ich]`-Block dieser Quelle Zeile für Zeile gegen die Rohdatei
   halten, dann je Themenseite die Belegprobe (`agent/regeln/SCHEMA.md` →
   *Belegprobe*).
2. Die Datei von `quellen/eingang/` nach `quellen/archiv/` verschieben, ohne
   Umbenennung, ohne Unterordner, und nachsehen, dass sie dort liegt und
   nicht mehr im Eingang. Liegt dort schon eine gleichen Namens: `Rückfrage:`
   (§ 7), ob die Person die neue umbenennt; du benennst nie um (`L01`).
3. `wiki/index.md` ergänzen, wenn du einen Bereich neu angelegt hast
   (`agent/regeln/SCHEMA.md` → *Index*). Beantwortet eine Seite eine offene
   Leitfrage, schlägst du das vor (`agent/regeln/SCHEMA.md` → *Leitfragen*).
4. Eintrag in `wiki/log.md` vom Typ `aufnehmen`, einer je Quelle, mit den
   Zeilen `Offen:` aus § 3.
5. Der Person eine Zeile („2 von 8: … aufgenommen“) mit Themenseiten,
   Widerspruch und Lücke. Erst danach öffnest du die nächste Datei.

Sind alle Quellen des Auftrags aufgenommen, außer denen, die auf eine Antwort
warten, nennst du die offenen Rückfragen, und es folgt einmal
`agent/ablaeufe/zusammenhaenge.md`, ohne Nachfrage.

## 7 · Rückfrage und Entscheidung

Beides steht sofort in `eigen/gedaechtnis/UEBERGABE.md` unter *Offen*, genau
so (`agent/ablaeufe/feierabend.md` § 1):

```markdown
- Rückfrage: Frage · zu <datei oder [[seite]]> · seit JJJJ-MM-TT
- Entschieden: „wörtlicher Satz der Person“ · zu <datei oder [[seite]]> · am JJJJ-MM-TT · nicht erneut fragen
```

Nach dem Auftrag hat jede Datei im Eingang genau eine der beiden.

**Rückfrage** zu einer Quelle; sie hält die übrigen nicht auf:

1. Die Quelle bleibt unverändert im Eingang.
2. Die übrigen nimmst du vollständig auf, archivierst und verknüpfst sie.
3. Nach der Antwort nimmst du die Quelle auf und streichst die Zeile; für
   ihre Seiten läuft `agent/ablaeufe/zusammenhaenge.md` noch einmal.

**Entscheidung ohne Seitenänderung** (eine Datei bleibt im Eingang, kein
neuer Bereich, keine Brücke): ein Log-Eintrag vom Typ `entscheidung` mit dem
wörtlichen Satz der Person; `Entschieden:` ersetzt die `Rückfrage:`.

```markdown
## [2026-09-23] entscheidung | flyer-roller.pdf bleibt im Eingang
„räum ich selbst weg, frag nicht mehr danach“
```

**Nicht aufnehmen:** Will die Person eine Eingangsdatei nicht im Wiki, ist
das `Entschieden:`. Löschen kann nur sie selbst (Finder oder Explorer); du
verschiebst sie nicht ins Archiv, denn Archiv heißt verarbeitet (`L01`).
