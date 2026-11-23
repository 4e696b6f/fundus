# SCHEMA — Seitenformat

## Seitentypen

- `quelle`: Zusammenfassung einer einzelnen Rohquelle; der Beleg
- `begriff`: die **Themenseite** zu einem Gegenstand, Konzept oder Muster,
  über alle Quellen hinweg; hier schlägt man nach
- `bruecke`: Verbindung zwischen zwei oder mehr Bereichen
- `akteur`: öffentlich handelnde Person, Organisation, Institution (`L03`)
- `projekt`: ein Vorhaben der Person, mit Stand und Fristen
- `notiz`: ein eigener Gedanke der Person, kurz und für sich lesbar
- `meta`: Prüfberichte, Lücken, Widersprüche, Befunde

Der Typ steht im Frontmatter, nicht im Pfad. Ordner in `wiki/` sind
Themenbereiche (`wiki/lernen/`), benannt wie Dateien; eine Seite hat genau
einen. Neben `wiki/meta/` sind `wiki/bruecken/` (jede `bruecke`-Seite) und
`wiki/muster/` (Musterseiten, `agent/regeln/LINSEN.md` → *Gleiche Form*)
keine Themenbereiche und stehen nicht in `SOUL.md`.

## Dateinamen und Links

- Kleinbuchstaben, Bindestriche, keine Umlaute im Dateinamen:
  `spaced-repetition.md`.
- `quelle`-Seiten tragen `quelle-` vorn: `quelle-artikel-wiederholen.md`.
- Notizen tragen das Datum vorn: `2026-09-23-kurztitel.md`, das Datum aus der
  Notiz, sonst das der Aufnahme.
- Musterseiten heißen `muster-<wert>.md` nach ihrem `gleiche_form:`-Wert
  (`muster-rueckkopplung-verzoegert.md`). Eine Brücke heißt nie wie ein
  `gleiche_form:`-Wert.
- Jeder Dateiname in `wiki/` kommt im Vault nur einmal vor, Groß- und
  Kleinschreibung zählt nicht (Ordner mit Punkt vorn ausgenommen). Vor dem
  Anlegen suchst du ihn; ist er belegt, änderst du den Kurztitel. Die festen
  Namen (`index`, `log`, die Seiten in `wiki/meta/`) bleiben, auch wenn der
  Bestand oder ein Modul denselben Namen mitbringt.
- Links als `[[dateiname]]`. **In beide Richtungen:** Verlinkt A auf B, bekommt
  B einen Link zurück auf A, mit einem Halbsatz, warum. Ausgenommen sind, in
  beide Richtungen, Meta-Seiten (`wiki/index.md`, `wiki/log.md`, alles in
  `wiki/meta/`), nicht aber `wiki/bruecken/` und `wiki/muster/`.
- Auf eine Moduldatei verlinkst du mit Pfad:
  `[[module/<modulname>/<datei>|Kurzname]]`; der Link zählt als ausgehender,
  ohne Gegenlink (`L01`). Ebenso auf eine Datei im Bestand:
  `[[quellen/bestand/<pfad>|Titel]]`, `.md` ohne Endung, andere mit.

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
| `sicherheit` | jeder Seite außer `notiz`; dort steht das Feld nicht |
| `quellen` | `quelle`; `notiz`, die aus einer Datei in `quellen/` entsteht |
| `gelesen` | `quelle` |
| `gegenposition` | `begriff`, `bruecke` |
| `gleiche_form` | `bruecke` |
| `verfaellt` | `meta`-Seite, die einen Stand festhält (siehe *Befunde mit Verfallsdatum*) |

Wahlweise: `aliases` (Synonyme für die Suche), `pruefen_bis`, die übrigen
Linsen-Felder aus `agent/regeln/LINSEN.md`, `quellen` bei allen anderen Typen. Ein
leerer Wert (`''`, `[]`) zählt nicht als gesetzt.

**`created:`** ist der Tag des Anlegens. Das Datum einer älteren Notiz steht
in ihrem Dateinamen, das einer Quelle im ersten Absatz der `quelle`-Seite.

