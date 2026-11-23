# Ablauf: Feierabend

**Wofür:** Stand für das nächste Mal festhalten.

Den Zwischenstand nach jedem Auftrag regelt § 5.

## 0 · Vorher

Bevor du die Übergabe schreibst, in dieser Reihenfolge:

1. Systemdatum abfragen (`AGENTS.md` → *Sitzungsbeginn*).
2. Lernschleife (§ 3).
3. Prüfwerkzeug (`agent/ablaeufe/pruefen.md` § 0); seine Schlusszeile
   `Zahlen:` brauchst du in § 1.

## 1 · Übergabe schreiben

`eigen/gedaechtnis/UEBERGABE.md` **ganz neu schreiben**, nicht anhängen, höchstens
eine Seite; Erledigtes steht im Log. Das Format ist fest, das Prüfwerkzeug
prüft es.

Vorher liest du, was sonst verloren geht:

- die bisherige Übergabe: was unter *Offen* und *Nicht vergessen* weiter
  gilt, übernimmst du;
- in `wiki/log.md` alles nach dem letzten Eintrag `sitzung`: jeden Eintrag
  `entscheidung` und jede Zeile `Offen:`;
- die offenen Einträge in `wiki/meta/widersprueche.md` (je eine Zeile, mit
  Link auf die Seite hinter „beide Aussagen auf“) und deine Rückfragen ohne
  Antwort, auch wenn eine zugleich Lücke ist.

```markdown
# Übergabe · JJJJ-MM-TT

## Nächster Schritt
Ein Satz: womit die nächste Sitzung anfängt.

## Offen
- Rückfrage: Frage · zu <datei oder [[seite]]> · seit JJJJ-MM-TT
- Entschieden: „wörtlicher Satz der Person“ · zu <datei oder [[seite]]> · am JJJJ-MM-TT · nicht erneut fragen
- Widerspruch: worin · [[seite]] · seit JJJJ-MM-TT
- angefangene Arbeit, mit Datei (bei einem Modul mit `ergebnisse: nur-bericht`
  nur Ablauf und Schritt, ohne Inhalt)

## Nicht vergessen
- Quellen seit letzter Prüfung: n
- Fällig: [[seite]] · pruefen_bis JJJJ-MM-TT (oder: nichts fällig)
- Bald fällig: [[seite]] · pruefen_bis JJJJ-MM-TT (oder: nichts bald fällig)
- Nächstes Prüfdatum: JJJJ-MM-TT · [[seite]] (oder: keins)
- Frist JJJJ-MM-TT: was · [[seite]]
- Von dir vorgemerkt: Aufgabe · [[seite]]
- Bestand: n Dateien (gibt es `wiki/meta/bestand.md`: deren Zählerzeile)
```

Die Überschrift trägt das Datum von heute. *Nächster Schritt* nennt nichts,
was nicht im Wiki steht (`L02`). Ist nichts offen, steht unter *Offen*
„- nichts“. Die ersten vier Zeilen unter *Nicht vergessen* stehen immer da,
die übrigen nur, wenn es etwas gibt.

**Zahlen:** Die ersten vier Zeilen und die Zahl der Bestandsdateien nimmst
du aus dem Prüfwerkzeug (`Zahlen:` und die Zeilen darüber). Läuft es nicht:

- **n:** Einträge `aufnehmen` in `wiki/log.md` nach dem letzten `pruefen`
  (ohne einen: alle), nachgezählt.
- **Fällig**, **Bald fällig:** nach `agent/ablaeufe/pruefen.md` § 2, also
  auch Leitplanken (eigene, Module) und jede `MODUL.md`; für sie steht statt
  `[[seite]]` Kürzel oder Pfad.
- **Nächstes Prüfdatum:** im selben Umfang das früheste, das nicht vorbei
  ist.

**Zeilen:**

- **Rückfrage:** jede Frage von dir ohne Antwort, auch dein Befund zu einer
  Datei („lässt sich nicht lesen, bitte als PDF“).
- **Entschieden:** nur mit dem wörtlichen Satz der Person in
  Anführungszeichen und dem Datum; ohne ihren Satz ist es eine `Rückfrage:`.
  Je Log-Eintrag `entscheidung` (`agent/ablaeufe/aufnehmen.md` § 7) eine
  Zeile. Sie ersetzt die `Rückfrage:` zur selben Sache und bleibt, solange
  die Entscheidung gilt, etwa die Datei im Eingang liegt.
