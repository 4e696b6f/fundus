# Module

> Auch dieser Text ist mit Hilfe einer KI geschrieben, mehr dazu im
> KI-Hinweis der [README](../README.md).

Ein Modul ist ein fertiges Wissenspaket zu einem Fachgebiet: Regeln, Abläufe,
Vorlagen und Fachwissen, gepflegt von Leuten, die sich in dem Gebiet
auskennen. Du hängst es in dein Wiki ein, und dein Agent arbeitet mit diesem
Fachwissen. Zum Anfangen brauchst du kein Modul.

## Verzeichnis

Noch ist kein Modul veröffentlicht. Als erstes entsteht `kinderschutz`: Es
hilft, Schutzkonzepte und Risikoanalysen in Kita, Schule und Ehrenamt zu
prüfen, und bringt Leitplanken für Agenten im Kinderschutz mit, zunächst für
Hessen. Weitere Module stehen hier, sobald sie veröffentlicht sind.

## Einhängen

Jedes Modul ist ein eigener Ordner in `module/`, benannt nach dem Wert hinter
`modul:` in seiner `MODUL.md`. Beim Kinderschutz-Modul ist das
`module/kinderschutz/`.

Ohne `git` lädst du das Modul als ZIP, entpackst es und verschiebst den
Ordner nach `module/`. Er heißt dann nach dem Repository, etwa
`kinderschutz-skills-main`. Benenn ihn nach dem Wert hinter `modul:` um. Für
ein Update lädst du das ZIP neu und ersetzt den Ordner.

Mit `git`, im Terminal in deinem Wiki-Ordner:

```
cd module
git clone <adresse-des-moduls> <modulname>
```

Aktualisieren mit `git pull` im Modulordner.

Der Agent liest ein Modul, sobald eine Frage, eine Quelle oder eine Seite sein
Fachgebiet berührt, und ändert keine Datei darin (Leitplanke `L01`). Was du
selbst ergänzen willst, sagst du ihm. Er legt dafür eine Seite in `wiki/` an,
die auf die Moduldatei verlinkt, so geht bei einem Update nichts verloren.
Einen Fehler im Modul meldest du dort, wo `kontakt:` in seiner `MODUL.md`
hinzeigt.

Manche Module lassen zu, dass du oder deine Einrichtung ihre Regeln anpasst,
etwa mit einer Abweichung, die Träger oder Leitung beschlossen haben. Das
steht in `module/<modulname>.lokal.md` neben dem Modulordner und bleibt so bei
jedem Update erhalten. Die Datei gehört dir, der Agent ändert sie nur auf
deine Bitte. Was darin stehen darf und wer es entscheidet, sagt das Modul im
Feld `lokal:`. Abweichen darf sie nur von Regeln mit `schwere: fachlich`,
harte Regeln darf sie nur verschärfen.

Findet die Prüfung ein abgelaufenes Prüfdatum im Modul, schlägt der Agent ein
Update vor, also den Handgriff oben. Bis dahin gelten die alten Regeln weiter.

---

Ein Modul selbst bauen: Den Modulvertrag und das Format von `MODUL.md`
findest du im Repository unter
[handbuch/MODULE-BAUEN.md](https://github.com/4e696b6f/fundus/blob/main/handbuch/MODULE-BAUEN.md).
Im ZIP-Download ist die Datei nicht dabei, weil sie nur braucht, wer ein
Modul schreibt.
