# Module

> Auch dieser Text ist mit Hilfe einer KI geschrieben, mehr dazu im
> KI-Hinweis der [README](../README.md).

Ein Modul ist ein fertiges Wissenspaket zu einem Fachgebiet: Regeln, Abläufe,
Vorlagen und Fachwissen, gepflegt von Leuten, die sich in dem Gebiet
auskennen. Du hängst es in dein Wiki ein, und dein Agent arbeitet mit diesem
Fachwissen, ohne dass du es selbst aufbauen musst. Zum Anfangen brauchst du
kein Modul.

## Verzeichnis

Noch ist kein Modul veröffentlicht. Als erstes entsteht `kinderschutz`: Es
hilft, Schutzkonzepte und Risikoanalysen in Kita, Schule und Ehrenamt zu
prüfen, und bringt Leitplanken für Agenten im Kinderschutz mit, zunächst für
Hessen. Weitere Module stehen hier, sobald sie veröffentlicht sind.

## Einhängen

Jedes Modul ist ein eigener Ordner in `module/`. Der Ordner muss so heißen
wie das Modul, also so, wie es in seiner `MODUL.md` hinter `modul:` steht.
Beim Kinderschutz-Modul wäre das `module/kinderschutz/`.

So geht es ohne `git`: das Modul als ZIP laden und entpacken, den Ordner
umbenennen und nach `module/` verschieben. Der entpackte Ordner heißt nach dem
Repository, oft mit `-main` am Ende (etwa `kinderschutz-skills-main`). Benenne
ihn nach dem Wert hinter `modul:` in der `MODUL.md` um, nicht nach dem Namen
des Repositorys. Für ein Update lädst du das ZIP neu und ersetzt den Ordner.

Mit `git`, im Terminal in deinem Wiki-Ordner:

```
cd module
git clone <adresse-des-moduls> <modulname>
```

Aktualisieren mit `git pull` im Modulordner.

Zu Beginn jeder Sitzung merkt sich der Agent die Titel der Module. Er liest
ein Modul, sobald eine Frage, eine neue Quelle oder eine Seite, die er
schreibt, dessen Fachgebiet berührt. Er ändert keine Datei darin. Das legt die
Leitplanke `L01` fest, eine der Regeln in `leitplanken/`, die immer gelten.
Was du selbst zu einem Modul denkst oder ergänzen willst, sagst du dem
Agenten. Er legt in `wiki/` eine Seite an, übernimmt deinen Wortlaut in einen
`[!ich]`-Block und verlinkt die Seite auf die Moduldatei. So geht bei einem
Update nichts verloren. Einen Fehler im Modul meldest du am besten dort, wo
`kontakt:` in seiner `MODUL.md` hinzeigt. Der Agent nennt dir den Weg.

**Einstellungen für deine Einrichtung oder dich.** Manche Module lassen zu,
dass du ihre Regeln anpasst, etwa eine Abweichung, die Träger oder Leitung
beschlossen haben. Das steht in `module/<modulname>.lokal.md`, also neben dem
Modulordner, nicht darin. So bleibt es bei jedem Update erhalten. Die Datei
gehört dir: Der Agent liest sie mit dem Modul und ändert sie nur, wenn du ihn
darum bittest. Was darin stehen darf und wer es entscheiden muss, sagt das
Modul in seiner `MODUL.md` (Feld `lokal:`).

Findet die Prüfung ein abgelaufenes Prüfdatum im Modul, schlägt der Agent ein
Update vor. Das ist der Handgriff oben. Bis dahin gelten die alten Regeln
weiter.

---

*Ab hier für Leute, die ein Modul bauen.*

## Der Modulvertrag

Ein Modul hält sich an die folgenden Regeln. Sie sorgen dafür, dass Module
nebeneinander funktionieren und dass jemand ohne Fundus sie trotzdem nutzen
kann.

1. **Läuft auch allein.** Ein Modul hat eine eigene Einstiegsdatei für
   Menschen, die kein Fundus-Wiki haben. Fundus ist ein Zuhause für das
   Modul, das Modul setzt es aber nicht voraus.
2. **`MODUL.md` im Wurzelordner** mit dem Frontmatter unten, also dem
   Kopfbereich zwischen den beiden `---`-Zeilen. Daraus liest der Agent, was
   er wann laden soll.
3. **Leitplanken im Fundus-Format** (`leitplanken/FORMAT.md`) mit eigenem
   Präfix, etwa `KS-L01`. So kollidieren keine Nummern, und die Prüfung
   findet abgelaufene Regeln in allen Modulen.
4. **Verfall sichtbar.** Alles, was an einem Datum veraltet (Rechtsstände,
   Zuständigkeiten, Telefonnummern), trägt `pruefen_bis:` im Frontmatter.
   Das `pruefen_bis:` in `MODUL.md` ist das früheste Prüfdatum im Modul. Ein
   Datum, das nur im Fließtext steht, findet die Prüfung nicht.
