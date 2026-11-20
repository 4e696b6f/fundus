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
  Eine Ansicht lädt nichts aus dem Netz und sendet nichts: kein Skript, keine
  Schrift, kein Bild, keine Anfrage nach außen. Sie liest nur und schreibt
  keine Datei im Wiki-Ordner. Ihr Kopf trägt die Sicherheitszeile aus
  agent/ablaeufe/ansicht-bauen.md § 3.
stattdessen:
  - Diagramme als SVG, Tabellen und CSS im Code der Datei, ohne Bibliothek.
  - Eine Bibliothek, die die Person selbst heruntergeladen und neben die Ansicht gelegt hat, ganz in die Datei kopieren, mit ihrem Lizenzhinweis.
  - Was aus der Ansicht ins Wiki soll, als Notiz zum Herunterladen anbieten; die Person legt sie in quellen/eingang/.
verweis: []
fundstellen: []
geprueft: 2026-11-20
pruefen_bis: 2027-11-20
---

## Begründung

Eine Ansicht liest das ganze Wiki, oft mit Notizen über Arbeit und andere
Menschen. Lädt sie ein Skript von einem fremden Server, kann dieses Skript
alles lesen und weitergeben, was die Ansicht liest, und niemand sieht es.
Schreibt sie selbst ins Wiki, umgeht sie die Vorprüfung beim Aufnehmen
(`L03`) und die Regeln für Quellen und Löschen (`L01`, `L04`). Lesen bleibt
harmlos; was zurück ins Wiki soll, geht über den Eingang.

## Was die Regel nicht sagt

- Ein gewöhnlicher Link, den die Person selbst anklickt, ist erlaubt, solange
  die Ansicht keine Angaben aus dem Wiki in seine Adresse schreibt.
  `obsidian://`-Links zum Öffnen einer Seite sind erlaubt.
- Mermaid-Diagramme in Seiten und Obsidian-Canvas-Dateien führen keinen
  fremden Code aus; für sie gilt `agent/regeln/SCHEMA.md`, nicht diese Regel.
- Die Ansicht darf sich im Browser merken, welchen Ordner sie zuletzt gelesen
  hat; das ist kein Schreiben im Wiki-Ordner.
- Dateien, die die Person selbst schreibt, gehören ihr. Die Regel bindet dich,
  wenn du baust oder änderst, und `agent/ablaeufe/pruefen.md` meldet Verstöße.