**`gelesen:`** `'ganz'` oder der Ausschnitt mit Suchweg, etwa
`'S. 28–35 von 492; gesucht: einladung, frist, ladung'`
(`agent/ablaeufe/aufnehmen.md` § 1). Fehlt es auf einer Seite von vor 0.6,
ist das *Zur Kenntnis*, kein Fehler.

**`sicherheit:`** ist dein Urteil über die Belege der Kernaussagen, nicht über
das Thema oder deine Zustimmung; eine einzelne Werbequelle ist `niedrig`.

- **Widerspruch:** `strittig` wird die Themenseite, auf der beide Aussagen
  nebeneinander stehen (`agent/ablaeufe/aufnehmen.md` § 4), gleich wie gut
  die Quellen sind; `strittig` geht jedem Wert vor. Die `quelle`-Seiten
  behalten ihren Wert. Die Zeile in `wiki/meta/widersprueche.md` folgt dem
  Format dort; bei einer Moduldatei kann die Person ihn über `kontakt:` in
  der `MODUL.md` melden.
- **Geklärt:** Löst eine neue Quelle einen offenen Widerspruch, ersetzt du
  am Zeilenende `offen` durch `geklärt JJJJ-MM-TT: wie · Fundstelle` und
  sagst es der Person. Bis zu ihrem Ja bleibt die Seite `strittig` und die
  Zeile unter *Offen*, danach kommt sie nach *Entschieden*.

**`stimme:`** `ich` = der Hauptteil ist wörtlich die Person (`notiz`),
`agent` = deine Zusammenfassung, `gemischt` = beides, die Person im
`> [!ich]`-Block; stellst du einen in eine Seite mit `stimme: agent`, setzt
du im selben Arbeitsgang `gemischt`. Eine `notiz` bleibt `ich`; was du
ergänzt, steht unter der Zeile `*Ergänzt vom Agenten:*` direkt nach dem
Wortlaut der Person.

**`pruefen_bis:`** nur, wenn eine Kernaussage an Preis, Frist, Rechtsstand,
Zuständigkeit oder einer laufenden Lage hängt. Der Wert ist das früheste
Datum, an dem sie ungültig wird oder neu zu prüfen ist; danach meldet
`agent/ablaeufe/pruefen.md` die Seite.

- Das Datum kommt aus der Quelle. Nennt sie keins, fragst du die Person,
  statt eines zu errechnen; bis zur Antwort steht keins.
- Studien, Satzungen, Bücher: Stand im ersten Absatz, kein `pruefen_bis:`.
- Gültigkeitsende beim Aufnehmen schon vorbei: Die Aussage steht als
  veraltet im Text („galt bis 31.03.2026“), die Lücke kommt nach
  `wiki/meta/luecken.md`.
- Eine datierte Nebenangabe (Anmeldeschluss) gibt kein `pruefen_bis:`,
  sondern eine Frist in der Übergabe (`agent/ablaeufe/feierabend.md`).

**Moduldateien als Beleg:** Stützt sich eine Seite auf eine Moduldatei, steht
deren Pfad in `quellen:` (`'module/<modulname>/<datei>'`), und die Seite
übernimmt deren `pruefen_bis:`, sonst das der `MODUL.md`, auch ohne eigenen
datierten Kernstoff; ein früheres eigenes Datum bleibt.

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
der Seite der Notiz oder Quelle selbst, verlinkst du bei ihm diese Seite.

**Erlaubte Abweichungen vom Wortlaut**, nur diese:

- Vor jede Zeile kommt `> `, vor eine leere `>`; eine lange Zeile darfst du
  innerhalb eines Absatzes umbrechen.
- Art C: Die Backticks, die eine Anmerkung umschließen, entfallen.
- Für den Namen eines Dritten steht seine Rolle in eckigen Klammern, etwa
  `[Kassenwart]`; nur dann steht unter dem Block fest
  `*Name durch Rolle ersetzt (L03).*`.
- Ein Wort mit `#` am Zeilen- oder Wortanfang, das nicht in Backticks
  steht, bekommt `\#` (sonst macht Obsidian einen Tag daraus).
- Ein `[[Link]]` ohne Ziel im Wiki wird reiner Text (`Link`).
- Eine `# Überschrift` wird `**Überschrift**`.