5. **Version und Änderungsprotokoll.** `CHANGELOG.md` sagt je Version, ob
   Nutzende sofort, vor der nächsten Nutzung oder gar nicht neu laden müssen.
6. **Lizenz geklärt.** Die Lizenz des Moduls steht in `MODUL.md` und in
   `LICENSE`. Fremdtexte sind gekennzeichnet oder nicht enthalten. Ein Modul
   darf eine andere Lizenz haben als Fundus, etwa
   [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.de)
   wie im Beispiel unten.
7. **Einstieg für den Agenten.** Die Datei hinter `einstieg:` sagt dem
   Agenten, was er tut. Richtet sie sich auch an Menschen, markiert sie den
   Teil, der als Anweisung gilt. Regeln darin zählen wie Leitplanken des
   Moduls (`leitplanken/FORMAT.md` → *Vorrang*).
8. **Einstellungen vor Ort geregelt.** Darf eine Einrichtung oder eine Person
   Regeln des Moduls anpassen, sagt `lokal:`, was in
   `module/<modulname>.lokal.md` stehen darf und wer es entscheiden muss.
   Kennt das Modul ohne Fundus einen anderen Ort dafür, etwa ein Feld in einer
   Projektanweisung, nennt es die Datei als dessen Gegenstück.
9. **Nur Modulinhalt ausliefern.** Arbeitsstände, Pflegedateien und ein
   eigenes `.obsidian/` gehören nicht in die Auslieferung (bei `git` etwa per
   `export-ignore` in `.gitattributes`). Was trotzdem mitkommt und der Agent
   nicht lesen soll, nennt `MODUL.md` unter der Überschrift *Nicht laden*.

## `MODUL.md`

```yaml
---
modul: kinderschutz                 # kurzer Name, zugleich Ordnername unter module/
titel: 'Kinderschutz in Einrichtungen'
version: 0.3.0
fundus: '0.1'                       # mit welcher Fundus-Version erprobt
sprache: de
lizenz: CC-BY-SA-4.0
einstieg: START.md                  # was der Agent zuerst liest
leitplanken:
  ordner: leitplanken/
  praefix: KS
laden_minimal:                      # was ein schwächeres Modell, etwa ein lokales, mindestens laden muss
  - START.md
  - leitplanken/
achsen:                             # Felder, nach denen Inhalte gefiltert werden können
  einrichtung: [kita, schule, ehrenamt]
  land: [bund, he]
stand: 2026-09-22
pruefen_bis: 2027-03-22             # frühestes Prüfdatum im Modul
kontakt: 'Issues im Repository des Moduls'   # wohin Fehler gemeldet werden
lokal: 'Abweichungen von KS-L03 und KS-L09 mit Begründung, entscheiden Träger oder Leitung'
ergebnisse: wiki                    # wiki | nur-bericht, ohne Angabe: wiki
---

# Kinderschutz in Einrichtungen

Zwei bis fünf Sätze: wofür das Modul da ist, für wen, und wo seine Grenze
liegt.
```

Unter dem Frontmatter steht, was das Modul kann und was nicht. Alles Weitere
gehört in die Dateien des Moduls selbst.

Zwei Felder regeln, wie das Modul mit dem Wiki der Person zusammenarbeitet:

- **`lokal:`** sagt in einem Satz, was in `module/<modulname>.lokal.md`
  stehen darf und wer es entscheidet. Der Agent wendet dort nur an, was das
  Modul zulässt. Bittet die Person ihn, etwas einzutragen, sagt er ihr, wer
  nach dem Modul entscheiden muss. Ob diese Stelle entschieden hat, prüft
  Fundus nicht. Fehlt das Feld, wirken in der Datei nur Verschärfungen.
- **`ergebnisse:`** sagt, wohin die Ergebnisse der Abläufe des Moduls gehören
  (Berichte, Zwischenstände). Bei `wiki` legt der Agent sie als `meta`-Seite
  mit `verfaellt:` in `wiki/meta/` ab, nennt angefangene Arbeit in
  der Übergabe und bietet die Seite an, wo der Ablauf sagt, die Person solle
  etwas aus dem Chat kopieren. Bei `nur-bericht` gibt er sie nur der Person
  und schreibt nichts davon ins Wiki. In beiden Fällen gelten die Leitplanken
  des Moduls für das, was er schreibt, und nichts davon landet in `module/`.

## Ein Modul bauen

Nimm ein Gebiet, in dem du dich auskennst und in dem ein Agent ohne
Anleitung Fehler machen würde. Fang mit den Leitplanken an: Was darf der
Agent in diesem Gebiet nie, und was bietet er stattdessen an? Dann die
Abläufe, die Menschen in dem Gebiet tatsächlich brauchen. Fachwissen erst
danach, und nur mit Fundstelle.
