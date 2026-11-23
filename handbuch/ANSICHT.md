# Ansicht

> Auch diese Anleitung ist mit Hilfe einer KI geschrieben, mehr dazu im
> KI-Hinweis der [README](../README.md).

`ansicht/uebersicht.html` ist dein Arbeitsplatz im Browser: Du siehst, was
ansteht und was dein Wiki weiß, und kommst mit einem Klick dorthin. Lesen und
Suchen geht hier, schreiben tust du in Obsidian oder über deinen Agenten.

## Was du siehst

Links steht die Seitenleiste. Sie ist der einzige Wegweiser: Ein Klick auf
einen Eintrag zeigt rechts die Seite dazu. Die Zahl hinter einem Eintrag
sagt, wie viel dort liegt. Rot heißt: Hier musst du oder dein Agent etwas
tun. Gelb heißt: bald, oder du sollst etwas entscheiden. Grau ist nur eine
Menge.

**Lage**

- **Lagebild** ist die Startseite. Oben fünf Zahlen: was überfällig ist, was
  bald fällig wird, was im Eingang liegt, was die Prüfung gefunden hat und
  wie viele Rückfragen auf dich warten. Darunter der nächste Schritt aus der
  letzten Übergabe, die Fristen der Reihe nach und die Rückfragen und
  Entscheidungen. Rechts deine Bereiche (der Balken zeigt, wie sicher die
  Seiten darin sind), der Stand deiner Leitfragen und die zuletzt geänderten
  Seiten.
- **Heute zu tun** sammelt alles, was ansteht, in einer Liste: überfällige
  Prüfdaten und Fristen, Rückfragen des Agenten, was du dir vorgemerkt
  hast, neue Dateien im Eingang und was die Prüfung als kaputt meldet.
  Abhaken kannst du hier nichts. Erledigt ist etwas, wenn es in deinen
  Dateien erledigt ist; nach „Neu lesen“ ist es dann aus der Liste.
- **Eingang** zeigt, was in `quellen/eingang/` liegt und ob der Agent dazu
  eine Rückfrage hat.

**Wissen**

- **Wiki** listet alle Seiten. Darunter stehen deine Bereiche; ein Klick
  zeigt nur die Seiten dieses Bereichs. Über der Tabelle suchst du im Text
  und filterst nach Typ, Status, Stimme und Sicherheit.
- **Leitfragen**, **Lücken** und **Widersprüche** zeigen die Einträge aus
  den drei Dateien in `wiki/meta/`, erst die offenen.
- **Quellen** und **Ausgaben** listen deine Quellen und die Texte, die der
  Agent für dich geschrieben hat. PDFs und Bilder öffnen sich per Klick in
  einem neuen Tab.

**Qualität**