Sonst änderst du weder Wortlaut noch Reihenfolge noch Backticks. Unter
einem `[!ich]`-Block deutest du die Person nicht um: Sagt sie etwas anderes
als die Quelle, steht die Abweichung so da, wie sie sie sagt.

**Ohne Rohdatei:** Was die Person im Gespräch für eine Seite sagt, übernimmst
du genau so, darunter `*im Gespräch am JJJJ-MM-TT*`; Text aus
`EINRICHTUNG.md` kopierst du aus dieser Datei, darunter
`*aus dem Steckbrief am JJJJ-MM-TT*`. Die erste Wiki-Seite damit gilt als
Rohfassung, weitere Kopien kommen von dort, samt Zeile; die Prüfung gleicht
nicht ab.

Backticks in einer Rohdatei markieren die Stimme der Person, je nach Art der
Quelle (`agent/ablaeufe/aufnehmen.md` § 1):

- **Art B, eigene Notiz:** Der ganze Wortlaut kommt in *einen* `[!ich]`-Block,
  alle Zeilen samt Datumszeile, Leerzeilen und Listenpunkte wie in der
  Rohdatei. Backticks sind hier Betonungen und bleiben.
- **Art C, fremde Quelle mit Anmerkungen:** Jede Stelle in Backticks ist eine
  Anmerkung und wird ein eigener `[!ich]`-Block neben ihrer Aussage; der
  Text dazwischen bleibt wörtlich.

**Aufgaben der Person:** Was sie sich in einer Rohdatei vormerkt (etwa
`#später` und Aufgabe), bleibt im `[!ich]`-Block. Du erledigst es nicht
ungefragt; es ist weder offene Frage noch Lücke, die Übergabe führt es als
„Von dir vorgemerkt“ (`agent/ablaeufe/feierabend.md` § 1).

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

Pflichtabschnitte, Meta-Seiten ausgenommen: `## Verlauf` (neue Zeilen ans
Ende), `## Kernaussagen` außer bei `notiz`, `## Verbindungen`, sobald der
Bereich eine zweite Seite hat. `## Offene Fragen` darf fehlen, wenn es leer
wäre.

## Diagramme

