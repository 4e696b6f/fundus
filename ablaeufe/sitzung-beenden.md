# Ablauf: Sitzung beenden

Auslöser: Die Person beendet die Arbeit („Feierabend“, „das war’s für heute“).

Ein Sprachmodell vergisst zwischen zwei Sitzungen alles. Was die nächste
Sitzung wissen muss, steht deshalb in einer Datei. Diese Datei ist kurz, und
sie wird überschrieben, nicht verlängert.

## 1 · Übergabe schreiben

`gedaechtnis/UEBERGABE.md` **ganz neu schreiben**, nicht anhängen, höchstens
eine Seite. Was erledigt ist, steht im Log, nicht hier.

```markdown
# Übergabe · [Datum]

## Nächster Schritt
Ein Satz: womit die nächste Sitzung anfängt.

## Offen
- Entscheidungen, die bei der Person liegen
- angefangene Arbeit, mit Datei (bei einem Modul mit `ergebnisse: nur-bericht`
  nur Ablauf und Schritt, ohne Inhalt)

## Nicht vergessen
- Quellen seit letzter Prüfung: n
- Fällig: [[seite]] · pruefen_bis JJJJ-MM-TT (oder: nichts fällig)
- Bald fällig: [[seite]] · pruefen_bis JJJJ-MM-TT (oder: nichts bald fällig)
- Termine oder Fristen, die das Wiki betreffen, und Fristen aus Quellen, die
  die Person selbst betreffen (etwa ein Anmeldeschluss)
```

Die ersten drei Zeilen unter *Nicht vergessen* stehen immer da, auch mit 0
oder „nichts fällig“. Der nächste Sitzungsbeginn liest sie und schlägt ab zehn
Quellen oder bei einem Prüfdatum in der Vergangenheit die Prüfung vor
(`AGENTS.md`). Ein Datum unter *Bald fällig* löst die Prüfung erst aus, wenn
es inzwischen vorbei ist.

- **n:** die Zahl aus der bisherigen Übergabe plus die heute aufgenommenen
  Quellen. Hast du heute geprüft, zählen nur die Quellen danach. Fehlt die
  Zahl, zählst du im Log die Einträge `aufnehmen` nach dem letzten `pruefen`.
- **Fällig:** jede Seite, jede Leitplanke und jede `MODUL.md`, deren
  `pruefen_bis:` oder `verfaellt:` in der Vergangenheit liegt.
- **Bald fällig:** dasselbe mit einem Datum in den nächsten zwei Wochen.
- Beide findest du über die Suche nach `pruefen_bis:` und `verfaellt:` in
  `wiki/`, `leitplanken/`, den Leitplanken der Module und deren `MODUL.md`.
  Treffer in Codeblöcken sind Beispiele und zählen nicht (etwa in
  `leitplanken/FORMAT.md`).

## 2 · Protokoll

Ein Eintrag in `wiki/log.md` vom Typ `sitzung`: was heute entstanden ist, in
drei bis fünf Zeilen.

## 3 · Lernschleife

Hat die Person dich heute korrigiert, oder hast du selbst einen Fehlgriff
bemerkt? Dann steht es schon in `gedaechtnis/REIBUNG.md`, sonst trägst du es
jetzt nach. Prüfe dort, ob ein Schlüssel jetzt zum zweiten Mal
vorkommt. Wenn ja, schlägst du vor, die Lehre als Regel dort einzutragen, wo
sie hingehört: in `AGENTS.md`, einen Ablauf oder eine Leitplanke. Die Person
entscheidet.

## 4 · Letzte Zeile an die Person

Ein Satz: was die nächste Sitzung als Erstes tun wird.
