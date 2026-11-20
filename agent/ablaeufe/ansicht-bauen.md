# Ablauf: ansicht-bauen

**Wofür:** Eine eigene Übersicht, Auswertung oder Grafik aus deinem Wiki für den Browser bauen.

Auslöser: „bau mir eine Übersicht, Auswertung, Grafik, ein Dashboard …“,
`/ansicht-bauen`. Vorher liest du `L05`
(`agent/leitplanken/L05-ansichten-lokal-und-lesend.md`).

## 1 · Wunsch klären

Welche Frage soll die Ansicht beantworten, aus welchen Daten (Felder,
Seiten, Protokoll, Leitfragen), und was will die Person danach tun? Was der
Auftrag offenlässt, fragst du in einer Nachricht.

## 2 · Das kleinste Mittel

Das erste, das passt:

1. Die Auswertung in `ansicht/uebersicht.html` (Reiter *Auswertung*) zeigt
   es schon → du sagst, wo. Ihre Zahlen nennst du nicht selbst: Die Person
   liest sie dort ab, so gezählt, wie die Kachel sagt.
2. Ein Ablauf, eine Zeitachse oder eine Gliederung, die eine Seite belegt →
   Mermaid-Block in dieser Seite (`agent/regeln/SCHEMA.md` → *Diagramme*).
3. Eine Karte, die die Person selbst weiter ordnen will → Obsidian-Canvas
   `eigen/ansichten/<name>.canvas`; Karten verweisen auf Wiki-Seiten statt
   ihren Text zu kopieren.
4. Eine Ansicht, die bei jedem Öffnen den aktuellen Stand liest →
   `eigen/ansichten/<name>.html` (§ 3).
5. Ein Bericht zu einem Stand, zum Drucken oder Weitergeben →
   `ausgaben/JJJJ-MM-TT-<name>.html` mit eingebetteten Zahlen, Belegen und
   Datum; für Inhalt und Namen gilt `agent/ablaeufe/schreiben.md` § 3.

## 3 · HTML-Ansicht

- **Gerüst aus `ansicht/uebersicht.html`:** die Zeile
  `<meta http-equiv="Content-Security-Policy" …>` wörtlich, dazu das Skript
  `fundus-kern` unverändert (Einlesen, Frontmatter, Links, Auswertung).
  Deine Logik steht in einem eigenen Skript. Im Kopf
  `<meta name="fundus-kern" content="…">` mit `KERN_VERSION` aus dem Kern und
  ein Kommentar: Zweck, Datum, auf Wunsch der Person.
- **Einlesen** wie die Übersicht: Ordner wählen, nur lesend
  (`showDirectoryPicker` mit `mode: 'read'`, sonst `webkitdirectory`).
- **Darstellung:** Tabellen, CSS, SVG im Code; keine Bibliothek (`L05`).
- **Ehrlich zählen:** Jede Zahl sagt in einem Satz, was sie zählt. Wo
  Aussagen erscheinen, bleibt `sicherheit:` sichtbar. Die Ansicht deutet
  nicht und ordnet nicht nach Wichtigkeit.
- **Menschen:** Auswertungen nach Personen, die nicht öffentlich handeln,
  nur auf ausdrücklichen Wunsch (`L03`).
- **Rückweg:** Soll ein Ergebnis ins Wiki, bietet die Ansicht eine
  Markdown-Notiz zum Herunterladen an; die Person legt sie in
  `quellen/eingang/`.
- **Eigene Felder:** Braucht die Ansicht ein Feld, das `agent/regeln/SCHEMA.md`
  nicht kennt, schlägst du es vor; nach dem Ja steht es in `eigen/EIGEN.md` →
  *Eigene Denkwerkzeuge*, und du setzt es nur auf Seiten, die du ohnehin
  bearbeitest.

## 4 · Prüfen

Vor der Übergabe durchsuchst du die Datei: keine Adresse mit `http`, `//`
oder `@import` in `src`, `href` von `<link>`, `url(`; kein `fetch`,
`XMLHttpRequest`, `WebSocket`, `sendBeacon`, `EventSource`,
`createWritable`, `removeEntry`, `mode: 'readwrite'`; die Sicherheitszeile
steht. Findest du etwas, behebst du es, bevor du die Datei nennst.

## 5 · Abschließen

- Log-Eintrag vom Typ `ansicht` mit `Datei:` (Pfad in Backticks).
- An die Person: wie sie die Ansicht öffnet (Doppelklick, Ordner wählen;
  am besten in Chrome oder Edge), was sie zeigt und was nicht.
- Ändern nur auf Auftrag, in derselben Datei; `eigen/` gehört der Person.
