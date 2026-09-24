# Ablauf: verknüpfen

Auslöser: Ein Auftrag zum Aufnehmen ist fertig, also die letzte seiner Quellen
aufgenommen. Dann verknüpfst du einmal, ohne Nachfrage. Oder die Person sagt
„verknüpfen“ oder fragt, was zusammenhängt.

Aufnehmen legt Wissen ab. Verknüpfen macht daraus ein Netz. Hier entsteht der
Wert, den eine Sammlung von Zusammenfassungen nicht hat.

## 1 · Umfang festlegen

Nach einem Auftrag zum Aufnehmen: die Seiten, die er neu angelegt oder
geändert hat. Auf Zuruf: die heute neuen oder geänderten Seiten, wenn die
Person nichts anderes nennt. Nie das ganze Wiki.

## 2 · Je Seite

- **Was verlinkt schon hierher?** Fehlen Gegenlinks, setzen.
- **Was liegt thematisch daneben, ohne verlinkt zu sein?** Suche mit den zwei
  oder drei tragenden Begriffen der Seite. Passende Seiten verlinken, mit
  Begründung.
- **Welches Projekt der Person ist betroffen?** Berührt die Seite ein
  laufendes `projekt`, sag es der Person sofort, in einem Satz.
- **Linsen:** fehlende `gegenposition:` nachtragen, `gleiche_form:` prüfen.
  Kommt ein Muster zum dritten Mal vor, legst du seine Seite in
  `wiki/muster/` an (`regeln/LINSEN.md`).

## 3 · Muster über Bereiche hinweg

Das ist der wichtigste Schritt. Gibt es unter den heutigen Seiten und dem
Bestand zwei aus verschiedenen Themenbereichen, die dieselbe Struktur haben,
nicht nur dasselbe Stichwort? Beispiel: Eine Seite über Muskelaufbau und eine
über Sprachenlernen beschreiben beide eine Verzögerung zwischen Aufwand und
sichtbarem Ergebnis, die Menschen zum Aufgeben bringt.

Findest du so ein Paar, schlägst du eine `bruecke`-Seite vor. Anlegen nur
nach Zustimmung der Person, denn eine Brücke ist eine These.

Gibt es erst einen Bereich, entfällt dieser Schritt. Eine Idee, die später zur
Brücke werden könnte, notierst du in der Übergabe unter *Offen*.

## 4 · Widersprüche

Sagt eine neue Seite etwas anderes als eine alte? Eine Zeile in
`wiki/meta/widersprueche.md`:

```markdown
- [[seite-a]] ↔ [[seite-b]]: worin sie sich widersprechen · beide Aussagen auf [[seite-c]] · seit [Datum] · offen
```

Widerspricht eine Seite einer Moduldatei, steht deren Pfad an zweiter Stelle
(Format in `wiki/meta/widersprueche.md`).

## 5 · Bericht

Kurz: gesetzte Links, vorgeschlagene Brücken, neue Widersprüche, betroffene
Projekte. Eintrag in `wiki/log.md`.
