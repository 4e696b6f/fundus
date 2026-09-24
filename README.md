# Fundus

Fundus ist ein Ordner, in dem ein KI-Programm ein Wiki für dich führt: Du
legst Quellen hinein, es schreibt daraus verlinkte Seiten.

KI-Hinweis: Ich schreibe Fundus und die Anleitungen mit KI-Unterstützung.
Aufbau und Regeln verantworte ich. Version 0.2.1 hat außer mir noch niemand
durchgesehen, es wird also etwas haken. Fehler und Fragen bitte in die
[Issues](https://github.com/4e696b6f/fundus/issues).

## Was du davon hast

Du legst Artikel, PDFs oder Notizen ab. Der Agent, also das KI-Programm, fasst
sie zusammen, verknüpft sie und meldet Veraltetes und Widersprüche. Deine
eigenen Gedanken bleiben erkennbar: Eine eigene Notiz ist ganz deine Stimme,
und in einem fremden Text markierst du deine Anmerkungen mit `Backticks`. Der
Agent übernimmt beides wörtlich und setzt es farbig ab. Alles bleibt als
Textdateien auf deinem Rechner. Obsidian, ein kostenloses Notizprogramm, zeigt
sie als Wiki an.

Gedacht ist Fundus für alle, die viel lesen und sammeln, aber keine Zeit
haben, daraus selbst Notizen zu pflegen.

## Was du brauchst

Einen Mac oder Windows-Rechner, [Obsidian](https://obsidian.md) und Claude
Code. Das ist das KI-Programm, das hier den Agenten macht. Es braucht ein
bezahltes Claude-Konto. Was der Agent liest, geht an Anthropic, den Anbieter
von Claude. Leg nur ab, was dort hin darf.

## So fängst du an

Rechne mit einer halben Stunde. Jeder Klick steht in
[handbuch/EINRICHTEN.md](handbuch/EINRICHTEN.md), hier die Kurzfassung:

1. Auf [github.com/4e696b6f/fundus](https://github.com/4e696b6f/fundus) „Code“
   und „Download ZIP“ drücken, den Ordner entpacken und an einen festen Platz
   legen, etwa in „Dokumente“.
2. In Obsidian „Ordner als Vault öffnen“ (Open folder as vault) wählen und den
   Ordner aussuchen. Vault nennt Obsidian so einen Ordner.
3. In Obsidian `SOUL.md` öffnen und die Stellen in eckigen Klammern ausfüllen:
   wofür das Wiki ist und wie der Agent klingen soll.
4. Claude Code installieren und im Ordner starten. Das läuft im Terminal, dem
   Fenster, in das man Befehle tippt. Wie das ohne Vorkenntnisse geht, steht im
   Handbuch unter Schritt 4.
5. Eine Datei in `quellen/eingang/` legen und dem Agenten im Terminal
   schreiben: „Nimm die neue Quelle auf.“ Er fragt dabei, ob er Dateien anlegen
   darf. Danach stehen die neuen Seiten in Obsidian unter `wiki/`.

## Was du sagen kannst

| Du sagst | Was passiert |
|---|---|
| „Nimm die neue Quelle auf.“ | Aus der Quelle werden Wiki-Seiten. |
| „Was wissen wir über …?“ | Antwort aus deinem Wiki, mit Fundstellen. |
| „Prüf das Wiki.“ | Bericht: tote Links, Veraltetes, Widersprüche, Lücken. |
| „Feierabend.“ | Der Agent schreibt auf, wo ihr steht. Beim nächsten Start weiß er es sonst nicht mehr. |

## Was im Ordner liegt

| Was | Wofür |
|---|---|
| `SOUL.md` | Füllst du aus: wofür das Wiki ist. |
| `quellen/` | Deine Quellen: `eingang/` neu, `archiv/` verarbeitet. |
| `wiki/` | Schreibt der Agent. Du liest. |
| `ansicht/uebersicht.html` | Dein Wiki im Browser, ohne Internet ([Anleitung](handbuch/ANSICHT.md)). |
| `handbuch/` | Anleitungen für dich. |
| `module/` | Fertige Wissenspakete, siehe unten. |

Alles andere (`AGENTS.md`, `regeln/`, `ablaeufe/`, `leitplanken/`, `vorlagen/`,
`gedaechtnis/`) sind Regeln und Gedächtnis des Agenten, lesbar und änderbar.
`CLAUDE.md` enthält nur den Verweis auf `AGENTS.md`, damit Claude Code die
Regeln findet. `.obsidian/` hält die Einstellungen dieses Ordners, etwa die
Farbe deiner Gedanken-Blöcke, nicht deine persönlichen. `CHANGELOG.md` listet,
was sich je Version ändert. Das brauchst du erst, wenn du eine neue Version
holst. Anfassen musst du nichts davon, löschen solltest du es nicht.

## Module

Fachwissen bringt Fundus nicht mit. Es kommt aus deinen Quellen oder aus
Modulen, fertigen Wissenspaketen, die du zum Anfangen nicht brauchst:
[handbuch/MODULE.md](handbuch/MODULE.md).

## Herkunft, Fragen, Lizenz

Die Idee stammt von Andrej Karpathy, der sie als
[llm-wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
beschrieben hat. Andere KI-Programme, die `AGENTS.md` lesen, etwa Codex, gehen
auch, sind aber weniger erprobt.

Fehler und Fragen gehören in die
[Issues](https://github.com/4e696b6f/fundus/issues), die Fehlerliste dieses
Projekts. Dafür brauchst du ein kostenloses GitHub-Konto. Was dort steht, ist
öffentlich: Schreib nichts aus deinem Wiki hinein, was andere nicht lesen
sollen.

Lizenz [GPL-3.0](LICENSE), Copyright © 2026 Nikolaj Podlesny.
