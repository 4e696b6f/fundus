# Ablauf: aktualisieren

**Wofür:** Eine neue Fundus-Version übernehmen, ohne dass sich an deinen Dateien etwas ändert.

Dieser Ablauf ist der ausdrückliche Auftrag, die Pfade aus `agent/KERN.txt`
zu ersetzen und die Schritte der Migrationsdateien auszuführen, sonst
nichts. `SOUL.md`, `EINRICHTUNG.md`, `eigen/`, `quellen/`, `module/`,
`ausgaben/` und `wiki/` änderst du nur, wo eine Migrationsdatei es nennt;
`quellen/` und `module/` nie (`L01`).

## 1 · Auspacken

- Die ZIP im Hauptordner (`fundus-*.zip`; mehrere → nachfragen) nach
  `.aktualisierung/` entpacken. Liegt darin genau ein Ordner, ist er die
  neue Version, sonst `.aktualisierung/` selbst.
- **alt** = `agent/VERSION`, **neu** = `agent/VERSION` der neuen Version.
  Ist neu nicht höher, hörst du auf und sagst es.
- Ist `agent/ablaeufe/aktualisieren.md` der neuen Version anders als dieser,
  folgst du ab hier der neuen.

## 2 · Vorher sagen und sichern

In einer Nachricht: alt → neu, was das neue `CHANGELOG.md` seit alt ändert
(je Abschnitt ein Satz), welche Migrationsdateien
(`agent/migration/<von>-zu-<nach>.md` der neuen Version, von der
Hauptversion von alt bis neu, lückenlos) du ausführst.

- Im eigenen Repository (`agent/ablaeufe/feierabend.md` § 4): Commit aller
  Dateien „vor Aktualisierung auf <neu>“, dann weiter.
- Sonst: Bitte die Person, den ganzen Ordner zu kopieren, und warte
  auf ihr Ja.
- Fehlt eine Migrationsdatei in der Kette, hörst du hier auf und sagst es.

## 3 · Ersetzen

- Hat die Person Kern-Dateien selbst geändert (sie sagt es, oder git zeigt
  Änderungen an ihnen seit dem letzten Commit „Aktualisierung auf …“),
  fragst du vor dem Ersetzen, ob die Änderung nach `eigen/` soll
  (`agent/ablaeufe/feierabend.md` § 3 nennt die Stellen).
- Jeden Pfad aus `agent/KERN.txt` der **neuen** Version: löschen und aus
  der neuen Version an dieselbe Stelle kopieren; ein Pfad mit `/` am Ende
  ist der ganze Ordner. Steht ein Pfad nur in der alten `KERN.txt`, löschst
  du ihn.
- Was `KERN.txt` unter „Nicht von Fundus“ nennt, fasst du nicht an, auch
  wenn es in der neuen Version liegt.

## 4 · Migration

Jede Datei der Kette in Reihenfolge, Schritt für Schritt wie dort
beschrieben. Eine Datei, die ein Schritt anlegen soll und die es schon gibt,
lässt du stehen.

## 5 · Abschließen

- Prüfen: Jeder Pfad aus `agent/KERN.txt` gibt es; `agent/VERSION` = neu.
- `.aktualisierung/` löschen. Die ZIP bleibt; die Person kann sie löschen.
- Log-Eintrag vom Typ `aktualisierung` mit `Version:` alt → neu und
  `Migration:` (die Dateien); Zwischenstand der Übergabe.
- Im eigenen Repository: Commit „Aktualisierung auf <neu>“.
- An die Person: was neu ist, in drei Sätzen, und was sie selbst tun kann.
  Bringt die neue Version Obsidian-Einstellungen mit (`.obsidian/`), nennst
  du sie; kopiert werden sie nicht.
