# SCHEMA — Seitenformat

## Seitentypen

- `quelle`: Zusammenfassung einer einzelnen Rohquelle (Artikel, Buchkapitel, Vortrag)
- `begriff`: ein Konzept, eine Theorie, ein Muster
- `bruecke`: Verbindung zwischen zwei oder mehr Bereichen
- `akteur`: Person, Organisation, Institution
- `projekt`: etwas, woran die Person arbeitet, mit Stand
- `notiz`: ein eigener Gedanke der Person, kurz und für sich lesbar
- `meta`: Prüfberichte, Lücken, Widersprüche, Befunde

Der Typ steht im Frontmatter, nicht im Pfad. Ordner in `wiki/` sind
Themenbereiche (`wiki/lernen/`), eine Seite hat genau einen Ordner;
Ordnernamen folgen den Regeln für Dateinamen. Neben `wiki/meta/` sind
`wiki/bruecken/` (jede `bruecke`-Seite) und `wiki/muster/` (Musterseiten,
`regeln/LINSEN.md` → *Gleiche Form*) keine Themenbereiche und stehen nicht in
`SOUL.md`.

## Dateinamen und Links

- Kleinbuchstaben, Bindestriche, keine Umlaute im Dateinamen:
  `spaced-repetition.md`.
- `quelle`-Seiten tragen `quelle-` vorn: `quelle-artikel-wiederholen.md`.
- Notizen tragen das Datum vorn: `2026-09-23-kurztitel.md`, das Datum aus der
  Notiz, sonst das der Aufnahme.
- Musterseiten heißen `muster-<wert>.md` nach ihrem `gleiche_form:`-Wert
  (`muster-rueckkopplung-verzoegert.md`). Eine Brücke heißt nie wie ein
  `gleiche_form:`-Wert.
- Jeder Dateiname kommt im Vault nur einmal vor (Ordner mit Punkt vorn wie
  `.obsidian/` ausgenommen). Vor dem Anlegen suchst du ihn; ist er belegt,
  änderst du den Kurztitel.
- Links als `[[dateiname]]`. **In beide Richtungen:** Verlinkt A auf B, bekommt
  B einen Link zurück auf A, mit einem Halbsatz, warum. Ausgenommen sind, in
  beide Richtungen, Meta-Seiten (`wiki/index.md`, `wiki/log.md`, alles in
  `wiki/meta/`), nicht aber `wiki/bruecken/` und `wiki/muster/`.
- Auf eine Moduldatei verlinkst du mit Pfad:
  `[[module/<modulname>/<datei>|Kurzname]]`; der Link zählt als ausgehender,
  ohne Gegenlink (`L01`).

## Frontmatter

Beispiel (`begriff` in `wiki/lernen/`):

```yaml
---
title: 'Spaced Repetition'
type: begriff
tags: [lernen]                       # erster Tag: der Bereich
aliases: ['verteiltes Wiederholen']
created: 2026-09-23
updated: 2026-09-23
quellen: ['quellen/archiv/artikel-wiederholen.pdf']
sicherheit: mittel                   # hoch | mittel | niedrig | strittig
status: aktiv                        # aktiv | veraltet | ersetzt | skizze
stimme: agent                        # ich | agent | gemischt
gegenposition: 'Wer nur verteilt wiederholt, übt Abrufen, nicht Verstehen.'
---
```

**Pflichtfelder** — nur hier verbindlich:

| Feld | Pflicht bei |
|---|---|
| `title`, `type`, `tags`, `created`, `updated`, `status`, `stimme` | jeder Seite |
| `sicherheit` | jeder Seite außer `notiz` |
| `quellen` | `quelle`; `notiz`, die aus einer Datei in `quellen/` entsteht |
| `gegenposition` | `begriff`, `bruecke` |
| `gleiche_form` | `bruecke` |
| `verfaellt` | `meta`-Seite, die einen Stand festhält (siehe *Befunde mit Verfallsdatum*) |

