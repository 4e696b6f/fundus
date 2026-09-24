# Ansicht

> Auch diese Anleitung ist mit Hilfe einer KI geschrieben, mehr dazu im
> KI-Hinweis der [README](../README.md).

`ansicht/uebersicht.html` zeigt dir dein Wiki im Browser auf einen Blick. Sie
ergänzt Obsidian und ersetzt es nicht: Lesen und Suchen geht hier, schreiben
tust du in Obsidian oder über deinen Agenten.

## Was du siehst

- **Übersicht:** den nächsten Schritt aus der letzten Übergabe, was fällig
  oder in den nächsten 14 Tagen fällig ist (Prüfdaten in Wiki-Seiten,
  Leitplanken und Modulen), was im Eingang liegt, offene Lücken und
  Widersprüche, deine Bereiche, eingehängte Module und die zuletzt geänderten
  Seiten.
- **Liste:** alle Wiki-Seiten mit Filtern nach Bereich, Typ, Status, Stimme
  und Sicherheit, dazu eine Suche über Titel, Aliasse und Text. Eigene Reiter
  zeigen Quellen, Leitplanken, Module und die übrigen Dateien.
- **Dokument:** eine Seite mit ihren Feldern, dem Text, den Links und den
  Seiten, die auf sie verweisen. Ein rot gepunkteter Link führt ins Leere.

PDFs und Bilder öffnen sich per Klick in einem neuen Tab.

## Öffnen

1. Im fundus-Ordner `ansicht/uebersicht.html` doppelklicken. Die Datei
   öffnet sich in deinem Browser.
2. „Ordner wählen“ drücken.
3. Den ganzen fundus-Ordner wählen, also den, in dem `AGENTS.md` liegt, nicht
   `wiki/` allein.

Der Browser sagt dabei vielleicht „Hochladen“ oder fragt, ob du die Dateien
hochladen willst. Hochgeladen wird nichts. Die Seite liest die Dateien nur in
diesem Fenster, sie verlassen deinen Rechner nicht. Internet braucht die
Ansicht nicht.

## Grenzen

- Die Ansicht liest nur. Sie ändert keine Datei.
- Sie zeigt den Stand beim Einlesen. Hat dein Agent danach etwas geändert,
  wählst du den Ordner neu.
- Den Ordner wählst du bei jedem Öffnen neu. Nur Chrome und Edge merken ihn
  sich: Dort steht beim nächsten Mal „Zuletzt: …“, und der Browser fragt
  einmal, ob die Seite den Ordner wieder lesen darf.
- „In Obsidian öffnen“ klappt nur, wenn dein Vault in Obsidian genauso heißt
  wie der Ordner. Obsidian benennt ihn beim Öffnen nach dem Ordner, das passt
  also meist. Hast du ihn umbenannt, meldet Obsidian, dass es den Vault nicht
  findet.
- Ordner mit einem Punkt vorn (`.obsidian/`, `.git/`) und `vorlagen/` liest
  die Ansicht nicht.
