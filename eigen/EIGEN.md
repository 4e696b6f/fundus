# Eigen

Was du an Fundus anpasst, steht hier. Der Agent liest diese Datei in jeder
Sitzung, und sie gilt wie `AGENTS.md`. Kein Update überschreibt etwas in
`eigen/`, deshalb gehört alles Eigene hierher und nicht in `AGENTS.md` oder
`agent/`.

Leere Abschnitte bleiben leer. Halte die Datei kurz, sie kostet in jeder
Sitzung Lesezeit.

## Abweichungen

Von einer fachlichen Leitplanke (`schwere: fachlich`) darfst du abweichen,
mit Begründung, eine Zeile je Abweichung. Harte Leitplanken lassen sich hier
nur verschärfen (`agent/leitplanken/FORMAT.md` → *Verschärfen und
abweichen*).

```
- L03 · was abweicht · warum · seit JJJJ-MM-TT
```

## Eigene Leitplanken

Dateien in `eigen/leitplanken/` im Format von `agent/leitplanken/FORMAT.md`,
Kürzel `E-L01`, `E-L02` …

| | Schwere | Regel |
|---|---|---|

## Eigene Abläufe

Dateien in `eigen/ablaeufe/<name>.md`, je mit Auslöser-Satz in der Tabelle.
Einen Befehl dazu legt der Agent auf Wunsch als `eigen-<name>` an, nur im
Befehlsordner des Programms, mit dem du arbeitest
(`agent/regeln/PROGRAMME.md`); was `eigen-` vorn trägt, ersetzt kein Update.

| Die Person sagt oder tut … | Der Agent liest und folgt |
|---|---|

## Eigene Vorlagen

Obsidian holt Vorlagen aus `agent/vorlagen/`. Eigene legst du dort als
`eigen-<name>.md` an; die ersetzt kein Update. Die übrigen Vorlagen dort
gehören Fundus.

## Eigene Denkwerkzeuge

Ergänzungen zu `agent/regeln/LINSEN.md`, je mit Frage, Feld und wann es gilt.

## Aus Korrekturen gelernt

Regeln, die aus `eigen/gedaechtnis/KORREKTUREN.md` entstanden sind und die
du bestätigt hast (`agent/ablaeufe/feierabend.md` § 3).
