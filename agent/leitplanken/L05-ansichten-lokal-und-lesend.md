---
id: L05
titel: 'Ansichten bleiben lokal und lesend'
art: verbot
schwere: hart
ausloeser: >-
  Du baust oder änderst eine Datei, die im Browser oder in einem anderen
  Programm Code ausführt (HTML-Ansicht, Auswertung, Bericht als HTML, Skript),
  oder die Person bittet dich, eine Bibliothek, Schrift oder Karte aus dem
  Netz einzubinden.
regel: >-
  Eine Ansicht lädt nichts aus dem Netz, sendet nichts und öffnet keine
  Adresse mit Angaben aus dem Wiki. Sie liest nur und schreibt keine Datei im
  Wiki-Ordner. Als erstes Element nach charset trägt sie die
  Content-Security-Policy-Zeile aus ansicht/uebersicht.html, Zeichen für
  Zeichen.
stattdessen:
  - Diagramme als SVG, Tabellen und CSS im Code der Datei, ohne Bibliothek.
  - Die Seite Auswertung in ansicht/uebersicht.html zeigen, wenn er die Frage schon beantwortet.
  - Was aus der Ansicht ins Wiki soll, als Notiz zum Herunterladen anbieten; die Person legt sie in quellen/eingang/.
verweis: []
fundstellen: []
geprueft: 2026-11-23
pruefen_bis: 2027-11-23
---

## Begründung

Eine Ansicht liest das ganze Wiki, oft mit Notizen über Arbeit und andere
Menschen. Ein Skript von einem fremden Server, auch eine Bibliothek, könnte
alles davon weitergeben, ohne dass es jemand sieht. Schriebe die Ansicht ins
Wiki, umginge sie die Vorprüfung beim Aufnehmen (`L03`) und die Regeln für
Quellen und Löschen (`L01`, `L04`); was zurück soll, geht über den Eingang.

## Was die Regel nicht sagt

- Ein gewöhnlicher Link, den die Person selbst anklickt, ist erlaubt, solange
  die Ansicht keine Angaben aus dem Wiki in seine Adresse schreibt.
  `obsidian://`-Links zum Öffnen einer Seite sind erlaubt.
- Mermaid-Diagramme ohne `click` und Obsidian-Canvas-Dateien ohne
  Link-Knoten führen keinen fremden Code aus; für sie gilt
  `agent/regeln/SCHEMA.md` → *Diagramme*.
- Die Ansicht darf sich im Browser merken, welchen Ordner sie zuletzt gelesen
  hat, und eine Datei zum Herunterladen anbieten; das ist kein Schreiben im
  Wiki-Ordner.
- Dateien, die die Person selbst schreibt, gehören ihr. Die Regel bindet dich,
  wenn du baust oder änderst; `agent/ablaeufe/pruefen.md` meldet Verstöße.
