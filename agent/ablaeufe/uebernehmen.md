# Ablauf: übernehmen

**Wofür:** Alte Notizen und Ordner aus `quellen/bestand/` ins Wiki einbinden.

Die Dateien bleiben (`L01`); zum Aufnehmen legt die Person eine Kopie nach
`eingang/`. Zuerst liest du `wiki/meta/bestand.md`, falls vorhanden
(`agent/regeln/SCHEMA.md` → *Bestand*).

## 1 · Inventur

Jede Datei, auch in Unterordnern, kommt in `bestand.md`, bei großem Bestand
ordnerweise; sonst schreibst du nur den Log. Dateien und Ordner mit Punkt
vorn gehören nicht dazu.

- **Dritte:** Beim Lesen prüfst du zuerst auf Angaben über Dritte (`L03`),
  auch mittelbar (Initialen, Gruppe, Vorfall). Findest du welche, liest du
  nicht weiter: `zurückgestellt: Personendaten`, als Thema nur die
  Dokumentart.
- Dateinamen, die Personendaten tragen könnten, nennst du ohne diesen Teil,
  tote `[[Links]]` nur als Zahl.
- Unlesbares wird `nicht lesbar: <Endung>`; Bilder zählst du nur.

## 2 · Melden

- Zurückgestellte Dateien nennst du der Person zuerst, mit der Art der
  Angaben, ohne ihren Text; ihren Links folgst du nicht. Lässt der Name
  einer unlesbaren Datei Personendaten erwarten, sagst du es.
- Ihre Entscheidung steht beim Status in `wiki/meta/bestand.md`, mit Datum,
  nicht im Log (`entscheidung`) oder in der Übergabe (`Entschieden:`).
- Nach einer Freigabe gilt `L03` weiter, auch in Linktitel und Pfad; eine
  Modul-Leitplanke geht vor (`agent/leitplanken/FORMAT.md` → *Vorrang*).
- Pfade mit `#`, `|`, `[` oder `]` und zurückgestellte Dateien, deren Name
  Personendaten trägt, verlinkst du nicht: Du nennst sie ohne Namensteil
  und bittest, sie umzubenennen oder herauszunehmen.

## 3 · Vorschlag

In einer Nachricht, dann wartest du auf die Antwort:

- bis zu fünf Bereiche, geordnet nach `SOUL.md` → *Woran ich gerade
  arbeite*; neue trägt die Person ein oder lässt sie mit `einrichten`
  eintragen (`agent/ablaeufe/aufnehmen.md` § 2)
- Dateien ohne Bereich: `ausgelassen`, einmal nachgefragt
- Unlesbares: „als PDF speichern und daneben legen“, wo es geht

## 4 · Erschließen

In der Reihenfolge aus § 3, zuerst höchstens zehn Dateien als Probe, weiter
nach dem Ja; bei „alles“ ohne Zwischenfrage bis zum Ende, Rückfragen
gesammelt.

Es entstehen Themenseiten (`begriff`), eine je Gegenstand, nicht je Datei;
keine `quelle`- und keine `notiz`-Seite, kein kopierter `[!ich]`-Block:

1. **Seite:** die bestehende zum Gegenstand fortschreiben, sonst eine
   `begriff`-Seite im Bereich aus § 3 anlegen (`agent/regeln/SCHEMA.md`),
   mit `gegenposition:`. Zwei Dateien gleichen Inhalts nennst du der Person
   als Dublette.
2. **Kernaussagen:** was die Dateien sagen, in eigenen Worten, je mit der
   Datei als Fundstelle und in `quellen:`.
3. **`## Im Bestand`:** jede Datei des Gegenstands als Link mit einem Satz
   von dir.
4. **Stimme der Person:** Ihre Anmerkungen und Notizen verlinkst du, statt
   sie zu kopieren. Eigene Erfahrung steht als „laut deiner Notiz [[…]]“
   neben der Aussage, nicht in `widersprueche.md`.
5. **Widerspruch** zweier Dateien oder zu einer Seite: beide Aussagen auf
   der Themenseite, `sicherheit: strittig`, Zeile in
   `wiki/meta/widersprueche.md`.
6. **Abschluss:** Gegenlinks, Belegprobe (`agent/regeln/SCHEMA.md` →
   *Belegprobe*), ein neuer Bereich in den Index. Heißt die Seite anders
   als die Notiz, die sie im Kern erschließt, kommt deren Name in
   `aliases:`.

Eine fertige Seite, ohne Kopf (`type: begriff`, `stimme: agent`, beide
Dateien in `quellen:`, `aliases: ['MV-Checkliste']`):

```markdown
# Einladung zur Mitgliederversammlung

## Kernaussagen
- Die Einladung geht in Textform an alle Mitglieder
  ([[quellen/bestand/Verein/Satzung|Satzung]], § 8).
- Laut deiner Notiz [[quellen/bestand/Verein/MV-Checkliste|Checkliste]]
  ging sie zuletzt vier Wochen vorher hinaus.

## Im Bestand
- [[quellen/bestand/Verein/Satzung|Satzung]]: regelt Form und Frist.
- [[quellen/bestand/Verein/MV-Checkliste|Checkliste]]: deine Schritte vor der letzten Versammlung.

## Verlauf
- 2026-11-23: angelegt aus dem Bestand
```

## 5 · Nach jeder Runde

Status und Zähler in `bestand.md`, Log-Eintrag `bestand` mit `Neu:` und
`Geändert:` (Inventur: Zähler), dann `agent/ablaeufe/zusammenhaenge.md` für die
Seiten der Runde (sein § 5 endet mit dem Prüfwerkzeug); an die Person der
Stand und die Frage nach der nächsten.

Der Bestand zählt nicht bei *Quellen seit letzter Prüfung* und ist kein Stau.