Wahlweise: `aliases` (Synonyme für die Suche), `pruefen_bis`, die übrigen
Linsen-Felder aus `regeln/LINSEN.md`, `quellen` bei allen anderen Typen. Ein
leerer Wert (`''`, `[]`) zählt nicht als gesetzt.

**`created:`** ist der Tag des Anlegens, auch wenn Notiz oder Quelle älter
sind. Deren Datum steht im Dateinamen der Notiz bzw. im ersten Absatz der
`quelle`-Seite.

**`sicherheit:`** ist dein Urteil über die Belege der Kernaussagen, nicht über
das Thema oder deine Zustimmung; eine einzelne Werbequelle ist `niedrig`. Widerspricht eine Quelle
einer Kernaussage, wird die Seite `strittig`, auf der beide Aussagen
nebeneinander stehen, gleich wie gut die Quellen sind; `strittig` geht jedem
Wert vor. Die beiden `quelle`-Seiten behalten ihren Wert (jede gibt ihre
Quelle richtig wieder), ebenso unbestrittene Seiten. Die Zeile in
`wiki/meta/widersprueche.md` nennt vorn die beiden Seiten oder Quellen, hinter
„beide Aussagen auf“ die `strittig`-Seite, auch wenn sie vorn schon steht. Für
einen Widerspruch zu einer Moduldatei gilt die zweite Formzeile; die Person
kann ihn über `kontakt:` in der `MODUL.md` melden.

**`stimme:`** `ich` = der Hauptteil ist wörtlich die Person (`notiz`),
`agent` = deine Zusammenfassung, `gemischt` = beides, die Person im
`> [!ich]`-Block. Stellst du einen `[!ich]`-Block in eine Seite mit
`stimme: agent`, setzt du im selben Arbeitsgang `gemischt`, auch bei `bruecke`
und `quelle`. Eine `notiz` bleibt `ich`; was du ergänzt (`## Verbindungen`,
`## Offene Fragen`, `## Verlauf`), steht unter der Zeile `*Ergänzt vom
Agenten:*` direkt nach dem Wortlaut der Person.

**`pruefen_bis:`** nur, wenn eine Kernaussage an einem Datum hängt (Preis,
Rechtsstand, Zuständigkeit, Telefonnummer, Softwareversion). Der Wert ist das
früheste Datum, an dem eine Kernaussage ungültig wird oder neu zu prüfen ist;
danach meldet `ablaeufe/pruefen.md` die Seite.

- Kein Gültigkeitsende genannt: Stand der Quelle plus zwölf Monate, und ein
  Halbsatz bei der Aussage sagt das. Liegt dieses Datum beim Aufnehmen zurück:
  Aufnahmetag plus drei Monate, und der Halbsatz sagt, dass der Stand der
  Quelle nicht nachgeprüft ist.
- Genanntes Gültigkeitsende beim Aufnehmen schon vorbei: Die Aussage steht als
  veraltet im Text („galt bis 31.03.2026“), die Lücke kommt nach
  `wiki/meta/luecken.md`, `pruefen_bis:` ist das Datum, an dem ein neuer Stand
  zu erwarten ist, sonst Aufnahmetag plus drei Monate.
- Eine datierte Nebenangabe (Anmeldeschluss, Preis in einer Nebenzeile) gibt
  kein `pruefen_bis:`, sondern eine Frist in der Übergabe unter *Nicht
  vergessen* (`ablaeufe/sitzung-beenden.md`).
- Ohne datierten Kernstoff kein Datum, außer von einer Moduldatei übernommen.

**Moduldateien als Beleg:** Stützt sich eine Seite auf eine Moduldatei, steht
deren Pfad in `quellen:` (`'module/<modulname>/<datei>'`), und die Seite
übernimmt deren `pruefen_bis:`, sonst das der `MODUL.md`; ein früheres eigenes
Datum bleibt.

