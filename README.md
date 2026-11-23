# Fundus

Fundus ist ein Ordner, in dem ein KI-Programm ein Wiki für dich führt: Du
legst Quellen hinein, es schreibt daraus verlinkte Seiten.

KI-Hinweis: Ich schreibe Fundus und die Anleitungen mit KI-Unterstützung.
Version 0.7 ist ein Entwurf und hat außer mir noch niemand durchgesehen, es
wird also etwas haken. Fehler und Fragen bitte in die
[Issues](https://github.com/4e696b6f/fundus/issues).

## Was du davon hast

Du legst Artikel, PDFs oder Notizen ab. Der Agent, also das KI-Programm, fasst
jede Quelle auf einer Seite zusammen und trägt, was sie zu deinen Themen sagt,
auf Themenseiten ein: eine Seite je Thema, über alle Quellen hinweg, jede
Aussage mit Fundstelle. Dort schlägst du nach. Er verknüpft die Seiten und
meldet Veraltetes und Widersprüche. Beim
Einrichten fragt er, womit du anfängst und welche Fragen dein Wiki einmal
beantworten soll, und richtet es danach aus. Deine eigenen Gedanken bleiben
erkennbar: Eine eigene Notiz ist ganz deine Stimme, und in einem fremden Text
markierst du deine Anmerkungen mit `Backticks`. Der Agent übernimmt beides
wörtlich und setzt es farbig ab. Alles bleibt als Textdateien auf deinem
Rechner. Obsidian, ein kostenloses Notizprogramm, zeigt sie als Wiki an.

Gedacht ist Fundus für alle, die viel lesen und sammeln, aber keine Zeit
haben, daraus selbst Notizen zu pflegen.

## Was du brauchst

Einen Mac oder Windows-Rechner, [Obsidian](https://obsidian.md) und ein
Agenten-Programm: ein KI-Programm, das in deinem Ordner Dateien liest und
schreibt. Fundus ist an keins gebunden. Diese fünf sind vorbereitet:

| Programm | Für wen | Konto und Kosten (Art) | Wohin deine Texte gehen |
|---|---|---|---|
| **Claude-App** mit Claude Code | Einstieg ohne Terminal, empfohlen | bezahltes Claude-Konto ([Pläne](https://claude.com/pricing)) | an Anthropic |
| **Codex** | wer ein ChatGPT-Konto hat | bezahltes ChatGPT-Konto oder API-Schlüssel ([Preise](https://learn.chatgpt.com/docs/pricing)) | an OpenAI |
| **Gemini CLI** | Terminal | API-Schlüssel oder Lizenz über eine Organisation; mit privatem Google-Konto seit Juni 2026 nicht mehr ([Hinweis von Google](https://developers.google.com/gemini-code-assist/docs/deprecations/code-assist-individuals)) | an Google |
| **pi** | Terminal; eigenes oder lokales Modell | Abo, API-Schlüssel oder lokales Modell ([Anleitung](https://docs.pi.dev/latest/quickstart)) | an den Anbieter, den du wählst; lokales Modell: bleibt auf deinem Rechner |
| **opencode** | Terminal oder Desktop-App; eigenes oder lokales Modell | Konto, API-Schlüssel oder lokales Modell ([Anbieter](https://opencode.ai/docs/providers)) | an den Anbieter, den du wählst; lokales Modell: bleibt auf deinem Rechner |

Was der Agent liest, geht an den Anbieter deines Programms. Leg nur ab, was
dort hin darf. Die ganze Tabelle mit den Seiten der Hersteller zum
Datenschutz steht im
[Handbuch](handbuch/EINRICHTEN.md#programm-wählen). Erprobt ist Fundus
bisher mit Claude-Modellen, zuletzt mit pi; Codex, Gemini CLI und opencode
sind vorbereitet, aber noch nicht im Test gelaufen.

## So fängst du an

Rechne mit einer halben Stunde. Jeder Klick steht in
[handbuch/EINRICHTEN.md](handbuch/EINRICHTEN.md), hier die Kurzfassung:

1. Auf [github.com/4e696b6f/fundus](https://github.com/4e696b6f/fundus) „Code“
   und „Download ZIP“ drücken, den Ordner entpacken und an einen festen Platz
   legen, etwa in „Dokumente“.
2. In Obsidian „Ordner als Vault öffnen“ (Open folder as vault) wählen und den
   Ordner aussuchen. Vault nennt Obsidian so einen Ordner.
3. Wenn du magst: `EINRICHTUNG.md` öffnen und die Fragen beantworten, wofür
   das Wiki ist und womit du anfängst. Beispiele liegen in
   `handbuch/steckbriefe/`.
4. Dein Agenten-Programm installieren und im Wiki-Ordner starten. In der
   Claude-App: links **Code** wählen und unter dem Eingabefeld den Ordner
   öffnen. Im Terminal: in den Ordner wechseln und `claude`, `codex`,
   `gemini`, `pi` oder `opencode` starten. Was du je Programm einstellst,
   steht im Handbuch unter
   [Schritt 4](handbuch/EINRICHTEN.md#schritt-4--dein-programm-einrichten).
5. Dem Agenten schreiben: „Richte mein Wiki ein.“ Er fragt nach, was im
   Steckbrief fehlt, zeigt dir einen Entwurf und legt nach deinem Ja los.
   Danach legst du die erste Datei in `quellen/eingang/`.

## Drei Sätze zum Anfangen

| Du sagst | Was passiert |
|---|---|
| „Nimm die neue Quelle auf.“ | Aus der Quelle werden Wiki-Seiten. |
| „Was wissen wir über …?“ | Antwort aus deinem Wiki, mit Fundstellen. |
| „Feierabend.“ | Der Agent schreibt auf, wo ihr steht. |

Mehr brauchst du am Anfang nicht. Wenn es passt, schlägt der Agent dir den
nächsten Schritt vor, etwa eine Prüfung. Alles, was er kann:

| Du sagst | Befehl | Was passiert |
|---|---|---|
| „Richte mein Wiki ein.“ | `/einrichten` | Themen, Fragen und Ton festlegen, auch später zum Ändern. |
| „Wo stehen wir?“ | `/stand` | Was anliegt und was als Nächstes dran ist. |
| „Nimm die neue Quelle auf.“ | `/aufnehmen` | Aus der Quelle werden Wiki-Seiten. |
| „Was wissen wir über …?“ | `/fragen` | Antwort aus deinem Wiki, mit Fundstellen. |
| „Übernimm meinen Bestand.“ | `/uebernehmen` | Alte Dateien aus `quellen/bestand/` werden ins Wiki verlinkt, ohne dass sich an ihnen etwas ändert ([Anleitung](handbuch/EINRICHTEN.md#du-hast-schon-notizen)). |
| „Schreib mir ein Rundschreiben zu …“ | `/schreiben` | Ein Entwurf aus deinem Wiki in `ausgaben/`, die Belege in einem Abschnitt darunter. |
| „Prüf das Wiki.“ | `/pruefen` | Bericht: tote Links, Veraltetes, Widersprüche, Lücken. Was sich nachzählen lässt, rechnet ein Prüfwerkzeug aus. |
| „Was hängt zusammen?“ | `/zusammenhaenge` | Verbindungen über deine Themen hinweg. |
| „Bau mir eine Übersicht, die zeigt …“ | `/ansicht-bauen` | Eine eigene Auswertung oder Grafik für den Browser, in `eigen/ansichten/`; sie bleibt auf deinem Rechner. |
| „Aktualisiere Fundus mit der ZIP im Ordner.“ | `/aktualisieren` | Eine neue Fundus-Version übernehmen; deine Dateien bleiben, wie sie sind ([Anleitung](handbuch/EINRICHTEN.md#neue-fundus-version)). |
| „Feierabend.“ | `/feierabend` | Der Agent schreibt auf, wo ihr steht. |

Die Sätze wirken in jedem Programm. Die Befehle sind dasselbe in kurz und
heißen überall gleich; nur das Zeichen davor hängt vom Programm ab: `/name`
in Claude Code, Gemini CLI und opencode, `$name` in Codex (die Liste zeigt
`/skills`), `/skill:name` in pi.

## Welche Dateien gehen

| Datei | Geht? |
|---|---|
| Markdown (`.md`), Text (`.txt`), Webseiten über den [Obsidian Web Clipper](https://obsidian.md/clipper) | ja |
| PDF | ja; lange (Richtwert: über 30 Seiten) liest der Agent in Ausschnitten und sagt, welche. Eingescannte liest nicht jedes Programm: Dann sagt der Agent das, und du legst die Seite als Bild ab. |
| Bilder (`.png`, `.jpg`) | ja, der Agent sieht sie sich an |
| Word (`.docx`) und andere | nein: in Word „Speichern unter“ → PDF |

## Was Fundus nicht ist

- **Kein Automat.** Nichts wird verarbeitet, bevor du es sagst. So prüft der
  Agent vorher, ob eine Datei Angaben über andere Menschen enthält.
- **Keine Suchmaschine im Netz.** Das Wiki weiß, was in deinen Quellen steht.
  Was fehlt, sagt der Agent, statt es zu erfinden.
- **Kein Speicher für Chats oder Akten über Menschen.** Namen und Angaben
  über andere kommen nur auf deinen ausdrücklichen Wunsch hinein.
- **Kein Löschwerkzeug.** Quellen bleiben, wie sie sind; Seiten löscht der
  Agent nur auf deinen Auftrag.
- **Nichts zum Installieren außer Obsidian und deinem Agenten-Programm.** Keine
  Datenbank, kein Programmierwissen. Das mitgelieferte Prüfwerkzeug nutzt
  der Agent, wenn auf deinem Rechner `node` vorhanden ist; nötig ist das
  nicht, denselben Bericht zeigt die Ansicht im Browser.

## Was im Ordner liegt

| Was | Wofür |
|---|---|
| `EINRICHTUNG.md` | Dein Steckbrief für die Einrichtung, freiwillig. |
| `SOUL.md` | Wofür das Wiki ist und wie der Agent klingt. Füllt der Agent beim Einrichten mit dir aus. |
| `quellen/` | Deine Quellen: `eingang/` neu, `archiv/` verarbeitet, `bestand/` deine alten Notizen und Dateien. |
| `wiki/` | Schreibt der Agent. Du liest. |
| `ausgaben/` | Texte, die der Agent auf deinen Auftrag für dich schreibt. Sie gehören dir. |
| `eigen/` | Was du an Fundus anpasst, und das Gedächtnis des Agenten. Bleibt bei jedem Update. |
| `ansicht/uebersicht.html` | Dein Wiki im Browser, ohne Internet, mit einer Auswertung deiner Leitfragen, Belege und Fristen und einer Prüfung, die tote Links, fehlende Angaben und falsche Daten nachzählt ([Anleitung](handbuch/ANSICHT.md)). |
| `handbuch/` | Anleitungen für dich, dazu ein [Glossar](handbuch/GLOSSAR.md) und [Beispiele](handbuch/beispiele/README.md) fertiger Seiten. |
| `module/` | Fertige Wissenspakete, siehe unten. |

Alles andere sind die Regeln und Befehle des Agenten: `AGENTS.md` und
`agent/` die Regeln, für alle Programme dieselben; `.claude/`, `.agents/`,
`.gemini/` und `.opencode/` dieselben Befehle in der Form, die das jeweilige
Programm liest. Alles lesbar, aber bei jedem Update ersetzt, außer Dateien,
deren Name mit `eigen-` beginnt; welche Dateien das sind, steht in
`agent/KERN.txt`. Obsidian blendet `agent/` in Suche und Graph aus.
`CLAUDE.md` und `GEMINI.md` enthalten nur den Verweis auf `AGENTS.md`, damit
Claude Code und Gemini CLI die Regeln finden. `.obsidian/` hält die Einstellungen
dieses Ordners, etwa die Farbe deiner Gedanken-Blöcke. `CHANGELOG.md` listet,
was sich je Version ändert. Anfassen musst du nichts davon, löschen solltest
du es nicht.

## Module

Fachwissen bringt Fundus nicht mit. Es kommt aus deinen Quellen oder aus
Modulen, fertigen Wissenspaketen, die du zum Anfangen nicht brauchst:
[handbuch/MODULE.md](handbuch/MODULE.md).

## Herkunft, Fragen, Lizenz

Die Idee stammt von Andrej Karpathy, der sie als
[llm-wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
beschrieben hat.

Fehler und Fragen gehören in die
[Issues](https://github.com/4e696b6f/fundus/issues), die Fehlerliste dieses
Projekts. Dafür brauchst du ein kostenloses GitHub-Konto. Was dort steht, ist
öffentlich: Schreib nichts aus deinem Wiki hinein, was andere nicht lesen
sollen.

Lizenz [GPL-3.0](LICENSE), Copyright © 2026 Nikolaj Podlesny.
