# Ablauf: ansicht-bauen

**Wofür:** Eine eigene Übersicht, Auswertung oder Grafik aus deinem Wiki für den Browser bauen.

Vorher liest du `L05`
(`agent/leitplanken/L05-ansichten-lokal-und-lesend.md`).

## 1 · Wunsch klären

Welche Frage soll die Ansicht beantworten, aus welchen Daten (Felder,
Seiten, Protokoll, Leitfragen), und was will die Person danach tun? Was der
Auftrag offenlässt, fragst du in einer Nachricht.

## 2 · Das kleinste Mittel

Das erste, das passt:

1. Die Auswertung in `ansicht/uebersicht.html` (Seite *Auswertung*) zeigt
   es schon → du sagst, wo. Ihre Zahlen wiederholst du nicht geschätzt;
   nennst du eine, zählst du so, wie die Kachel unter „Gezählt“ sagt.
2. Ein Ablauf, eine Zeitachse oder eine Gliederung, die eine Seite belegt →
   Mermaid-Block in dieser Seite (`agent/regeln/SCHEMA.md` → *Diagramme*).
3. Eine Karte, die die Person selbst weiter ordnen will → Obsidian-Canvas
   `eigen/ansichten/<name>.canvas` nur mit Datei-, Text- und Gruppenknoten;
   Karten verweisen auf Wiki-Seiten, statt ihren Text zu kopieren.
4. Eine Ansicht, die bei jedem Öffnen den aktuellen Stand liest →
   `eigen/ansichten/<name>.html` (§ 3).
5. Ein Bericht zu einem Stand, zum Drucken oder Weitergeben →
   `ausgaben/JJJJ-MM-TT-<name>.html` nach `agent/regeln/SCHEMA.md` →
   *Ausgaben*, für Inhalt und Namen `agent/ablaeufe/schreiben.md` § 3.

## 3 · HTML-Ansicht

- **Gerüst:** `ansicht/uebersicht.html` als Datei kopieren, nicht abtippen.
  Kopf mit der Sicherheitszeile und das Skript `fundus-kern` (Einlesen,
  Frontmatter, Links, Auswertung) bleiben Zeichen für Zeichen; du ersetzt
  Titel, Stil und das Skript `fundus-ui` durch deine. Im Kopf
  `<meta name="fundus-kern" content="…">` mit `KERN_VERSION` und ein
  Kommentar: Zweck, Datum, auf Wunsch der Person.
- **Einlesen** über den Kern: `K.liesOrdner` nach `showDirectoryPicker` mit
  `mode: 'read'`, sonst `K.ausDateiliste` aus `webkitdirectory`, dann
  `K.leseTexte` und `K.baueIndex`.
- **Darstellung:** Tabellen, CSS, SVG im Code; keine Bibliothek (`L05`).
  Text aus dem Wiki setzt du nur über `K.esc`, `K.inline` oder
  `K.renderMarkdown` ein.
- **Ehrlich zählen:** Jede Zahl sagt in einem Satz, was sie zählt. Wo
  Aussagen erscheinen, bleibt `sicherheit:` sichtbar. Die Ansicht deutet
  nicht und ordnet nicht nach Wichtigkeit.
- **Menschen:** Auswertungen nach Personen, die nicht öffentlich handeln,
  nur auf ausdrücklichen Wunsch (`L03`).
- **Rückweg:** Soll etwas ins Wiki, bietet die Ansicht eine Notiz zum
  Herunterladen an, mit nur dem, was die Person in der Ansicht selbst
  eingibt, und Links auf die Seiten, um die es geht; keine Zahlen oder
  Aussagen aus dem Wiki. Die Person legt sie in `quellen/eingang/`.
- **Eigene Felder:** Braucht die Ansicht ein Feld, das `agent/regeln/SCHEMA.md`
  nicht kennt, schlägst du es vor; nach dem Ja steht es in `eigen/EIGEN.md` →
  *Eigene Denkwerkzeuge*, und du setzt es nur auf Seiten, die du ohnehin
  bearbeitest.

## 4 · Prüfen

Bevor du die Datei nennst, läuft das Prüfwerkzeug (Prüfpunkt *Ansichten*,
`agent/ablaeufe/pruefen.md` § 1); dasselbe zeigt `ansicht/uebersicht.html`
in der Kachel *Eigene Ansichten*. Ohne beides durchsuchst du sie selbst:

- Sicherheitszeile wie in `ansicht/uebersicht.html` und vor jedem `<script>`
- keine Adresse mit `http` oder `//` (`src`, `srcset`, `href` von `<link>`,
  `url(`, `@import`), kein `refresh`, kein `prefetch`
- kein Netzaufruf (`fetch`, `XMLHttpRequest`, `WebSocket`, `sendBeacon`,
  `EventSource`, `RTCPeerConnection`, `serviceWorker`), kein Schreiben
  (`createWritable`, `removeEntry`, `showSaveFilePicker`,
  `mode: 'readwrite'`), kein Öffnen einer Adresse (`window.open`,
  `location`)

Einen Fund behebst du vorher.

## 5 · Abschließen

- Log-Eintrag vom Typ `ansicht` mit `Datei:` (Pfad in Backticks), bei einem
  Diagramm in einer Seite mit `Geändert:`.
- An die Person: wie sie die Ansicht öffnet (Doppelklick, Ordner wählen;
  am besten in Chrome oder Edge), was sie zeigt und was nicht.
- Ändern nur auf Auftrag, in derselben Datei; `eigen/` gehört der Person.
