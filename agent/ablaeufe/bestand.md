# Ablauf: Bestand erschließen

Auslöser: Dateien in `quellen/bestand/` und „übernehmen“ oder „erschließen“.

Die Dateien bleiben, wo sie sind, auch nicht nach `archiv/` (`L01`). Zuerst
liest du `wiki/meta/bestand.md`, falls es sie gibt (Aufbau:
`agent/regeln/SCHEMA.md` → *Bestand*).

## 1 · Inventur

Jede Datei, auch in Unterordnern, kommt mit Art, Kurzthema und Status in
`bestand.md`; eine `.docx` liest du nicht (`nicht lesbar: docx`). Tote
`[[Links]]` im Bestand zählst du, reparierst sie nicht. Sonst schreibst du nur
den Log.

## 2 · Personendaten zuerst

Eine Datei mit Angaben über Dritte, auch mittelbar (Initialen, Gruppe,
Vorfall), wird `zurückgestellt: Personendaten`: nicht weiterlesen, der Person
vor allem anderen nennen, mit der Art der Angaben, nie den Angaben (`L03`).
Trägt der Dateiname Personendaten, stehen dafür Ordner und Art, auch in
`bestand.md`. Lässt der Name einer docx Personendaten erwarten,
sagst du es. Die Entscheidung der Person steht beim Status.

## 3 · Vorschlag

In einer Nachricht, dann wartest du auf die Antwort:

- bis zu fünf Bereiche, geordnet nach `SOUL.md` → *Woran ich gerade
  arbeite*; neue trägt die Person selbst ein
  (`agent/ablaeufe/aufnehmen.md` § 2)
- Dateien ohne passenden Bereich als `ausgelassen`, einmal nachgefragt
- zu den docx: „in Word als PDF speichern und daneben legen“

## 4 · Erschließen

Erste Runde höchstens zehn Dateien als Probe, weiter nach dem Ja der Person.

- Je Gegenstand eine `begriff`-Seite, eine bestehende zuerst, keine Seite je
  Datei; es gilt `agent/ablaeufe/aufnehmen.md` § 2, § 4, § 5 und aus § 3
  Fundstelle und `pruefen_bis:`.
- Unter `## Im Bestand` jede Datei als Link mit einem Satz in deiner Stimme;
  Kernaussagen mit der Bestandsdatei als Fundstelle und in `quellen:`.
- Anmerkungen der Person verlinkst du, statt sie zu kopieren. Eine Notiz
  ohne Herkunft ist eine schwache Quelle.
- Zwei Dateien zum selben Gegenstand: eine Seite, der Person als Dublette
  genannt.
- Erschließt eine Seite im Kern eine Notiz anderen Namens, kommt dieser in
  `aliases:`, damit die Suche sie findet; tote Links repariert das nicht.

## 5 · Nach jeder Runde

Status und Zähler in `bestand.md`, Log-Eintrag `bestand` mit `Neu:` und
`Geändert:` (bei der Inventur der Zähler), dann `agent/ablaeufe/verknuepfen.md`
für die Seiten der Runde. An die Person: der Stand, die Frage nach der
nächsten Runde.

Der Bestand zählt nicht bei *Quellen seit letzter Prüfung* und ist kein Stau.