Ein Mermaid-Block (```` ```mermaid ````) darf in einer Seite stehen, wenn er
zeigt, was die Seite im Text belegt: einen Ablauf, eine Zeitachse, eine
Gliederung. Jeder Knoten ist eine Aussage wie eine Zeile im Text; was nicht
im Text mit Fundstelle steht, steht auch nicht im Diagramm, und Namen nur, wo
die Seite sie nennen darf (`L03`). Kein `click`. In einer `notiz` steht es
unter *Ergänzt vom Agenten*.

## Wann eine Seite fertig ist

Muster: `handbuch/beispiele/` (erfunden, keine Wiki-Seiten). Alle
zutreffenden Punkte halten:

- Frontmatter und Dateiname nach den Abschnitten oben; es parst in Obsidian ohne roten Block
- `quellen:` zeigt auf eine existierende Datei in `quellen/archiv/`, `quellen/bestand/` oder in einem Modul
- mindestens zwei ausgehende Links, je mit Begründung (hat der Bereich erst zwei Seiten, genügt einer, die erste Seite allein braucht keinen; kein Link nur zum Auffüllen), Gegenlinks gesetzt
- jede Kernaussage an der Fundstelle nachprüfbar: gedruckte Seitenzahl, sonst `PDF-S. n`; Abschnitt; Minute
- wörtliche Übernahmen in Anführungszeichen oder als `>`-Zitat mit Fundstelle
- eine schwache Quelle im Text benannt
- verdichtet ohne Verschiebung: Zahlen mit Einheit und Bezugsgröße wie in der Quelle („je Person“), Vorbehalt und Ausnahme bei der Aussage, an der sie stehen, eine eigene Folgerung als solche gekennzeichnet
- `updated:` gesetzt, Zeile unter `## Verlauf`, Eintrag in `wiki/log.md`

## Belegprobe

Pflicht nach jeder Brücke, Themenseite, Ausgabe und Antwort mit Zahl:

1. Jede Zahl, jeden Namen, jedes Datum, jede Richtung oder Bedingung („von
   drei auf zwei“, „außer“) siehst du einzeln an der Fundstelle nach:
   Rohdatei oder Seite öffnen, nicht erinnern.
2. Was die Probe nicht besteht, fällt oder wird als „Nicht aus dem Wiki:“
   bzw. allgemeines Wissen gekennzeichnet (dann `sicherheit: niedrig`).
3. Namen ergänzt du nie: kein Vorname zu „Frau X“.
4. Wochentage, Fristen und Abstände („in vier Monaten“) rechnet das Prüfwerkzeug:
   `node agent/werkzeug/pruefen.js tag JJJJ-MM-TT [+n|-n]`, ohne `node` ein
   anderer Rechenbefehl, nie der Kopf; geht keiner, steht kein Wochentag da.
5. Log-Zeile `Belegprobe: n Angaben, m geändert`; ohne Log-Eintrag nennst
   du die Zahlen im Chat.

## Befunde mit Verfallsdatum

Eine Analyse zu einem bestimmten Stand (Vergleich, Marktlage, Prüfbericht,
auch aus einem Modul-Ablauf) ist eine `meta`-Seite mit `verfaellt:`, die du
nicht fortschreibst; was dauerhaft gilt, wandert auf eine Themenseite.

## Ausgaben

Ein Text in `ausgaben/` (`agent/ablaeufe/schreiben.md`) ist keine Wiki-Seite:
kein Typ, kein Gegenlink, nie in `quellen:`, seine Links zählen bei keiner
Prüfung. Der Name folgt *Dateinamen und Links*. Frontmatter: `title`,
`created`, `zielperson` (wer liest), `zweck` (was danach geschehen soll),
`stimme: agent`. Soll eine Ausgabe Quelle werden, sagst du, dass sie
Wiki-Inhalt wiederholt; nur eigene Ergänzungen der Person darin nimmst du
wie eine Notiz auf.

Ein Bericht als HTML (`agent/ablaeufe/ansicht-bauen.md` § 2.5) trägt
dieselben Angaben als `<title>` und `<meta name="created|zielperson|zweck">`,
die Belege in einem Abschnitt *Belege* am Ende und die Sicherheitszeile nach
`L05`; den Kern nur, wenn er beim Öffnen liest. Log: `ansicht`.

## Bestand: `wiki/meta/bestand.md`

Eine `meta`-Seite ohne `verfaellt:`, die du fortschreibst
(`agent/ablaeufe/uebernehmen.md`). Oben der Zähler, dann je Datei eine Zeile, der
Pfad ab `quellen/bestand/` in Backticks, nicht als Link:

```markdown
Bestand: 12 von 38 erschlossen · 3 ausgelassen · 2 zurückgestellt · 4 nicht lesbar · 17 offen
Tote Links im Bestand: 7

| Datei | Art | Thema | Status | Seite |
|---|---|---|---|---|
| `Notizen/wortschatzkiste.md` | Notiz | Spiel mit Alltagsgegenständen | erschlossen | [[wortschatz-spiel]] |
| `Team/Protokolle/` · ohne Namensteil | Notiz | Protokoll | zurückgestellt: Personendaten · bleibt liegen, 2026-09-26 | |
```

Status: `offen`, `erschlossen`, `ausgelassen`, `zurückgestellt: Personendaten`,
`nicht lesbar: <Endung>`; eine Entscheidung der Person steht mit Datum dahinter.

## Protokoll: `wiki/log.md`

Einträge **nur anhängen**, mit einem Befehl, der ans Dateiende schreibt
(`cat >>` o. ä.), nie per Textersetzung mitten in der Datei, auch bei einem
Datum vor dem letzten Eintrag (`AGENTS.md` → *Sitzungsbeginn*). Ältere
Einträge schreibst du nie um; im eigenen Eintrag derselben Sitzung darfst du
einen Fehler berichtigen. Ein Eintrag je Vorgang, Kopfzeile
`## [JJJJ-MM-TT] vorgang | Titel`, der Titel ist Pflicht:

```markdown
## [2026-09-23] aufnehmen | Artikel über verteiltes Wiederholen
Neu: quelle-artikel-wiederholen.md, spaced-repetition.md
Geändert: lernkurven.md, gedaechtnis.md
Offen: Frist 2026-10-15: Anmeldeschluss Lernkurs (Randspalte) · [[quelle-artikel-wiederholen]]
Belegprobe: 6 Angaben, 1 geändert
```

Vorgänge: `aufnehmen`, `frage`, `pruefen`, `verknuepfen`
(`agent/ablaeufe/zusammenhaenge.md`), `sitzung` (`agent/ablaeufe/feierabend.md`),
`entscheidung` (`agent/ablaeufe/aufnehmen.md` § 7), `ausgabe`
(`agent/ablaeufe/schreiben.md`), `bestand` (`agent/ablaeufe/uebernehmen.md`),
`einrichtung` (`agent/ablaeufe/einrichten.md`), `ansicht`
(`agent/ablaeufe/ansicht-bauen.md`), `aktualisierung`
(`agent/ablaeufe/aktualisieren.md`). Statt des Vorgangs gilt auch der Name
seines Ablaufs (`fragen`, `zusammenhaenge`, `uebernehmen`, `einrichten`,
`aktualisieren`); andere gibt es nicht.

`Offen:` steht nur für eine Frist, eine von der Person vorgemerkte Aufgabe
oder eine Brückenidee, auch mehrfach; `agent/ablaeufe/feierabend.md` übernimmt
sie in die Übergabe. Lücken nicht als `Offen:`.

## Index: `wiki/index.md`

Unter *Bereiche* die Themenbereiche, nicht jede Seite: je Bereich ein Satz
und der Einstieg, darunter eine Zeile mit `Tempo:` (wie schnell sich das
Thema ändert: `langsam`, `mittel`, `schnell`) und `Auch:` (andere Wörter
dafür):

```markdown
- **lernen** · Wie Lernen gelingt und hält. Einstieg: [[spaced-repetition]]
  Tempo: langsam · Auch: pauken, wiederholen, merken
```

Einstieg ist die `begriff`-Seite mit den meisten eingehenden Links, ohne
eine die erste Seite des Bereichs, ohne Seite „noch keine Seite“; die
Prüfung bestimmt ihn neu. Danach folgen, sobald es sie gibt,
`wiki/bruecken/` (Einstieg: die Brücke mit den meisten eingehenden Links)
und `wiki/muster/`.

## Leitfragen: `wiki/meta/leitfragen.md`

Was das Wiki einmal beantworten soll, in den Worten der Person
(`agent/ablaeufe/einrichten.md`): Ziele, keine Lücken. Eine Zeile je Frage,
der Wortlaut unverändert:

```markdown
## Offen
- Wie fördere ich Leseanfänger mit wenig Zeit? · Bereich: lesen · aus dem Steckbrief · seit 2026-11-18 · dazu: [[lautlesen-tandem]]

## Beantwortet
- Wie fördere ich …? · Bereich: lesen · aus dem Steckbrief · seit 2026-11-18 · beantwortet 2026-12-02 → [[lautlesen-tandem]]
```

„Beantwortet“ schlägst du nur vor, die Person bestätigt:

1. Beantworten die Kernaussagen einer `quelle`-, `begriff`- oder
   `bruecke`-Seite mit `sicherheit:` `mittel` oder `hoch` die Frage (eine
   `notiz` allein genügt nicht), bekommt die Zeile unter *Offen* den Zusatz
   ` · dazu: [[seite]]`.
2. Du fragst im Chat in einem Satz; die Übergabe bekommt eine Zeile
   `Rückfrage:` (`agent/ablaeufe/feierabend.md` § 1).
3. Erst nach ihrem Ja verschiebst du die Zeile nach *Beantwortet*.

Wird die tragende Seite `strittig`, `veraltet` oder `ersetzt` und trägt
keine andere, kommt die Zeile zurück nach *Offen*, mit
`wieder offen JJJJ-MM-TT`. Neue Leitfragen trägt nur die Person ein oder
`einrichten`; eine Frage aus dem Gespräch kommt hinzu, wenn sie es will.
