# Module

Hier liegen Fachmodule: fertige Wissenspakete zu einem Fachgebiet, die jemand
anderes pflegt. Jedes Modul ist ein eigener Ordner mit einer `MODUL.md`.

Ein Modul holst du so hierher (der Ordner muss so heißen wie das Feld `modul:` in seiner `MODUL.md`):

```
cd module
git clone <adresse-des-moduls> <modulname>
```

Aktualisieren mit `git pull` im Ordner des Moduls. Der Agent liest Module,
ändert sie aber nie (Leitplanke `L01`). Eigene Anmerkungen zu einem Modul
gehören in eine Seite in `wiki/`, die auf die Moduldatei verlinkt.
Einstellungen deiner Einrichtung zu einem Modul stehen in
`<modulname>.lokal.md` hier neben dem Modulordner, sofern das Modul sie
zulässt. Diese Datei gehört dir und bleibt bei jedem Update erhalten.

Welche Module es gibt und wie ein Modul aufgebaut ist: `handbuch/MODULE.md`.