**`tags:`** Der erste Tag ist der Bereich, also der Ordnername (`meta` bei
`meta`-Seiten); eine Brücke trägt zuerst `bruecke`, dann die verbundenen
Bereiche: `[bruecke, sport, sprache]`. Einen Thementag setzt du erst, wenn
eine zweite Seite ihn braucht, dann auf beiden. Kleinbuchstaben, keine Umlaute, ohne `#`, ohne Punkte, nicht rein aus Ziffern
(`jahr-2026` statt `2026`).

**Anführungszeichen:** `title`, `aliases` und jedes freie Textfeld stehen in
einfachen Anführungszeichen, sobald ein Doppelpunkt, ein `#` oder ein
`[[Link]]` darin vorkommt.

## Die Stimme der Person

```markdown
> [!ich]
> Wörtlich, was die Person gesagt oder notiert hat. Nicht geglättet.
```

Alles im Block ist die Person, alles außerhalb Quelle oder deine
Zusammenfassung.

**Kopieren:** Jeden `[!ich]`-Block kopierst du aus der Rohdatei in `quellen/`,
nie aus dem Gedächtnis oder von einer anderen Wiki-Seite, auch die zweite
Stelle desselben Zitats, auch im selben Arbeitsgang. Steht der Block nicht auf
der Seite der Notiz oder Quelle selbst, verlinkst du bei ihm diese Seite. Vor
jede Zeile kommt `> `, vor eine leere `>`; sonst änderst du nichts außer den
Backticks bei Art C.

**Ohne Rohdatei:** Was die Person im Gespräch für eine Seite sagt, übernimmst
du genau so, darunter `*im Gespräch am JJJJ-MM-TT*`. Die erste Wiki-Seite
damit gilt als Rohfassung, weitere Kopien kommen von dort, samt Zeile. Diese
Blöcke und solche, die die Person selbst ins Wiki schreibt (etwa per Vorlage
`projekt`), gleicht die Prüfung nicht ab (`ablaeufe/pruefen.md` § 4).

Backticks in einer Rohdatei markieren die Stimme der Person, je nach Art der
Quelle (`ablaeufe/aufnehmen.md` § 1):

- **Art B, eigene Notiz:** Der ganze Wortlaut kommt in *einen* `[!ich]`-Block,
  alle Zeilen samt Datumszeile, Leerzeilen und Listenpunkte wie in der
  Rohdatei. Backticks sind hier Betonungen und bleiben.
- **Art C, fremde Quelle mit Anmerkungen:** Jede Stelle in Backticks ist eine
  Anmerkung und wird ein eigener `[!ich]`-Block neben ihrer Aussage, ohne die
  umschließenden Backticks; der Text dazwischen bleibt wörtlich. Ein Wort mit `#` vorn bleibt auch im Block in Backticks
  (`` `#später` ``), sonst wird es ein Tag.

Umbrechen darfst du eine lange Zeile innerhalb eines Absatzes; Wortlaut,
Reihenfolge und Backticks änderst du nicht. Sonst entfernst oder ersetzt du
Backticks nie, auch nicht durch Tags oder Fettdruck. Unter einem `[!ich]`-Block
deutest du die Person nicht um: Sagt sie etwas anderes als die Quelle, steht
die Abweichung so da, wie sie sie sagt.

**Aufgaben der Person:** Was sich die Person in einer Rohdatei vormerkt (etwa
`` `#später` `` und Aufgabe), bleibt wörtlich im `[!ich]`-Block. Du
erledigst es nicht ungefragt; es gehört weder unter `## Offene Fragen` noch
nach `wiki/meta/luecken.md`, die Übergabe führt es als „Von dir vorgemerkt“
(`ablaeufe/sitzung-beenden.md`).

## Aufbau einer Seite