- **Prüfung:** was an deinem Wiki nicht stimmt, soweit sich das nachzählen
  lässt. Mehr dazu unter [Prüfung](#prüfung).
- **Auswertung:** wie weit deine Leitfragen sind, wie gut jeder Bereich
  belegt ist, auf welchen Quellen dein Wissen ruht, was wann dazukam, was in
  den nächsten zwölf Monaten abläuft und wie viel in deinen Worten steht.
  Unter jeder Zahl steht, was sie zählt; ein Klick führt zu den Seiten
  dahinter. Die Auswertung zählt nur, sie bewertet nichts.

**System:** die Leitplanken (die von Fundus und deine eigenen), eingehängte
Module und alle übrigen Dateien.

Eine **Seite** öffnest du mit einem Klick auf ihren Titel. In der Mitte
steht der Text, rechts daneben alles Übrige: Typ, Sicherheit und Daten, die
Quellen, welche Seiten hierher verweisen, wohin diese Seite verweist und was
die Prüfung an genau dieser Datei gefunden hat. Ein rot gepunkteter Link
führt ins Leere.

**Suchen:** Das Feld oben links findet jede Datei nach Titel oder Namen.
Drück `/` (oder Strg+K, am Mac ⌘+K), tipp ein paar Buchstaben, wähl mit den
Pfeiltasten und drück Enter. Im Text der Seiten sucht das Feld über der
jeweiligen Liste.

Auf einem schmalen Bildschirm verschwindet die Seitenleiste hinter dem Knopf
☰ oben links. Ganz unten in der Leiste stellst du hell oder dunkel ein.

## Öffnen

1. Im fundus-Ordner `ansicht/uebersicht.html` doppelklicken. Die Datei
   öffnet sich in deinem Browser.
2. „Ordner wählen“ drücken.
3. Den ganzen fundus-Ordner wählen, also den, in dem `AGENTS.md` liegt, nicht
   `wiki/` allein.

Spricht der Browser dabei von „Hochladen“: Die Dateien verlassen deinen
Rechner nicht. Internet braucht die Ansicht nicht.

## Grenzen

Die Ansicht liest nur und zeigt den Stand beim Einlesen. Hat dein Agent
danach etwas geändert, wählst du den Ordner neu (unten in der Seitenleiste).
Das tust du auch bei jedem Öffnen. Nur Chrome und Edge merken ihn sich,
fragen einmal, ob die Seite ihn wieder lesen darf, und zeigen dann den Knopf
„Neu lesen“. „In Obsidian öffnen“ klappt nur, solange dein Vault in
Obsidian so heißt wie der Ordner. Das ist so, bis du ihn dort umbenennst. Ordner mit einem
Punkt vorn (`.obsidian/`, `.git/`) und `agent/vorlagen/` liest die Ansicht nicht.
Zeigt sie etwas Falsches, schreib es in die
[Issues](https://github.com/4e696b6f/fundus/issues).

## Prüfung

Die Seite *Prüfung* sieht nach, was sich ohne Nachdenken nachsehen lässt:
Führt jeder Link irgendwohin? Hat jede Seite ihre Angaben im Kopf? Liegt ein
Datum in der Zukunft? Ist das Protokoll in der richtigen Reihenfolge? Stimmt
die Übergabe mit den Dateien überein? Steht das, was als dein Wortlaut
markiert ist, wirklich so in deiner Notiz? Was er findet, steht in drei
Gruppen:

- **Muss behoben werden:** Hier ist etwas kaputt, zum Beispiel ein Link ins
  Leere oder ein Datum von morgen.
- **Sollte behoben werden:** Hier weicht etwas von den Regeln ab, das Wiki
  funktioniert aber. Zum Beispiel fehlt einer Seite ein Abschnitt, oder eine
  Datei liegt seit Wochen im Eingang.
- **Zur Kenntnis:** nichts zu tun, nur gut zu wissen. Zum Beispiel wird eine
  Seite in den nächsten zwei Wochen fällig.

Oben stehen die Prüfpunkte mit ihrer Zahl; ein Klick springt zu den
Befunden. Bei jedem Befund steht die Datei; ein Klick öffnet sie. Beheben musst du
nichts selbst: Sag deinem Agenten „prüfen“. Er bekommt genau diese Liste,
behebt das Eindeutige und fragt dich beim Rest.

Liegt ein Datum in der Zukunft, warnt schon das Lagebild ganz oben.
Meist hat dann der Agent ein Datum geraten, selten geht die Uhr deines
Rechners falsch.

Zwei Grenzen. Die Prüfung sieht nicht, ob eine Aussage stimmt oder gut
belegt ist; das prüft der Agent, indem er Seiten und Quellen liest. Und
deinen Wortlaut kann sie nur mit Quellen vergleichen, die Text sind (`.md`,
`.txt`), nicht mit PDFs.

Ganz unten stehen die Zeilen für die nächste Übergabe und derselbe Bericht
als Text. So bekommt ihn dein Agent, wenn
auf deinem Rechner `node` vorhanden ist, vom Prüfwerkzeug
`agent/werkzeug/pruefen.js`. Du brauchst `node` nicht: Ohne prüft der Agent
von Hand und sagt dir das, und du siehst den Bericht hier.

## Eigene Ansichten

Fehlt dir eine Sicht auf dein Wiki, sag dem Agenten, was du sehen willst:

> Bau mir eine Übersicht, die zeigt, welche Methoden ich schon im Unterricht
> ausprobiert habe und wie gut sie belegt sind.

(oder kurz `/ansicht-bauen`). Er nimmt das kleinste Mittel, das passt: einen
Hinweis auf die Auswertung, ein Diagramm in einer Seite, eine Karte in
Obsidian oder eine eigene Ansicht in `eigen/ansichten/`. Die öffnest du wie
diese: Doppelklick, Ordner wählen.

Jede Ansicht, die er baut, bleibt auf deinem Rechner: Sie lädt nichts aus dem
Internet, schickt nichts weg und ändert keine Datei (Leitplanke `L05`). Das
Lagebild prüft das bei jedem Einlesen im Kasten *Eigene Ansichten*;
steht dort ✗, öffne die Ansicht nicht und sag deinem Agenten „prüfen“. Soll
etwas daraus ins Wiki, bietet sie dir eine Notiz zum Herunterladen an, die du
in `quellen/eingang/` legst. Deine Ansichten gehören dir, kein Update ändert
sie.
