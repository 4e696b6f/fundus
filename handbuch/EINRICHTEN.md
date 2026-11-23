# Einrichten

> Auch diese Anleitung ist mit Hilfe einer KI geschrieben, mehr dazu im
> KI-Hinweis der [README](../README.md).

In einer halben Stunde, plus Installationszeit, kommst du bis zur ersten
aufgenommenen Quelle. Programmieren musst du nicht, ein Terminal brauchst du
auch nicht: Du installierst zwei Programme und sprichst dann mit dem Agenten
wie in einem Chat.

## Was du brauchst

- Einen Mac oder Windows-Rechner mit Internet.
- [Obsidian](https://obsidian.md), kostenlos und ohne Anmeldung. Es zeigt dir
  das Wiki an.
- Die Claude-App für Mac oder Windows. Darin steckt Claude Code, das
  KI-Werkzeug, das in deinem Ordner Dateien liest und schreibt. Es braucht
  ein bezahltes Claude-Konto, siehe [Preise](https://claude.com/pricing). Ein
  Chatfenster im Browser reicht nicht; andere Werkzeuge, die `AGENTS.md`
  lesen, etwa Codex, gehen auch.
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

Dateien, deren Name mit einem Punkt beginnt (`.gitkeep`, `.gitignore`),
kannst du ignorieren. Sie halten unter anderem die leeren Ordner, die diese
Anleitung nennt; löschen musst du sie nicht.

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

## Schritt 3 · Den Steckbrief ausfüllen (freiwillig)

Klick in Obsidian links auf `EINRICHTUNG.md`. Unter jeder Frage steht ein
Beispiel in Schräglage; schreib deine Antwort darunter, Stichworte genügen:
wofür du das Wiki willst, mit welchen Themen du anfängst, welche Fragen es
einmal beantworten soll, woran du gerade arbeitest, welchen Quellen du traust
und wie der Agent dich ansprechen soll. Zehn Minuten reichen.

Zwei Angaben helfen dem Agenten besonders:

- **Bei jedem Thema:** welche anderen Wörter du dafür benutzt und ob es sich
  langsam, mittel oder schnell ändert. Mit den Wörtern findet er später, was
  du meinst; am Tempo erkennt er, wann eine Quelle zu alt ist.
- **Bei einem Vorhaben:** der Termin, falls es einen gibt. Daraus wird eine
  Frist, an die er dich erinnert.

Zum Abgucken liegen ausgefüllte Beispiele in `handbuch/steckbriefe/`, alle
erfunden; nimm den, der dir am nächsten ist, kopier seinen Text in
`EINRICHTUNG.md` und änder ihn, bis er stimmt:

| Beispiel | Für wen |
|---|---|
| [lehrerin.md](steckbriefe/lehrerin.md) | Beruf: Unterricht vorbereiten, Fachwissen sammeln |
| [verein.md](steckbriefe/verein.md) | Ehrenamt: Vorstand eines Vereins |
| [buch.md](steckbriefe/buch.md) | Lesen: ein Buch oder eine Reihe begleiten |
| [garten.md](steckbriefe/garten.md) | Privat: ein Hobby über Jahre |

Du kannst den Schritt auch überspringen: Dann fragt der Agent in Schritt 5
alles im Gespräch ab. Schreib Rollen statt Namen („meine Teamleitung“), denn
auch der Steckbrief geht an den Anbieter. Steht doch ein Name darin, bleibt
er im Steckbrief stehen, die Datei gehört dir; ins Wiki schreibt der Agent
an seiner Stelle die Rolle.

## Schritt 4 · Die Claude-App einrichten

Auf der [Seite zur Claude-App](https://code.claude.com/docs/de/desktop-quickstart)
den Download für dein System wählen und die App installieren wie jedes
andere Programm. Starten und mit deinem Claude-Konto anmelden.

Oben in der Seitenleiste auf **Code** klicken. Darunter steht ein
Eingabefeld und unter ihm eine Zeile mit Schaltern:

1. **Umgebung** (der erste Schalter): den obersten Eintrag unter „Lokal“
   (Local) wählen. So arbeitet der Agent auf deinem Rechner.
2. **Ordner** (daneben): „Ordner öffnen …“ (Open folder …) und deinen
   Wiki-Ordner aussuchen.
3. **Modus**: „Änderungen akzeptieren“ (Accept edits). Dann legt der Agent
   Seiten an, ohne bei jeder einzelnen zu fragen; alles andere fragt er
   weiter vorher. Eine Quelle berührt oft zehn und mehr Seiten.
4. Steht dort ein Schalter **Worktree**, lass ihn aus. Sonst schreibt der
   Agent in eine Kopie und nicht in dein Wiki.

Fragt die App, ob du den Dateien im Ordner vertraust, wählst du Ja. Es sind
nur Textdateien.

**Lieber im Terminal?** Wer es kennt: Claude Code nach der
[Terminal-Anleitung](https://code.claude.com/docs/de/terminal-guide)
installieren, im Wiki-Ordner `claude` starten. Alles Weitere gilt genauso;
wo hier ein Knopf steht, drückst du dort Esc.

## Schritt 5 · Die erste Sitzung: einrichten

Tippe als Erstes:

> Richte mein Wiki ein.

(oder kurz `/einrichten`). Der Agent liest seine Regeln und deinen
Steckbrief, fragt in höchstens drei Runden nach, was noch fehlt, und zeigt
dir dann einen Entwurf: was er in `SOUL.md` einträgt, welche Themenbereiche
er anlegt, welche Leitfragen er notiert und welche Seiten entstehen. Erst
nach deinem Ja schreibt er. Danach bietet er dir an, ein Sicherheitsnetz mit
`git` einzurichten, falls das installiert ist.

`SOUL.md` gehört dir. Sie besteht aus kurzen Feldern in eckigen Klammern: für
wen der Agent arbeitet, Ton, wofür das Wiki da ist, Themenbereiche, woran du
gerade arbeitest, welchen Quellen du traust und was der Agent bei dir lassen
soll. Der Agent ersetzt nur die Klammern und zeigt dir vorher je Feld, was
dort stand und was dort stehen wird. Was du selbst formuliert hast,
übernimmt er im Wortlaut. Du kannst die Datei jederzeit selbst ändern.

Für jedes Vorhaben legt er eine eigene Seite an, mit deinem Satz. Nennst du
einen Termin, steht er danach als Frist in der Übergabe.

Kommen Namen oder Dienstliches vor, schlägt der Agent eine strengere Regel
für Angaben über andere Menschen vor und nennt ein Beispiel, was danach nicht
mehr geht. Überleg kurz, ob du das willst: Eine solche Regel hält er auch
dann ein, wenn du später im Einzelfall etwas anderes möchtest, bis du sie
änderst.

Größere Aufträge kündigt der Agent vorher in einem Satz an, damit du
weißt, was passiert. Was er geändert hat, zeigt die App als kleine Zahl wie
`+12 -1`; ein Klick darauf zeigt es Zeile für Zeile. Fragt er um Erlaubnis
für einen Befehl, etwa für das Sicherheitsnetz, kannst du einmal zustimmen
oder es für diesen Ordner immer erlauben.

Stell die Fenster nebeneinander, links die Claude-App, rechts Obsidian. Dann
siehst du, was der Agent schreibt, während er es schreibt.

## Schritt 6 · Die erste Quelle

Leg im Finder oder Explorer eine Datei nach `quellen/eingang/`, etwa ein PDF,
einen Artikel aus dem Web Clipper oder eine eigene Notiz. Die Notiz legst du
in Obsidian an: Rechtsklick links auf `eingang` → „Neue Notiz“ (New note), ein
paar Sätze schreiben. Zieh Quellen nicht ins Eingabefeld der App: Dort landen
sie nicht im Eingang, und der Agent kann sie nicht archivieren.

Was du in `Backticks` setzt, auch in einer fremden Quelle, übernimmt der Agent
wörtlich als deine Stimme in einen farbig abgesetzten `[!ich]`-Block. Eine
Aufgabe mit `` `#später` `` steht am Ende der Sitzung in der Übergabe. Dann schreib:

> Nimm die neue Quelle auf.

Der Agent legt eine Seite zur Quelle an und schreibt, was sie zu deinen
Themen sagt, auf Themenseiten: eine Seite je Thema, über alle Quellen
hinweg. Dort schlägst du später nach, die Seite zur Quelle ist der Beleg.
Dann verschiebt er die Quelle nach `quellen/archiv/`. Fragt er, ob er einen
neuen Bereich anlegen darf, sag Ja. Nach ein paar Minuten sagt er dir, was
neu ist, und in Obsidian stehen die Seiten links unter `wiki/`. Wie fertige
Seiten aussehen, zeigen die [Beispiele](beispiele/README.md).

Gut zu wissen:

- **Mehrere Dateien** nimmt er eine nach der anderen auf und meldet sich
  nach jeder („2 von 8: … aufgenommen“).
- **Lange PDFs** (Richtwert: über 30 Seiten) liest er nicht ganz, sondern
  die Teile, die zu deinen Leitfragen und Vorhaben passen. Welche das waren,
  steht auf der Seite zur Quelle im Feld `gelesen:`. Suchst du etwas
  anderes darin, frag einfach: Er sieht dann in der Datei selbst nach.
- **Rückfragen** zu einer Datei halten die anderen nicht auf. Deine Antwort
  merkt er sich mit deinem Satz und fragt nicht noch einmal.
- **Soll eine Datei nicht ins Wiki,** sag es. Sie bleibt im Eingang liegen,
  bis du sie selbst im Finder oder Explorer löschst; der Agent löscht keine
  Quellen.

## Du hast schon Notizen?

Viele fangen nicht bei null an: Es gibt einen Ordner mit Word-Dateien und
PDFs, vielleicht einen alten Obsidian-Vault. Abtippen musst du nichts.

0. **Erst aussortieren.** Nimm heraus, was Angaben über andere Menschen
   enthält: Namen oder anderes über Kinder, Eltern oder Kolleginnen, auch nur
   Initialen mit Gruppe und Vorfall, etwa Protokolle oder Fallnotizen. Um
   solche Angaben zu erkennen, muss der Agent die Datei lesen, und damit geht
   sie an den Anbieter (siehe *Bevor du anfängst*).
1. Kopier die übrigen Dateien nach `quellen/bestand/`, gern mit ihren
   Unterordnern. Kopieren, nicht verschieben: So bleibt dein Original, wo es
   war. Ein alter Obsidian-Vault darf samt seinem Ordner `.obsidian` hinein,
   der stört nicht. Aus einem alten fundus-Wiki kopierst du nur `wiki/`.
2. Schreib dem Agenten:

> Ich habe meine alten Notizen nach quellen/bestand gelegt. Übernimm sie bitte.

**Was der Agent tut.** Er sieht jede Datei durch und führt eine Liste in
`wiki/meta/bestand.md`: was darin steht und wie weit er ist. Findet er doch
eine Datei mit Angaben über andere Menschen, liest er nicht weiter, nennt sie
dir zuerst, ohne die Angaben zu wiederholen, und verarbeitet sie nicht, bis
du entschieden hast. Er schlägt dir Themenbereiche vor und wartet auf deine
Antwort. Dann nimmt er sich zur Probe höchstens zehn Dateien vor. Danach
entscheidest du: Runde für Runde weiter, oder du sagst „mach alles fertig“.
Im Wiki entstehen Seiten zu deinen Themen, die auf die alten Dateien
verweisen, mit einem Satz, was jeweils darin steht. Fragen beantwortet er aus
dem Wiki: Was er noch nicht erschlossen hat, findet er dabei nicht.

**Was er nicht tut.** Er ändert, verschiebt und löscht keine Datei in
`quellen/bestand/`, auch nicht, wenn er fertig ist. Deine eigenen Anmerkungen
kopiert er nicht ins Wiki, er verweist auf sie. Links in einem alten Vault,
die ins Leere zeigen, zählt er, repariert sie aber nicht. Soll eine alte Datei
richtig ins Wiki aufgenommen werden, legst du eine Kopie nach
`quellen/eingang/`.

**Word-Dateien** (`.docx`) und andere Formate, die er nicht lesen kann, zählt
er nur. Öffne sie in Word, speichere sie über „Datei“ → „Speichern unter“ als
PDF und leg das PDF daneben.

## So geht es weiter

Zum Weiterarbeiten die Claude-App öffnen, **Code**, eine neue Sitzung; unter
dem Eingabefeld deinen Wiki-Ordner wählen, falls er nicht schon dort steht.
Dann: „Wo stehen wir?“ (oder `/stand`).

Am Anfang reichen drei Sätze:

| Du sagst | Es passiert |
|---|---|
| „Nimm die neue Quelle auf.“ | Die Quelle wird Wissen im Wiki. |
| „Was wissen wir über …?“ | Antwort mit Fundstellen, auf Wunsch als Seite gesichert. |
| „Feierabend.“ | Der Agent schreibt die Übergabe für das nächste Mal. |

Alles Weitere schlägt dir der Agent vor, wenn es passt: eine Prüfung nach
zehn Quellen, das Übernehmen alter Notizen, einen Brief aus deinem Wiki.
Meint er, eine deiner Leitfragen sei beantwortet, fragt er dich; erst nach
deinem Ja gilt sie als beantwortet. Die
ganze Liste mit Kurzbefehlen steht in der [README](../README.md#drei-sätze-zum-anfangen),
die Wörter, die dabei fallen, im [Glossar](GLOSSAR.md).

Was sich nachzählen lässt (Links ins Leere, fehlende Angaben, Daten in der
Zukunft, Fristen), rechnet ein mitgeliefertes Prüfwerkzeug aus. Der Agent
startet es selbst, nach jedem Auftrag, der Seiten ändert, wenn auf deinem
Rechner `node` vorhanden ist. Installieren musst du dafür nichts: Ohne
`node` prüft er von Hand und sagt dir das, und denselben Bericht siehst du
jederzeit in der [Ansicht](ANSICHT.md#prüfung) unter „Prüfung“.

Macht der Agent etwas falsch, sag es ihm. Er notiert die Korrektur und nennt
dir bei „Feierabend“, wie viele es waren. Was zweimal passiert, schlägt er
dir als Regel vor, und du entscheidest. Solche Regeln und alles, was du
sonst anpasst, stehen in `eigen/`; dort bleiben sie bei jedem Update.

## Neue Fundus-Version

Auf [github.com/4e696b6f/fundus](https://github.com/4e696b6f/fundus) „Code“ →
„Download ZIP“ drücken und die ZIP-Datei, ohne sie zu entpacken, in deinen
Wiki-Ordner legen. Dann dem Agenten schreiben:

> Aktualisiere Fundus mit der ZIP im Ordner.

(oder `/aktualisieren`). Er sagt dir, was neu ist, sichert vorher (mit `git`
selbst, sonst bittet er dich, den Ordner zu kopieren), tauscht nur die
Dateien von Fundus aus und lässt deine unberührt: `SOUL.md`, `EINRICHTUNG.md`,
`eigen/`, `quellen/`, `wiki/`, `ausgaben/`. Danach kannst du die ZIP löschen.

Nach dem Austausch stellt der Agent dein Wiki auf die neue Version um und
sagt dir, was neu ist. Beim Schritt auf 0.6 heißt das: Er bringt die
Übergabe in die neue Form, bietet einmal an, aus deiner `SOUL.md` die
Abschnitte zu entfernen, die jetzt in seinen Regeln stehen, und legt dir die
Leitfragen vor, die bisher als beantwortet galten. An `SOUL.md` ändert er
nichts ohne dein Ja.

Kommst du von 0.4, kennt dein Agent den Befehl noch nicht. Schreib dann:

> Aktualisiere Fundus mit der ZIP im Ordner. Der Ablauf steht in der ZIP
> unter agent/ablaeufe/aktualisieren.md.

## Sicherheitsnetz

Kopier den Wiki-Ordner jede Woche auf einen USB-Stick oder an einen anderen
Ort. Mit `git` kannst du jede Änderung des Agenten nachsehen und zurücknehmen;
beim Einrichten bietet der Agent an, es für dich anzulegen. „Gesichert“
sagt er nur, wenn er wirklich gesichert hat. Hast du Fundus
mit `git clone` geholt, lade dein Wiki nie zu GitHub hoch: Das
Fundus-Repository ist öffentlich.

## Wenn es hakt

| Was du siehst | Was du tust |
|---|---|
| **Code** fehlt, oder die App will ein Upgrade. | Prüfen, ob dein Claude-Konto bezahlt ist; nach der Anmeldung die App neu starten. |
| Windows: Die App verlangt Git. | Die App aktualisieren; ältere Versionen fragten danach, obwohl es nicht nötig ist. |
| Der Agent weiß nichts von deinem Wiki. | Falscher Ordner: neue Sitzung, unter dem Eingabefeld den Wiki-Ordner wählen. |
| Der Agent sagt, er habe Seiten angelegt, aber Obsidian zeigt sie nicht. | Unter dem Eingabefeld ist **Worktree** an: neue Sitzung, Worktree aus, den Auftrag noch einmal geben. |
| Obsidian zeigt die neuen Seiten nicht. | Unten links auf den Vault-Namen, „Vaults verwalten“ (Manage vaults), deinen Wiki-Ordner öffnen. |
| Der Agent sagt, er habe „von Hand geprüft“. | Auf deinem Rechner fehlt `node`. Du musst nichts tun; den gerechneten Bericht zeigt die [Ansicht](ANSICHT.md#prüfung) unter „Prüfung“. |
| Die Ansicht warnt vor einem Datum in der Zukunft. | Meist hat der Agent ein Datum geraten. Sag ihm „prüfen“ und welcher Tag heute ist. |
| Der Agent kann ein eingescanntes PDF nicht lesen. | Nicht jedes Programm liest Scans. Leg die Seite als Bild ab (`.png`, `.jpg`), das sieht sich der Agent an; sonst den Text abtippen. |
| Der Agent tut etwas, das du nicht willst. | Auf den Stopp-Knopf klicken (im Terminal: Esc), dann sagen, was du stattdessen willst. |
| `/` zeigt die Kurzbefehle nicht. | Neue Sitzung im Wiki-Ordner starten. In anderen Programmen als Claude Code gibt es sie nicht; dort schreibst du die Sätze. |
| Im Terminal: „command not found“ bei `claude`. | Terminal schließen, neu öffnen, noch einmal; sonst „Troubleshooting“ in der [Terminal-Anleitung](https://code.claude.com/docs/de/terminal-guide). |
