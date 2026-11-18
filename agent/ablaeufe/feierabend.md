# Ablauf: Feierabend

**Wofür:** Stand für das nächste Mal festhalten.

Auslöser: Die Person beendet die Arbeit („Feierabend“, „das war’s“,
`/feierabend`). Den Zwischenstand nach jedem Auftrag regelt § 5.

## 1 · Übergabe schreiben

`eigen/gedaechtnis/UEBERGABE.md` **ganz neu schreiben**, nicht anhängen, höchstens
eine Seite; Erledigtes steht im Log.

Vorher liest du, was sonst verloren geht:

- die bisherige Übergabe, auch wenn `agent/ablaeufe/pruefen.md` § 6 sie in dieser
  Sitzung neu geschrieben hat: Zeilen unter *Offen* und *Nicht vergessen*, die
  weiter gelten, übernimmst du (Regeln unten);
- in `wiki/log.md` alles nach dem letzten Eintrag `sitzung`: jeden Eintrag
  `entscheidung` und jede Zeile `Offen:` (Frist, vorgemerkte Aufgabe,
  unbeantwortete Brückenidee);
- die offenen Einträge in `wiki/meta/widersprueche.md` und deine
  Rückfragen ohne Antwort (auch aus dem Aufnehmen und Verknüpfen), auch wenn
  eine zugleich Lücke ist:
  je eine Zeile unter *Offen*, ein Widerspruch mit Link auf die Seite hinter
  „beide Aussagen auf“.

```markdown
# Übergabe · [Datum]

## Nächster Schritt
Ein Satz: womit die nächste Sitzung anfängt.

## Offen
- Entscheidungen, die bei der Person liegen (Rückfrage, auch eine, auf die
  eine Quelle im Eingang wartet; Brückenidee)
- Widerspruch: worin · [[seite]] · seit JJJJ-MM-TT
- Entschieden: was, zu welcher Datei · seit JJJJ-MM-TT · nicht erneut fragen
- angefangene Arbeit, mit Datei (bei einem Modul mit `ergebnisse: nur-bericht`
  nur Ablauf und Schritt, ohne Inhalt)

## Nicht vergessen
- Quellen seit letzter Prüfung: n
- Fällig: [[seite]] · pruefen_bis JJJJ-MM-TT (oder: nichts fällig)
- Bald fällig: [[seite]] · pruefen_bis JJJJ-MM-TT (oder: nichts bald fällig)
- Frist JJJJ-MM-TT: was · [[seite]]
- Von dir vorgemerkt: Aufgabe · [[seite]]
- Bestand: x von y erschlossen · … (die Zählerzeile aus `wiki/meta/bestand.md`, falls es sie gibt)
```

*Nicht vergessen* steht immer da, seine ersten drei Zeilen auch mit 0 oder
„nichts fällig“.

- **n:** die Zahl der Einträge `aufnehmen` in `wiki/log.md` nach dem
  letzten Eintrag `pruefen` (ohne einen, seit Beginn). Du zählst immer im
  Log nach, nie auf die alte Zahl auf.
- **Fällig:** jede Seite in `wiki/`, jede Leitplanke, auch die eigenen in
  `eigen/leitplanken/` und die der Module, und
  jede `MODUL.md`, deren `pruefen_bis:` oder `verfaellt:` vor heute liegt;
  Treffer in Codeblöcken zählen nicht. **Bald fällig:** dasselbe in den
  nächsten zwei Wochen.
- **Frist:** eine Zeile je Termin für das Wiki oder die Person, auch jede
  datierte Nebenangabe (`agent/ablaeufe/aufnehmen.md` § 3). Eine vorbeigegangene
  nennst du der Person einmal, dann entfällt sie.
- **Von dir vorgemerkt:** nur je Aufgabe, die die Person in einem `[!ich]`-Block
  notiert hat (etwa `` `#später` ``), eine Zeile mit Link auf die Seite. Die
  Aufgabe steht wörtlich, ein Wort mit `#` am Anfang in Backticks. Sie
  bleibt, bis die Person sie erledigt oder streicht.
- **Entschieden** (unter *Offen*): je Log-Eintrag `entscheidung`
  (`agent/ablaeufe/aufnehmen.md` § 7) eine Zeile; sie bleibt, solange die
  Entscheidung gilt, etwa die Datei im Eingang liegt.
- Ist eine Zeile *Von dir vorgemerkt* oder `Entschieden:` älter als vier
  Wochen, fragst du einmal, ob sie noch gilt.
- Lücken bleiben in `wiki/meta/luecken.md`, nicht in der Übergabe, außer als
  offene Rückfrage.
- Zeilen ohne Frist, Aufgabe, Entscheidung oder Bestandszähler entfallen.

## 2 · Protokoll

Ein Eintrag in `wiki/log.md` vom Typ `sitzung`: was entstanden ist, in drei
bis fünf Zeilen.

## 3 · Lernschleife

Jede Korrektur der Person und jeder eigene Fehlgriff kommt sofort als Zeile
in `eigen/gedaechtnis/KORREKTUREN.md`; was fehlt, trägst du jetzt nach. Kommt derselbe
Schlüssel zum zweiten Mal vor, schlägst du vor, die Lehre als Regel in
`eigen/EIGEN.md` → *Aus Korrekturen gelernt* einzutragen (oder als eigene
Leitplanke in `eigen/leitplanken/`), nie in `AGENTS.md` oder `agent/`: Die
ersetzt jedes Update. Die Person entscheidet; trägst du ein, steht die Regel
in `KORREKTUREN.md` unter *Zur Regel geworden*. Betrifft die Lehre Fundus
selbst, schlägst du zusätzlich vor, sie als Issue zu melden.

Einen Fehler einer früheren Sitzung trägst du nur mit Beleg (Datei, Zeile)
ein. Erlaubten die Regeln das damalige Vorgehen, war es keiner, auch nicht in
dem, was du der Person sagst.

## 4 · Letzte Zeile an die Person

Ein Satz: was die nächste Sitzung als Erstes tun wird. Gibt es einen Ordner
`.git` und Änderungen ohne Commit, fragst du in einem zweiten Satz, ob du
den Stand sichern sollst: ein lokaler Commit des ganzen Ordners, kein
Hochladen.

## 5 · Zwischenstand nach jedem Auftrag

Ist ein Auftrag abgeschlossen, der eine Datei geändert hat (etwa aufnehmen
samt Zusammenhängen, eine Runde übernehmen, prüfen, schreiben, einrichten,
eine Frage mit neuer Seite oder Lücke), ziehst du die Übergabe nach,
ohne sie neu zu schreiben, damit eine Sitzung ohne „Feierabend“ nichts
verliert:

- *Nächster Schritt* neu, ein Satz;
- unter *Offen* neue Rückfragen, Widersprüche und `Entschieden:`-Zeilen
  ergänzen, erledigte streichen;
- *Quellen seit letzter Prüfung* nach § 1 → **n**;
- neue Fristen und vorgemerkte Aufgaben aus dem Log-Eintrag des Auftrags.

Die Überschrift trägt das Datum des Zwischenstands. Kein Log-Eintrag dafür.
