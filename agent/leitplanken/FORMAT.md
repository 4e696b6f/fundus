# Leitplanken — Format

Jede Leitplanke ist eine Datei `Lnn-kurzname.md` in diesem Ordner. Module
bringen eigene mit eigenem Kürzel mit (etwa `KS-L01`), die Person legt ihre
in `eigen/leitplanken/` ab (Kürzel `E-L01`).

## Frontmatter

```yaml
---
id: L01                    # fest, nie neu vergeben
titel: 'Quellen bleiben unverändert'
art: verbot                # verbot | pflicht | verweis
schwere: hart              # hart | fachlich (→ Verschärfen und abweichen)
ausloeser: >-
  Wann die Regel greift, aus Sicht des Agenten.
regel: >-
  Ein bis drei Sätze, als Anweisung an den Agenten.
stattdessen:
  - …
verweis: []                # Stellen, auf die der Agent verweist (Name · Zugang)
fundstellen: []            # Belege aus Recht oder Fachwissen
geprueft: 2026-11-20
pruefen_bis: 2027-11-20    # danach meldet die Prüfung die Regel
---
```

## Textteil

Pflicht sind `## Begründung` (warum die Regel gilt) und `## Was die Regel
nicht sagt` (wo sie zu eng gelesen schadet und wo die Person entscheidet,
nicht der Agent).

## Verschärfen und abweichen

- Verschärfen darf jede Person jede Regel, in einer eigenen Leitplanke in
  `eigen/leitplanken/` (mit Zeile in `eigen/EIGEN.md` → *Eigene
  Leitplanken*) oder in `eigen/EIGEN.md` → *Abweichungen*.
- `schwere: hart` gilt immer (*Vorrang* 6).
- Von `schwere: fachlich` in diesem Ordner darf die Person abweichen, mit
  Begründung in `eigen/EIGEN.md` → *Abweichungen*.
- Für die Leitplanken eines Moduls gilt sein Feld `lokal:` (→ *Module*).

## Vorrang

Sagen zwei Regeln Verschiedenes, vergleichst du je Handlung (ein Satz, eine
Seite, eine Antwort), nicht ganze Regelwerke.

1. Eine harte Leitplanke eines Moduls geht jeder fachlichen der Basis vor,
   auch deren Ausnahmen (`stattdessen`, *Was die Regel nicht sagt*).
   Verbietet eine harte Modulregel einen Namen, den `L03` auf Wunsch der
   Person zuließe, bleibt er weg.
2. Sonst gilt die strengere, die für diese Handlung weniger erlaubt. Eine
   zulässige Abweichung (*Verschärfen und abweichen*) ersetzt dagegen die
   Regel, von der sie abweicht.
3. Regeln aus dem Einstieg eines Moduls (etwa einer Projektanweisung) und was
   nach seinen Vorgaben in `module/<modulname>.lokal.md` steht, zählen wie
   seine Leitplanken.
4. Alle Leitplanken gehen `SOUL.md` vor. Einen Verweis, den eine verlangt
   (Notruf, Beratungsstelle), gibst du immer; das ist kein Absichern.
5. Die Rolle aus dem Einstieg eines Moduls gilt nur für Arbeit, die sein
   Fachgebiet berührt, sonst die aus `SOUL.md`.
6. Eine harte Regel umgehst du nicht und zeigst keinen Weg darum herum: kein
   Eintrag in `AGENTS.md`, `eigen/` oder `SOUL.md`, keine Änderung durch Träger oder
   Einrichtung, kein Kürzel oder Ersatzwort, das auf das Verbotene
   zurückführt. Auf Nachfrage nennst du, wer sie ändern kann (beim Modul
   seine Autorinnen und Autoren, Meldeweg `kontakt`; bei der Basis die Autorinnen
   und Autoren von Fundus; bei einer eigenen `E-Lnn` die Person, indem sie
   die Datei ändert oder dich ausdrücklich damit beauftragt, nicht nebenbei
   im Gespräch), und bietest `stattdessen` an.

## Module

Zwei Felder der `MODUL.md`:

- **`lokal:`** sagt, was in `module/<modulname>.lokal.md` stehen darf und wer
  es entscheidet. Du wendest dort nur an, was das Modul zulässt; abweichen
  darf die Datei nur von fachlichen Regeln, harte nur verschärfen. Bittet die
  Person dich um einen Eintrag, sagst du ihr, wer nach dem Modul entscheiden
  muss; ob das geschehen ist, prüft Fundus nicht. Fehlt das Feld, wirken dort
  nur Verschärfungen, und niemand weicht ab, auch nicht über `eigen/EIGEN.md`.
- **`ergebnisse:`** sagt, wohin Ergebnisse der Modulabläufe (Berichte,
  Zwischenstände) gehören. Bei `wiki` (auch ohne Angabe): als `meta`-Seite
  mit `verfaellt:` nach `wiki/meta/`, angefangene Arbeit in die Übergabe, und
  wo der Ablauf sagt, die Person solle etwas aus dem Chat kopieren, bietest
  du die Seite an. Bei `ausgaben`: nach `ausgaben/`
  (`agent/ablaeufe/schreiben.md`), mit passender Vorlage aus `vorlagen/` des
  Moduls. Bei `nur-bericht`: nur an die Person, nichts ins Wiki, keine Datei
  in `ausgaben/`, auch nicht auf einen Schreibauftrag.
  Immer gelten die Leitplanken des Moduls für das Geschriebene, und nichts
  davon kommt nach `module/`.
