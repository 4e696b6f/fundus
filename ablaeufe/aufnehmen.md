# Ablauf: eine Quelle aufnehmen

Auslöser: Eine Datei liegt in `quellen/eingang/`, und die Person sagt
„aufnehmen“, „verarbeiten“ oder „ingest“. Liegen mehrere Dateien dort, nimmst
du eine nach der anderen auf, jede vollständig. Dateien mit Punkt am Anfang
(`.gitkeep`) sind keine Quellen.

Eine Quelle darf zehn bis fünfzehn Seiten berühren. Das ist normal, denn
Wissen wirkt dort, wo es sich mit Bestehendem verbindet.

## 1 · Lesen und einordnen

Lies die Quelle ganz. Dann entscheide, welche Art sie ist:

| Art | Woran erkennbar | Was daraus wird |
|---|---|---|
| **A · fremde Quelle** | Artikel, Studie, Buchauszug, Transkript, Webseite | eine `quelle`-Seite, dazu Änderungen an bestehenden Seiten |
| **B · eigene Notiz** | von der Person geschrieben, oft kurz, oft ungeordnet | eine `notiz` mit `stimme: ich`, der ganze Wortlaut in einem `> [!ich]`-Block |
| **C · gemischt** | eine fremde Quelle mit Anmerkungen der Person | eine `quelle`-Seite, jede Anmerkung als eigener `> [!ich]`-Block, `stimme: gemischt` |

Text in `Backticks` zeigt die Stimme der Person. Bei Art B bleibt er im
Wortlaut stehen, wie er ist. Bei Art C wird jede Stelle in Backticks ein
eigener `[!ich]`-Block. Backticks entfernst du nie (Regel und Grund:
`regeln/SCHEMA.md` → *Die Stimme der Person*).

## 2 · Im Bestand suchen, Bereich wählen

Bevor du schreibst: Gibt es schon eine Seite zu diesem Thema? Suche mit zwei
oder drei Stichwörtern in der Grundform, nicht mit einer ganzen Frage (siehe
`ablaeufe/fragen.md`). Gibt es eine, ergänzt du sie, statt eine zweite
anzulegen.

Neue Seiten kommen in einen Bereich (Ordner in `wiki/`). Passt die Quelle in
einen bestehenden Bereich oder in einen, der in `SOUL.md` unter
*Themenbereiche* steht, legst du dort an, den Ordner bei Bedarf neu. Passt sie
in keinen davon, fragst du die Person, bevor du einen neuen Bereich anlegst.
Einen so genehmigten Bereich trägst du nicht selbst in `SOUL.md` ein; ab dann
ist er ein bestehender Bereich.

Berührt die Quelle oder der Bereich das Fachgebiet eines Moduls (die Titel
kennst du vom Sitzungsbeginn), lädst du das Modul vor dem ersten Schreiben
(`AGENTS.md` → *Wenn … dann*). Seine Leitplanken gelten dann für jede Seite
dieses Auftrags, auch für die Zusammenfassung der Quelle.

## 3 · Die Hauptseite schreiben

Nach `regeln/SCHEMA.md` (Pflichtfelder, Dateiname). Pflicht:

- Dateiname: `quelle-<kurztitel>.md` bei Art A und C, Datum vorn bei Art B
- `quellen:` auf den späteren Archivpfad (`quellen/archiv/<dateiname>`), bei
  jeder Art
- `## Kernaussagen`: nur, was die Quelle wirklich sagt, jede Aussage mit
  Fundstelle (Seite, Abschnitt, Minute)
- `sicherheit:` nach der Güte der Quelle, nicht nach deiner Zustimmung (eine
  `notiz` hat das Feld nicht)
- bei Art B: was du ergänzt, steht unter der Zeile `*Ergänzt vom Agenten:*`
  nach dem Wortlaut; die Seite bleibt `stimme: ich`
- keine Absätze aus der Quelle abschreiben, sondern in eigenen Worten.
  Wörtliches steht als Zitat.

## 4 · Den Bestand nachziehen

Für jede Seite, die von der neuen Quelle berührt wird:

- Aussage ergänzen oder präzisieren, mit Verweis auf die neue Seite
- Gegenlinks setzen
- Übernimmst du einen `[!ich]`-Block in eine Seite mit `stimme: agent`, setzt
  du dort `stimme: gemischt`.
- Weicht eigene Erfahrung der Person von einer Quelle ab, steht sie als
  `[!ich]`-Block neben der Aussage. Das ist kein Eintrag für
  `widersprueche.md`.

Widerspricht die neue Quelle einer bestehenden Aussage, sind drei Schritte
Pflicht:

1. Nicht entscheiden: beide Aussagen nebeneinander stehen lassen, je mit
   Fundstelle.
2. `sicherheit: strittig` auf der Seite, deren Kernaussage betroffen ist.
3. Eine Zeile in `wiki/meta/widersprueche.md` (Format dort), mit den beiden
   Seiten oder Quellen, die sich widersprechen, und hinter „beide Aussagen
   auf“ der Seite, auf der beide Aussagen jetzt stehen.

Widerspricht die Quelle einer Datei in einem Modul, gilt dasselbe. In
`widersprueche.md` steht dann statt der zweiten Seite der Pfad der Moduldatei.

## 5 · Linsen

Ist eine neue `begriff`- oder `bruecke`-Seite entstanden, gehört eine
`gegenposition:` hinein (`regeln/LINSEN.md`). Die übrigen Linsen nur, wo sie
etwas zeigen.

## 6 · Abschließen

1. Die Datei von `quellen/eingang/` nach `quellen/archiv/` verschieben, ohne
   Umbenennung, ohne Unterordner.
2. `wiki/index.md` ergänzen, wenn du einen Bereich neu angelegt hast: ein Satz
   und der Einstieg (`regeln/SCHEMA.md` → *Index*).
3. Eintrag in `wiki/log.md` (Format in `regeln/SCHEMA.md`).
4. Der Person in drei bis fünf Sätzen sagen: was neu ist, was sich geändert
   hat, welcher Widerspruch oder welche Lücke aufgetaucht ist.

Ist die letzte Quelle des Auftrags aufgenommen, folgt einmal
`ablaeufe/verknuepfen.md`, ohne Nachfrage, für die Seiten dieses Auftrags.
