# SCHEMA — Seitenformat

Hier steht verbindlich, wie eine Wiki-Seite aussieht und welche Felder Pflicht
sind. Andere Dateien verweisen hierher und wiederholen es nicht.

## Seitentypen

| `type:` | Was | Beispiel |
|---|---|---|
| `quelle` | Zusammenfassung einer einzelnen Rohquelle | ein Artikel, ein Buchkapitel, ein Vortrag |
| `begriff` | ein Konzept, eine Theorie, ein Muster | „Spaced Repetition“ |
| `bruecke` | Verbindung zwischen zwei oder mehr Bereichen | „Lernkurven in Sport und Sprache“ |
| `akteur` | Person, Organisation, Institution | ein Verband, eine Autorin |
| `projekt` | etwas, woran die Person arbeitet, mit Stand | „Umzug der Praxis“ |
| `notiz` | ein eigener Gedanke der Person, kurz und für sich lesbar | |
| `meta` | Prüfberichte, Lücken, Widersprüche, Befunde | |

Der Typ steht im Frontmatter, nicht im Pfad. Ordner in `wiki/` sind
Themenbereiche (`wiki/lernen/`, `wiki/gesundheit/`), eine Seite hat genau einen
Ordner. Ordnernamen folgen denselben Regeln wie Dateinamen. Welche Bereiche du
ohne Nachfrage anlegst, steht in `AGENTS.md` → *Was du ohne Nachfrage tust*.

## Dateinamen und Links

- Kleinbuchstaben, Bindestriche, keine Umlaute im Dateinamen:
  `spaced-repetition.md`, `lernkurven-sport-zu-sprache.md`.
- `quelle`-Seiten tragen `quelle-` vorn: `quelle-artikel-wiederholen.md`.
- Notizen tragen das Datum vorn: `2026-09-23-kurztitel.md`. Es ist das Datum,
  das in der Notiz steht; steht keins darin, das Datum der Aufnahme.
- Kein Dateiname in `wiki/` gleicht einem Dateinamen in `quellen/` oder
  `module/`, auch nicht in den Unterordnern eines Moduls. Obsidian sieht alle
  drei Ordner, `[[name]]` wäre sonst mehrdeutig.
- Links als `[[dateiname]]`. **In beide Richtungen:** Verlinkt A auf B, bekommt
  B einen Link zurück auf A, mit einem Halbsatz, warum.
- Meta-Seiten (`wiki/index.md`, `wiki/log.md`, alles in `wiki/meta/`) sind
  davon in beide Richtungen ausgenommen: Sie brauchen keinen Gegenlink, und
  ein Link auf sie braucht keinen. `wiki/muster/` gehört nicht dazu, denn
  Musterseiten sind `begriff`-Seiten.
- Auf eine Moduldatei verlinkst du mit Pfad:
  `[[module/<modulname>/<datei>|Kurzname]]`. Der Link zählt als ausgehender
  Link. Einen Gegenlink bekommt er nicht, weil du `module/` nicht änderst
  (`L01`).

## Frontmatter

Jede Seite beginnt so (Beispiel für den Typ `begriff`):

```yaml
---
title: 'Spaced Repetition'
type: begriff
tags: [lernen, gedaechtnis]
aliases: ['verteiltes Wiederholen']
created: 2026-09-23
updated: 2026-09-23
quellen: ['quellen/archiv/artikel-wiederholen.pdf']
sicherheit: mittel                   # hoch | mittel | niedrig | strittig
status: aktiv                        # aktiv | veraltet | ersetzt | skizze
stimme: agent                        # ich | agent | gemischt
gegenposition: 'Wer nur verteilt wiederholt, übt Abrufen, nicht Verstehen.'
pruefen_bis: 2027-09-23
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

**`sicherheit:`** ist dein Urteil über die Belege der Kernaussagen, nicht über
das Thema. Eine einzelne Werbequelle ist `niedrig`, auch wenn sie überzeugend
klingt. Widerspricht eine Quelle einer Kernaussage, wird die Seite `strittig`,
deren Kernaussage betroffen ist, gleich wie gut die Quellen sind. In der Regel
ist das die Seite, auf der beide Aussagen stehen; die beiden `quelle`-Seiten
werden es nicht von selbst, denn sie geben wieder, was ihre Quelle sagt.
`strittig` geht jedem anderen Wert
vor, und der Widerspruch steht in `wiki/meta/widersprueche.md`. Seiten, deren
Kernaussagen niemand bestreitet, behalten ihren Wert, auch wenn dieselbe
Quelle anderswo umstritten ist. Eine `notiz` hat das Feld nicht: Sie gibt
wieder, was die Person denkt, nicht was belegt ist.

**`stimme:`** trennt, wer spricht. `ich` = der Hauptteil ist wörtlich die
Person (`notiz`). `agent` = deine Zusammenfassung. `gemischt` = beides, die
Person steht im `> [!ich]`-Block. Stellst du einen `[!ich]`-Block in eine Seite
mit `stimme: agent`, setzt du `stimme: gemischt`. Eine `notiz` bleibt `ich`,
auch wenn du Abschnitte ergänzt (`## Verbindungen`, `## Offene Fragen`,
`## Verlauf`): Sie stehen unter der Zeile `*Ergänzt vom Agenten:*` direkt nach
dem Wortlaut der Person.

