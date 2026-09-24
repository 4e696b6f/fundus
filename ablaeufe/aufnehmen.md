# Ablauf: eine Quelle aufnehmen

Auslöser: Eine Datei liegt in `quellen/eingang/`, und die Person sagt
„aufnehmen“, „verarbeiten“ oder „ingest“.

**Quelle für Quelle.** Jede Datei geht ganz durch § 1 bis § 6, bevor du die
nächste öffnest; nicht erst alle lesen und dann gebündelt schreiben. Braucht
eine Quelle eine Rückfrage, gilt § 7. Eine Quelle darf zehn bis fünfzehn
Seiten berühren.

## 1 · Lesen und einordnen

Lies die Quelle ganz. Dann entscheide, welche Art sie ist (Text in `Backticks`
ist die Stimme der Person, `regeln/SCHEMA.md` → *Die Stimme der Person*):

| Art | Woran erkennbar | Was daraus wird |
|---|---|---|
| **A · fremde Quelle** | Artikel, Studie, Buchauszug, Transkript, Webseite | eine `quelle`-Seite, dazu Änderungen an bestehenden Seiten |
| **B · eigene Notiz** | von der Person geschrieben, oft kurz, oft ungeordnet | eine `notiz` mit `stimme: ich`, der ganze Wortlaut in einem `> [!ich]`-Block |
| **C · gemischt** | eine fremde Quelle mit Anmerkungen der Person | eine `quelle`-Seite, jede Anmerkung als eigener `> [!ich]`-Block ohne die umschließenden Backticks, `stimme: gemischt` |

## 2 · Im Bestand suchen, Bereich wählen

Gibt es schon eine Seite zum Thema (Suche wie `ablaeufe/fragen.md` § 1)?
Dann ergänzt du sie.

Neue Seiten kommen in einen bestehenden Bereich oder einen aus `SOUL.md` →
*Themenbereiche*. Passt keiner, fragst du im Bericht am Ende des Auftrags
(§ 6), ob du einen neuen Bereich anlegen darfst; bis zur Antwort gilt § 7.
Einen genehmigten Bereich trägst du nicht selbst in `SOUL.md` ein.

Berührt die Quelle das Fachgebiet eines Moduls, gelten seine Leitplanken für
jede Seite dieses Auftrags, auch für die Zusammenfassung der Quelle.

## 3 · Die Hauptseite schreiben

Nach `regeln/SCHEMA.md`. Pflicht:

- Dateiname: `quelle-<kurztitel>.md` bei Art A und C, Datum vorn bei Art B;
  eindeutig im Vault (`regeln/SCHEMA.md` → *Dateinamen und Links*)
- `quellen:` auf den späteren Archivpfad (`quellen/archiv/<dateiname>`), bei
  jeder Art
- `## Kernaussagen`: nur, was die Quelle sagt, in eigenen Worten, jede Aussage
  mit Fundstelle (Seite, Abschnitt, Minute); Wörtliches steht als Zitat
- `pruefen_bis:` nach `regeln/SCHEMA.md` → `pruefen_bis:`. In den Log-Eintrag
  dieser Quelle kommt jede datierte Nebenangabe als Zeile
  `Offen: Frist JJJJ-MM-TT: was · [[seite]]` und jede Aufgabe, die die Person
  sich vorgemerkt hat, als `Offen: Von dir vorgemerkt: Aufgabe · [[seite]]`.

## 4 · Den Bestand nachziehen

Für jede Seite, die von der neuen Quelle berührt wird:

- Aussage ergänzen oder präzisieren, mit Verweis auf die neue Seite
- Gegenlinks setzen
- ein übernommener `[!ich]`-Block kommt aus der Rohdatei und macht die Seite
  `stimme: gemischt`, im selben Arbeitsgang
- Weicht eigene Erfahrung der Person von einer Quelle ab, steht sie als
  `[!ich]`-Block neben der Aussage, nicht in `widersprueche.md`.

Widerspricht die Quelle einer bestehenden Aussage oder einer Moduldatei:

1. Nicht entscheiden: beide Aussagen nebeneinander, je mit Fundstelle.
2. `sicherheit: strittig` auf der Seite, deren Kernaussage betroffen ist.
3. Eine Zeile in `wiki/meta/widersprueche.md` (Format dort).

## 5 · Linsen

Eine neue `begriff`- oder `bruecke`-Seite bekommt `gegenposition:`, die
übrigen Linsen nur, wo sie etwas zeigen (`regeln/LINSEN.md`).

## 6 · Abschließen

1. Jeden `[!ich]`-Block dieser Quelle nach dem Schreiben Zeile für Zeile
   gegen die Rohdatei halten: Art B gegen die ganze Notiz, Art C gegen den
   Text zwischen den Backticks.
2. Die Datei von `quellen/eingang/` nach `quellen/archiv/` verschieben, ohne
   Umbenennung, ohne Unterordner. Liegt dort schon eine Datei gleichen
   Namens, fragst du die Person (§ 7).
3. `wiki/index.md` ergänzen, wenn du einen Bereich neu angelegt hast
   (`regeln/SCHEMA.md` → *Index*).
4. Eintrag in `wiki/log.md` vom Typ `aufnehmen`, einer je Quelle, mit den
   Zeilen `Offen:` aus § 3.
5. Der Person in drei bis fünf Sätzen sagen, was neu ist, was sich geändert
   hat, welcher Widerspruch oder welche Lücke auftauchte; am Ende des
   Auftrags auch die offenen Rückfragen.

Sind alle Quellen des Auftrags aufgenommen, außer denen, die auf eine Antwort
warten, folgt einmal `ablaeufe/verknuepfen.md`, ohne Nachfrage.

## 7 · Rückfrage mitten im Auftrag

Eine Rückfrage zu einer Quelle hält die übrigen nicht auf; bleibt sie bis zum
Sitzungsende offen, steht sie in der Übergabe:

1. Die offene Quelle bleibt unverändert in `quellen/eingang/`.
2. Die übrigen nimmst du vollständig auf, archivierst und verknüpfst sie,
   ohne auf die Antwort zu warten.
3. Nach der Antwort nimmst du die offene Quelle auf; für ihre Seiten läuft
   `ablaeufe/verknuepfen.md` noch einmal.

**Entscheidungen ohne Seitenänderung** (eine Datei bleibt im Eingang, kein
neuer Bereich, keine Brücke) hältst du sofort fest, damit keine spätere
Sitzung erneut fragt:

1. als Log-Eintrag vom Typ `entscheidung`:

   ```markdown
   ## [2026-09-23] entscheidung | flyer-roller.pdf bleibt im Eingang
   Die Person räumt die Datei selbst weg. Nicht aufnehmen, nicht erneut fragen.
   ```

2. in `gedaechtnis/UEBERGABE.md` unter *Offen* als Zeile `Entschieden: …`
   (Form: `ablaeufe/sitzung-beenden.md` § 1); der Rest bleibt stehen.