- **Eingang:** Nach einem Auftrag `aufnehmen` hat jede Datei, die noch in
  `quellen/eingang/` liegt, genau eine Zeile `Rückfrage:` oder
  `Entschieden:`; eine frisch abgelegte hat keine.
- **Frist:** je Termin mit genauem Tag („März 2027“ ist keine), auch jede datierte
  Nebenangabe (`agent/ablaeufe/aufnehmen.md` § 3). Einen Termin, den du
  errechnest („Einladung spätestens am …“), trägst du sofort ein, den
  Rechenweg auf der `projekt`-Seite des Vorhabens. Eine vorbeigegangene
  Frist nennst du der Person einmal, dann entfällt sie.
- **Von dir vorgemerkt:** je Aufgabe, die die Person in einem `[!ich]`-Block
  notiert hat, wörtlich wie dort (etwa `\#später`), mit Link auf die Seite.
  Sie bleibt, bis die Person sie erledigt oder streicht.
- Ist eine Zeile `Rückfrage:`, `Entschieden:` oder *Von dir vorgemerkt*
  älter als vier Wochen, fragst du einmal, ob sie noch gilt.
- Lücken bleiben in `wiki/meta/luecken.md`, außer als offene Rückfrage.

## 2 · Protokoll

Ein Eintrag in `wiki/log.md` vom Typ `sitzung`: was entstanden ist, in drei
bis fünf Zeilen.

## 3 · Lernschleife

Du gehst das Gespräch dieser Sitzung durch: Wo hat die Person dich
korrigiert („nein“, „falsch“, „dein Fehler“, „nicht so“)? Wo hast du selbst
einen Fehlgriff bemerkt, auch durch das Prüfwerkzeug? Je Fund steht eine
Zeile in `eigen/gedaechtnis/KORREKTUREN.md`; was fehlt, trägst du jetzt
nach. Die Zahl der Zeilen aus dieser Sitzung nennst du in § 4, auch die 0.

Kommt derselbe Schlüssel zum zweiten Mal vor, schlägst du vor, die Lehre als
Regel in `eigen/EIGEN.md` → *Aus Korrekturen gelernt* einzutragen (oder als
eigene Leitplanke in `eigen/leitplanken/`), nie in `AGENTS.md` oder `agent/`:
Die ersetzt jedes Update. Die Person entscheidet; trägst du ein, steht die
Regel in `KORREKTUREN.md` unter *Zur Regel geworden*. Betrifft die Lehre
Fundus selbst, schlägst du vor, sie als Issue zu melden.

Einen Fehler einer früheren Sitzung trägst du nur mit Beleg (Datei, Zeile)
ein. Erlaubten die Regeln das damalige Vorgehen, war es keiner, auch nicht in
dem, was du der Person sagst.

## 4 · Letzte Zeile an die Person

Ein Satz: was die nächste Sitzung als Erstes tun wird, dazu die Zahl der
Korrekturen (§ 3) und, was das Prüfwerkzeug unter *Muss behoben werden* noch
meldet.

**Sichern:** Nennt `git rev-parse --show-toplevel` den Wiki-Ordner (eigenes
Repository) und gibt es Änderungen ohne Commit, fragst du in einem zweiten
Satz, ob du den Stand sichern sollst: ein lokaler Commit des ganzen Ordners,
kein Hochladen. Nennt der Befehl einen Ordner darüber (fremdes Repository):
kein Commit, nur der Hinweis. „Gesichert“ sagst du nur nach einem Commit.

## 5 · Zwischenstand nach jedem Auftrag

Nach jedem Auftrag, der eine Datei geändert hat (auch eine Frage mit neuer
Seite oder Lücke), ziehst du die Übergabe nach, ohne sie neu zu schreiben:

- zuerst das Prüfwerkzeug (`agent/ablaeufe/pruefen.md` § 0), danach seine
  Befunde zu diesem Auftrag beheben;
- Überschrift mit dem Datum von heute, *Nächster Schritt* neu, ein Satz;
- unter *Offen* neue Zeilen `Rückfrage:`, `Widerspruch:` und `Entschieden:`
  ergänzen, erledigte streichen; nach `aufnehmen` gilt § 1 → **Eingang**;
- die ersten vier Zeilen unter *Nicht vergessen* nach § 1 → **Zahlen**;
- neue Fristen und vorgemerkte Aufgaben aus dem Log-Eintrag des Auftrags.

Kein Log-Eintrag dafür. Eine Entscheidung der Person und eine errechnete
Frist warten nicht darauf: Die Zeile schreibst du sofort.
