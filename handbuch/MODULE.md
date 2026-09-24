# Module

> Auch dieser Text ist mit Hilfe einer KI geschrieben, mehr dazu im
> KI-Hinweis der [README](../README.md).

Ein Modul ist ein fertiges Wissenspaket zu einem Fachgebiet: Regeln, Abläufe,
Vorlagen und Fachwissen, gepflegt von Leuten, die sich in dem Gebiet
auskennen. Du hängst es in dein Wiki ein, und dein Agent arbeitet mit diesem
Fachwissen. Zum Anfangen brauchst du kein Modul.

## Verzeichnis

Noch ist kein Modul veröffentlicht. Als erstes entsteht `kinderschutz`: Es
hilft, Schutzkonzepte und Risikoanalysen in Kita, Schule und Ehrenamt zu
prüfen, und bringt Leitplanken für Agenten im Kinderschutz mit, zunächst für
Hessen. Weitere Module stehen hier, sobald sie veröffentlicht sind.

## Einhängen

Jedes Modul ist ein eigener Ordner in `module/`, benannt nach dem Wert hinter
`modul:` in seiner `MODUL.md`. Beim Kinderschutz-Modul ist das
`module/kinderschutz/`.

Ohne `git` lädst du das Modul als ZIP, entpackst es und verschiebst den
Ordner nach `module/`. Er heißt dann nach dem Repository, etwa
`kinderschutz-skills-main`. Benenn ihn nach dem Wert hinter `modul:` um. Für
ein Update lädst du das ZIP neu und ersetzt den Ordner.

Mit `git`, im Terminal in deinem Wiki-Ordner:

```
cd module
git clone <adresse-des-moduls> <modulname>
```

Aktualisieren mit `git pull` im Modulordner.

Der Agent liest ein Modul, sobald eine Frage, eine Quelle oder eine Seite sein
Fachgebiet berührt, und ändert keine Datei darin (Leitplanke `L01`). Was du
selbst ergänzen willst, sagst du ihm. Er legt dafür eine Seite in `wiki/` an,
die auf die Moduldatei verlinkt, so geht bei einem Update nichts verloren.
Einen Fehler im Modul meldest du dort, wo `kontakt:` in seiner `MODUL.md`
hinzeigt.

Manche Module lassen zu, dass du oder deine Einrichtung ihre Regeln anpasst,
etwa mit einer Abweichung, die Träger oder Leitung beschlossen haben. Das
steht in `module/<modulname>.lokal.md` neben dem Modulordner und bleibt so bei
jedem Update erhalten. Die Datei gehört dir, der Agent ändert sie nur auf
deine Bitte. Was darin stehen darf und wer es entscheidet, sagt das Modul im
Feld `lokal:`. Abweichen darf sie nur von Regeln mit `schwere: fachlich`,
harte Regeln darf sie nur verschärfen.

Findet die Prüfung ein abgelaufenes Prüfdatum im Modul, schlägt der Agent ein
Update vor, also den Handgriff oben. Bis dahin gelten die alten Regeln weiter.

---

*Ab hier für Leute, die ein Modul bauen.*

## Der Modulvertrag

Ein Modul hält sich an diese Regeln, damit Module nebeneinander funktionieren
und auch ohne Fundus nutzbar sind.

1. **Läuft auch allein.** Eine eigene Einstiegsdatei führt Menschen, die
   kein Fundus-Wiki haben.
2. **`MODUL.md` im Wurzelordner** mit dem Frontmatter unten (dem Kopf
   zwischen den `---`-Zeilen). Daraus liest der Agent, was er wann lädt.
3. **Leitplanken im Fundus-Format** (`leitplanken/FORMAT.md`) mit eigenem
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
   wie Leitplanken des Moduls (`leitplanken/FORMAT.md` → *Vorrang*).
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
ergebnisse: wiki                    # wiki | nur-bericht, ohne Angabe: wiki
---

# Kinderschutz in Einrichtungen

Zwei bis fünf Sätze: wofür das Modul da ist, für wen, und wo seine Grenze
liegt.
```

Unter dem Frontmatter steht, was das Modul kann und was nicht. `lokal:` sagt
in einem Satz, was in der `.lokal.md` stehen darf und wer entscheidet; fehlt
es, darf die Datei nur verschärfen. `ergebnisse:` sagt, ob der Agent
die Ergebnisse der Modulabläufe im Wiki ablegt (`wiki`) oder nur der Person
berichtet (`nur-bericht`). Wie er beide Felder anwendet, steht in
`leitplanken/FORMAT.md` → *Module*.

## Ein Modul bauen

Nimm ein Gebiet, in dem du dich auskennst und in dem ein Agent ohne
Anleitung Fehler machen würde. Fang mit den Leitplanken an: Was darf der
Agent in diesem Gebiet nie, und was bietet er stattdessen an? Dann die
Abläufe, die Menschen in dem Gebiet tatsächlich brauchen. Fachwissen erst
danach, und nur mit Fundstelle.
