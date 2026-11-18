# Ein Modul bauen

> Auch dieser Text ist mit Hilfe einer KI geschrieben, mehr dazu im
> KI-Hinweis der [README](../README.md).

Für Leute, die ein Fachmodul für Fundus schreiben. Wie man ein Modul
einhängt, steht in [MODULE.md](MODULE.md). Diese Datei liegt nur im
Repository, nicht im ZIP-Download (`.gitattributes`).

## Der Modulvertrag

Ein Modul hält sich an diese Regeln, damit Module nebeneinander funktionieren
und auch ohne Fundus nutzbar sind.

1. **Läuft auch allein.** Eine eigene Einstiegsdatei führt Menschen, die
   kein Fundus-Wiki haben.
2. **`MODUL.md` im Wurzelordner** mit dem Frontmatter unten (dem Kopf
   zwischen den `---`-Zeilen). Daraus liest der Agent, was er wann lädt.
3. **Leitplanken im Fundus-Format** (`agent/leitplanken/FORMAT.md`) mit eigenem
   Präfix wie `KS-L01`, damit keine Nummern kollidieren.
4. **Verfall sichtbar.** Was an einem Datum veraltet, trägt `pruefen_bis:`,
   in `MODUL.md` das früheste im Modul. Ein Datum nur im Fließtext findet die
   Prüfung nicht.
5. **Version und Änderungsprotokoll.** `CHANGELOG.md` sagt je Version, ob
   man sofort, vor der nächsten Nutzung oder gar nicht neu laden muss.
6. **Lizenz geklärt** in `MODUL.md` und `LICENSE`, Fremdtexte gekennzeichnet oder weggelassen.
   Sie darf von Fundus abweichen, etwa [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.de).
7. **Einstieg für den Agenten** hinter `einstieg:`. Richtet er sich auch an
   Menschen, markiert er den Teil, der als Anweisung gilt. Regeln darin zählen
   wie Leitplanken des Moduls (`agent/leitplanken/FORMAT.md` → *Vorrang*).
8. **Einstellungen vor Ort geregelt** über `lokal:`. Ohne Fundus nennt das
   Modul das Gegenstück, etwa ein Feld in einer Projektanweisung.
9. **Nur Modulinhalt ausliefern**, ohne Arbeitsstände und eigenes
   `.obsidian/` (bei `git` per `export-ignore`). Was trotzdem mitkommt, steht in `MODUL.md` unter *Nicht laden*.

## `MODUL.md`

```yaml
---
modul: kinderschutz                 # zugleich Ordnername unter module/
titel: 'Kinderschutz in Einrichtungen'
version: 0.3.0
fundus: '0.1'                       # erprobt mit dieser Fundus-Version
sprache: de
lizenz: CC-BY-SA-4.0
einstieg: START.md
leitplanken:
  ordner: leitplanken/
  praefix: KS
laden_minimal:                      # Mindestlast für schwächere Modelle
  - START.md
  - leitplanken/
achsen:                             # Filterfelder
  einrichtung: [kita, schule, ehrenamt]
  land: [bund, he]
stand: 2026-09-22
pruefen_bis: 2027-03-22             # frühestes Prüfdatum im Modul
kontakt: 'Issues im Repository des Moduls'
lokal: 'Abweichungen von KS-L03 und KS-L09 mit Begründung, entscheiden Träger oder Leitung'
ergebnisse: wiki                    # wiki | ausgaben | nur-bericht, ohne Angabe: wiki
---

# Kinderschutz in Einrichtungen

Zwei bis fünf Sätze: wofür das Modul da ist, für wen, und wo seine Grenze
liegt.
```

Unter dem Frontmatter steht, was das Modul kann und was nicht. `lokal:` sagt
in einem Satz, was in der `.lokal.md` stehen darf und wer entscheidet; fehlt
es, darf die Datei nur verschärfen. `ergebnisse:` sagt, ob der Agent
die Ergebnisse der Modulabläufe im Wiki ablegt (`wiki`), als Datei in
`ausgaben/` der Person (`ausgaben`) oder nur der Person berichtet
(`nur-bericht`, dann auch kein Text in `ausgaben/`). Vorlagen für solche
Dateien, etwa einen Bericht oder Brief, legt das Modul in `vorlagen/`. Wie
der Agent beide Felder anwendet, steht in `agent/leitplanken/FORMAT.md` →
*Module*.

## Wo anfangen

Nimm ein Gebiet, in dem du dich auskennst und in dem ein Agent ohne
Anleitung Fehler machen würde. Fang mit den Leitplanken an: Was darf der
Agent in diesem Gebiet nie, und was bietet er stattdessen an? Dann die
Abläufe, die Menschen in dem Gebiet tatsächlich brauchen. Fachwissen erst
danach, und nur mit Fundstelle.
