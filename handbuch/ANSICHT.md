# Ansicht

> Auch diese Anleitung ist mit Hilfe einer KI geschrieben, mehr dazu im
> KI-Hinweis der [README](../README.md).

`ansicht/uebersicht.html` zeigt dir dein Wiki im Browser auf einen Blick.
Lesen und Suchen geht hier, schreiben tust du in Obsidian oder über deinen
Agenten.

## Was du siehst

- **Übersicht:** den nächsten Schritt aus der letzten Übergabe, was fällig
  oder in den nächsten 14 Tagen fällig ist (Prüfdaten in Wiki-Seiten,
  Leitplanken und Modulen), was im Eingang liegt, offene Lücken und
  Widersprüche, deine Bereiche, eingehängte Module und die zuletzt geänderten
  Seiten.
- **Liste:** alle Wiki-Seiten mit Filtern nach Bereich, Typ, Status, Stimme
  und Sicherheit und mit einer Suche. Eigene Reiter zeigen Quellen,
  Leitplanken, Module und die übrigen Dateien.
- **Dokument:** eine Seite mit Feldern, Text, Links und den Seiten, die auf
  sie verweisen. Ein rot gepunkteter Link führt ins Leere.

PDFs und Bilder öffnen sich per Klick in einem neuen Tab.

## Öffnen

1. Im fundus-Ordner `ansicht/uebersicht.html` doppelklicken. Die Datei
   öffnet sich in deinem Browser.
2. „Ordner wählen“ drücken.
3. Den ganzen fundus-Ordner wählen, also den, in dem `AGENTS.md` liegt, nicht
   `wiki/` allein.

Spricht der Browser dabei von „Hochladen“: Die Dateien verlassen deinen
Rechner nicht. Internet braucht die Ansicht nicht.

## Grenzen

Die Ansicht liest nur und zeigt den Stand beim Einlesen. Hat dein Agent
danach etwas geändert, wählst du den Ordner neu. Das tust du auch bei jedem
Öffnen. Nur Chrome und Edge merken ihn sich und fragen einmal, ob die Seite ihn
wieder lesen darf. „In Obsidian öffnen“ klappt nur, solange dein Vault in
Obsidian so heißt wie der Ordner. Das ist so, bis du ihn dort umbenennst. Ordner mit einem
Punkt vorn (`.obsidian/`, `.git/`) und `vorlagen/` liest die Ansicht nicht.
Zeigt sie etwas Falsches, schreib es in die
[Issues](https://github.com/4e696b6f/fundus/issues).