**`pruefen_bis:`** setzt du bei Seiten, die an einem Datum veralten: Preise,
Rechtsstände, Zuständigkeiten, Telefonnummern, Softwareversionen. Nach dem
Datum meldet `ablaeufe/pruefen.md` die Seite. Seiten ohne solchen Stoff
bekommen kein Datum.

**Moduldateien als Beleg:** Stützt sich eine Seite auf eine Datei in einem
Modul, steht deren Pfad in `quellen:` (`'module/<modulname>/<datei>'`). Die
Seite übernimmt das `pruefen_bis:` dieser Datei, sonst das aus der `MODUL.md`
des Moduls. So veraltet sie nicht still, wenn das Modul sich ändert.

**`tags:`** Der erste Tag ist der Bereich der Seite, also ihr Ordnername
(`meta` bei `meta`-Seiten). Weitere Tags nur für ein Thema, das absehbar
mindestens drei Seiten teilen. Kleinbuchstaben, keine Umlaute, ohne `#`, ohne
Punkte, nicht rein aus Ziffern (`jahr-2026` statt `2026`).

**Anführungszeichen:** `title`, `aliases` und jedes freie Textfeld stehen in
einfachen Anführungszeichen, sobald ein Doppelpunkt, ein `#` oder ein
`[[Link]]` darin vorkommt. Sonst zeigt Obsidian das Frontmatter rot.

## Die Stimme der Person

```markdown
> [!ich]
> Wörtlich, was die Person gesagt oder notiert hat. Nicht geglättet.
```

Alles in diesem Block ist die Person. Alles außerhalb ist Quelle oder deine
Zusammenfassung.

Text in `Backticks` in einer Rohdatei ist ein Hinweis auf die Stimme der
Person. Was daraus wird, hängt von der Art der Quelle ab
(`ablaeufe/aufnehmen.md` § 1):

- **Art B, eigene Notiz:** Die ganze Notiz ist schon die Person. Ihr Wortlaut
  kommt vollständig in *einen* `[!ich]`-Block. Backticks darin sind Betonungen
  und bleiben stehen.
- **Art C, fremde Quelle mit Anmerkungen:** Jede Stelle in Backticks ist eine
  Anmerkung der Person und wird ein eigener `[!ich]`-Block, wörtlich samt
  Backticks, neben der Aussage, auf die sie sich bezieht.

Backticks entfernst oder ersetzt du nie, auch nicht durch Tags oder Fettdruck:
Ohne sie würde aus `` `#später` `` in Obsidian ein Tag.

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

`## Offene Fragen` und `## Verlauf` dürfen fehlen, wenn es nichts zu sagen gibt.
Neue Zeilen unter `## Verlauf` kommen ans Ende, wie im Log.

## Wann eine Seite fertig ist

Alle zutreffenden Punkte müssen halten. Sie sind so gewählt, dass auch ein
kleines Modell sie nachprüfen kann:

- [ ] alle Pflichtfelder gesetzt (Tabelle oben), Frontmatter parst in Obsidian ohne roten Block
- [ ] `quellen:` zeigt auf eine existierende Datei in `quellen/archiv/` oder in einem Modul
- [ ] mindestens zwei ausgehende Links, je mit Begründung (hat der Bereich erst zwei Seiten, genügt einer; kein Link nur zum Auffüllen), und die Gegenlinks sind gesetzt
- [ ] jede Kernaussage lässt sich an der Fundstelle nachprüfen
- [ ] wörtliche Übernahmen stehen in Anführungszeichen oder als `>`-Zitat mit Fundstelle
- [ ] `sicherheit:` ehrlich, eine schwache Quelle im Text benannt
- [ ] `stimme:` passt zu dem, was auf der Seite steht (siehe oben)
- [ ] `updated:` gesetzt, Zeile unter `## Verlauf`, Eintrag in `wiki/log.md`

## Befunde mit Verfallsdatum

Eine Analyse zu einem bestimmten Stand (ein Vergleich, eine Marktlage, ein
Prüfbericht, auch aus einem Ablauf eines Moduls) ist eine `meta`-Seite mit
dem Feld `verfaellt:` (Datum). Sie wird nicht fortgeschrieben. Was daran
dauerhaft gilt, wandert in eine `begriff`-Seite. Nach dem Verfallsdatum ist sie Geschichte und wird beim
Prüfen gemeldet, nicht gelöscht.

## Protokoll: `wiki/log.md`

Nur anhängen. Ältere Einträge schreibst du nie um; den eigenen Eintrag
derselben Sitzung darfst du berichtigen. Ein Eintrag je Vorgang:

```markdown
## [2026-09-23] aufnehmen | Artikel über verteiltes Wiederholen
Neu: quelle-artikel-wiederholen.md, spaced-repetition.md
Geändert: lernkurven.md, gedaechtnis.md
Offen: Studie zur Wirkung bei Erwachsenen fehlt → luecken.md
```

Vorgänge: `aufnehmen`, `frage`, `pruefen`, `verknuepfen`, `sitzung`.

## Index: `wiki/index.md`

Der Index führt die Themenbereiche mit je einem Satz und dem Einstieg, nicht
jede einzelne Seite. Einzelne Seiten findet die Suche. Der Einstieg ist die
`begriff`-Seite des Bereichs mit den meisten eingehenden Links; eine eigene
Bereichsseite braucht es nicht.
