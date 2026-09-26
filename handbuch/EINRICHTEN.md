# Einrichten

> Auch diese Anleitung ist mit Hilfe einer KI geschrieben, mehr dazu im
> KI-Hinweis der [README](../README.md).

In einer halben Stunde, plus Installationszeit, kommst du bis zur ersten
aufgenommenen Quelle. Programmieren musst du nicht: Du tippst ein paar Zeilen
ab und sprichst sonst mit dem Agenten wie in einem Chat.

## Was du brauchst

- Einen Mac oder Windows-Rechner mit Internet. Die nötige Systemversion
  steht auf der [Installationsseite](https://code.claude.com/docs/de/setup).
- [Obsidian](https://obsidian.md), kostenlos und ohne Anmeldung. Es zeigt dir
  das Wiki an.
- Claude Code, das KI-Werkzeug, das in deinem Ordner Dateien liest und
  schreibt. Es braucht ein bezahltes Claude-Konto, siehe
  [Preise](https://claude.com/pricing). Ein Chatfenster im Browser reicht
  nicht, andere Werkzeuge, die `AGENTS.md` lesen, etwa Codex, gehen auch.
- Wenn du magst, den [Obsidian Web Clipper](https://obsidian.md/clipper), der
  Webseiten mit einem Klick als Quelle ablegt.

## Bevor du anfängst: Was wohin geht

Alles, was der Agent liest, geht an den Anbieter des Werkzeugs, bei Claude
Code an Anthropic. Lege nur Quellen ab, die dort hin dürfen, und kläre
Dienstliches vorher mit deiner Organisation. Lokale Modelle vermeiden das,
halten sich aber nach unserer Erfahrung deutlich schlechter an die Abläufe.

## Schritt 1 · Den Ordner holen

Auf [github.com/4e696b6f/fundus](https://github.com/4e696b6f/fundus) über der
Dateiliste den grünen Knopf „Code“ drücken, dann „Download ZIP“. Die Datei
landet in „Downloads“.

- Mac: Doppelklick auf die ZIP-Datei.
- Windows: Rechtsklick auf die ZIP-Datei → „Alle extrahieren“.

Heraus kommt ein Ordner wie `fundus-main`. Verschieb ihn an einen festen
Platz, etwa nach „Dokumente“, und benenne ihn um, zum Beispiel in `mein-wiki`.
Nimm einen Namen ohne Leerzeichen. Dieser Ordner ist ab jetzt dein Wiki.

## Schritt 2 · In Obsidian öffnen

Obsidian installieren und starten. Im Startfenster „Ordner als Vault öffnen“
(Open folder as vault) wählen und deinen Wiki-Ordner aussuchen. Links siehst du
die Dateien, rechts die geöffnete Seite.

Eingestellt ist schon alles. Bilder und PDFs, die du in eine Seite ziehst,
landen in `quellen/anhaenge/`. Schreibst du selbst eine Seite, holst du mit
„Vorlage einfügen“ (Insert template) eine Vorlage aus `agent/vorlagen/`. Am Anfang
brauchst du das nicht.

Für den Web Clipper trägst du in seinen Einstellungen als Ablageort (Note
location) `quellen/eingang` ein. Dort sucht der Agent nach Neuem.

## Schritt 3 · `SOUL.md` ausfüllen

Klick in Obsidian links auf `SOUL.md`. Die Datei spricht den Agenten mit „du“
an, in den eckigen Klammern bist du gemeint. Füll die Klammern aus und lösch
sie dabei: wofür du das Wiki willst, mit welchen Themen du anfängst, wie der
Agent dich ansprechen soll, und, wenn du magst, woran du gerade arbeitest. Zehn Minuten reichen, ändern kannst du die Datei
jederzeit.

## Schritt 4 · Claude Code installieren und anmelden

Claude Code läuft im Terminal, einem Fenster, in das du Befehle tippst.

- Mac: Cmd + Leertaste, „Terminal“ tippen, Enter.
- Windows: Auf die Suche in der Taskleiste klicken, „PowerShell“ tippen,
  Enter.

Öffne die
[Terminal-Anleitung für neue Benutzer](https://code.claude.com/docs/de/terminal-guide)
und kopier dort den Installationsbefehl für dein System. Füg ihn ins Terminal
ein (Mac: Cmd + V, Windows: Strg + V) und drück Enter. Wenn der Installer
meldet, dass er fertig ist, schließ das Terminal und öffne ein neues.

Jetzt in den Wiki-Ordner wechseln: `cd` und ein Leerzeichen tippen, den
Ordner aus dem Finder oder Explorer ins Terminal ziehen, Enter. Am Anfang der
Zeile steht nun der Name deines Ordners.

Dann `claude` tippen und Enter. Beim ersten Start fragt Claude Code ein paar
Einstellungen ab. Du wählst mit den Pfeiltasten und bestätigst mit Enter, im
Zweifel den Vorschlag. Im Browser meldest du dich mit deinem Claude-Konto an,
das bleibt gespeichert. Auf die Frage, ob du den Dateien im Ordner vertraust,
wählst du Ja. Es sind nur Textdateien.

## Schritt 5 · Die erste Sitzung

Tippe als Erstes:

> Ich fange gerade an. Lies SOUL.md und sag mir, was du hier tust.

Der Agent liest seine Regeln und antwortet in ein paar Sätzen. Bevor er eine
Datei anlegt, fragt Claude Code oft um Erlaubnis. Du kannst einmal zustimmen
oder es ab dann immer erlauben. Das ist bequemer, denn eine Quelle berührt oft
zehn und mehr Seiten.

Stell die Fenster nebeneinander, links das Terminal, rechts Obsidian. Dann
siehst du, was der Agent schreibt, während er es schreibt.

## Schritt 6 · Die erste Quelle

Leg im Finder oder Explorer eine Datei nach `quellen/eingang/`, etwa ein PDF,
einen Artikel aus dem Web Clipper oder eine eigene Notiz. Die Notiz legst du
in Obsidian an: Rechtsklick links auf `eingang` → „Neue Notiz“ (New note), ein
paar Sätze schreiben.

Was du in `Backticks` setzt, auch in einer fremden Quelle, übernimmt der Agent
wörtlich als deine Stimme in einen farbig abgesetzten `[!ich]`-Block. Eine
Aufgabe mit `` `#später` `` steht am Ende der Sitzung in der Übergabe. Dann schreib:

> Nimm die neue Quelle auf.

Der Agent legt Seiten in `wiki/` an, verknüpft sie mit dem Bestand und
verschiebt die Quelle nach `quellen/archiv/`. Fragt er, ob er einen neuen
Bereich anlegen darf, sag Ja. Nach ein paar Minuten sagt er dir, was neu ist,
und in Obsidian stehen die Seiten links unter `wiki/`.

## Du hast schon Notizen?

Viele fangen nicht bei null an: Es gibt einen Ordner mit Word-Dateien und
PDFs, vielleicht einen alten Obsidian-Vault. Abtippen musst du nichts.

1. Kopier die Dateien nach `quellen/bestand/`, gern mit ihren Unterordnern.
   Kopieren, nicht verschieben: So bleibt dein Original, wo es war.
2. Schreib dem Agenten:

> Ich habe meine alten Notizen nach quellen/bestand gelegt. Übernimm sie bitte.

**Was der Agent tut.** Er sieht jede Datei durch und führt eine Liste in
`wiki/meta/bestand.md`: was darin steht und wie weit er ist. Er schlägt dir
Themenbereiche vor und wartet auf deine Antwort. Dann nimmt er sich zur Probe
höchstens zehn Dateien vor und macht erst weiter, wenn du einverstanden bist.
Im Wiki entstehen Seiten zu deinen Themen, die auf die alten Dateien
verweisen, mit einem Satz, was jeweils darin steht. Fragen beantwortet er aus
dem Wiki: Was er noch nicht erschlossen hat, findet er dabei nicht.

**Was er nicht tut.** Er ändert, verschiebt und löscht keine Datei in
`quellen/bestand/`, auch nicht, wenn er fertig ist. Deine eigenen Anmerkungen
kopiert er nicht ins Wiki, er verweist auf sie. Links in einem alten Vault,
die ins Leere zeigen, zählt er, repariert sie aber nicht.

**Word-Dateien** (`.docx`) kann er nicht lesen. Öffne sie in Word, speichere
sie über „Datei“ → „Speichern unter“ als PDF und leg das PDF daneben.

**Angaben über andere Menschen.** Stehen in einer Datei Namen oder andere
Angaben über Kinder, Eltern oder Kolleginnen, auch nur Initialen mit Gruppe
und Vorfall, nennt er dir die Datei zuerst, ohne die Angaben zu wiederholen,
und rührt sie nicht an, bis du entschieden hast. Besser legst du solche
Dateien gar nicht erst hinein: Was der Agent liest, geht an den Anbieter
(siehe *Bevor du anfängst*).

## So geht es weiter

Zum Weiterarbeiten Terminal öffnen, `cd` mit Leerzeichen, Ordner
hineinziehen, Enter, `claude`. Dann: „Lies die Übergabe und sag mir, wo wir
stehen.“

| Du sagst | Es passiert |
|---|---|
| „Nimm die neue Quelle auf.“ | Die Quelle wird Wissen im Wiki. |
| „Was wissen wir über …?“ | Antwort mit Fundstellen, auf Wunsch als Seite gesichert. |
| „Was hängt zusammen?“ | Verbindungen und Muster über Themen hinweg. |
| „Prüf das Wiki.“ | Bericht: tote Links, Veraltetes, Widersprüche, Lücken, Abgleich von Wortlaut und Belegen mit den Quellen. |
| „Übernimm meine alten Notizen.“ | Dein Bestand in `quellen/bestand/` wird ins Wiki verlinkt, in kleinen Runden (siehe oben). |
| „Schreib mir einen Brief an …“ | Ein Entwurf aus deinem Wiki als Datei in `ausgaben/`. Die Belege stehen darunter, damit du sie prüfen kannst; vor dem Versand löschst du sie. |
| „Feierabend.“ | Der Agent schreibt die Übergabe für das nächste Mal. |

Macht der Agent etwas falsch, sag es ihm. Was zweimal passiert, schlägt er
dir als Regel vor, und du entscheidest.

## Sicherheitsnetz

Kopier den Wiki-Ordner jede Woche auf einen USB-Stick oder an einen anderen
Ort. Mit `git` kannst du jede Änderung des Agenten nachsehen und zurücknehmen.

## Wenn es hakt

| Was du siehst | Was du tust |
|---|---|
| „command not found“ oder „nicht erkannt“ bei `claude`. | Terminal schließen, neu öffnen, noch einmal. Sonst hilft „Troubleshooting“ in der [Terminal-Anleitung](https://code.claude.com/docs/de/terminal-guide). |
| `cd` findet den Ordner nicht. | Den Ordner ins Fenster ziehen, statt den Namen zu tippen. |
| Die Anmeldung klappt nicht. | Prüfen, ob dein Claude-Konto bezahlt ist. |
| Der Agent weiß nichts von deinem Wiki. | Falscher Ordner: `/exit`, mit `cd` in den Wiki-Ordner, `claude`. |
| Obsidian zeigt die neuen Seiten nicht. | Unten links auf den Vault-Namen, „Vaults verwalten“ (Manage vaults), deinen Wiki-Ordner öffnen. |
| Der Agent tut etwas, das du nicht willst. | Esc drücken, dann sagen, was du stattdessen willst. |
