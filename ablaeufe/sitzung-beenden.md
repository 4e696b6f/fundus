# Ablauf: Sitzung beenden

Auslöser: Die Person beendet die Arbeit („Feierabend“, „das war’s“).

## 1 · Übergabe schreiben

`gedaechtnis/UEBERGABE.md` **ganz neu schreiben**, nicht anhängen, höchstens
eine Seite; Erledigtes steht im Log.

Vorher liest du, was sonst verloren geht:

- die bisherige Übergabe, auch wenn `ablaeufe/pruefen.md` § 6 sie in dieser
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
```

*Nicht vergessen* steht immer da, seine ersten drei Zeilen auch mit 0 oder
„nichts fällig“.

- **n:** die bisherige Zahl plus die seitdem aufgenommenen Quellen, nach
  einer Prüfung nur die danach; fehlt sie, zählst du im Log die Einträge
  `aufnehmen` nach dem letzten `pruefen`.
- **Fällig:** jede Seite in `wiki/`, jede Leitplanke, auch der Module, und
  jede `MODUL.md`, deren `pruefen_bis:` oder `verfaellt:` vor heute liegt;
  Treffer in Codeblöcken zählen nicht. **Bald fällig:** dasselbe in den
  nächsten zwei Wochen.
- **Frist:** eine Zeile je Termin für das Wiki oder die Person, auch jede
  datierte Nebenangabe (`ablaeufe/aufnehmen.md` § 3). Eine vorbeigegangene
  nennst du der Person einmal, dann entfällt sie.
- **Von dir vorgemerkt:** je Aufgabe, die die Person in einem `[!ich]`-Block
  notiert hat (etwa `` `#später` ``), eine Zeile mit Link auf die Seite. Die
  Aufgabe steht wörtlich, ein Wort mit `#` am Anfang in Backticks. Sie
  bleibt, bis die Person sie erledigt oder streicht.
- **Entschieden** (unter *Offen*): je Log-Eintrag `entscheidung`
  (`ablaeufe/aufnehmen.md` § 7) eine Zeile; sie bleibt, solange die
  Entscheidung gilt, etwa die Datei im Eingang liegt.
- Ist eine Zeile *Von dir vorgemerkt* oder `Entschieden:` älter als vier
  Wochen, fragst du einmal, ob sie noch gilt.
- Lücken bleiben in `wiki/meta/luecken.md`, nicht in der Übergabe, außer als
  offene Rückfrage.
- Zeilen ohne Frist, Aufgabe oder Entscheidung entfallen.

## 2 · Protokoll

Ein Eintrag in `wiki/log.md` vom Typ `sitzung`: was entstanden ist, in drei
bis fünf Zeilen.

## 3 · Lernschleife

Jede Korrektur der Person und jeder eigene Fehlgriff kommt sofort als Zeile
in `gedaechtnis/REIBUNG.md`; was fehlt, trägst du jetzt nach. Kommt derselbe
Schlüssel zum zweiten Mal vor, schlägst du vor, die Lehre als Regel dort
einzutragen, wo sie künftig gelesen wird: `AGENTS.md`, ein Ablauf oder eine
Leitplanke. Die Person entscheidet.

Einen Fehler einer früheren Sitzung trägst du nur mit Beleg (Datei, Zeile)
ein. Erlaubten die Regeln das damalige Vorgehen, war es keiner, auch nicht in
dem, was du der Person sagst.

## 4 · Letzte Zeile an die Person

Ein Satz: was die nächste Sitzung als Erstes tun wird.