```markdown
# Titel

Ein bis drei Sätze: worum es geht und warum es hier steht.

## Kernaussagen
- Jede Aussage enthält eine Zahl, einen Befund, einen Mechanismus oder eine
  Empfehlung, jeweils mit Fundstelle.

## Verbindungen
- [[andere-seite]]: warum sie dazugehört

## Offene Fragen
- was die Quelle nicht beantwortet

## Verlauf
- 2026-09-23: angelegt aus [[quelle-x]]
```

`## Offene Fragen` und `## Verlauf` dürfen fehlen, wenn sie leer wären. Neue
Zeilen unter `## Verlauf` kommen ans Ende.

## Wann eine Seite fertig ist

Alle zutreffenden Punkte halten:

- Pflichtfelder gesetzt, `created:`, `tags:`, `stimme:` und `pruefen_bis:` nach ihren Absätzen oben, Frontmatter parst in Obsidian ohne roten Block
- Dateiname nach *Dateinamen und Links*, im Vault nur einmal; eine Brücke liegt in `wiki/bruecken/`
- `quellen:` zeigt auf eine existierende Datei in `quellen/archiv/` oder in einem Modul
- mindestens zwei ausgehende Links, je mit Begründung (hat der Bereich erst zwei Seiten, genügt einer; kein Link nur zum Auffüllen), Gegenlinks gesetzt
- jede Kernaussage an der Fundstelle nachprüfbar
- wörtliche Übernahmen in Anführungszeichen oder als `>`-Zitat mit Fundstelle
- `sicherheit:` ehrlich, eine schwache Quelle im Text benannt
- jeder `[!ich]`-Block mit Rohdatei stimmt mit ihr überein (*Die Stimme der Person*)
- verdichtet ohne Verschiebung: Zahlen mit Einheit und Bezugsgröße wie in der Quelle („je Person“), ein Vorbehalt der Quelle nur bei der Aussage, an der er steht, eine eigene Folgerung („zwei unabhängige Quellen“) als solche gekennzeichnet
- `updated:` gesetzt, Zeile unter `## Verlauf`, Eintrag in `wiki/log.md`

## Befunde mit Verfallsdatum

Eine Analyse zu einem bestimmten Stand (Vergleich, Marktlage, Prüfbericht,
auch aus einem Modul-Ablauf) ist eine `meta`-Seite mit `verfaellt:`.
Sie wird nicht fortgeschrieben; was daran dauerhaft gilt, wandert in eine
`begriff`-Seite. Nach dem Verfallsdatum wird sie beim Prüfen gemeldet, nicht
gelöscht.

## Protokoll: `wiki/log.md`

Nur anhängen. Ältere Einträge schreibst du nie um; den eigenen Eintrag
derselben Sitzung darfst du berichtigen. Ein Eintrag je Vorgang:

```markdown
## [2026-09-23] aufnehmen | Artikel über verteiltes Wiederholen
Neu: quelle-artikel-wiederholen.md, spaced-repetition.md
Geändert: lernkurven.md, gedaechtnis.md
Offen: Frist 2026-10-15: Anmeldeschluss Lernkurs (Randspalte) · [[quelle-artikel-wiederholen]]
```

Vorgänge: `aufnehmen`, `frage`, `pruefen`, `verknuepfen`, `sitzung`,
`entscheidung` (`ablaeufe/aufnehmen.md` § 7).

`Offen:` steht nur für eine Frist, eine von der Person vorgemerkte Aufgabe
oder eine Brückenidee, auch mehrfach; `ablaeufe/sitzung-beenden.md` übernimmt
sie in die Übergabe. Lücken nicht als `Offen:`.

## Index: `wiki/index.md`

Unter *Bereiche* die Themenbereiche mit je einem Satz und dem Einstieg, nicht
jede Seite. Einstieg ist die `begriff`-Seite mit den meisten eingehenden Links.
Danach folgen, sobald es sie gibt, `wiki/bruecken/` (Einstieg: die Brücke mit
den meisten eingehenden Links) und `wiki/muster/`.
