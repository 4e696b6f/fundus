# Einrichten

> Auch diese Anleitung ist mit Hilfe einer KI geschrieben, mehr dazu im
> KI-Hinweis der [README](../README.md).

Diese Anleitung bringt dich von null bis zur ersten aufgenommenen Quelle.
Rechne mit einer halben Stunde, dazu kommt die Zeit für die Installation von
Obsidian und Claude Code. Programmieren musst du nicht. Du tippst im Terminal
ein paar Zeilen, die hier stehen, und sprichst sonst mit dem Agenten wie in
einem Chat.

## Was du brauchst

- **Einen Mac oder einen Windows-Rechner** mit Internetzugang. Welche
  Systemversion Claude Code mindestens braucht, steht auf der offiziellen
  [Installationsseite](https://code.claude.com/docs/de/setup).
- **Obsidian**, kostenlos und ohne Anmeldung: <https://obsidian.md>. Obsidian
  zeigt dir das Wiki an, also Seiten, Links, den Graphen und die Suche.
- **Claude Code mit einem bezahlten Claude-Konto.** Claude Code ist das
  KI-Werkzeug, das in deinem Ordner Dateien liest und schreibt. Der kostenlose
  Claude-Plan reicht dafür nicht. Welche Abos und Konten gehen und was sie
  kosten, steht bei Anthropic unter [Preise](https://claude.com/pricing).
  Codex und andere Werkzeuge, die eine `AGENTS.md` lesen, funktionieren nach
  demselben Muster, diese Anleitung beschreibt aber Claude Code. Ein reines
  Chatfenster im Browser reicht nicht, weil der Agent die Dateien selbst
  anlegen muss.
- **Optional:** den [Obsidian Web Clipper](https://obsidian.md/clipper) als
  Browser-Erweiterung, um Webseiten mit einem Klick als Quelle abzulegen.

## Bevor du anfängst: Was wohin geht

Alles, was der Agent liest, schickt das Werkzeug an seinen Anbieter, bei
Claude Code an Anthropic, bei Codex an OpenAI. Lege nur Quellen ab, die du
dort haben darfst. Für Dienstliches klärst du das vorher mit deiner
Organisation. Lokale Modelle auf dem eigenen Rechner vermeiden das, halten
sich aber nach unserer Erfahrung deutlich schlechter an die Abläufe.

## Schritt 1 · Den Ordner holen

Auf der Projektseite
[github.com/4e696b6f/fundus](https://github.com/4e696b6f/fundus) über der
Dateiliste den grünen Knopf „Code“ drücken, dann „Download ZIP“. Die Datei landet in deinem Ordner „Downloads“.

- **Mac:** Doppelklick auf die ZIP-Datei entpackt sie.
- **Windows:** Rechtsklick auf die ZIP-Datei → „Alle extrahieren“.

Heraus kommt ein Ordner, der etwa `fundus-main` heißt. Verschieb ihn an einen
festen Platz, zum Beispiel in „Dokumente“, und benenne ihn um, etwa in
`mein-wiki`. Nimm einen Namen ohne Leerzeichen, das erspart dir später im
Terminal Ärger. Dieser Ordner ist ab jetzt dein Wiki.

Wenn du `git` schon kennst, kannst du den Ordner auch klonen:

```
git clone https://github.com/4e696b6f/fundus.git mein-wiki
```

## Schritt 2 · In Obsidian öffnen

Obsidian installieren und starten. Im Startfenster „Ordner als Vault öffnen“
(Open folder as vault) wählen und deinen Wiki-Ordner aussuchen. Links siehst
du jetzt die Ordner und Dateien, rechts die geöffnete Seite.

Eingestellt ist schon alles, was du brauchst:

- Bilder und PDFs, die du in eine Seite ziehst, landen in `quellen/anhaenge/`.
- In `vorlagen/` liegt für jede Art von Seite eine Vorlage. Am Anfang brauchst
  du sie nicht, weil der Agent die Seiten anlegt. Wenn du selbst eine Seite
  schreibst, holst du die Vorlage mit dem Befehl „Vorlage einfügen“ (Insert
  template).
- Deine eigenen Worte stehen in einem `[!ich]`-Block und bekommen eine eigene
  Farbe, damit du sie auf einen Blick von dem unterscheidest, was der Agent
  zusammengefasst hat. So sieht er in der Datei aus:

```
> [!ich]
> Das deckt sich nicht mit dem, was ich selbst beobachtet habe.
```

Falls du den Web Clipper nutzt: Trag in seinen Einstellungen als Ablageort
(Note location) `quellen/eingang` ein. Dann landet jede Webseite, die du
damit sicherst, genau dort, wo der Agent nach Neuem sucht.

## Schritt 3 · `SOUL.md` ausfüllen

Klick in Obsidian links auf `SOUL.md`. Die Datei ist an den Agenten
gerichtet: Wo außerhalb der eckigen Klammern „du“ steht, ist er gemeint, in
den Klammern bist du gemeint. Fülle die Stellen in eckigen Klammern aus und
lösch die Klammern dabei: wofür du das Wiki willst, mit welchen Themen du
anfängst, wie der Agent dich ansprechen soll. Für jedes Thema unter
*Themenbereiche* legt der Agent ohne Nachfrage einen Bereich im Wiki an, für
jedes andere fragt er dich vorher. Zehn Minuten reichen, und du kannst die
Datei jederzeit ändern.

## Schritt 4 · Claude Code installieren und anmelden

Claude Code läuft im Terminal. Das ist ein Fenster, in das du Befehle tippst,
statt zu klicken. Jeder Mac und jeder Windows-Rechner hat eins.

- **Mac:** Finder → Programme → Dienstprogramme → Terminal. Schneller geht es
  mit Cmd + Leertaste, „Terminal“ tippen, Enter.
- **Windows:** Auf die Suche in der Taskleiste klicken, „PowerShell“ oder
  „Terminal“ tippen, Enter.

**Installieren.** Öffne die offizielle
[Terminal-Anleitung für neue Benutzer](https://code.claude.com/docs/de/terminal-guide)
und kopiere dort den Installationsbefehl für dein System. Füge ihn ins
Terminal ein (Mac: Cmd + V, Windows: Strg + V) und drück Enter. Es läuft eine
Weile Text durch, am Ende meldet der Installer, dass er fertig ist. Schließ
das Terminalfenster danach und öffne ein neues.

**In den Ordner wechseln.** Claude Code arbeitet in dem Ordner, in dem du es
startest. Tippe `cd` und ein Leerzeichen. Dann zieh deinen Wiki-Ordner aus
dem Finder oder Explorer ins Terminalfenster. Der Pfad erscheint von selbst
hinter dem `cd`. Drück Enter. Am Anfang der Zeile steht jetzt der Name deines
Ordners.

**Starten.** Tippe `claude` und drück Enter. Beim ersten Start passiert
Folgendes:

- Claude Code stellt ein paar Fragen zur Einrichtung. Mit den Pfeiltasten
  wählst du, Enter bestätigt. Wenn du unsicher bist, nimm den Vorschlag.
- Ein Browserfenster öffnet sich, und du meldest dich mit deinem
  Claude-Konto an. Danach bleibt die Anmeldung gespeichert.
- Claude Code fragt, ob du den Dateien in diesem Ordner vertraust. Wähle Ja.
  Der Ordner enthält nur Textdateien und keine Programme.

Jetzt wartet Claude Code auf deine erste Nachricht.

## Schritt 5 · Die erste Sitzung

Tippe als Erstes:

> Ich fange gerade an. Lies SOUL.md und sag mir, was du hier tust.

Der Agent liest `AGENTS.md`, bei Claude Code über `CLAUDE.md`, und weiß
damit, wie das Wiki funktioniert. Er antwortet dir in ein paar Sätzen.

Je nach Abo und Einstellung fragt Claude Code um Erlaubnis, bevor es eine
Datei anlegt oder ändert. Du kannst einmal zustimmen oder die Aktion ab dann
immer erlauben. Das zweite ist bequemer, weil der Agent bei einer
einzigen Quelle zehn und mehr Seiten anfassen kann.

Bewährt hat sich, beide Fenster nebeneinander zu haben: links das Terminal
mit dem Agenten, rechts Obsidian. Du siehst dann, was der Agent schreibt,
während er es schreibt.

## Schritt 6 · Die erste Quelle

Leg eine Datei in den Ordner `quellen/eingang/`, im Finder oder Explorer wie
jede andere Datei auch. Gut geeignet für den Anfang sind ein PDF, ein
Artikel, den du mit dem Web Clipper gesichert hast, oder eine eigene Notiz.
Die Notiz legst du in Obsidian an: Rechtsklick links auf `eingang` → „Neue
Notiz“ (New note), ein paar Sätze schreiben. Dann sag dem Agenten:

> Nimm die neue Quelle auf.

Der Agent folgt `ablaeufe/aufnehmen.md`. Er liest die Quelle, legt Seiten in
`wiki/` an, verknüpft sie mit dem, was schon da ist, und verschiebt die Quelle
nach `quellen/archiv/`. Passt die Quelle zu keinem deiner Themenbereiche,
fragt er, ob er einen neuen Bereich in `wiki/` anlegen darf. Sag Ja. Nach ein
paar Minuten sagt er dir in wenigen Sätzen, was neu ist, und in Obsidian
siehst du die neuen Seiten links unter `wiki/`.

## So geht es weiter

Zum Weiterarbeiten öffnest du das Terminal, tippst `cd` mit Leerzeichen,
ziehst den Ordner hinein, drückst Enter und startest `claude`. Zum Einstieg
passt dann: „Lies die Übergabe und sag mir, wo wir stehen.“

| Du sagst | Es passiert |
|---|---|
| „Nimm die neue Quelle auf.“ | Die Quelle wird Wissen im Wiki. |
| „Was wissen wir über …?“ | Der Agent sucht, antwortet mit Fundstellen und bietet an, die Antwort als Seite zu sichern. |
| „Was hängt zusammen?“ | Der Agent sucht Verbindungen und Muster über Themen hinweg. |
| „Prüf das Wiki.“ | Tote Links, veraltete Seiten, Widersprüche, Lücken, als Bericht. |
| „Feierabend.“ | Der Agent schreibt die Übergabe für das nächste Mal. |

Wenn der Agent etwas falsch macht, sag es ihm. Er notiert es in
`gedaechtnis/REIBUNG.md`. Was zweimal passiert, schlägt er dir als Regel vor,
und du entscheidest.

## Sicherheitsnetz

Kopier den ganzen Wiki-Ordner ab und zu an einen anderen Ort, etwa einmal
die Woche auf einen USB-Stick oder in einen zweiten Ordner mit dem Datum im
Namen. Geht etwas schief, holst du dir die Kopie zurück. Wer `git` kennt,
verwaltet den Ordner damit und kann jede Änderung des Agenten nachsehen und
zurücknehmen.

## Wenn es hakt

| Was du siehst | Was du tust |
|---|---|
| Das Terminal kennt `claude` nicht („command not found“, „nicht erkannt“). | Terminal schließen, neu öffnen, noch einmal `claude`. Hilft das nicht, steht die Lösung unter „Troubleshooting“ in der [Terminal-Anleitung](https://code.claude.com/docs/de/terminal-guide). |
| `cd` meldet, den Ordner gebe es nicht. | Den Ordner ins Fenster ziehen, statt den Namen zu tippen. |
| Die Anmeldung klappt nicht oder dein Konto wird abgelehnt. | Prüfen, ob dein Claude-Konto ein bezahltes Abo hat. Der kostenlose Plan reicht nicht. |
| Der Agent weiß nichts von deinem Wiki und fragt, was er tun soll. | Er läuft im falschen Ordner. `/exit` tippen, mit `cd` in den Wiki-Ordner wechseln, `claude` neu starten. |
| In Obsidian tauchen die neuen Seiten nicht auf. | Obsidian hat einen anderen Ordner offen. Unten links auf den Namen des Vaults klicken, „Vaults verwalten“ (Manage vaults) wählen und deinen Wiki-Ordner öffnen. |
| Der Agent tut gerade etwas, das du nicht willst. | Esc drücken, das unterbricht ihn. Dann sag ihm, was du stattdessen willst. |
