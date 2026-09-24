# Fundus

**Ein Wiki, das ein Sprachmodell für dich führt.** Du legst Quellen ab,
Artikel, PDFs oder eigene Notizen, und stellst Fragen. Der Agent liest,
fasst zusammen, verknüpft und hält das Wissen aktuell. Der Agent ist ein
KI-Programm, das auf deinem Rechner Dateien lesen und schreiben darf, erprobt
ist Claude Code. Alles liegt als einfache Textdateien in einem Ordner, und
Obsidian, ein kostenloses Notizprogramm, zeigt dir diesen Ordner als Wiki an.
Obsidian nennt so einen Ordner einen Vault.

Fundus ist eine deutschsprachige Grundausstattung dafür: Ordner, Regeln,
Abläufe und eine Vorlage für die Haltung des Agenten. Fachwissen bringt
Fundus nicht mit. Das kommt aus deinen eigenen Quellen oder aus
[Modulen](handbuch/MODULE.md), die du später dazuholen kannst.

> KI-Hinweis: Die Texte in diesem Repository sind mit Hilfe eines
> Sprachmodells (KI) geschrieben, die Entscheidungen darin haben Menschen
> getroffen. Die Fassung 0.2.0 ist ein Entwurf, den noch niemand von außen
> durchgesehen hat.

## Anfangen

Du brauchst einen Mac oder einen Windows-Rechner, Obsidian und ein bezahltes
Konto für Claude Code. Rechne mit einer halben Stunde, dazu kommt die Zeit
für die beiden Installationen.

1. Auf der Projektseite
   [github.com/4e696b6f/fundus](https://github.com/4e696b6f/fundus) den
   grünen Knopf „Code“ drücken, dann „Download ZIP“. Die ZIP-Datei entpacken, den Ordner an einen festen Platz legen,
   etwa in „Dokumente“, und ihm einen Namen ohne Leerzeichen geben, zum
   Beispiel `mein-wiki`.
2. [Obsidian](https://obsidian.md) installieren und den Ordner darin als Vault
   öffnen.
3. `SOUL.md` ausfüllen: wofür du das Wiki willst und wie der Agent klingen soll.
4. Claude Code installieren, im Ordner starten, anmelden und als Erstes sagen:
   „Ich fange gerade an. Lies SOUL.md und sag mir, was du hier tust.“
5. Eine Quelle in `quellen/eingang/` legen und sagen: „Nimm die neue Quelle auf.“

Nach ein paar Minuten siehst du in Obsidian neue Seiten im Ordner `wiki/`,
die Quelle liegt jetzt in `quellen/archiv/`, und der Agent sagt dir in
wenigen Sätzen, was neu ist.

Den Überblick über das ganze Wiki, mit allem, was fällig ist, zeigt dir
`ansicht/uebersicht.html` im Browser ([handbuch/ANSICHT.md](handbuch/ANSICHT.md)).

Was der Agent liest, schickt das Werkzeug an seinen Anbieter, bei Claude Code
an Anthropic. Lege nur Quellen ab, die dort hin dürfen.

Jeder Schritt einzeln erklärt, auch das Terminal und was Claude Code beim
ersten Start fragt: [handbuch/EINRICHTEN.md](handbuch/EINRICHTEN.md).

## Die Idee

Andrej Karpathy hat im April 2026 beschrieben, wie ein Sprachmodell statt
eines Chatverlaufs ein Wiki pflegen kann: Rohquellen bleiben unverändert, das
Modell schreibt daraus verlinkte Seiten, und eine Steuerungsdatei sagt ihm,
wie
([llm-wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)).
Was du einmal erarbeitet hast, steht danach in einer Seite und wächst mit
jeder neuen Quelle weiter.

Fundus setzt diese Idee um und ergänzt, was sich im täglichen Betrieb eines
solchen Wikis bewährt hat:

- **Wer spricht.** Jede Seite sagt, ob sie deine Worte enthält, die
  Zusammenfassung des Agenten oder beides. Deine eigenen Gedanken stehen
  wörtlich in einem eigenen Block und werden nie umformuliert.
- **Verfall.** Seiten und Regeln, die an einem Datum veralten, tragen dieses
  Datum. Die Prüfung meldet sie, bevor sie still falsch werden.
- **Leitplanken.** Regeln, die der Agent immer einhält, stehen als eigene
  Dateien in einem festen Format: wann sie greifen, was gilt und was der
  Agent stattdessen anbietet.
- **Linsen.** Der Agent sucht zu jedem Begriff die stärkste Gegenposition und
  nach Mustern, die in verschiedenen Themen dieselbe Form haben. So wird aus
  einer Sammlung ein Netz.
- **Gedächtnis zwischen Sitzungen.** Eine kurze Übergabe am Ende jeder
  Sitzung und eine Lernschleife, in der aus wiederholten Korrekturen Regeln
  werden.

## Aufbau

Zum Anfangen brauchst du nur `SOUL.md` und `quellen/eingang/`. Alles andere
liest der Agent selbst, wenn er es braucht.

```
AGENTS.md        Steuerung: was der Agent wann liest und tut
CLAUDE.md        verweist für Claude Code auf AGENTS.md
SOUL.md          Haltung und Ton des Agenten, von dir ausgefüllt
regeln/          Seitenformat (SCHEMA.md) und Linsen (LINSEN.md)
leitplanken/     Regeln, die immer gelten, samt Format
ablaeufe/        aufnehmen, fragen, prüfen, verknüpfen, Sitzung beenden
quellen/         deine Rohquellen: eingang/ (neu), archiv/ (verarbeitet), anhaenge/
wiki/            das Wiki, das der Agent schreibt
gedaechtnis/     Übergabe zwischen Sitzungen, Lernschleife
module/          eingehängte Fachmodule, daneben deine Einstellungen dazu
vorlagen/        Vorlagen je Seitentyp für Obsidian
ansicht/         uebersicht.html: dein Wiki im Browser, ohne Internet
handbuch/        für Menschen: Einrichten, Module, Ansicht
```

`quellen/` gehört dir, `wiki/` dem Agenten und `module/` den Leuten, die das
jeweilige Modul pflegen. Deine Einstellungen zu einem Modul in
`module/<modulname>.lokal.md` gehören wieder dir. Der Agent ändert nur, was
ihm gehört, und diese Einstellungen nur, wenn du ihn darum bittest. Deine
eigenen Gedanken kommen trotzdem ins Wiki: Du sagst sie dem Agenten, und er
übernimmt sie wörtlich in einen eigenen Block auf der passenden Seite.

## Module

Ein Modul bringt Fachwissen mit, das ein Agent allein nicht hat: Regeln,
Abläufe, Vorlagen und belegtes Wissen zu einem Gebiet. Zum Anfangen brauchst
du keins. Welche es gibt, wie man sie einhängt und wie man selbst eins baut:
[handbuch/MODULE.md](handbuch/MODULE.md).

## Was Fundus nicht ist

Fundus ist keine App und kein Dienst. Du installierst nur Obsidian und dein
KI-Werkzeug, und außer dem Sprachmodell selbst läuft nichts auf einem fremden
Server. Ein Programm, das du starten musst, gibt es nicht: Die Ansicht ist
eine einzelne HTML-Datei, die dein Browser öffnet.
Alles, was der Agent tut, steht als lesbare Anleitung in `ablaeufe/`, und du
kannst jede davon ändern.

## Fehler melden

Fehler, Fragen und Vorschläge gehören in die
[Issues](https://github.com/4e696b6f/fundus/issues) des Projekts. Schreib
dort nichts aus deinem eigenen Wiki hinein, was andere nicht lesen sollen:
Issues sind öffentlich.

## Lizenz

GNU General Public License 3.0 (GPL-3.0), siehe [LICENSE](LICENSE).
Copyright © 2026 Nikolaj Podlesny. Module haben eigene Lizenzen.

Stand: Version 0.2.0, Entwurf. Änderungen in [CHANGELOG.md](CHANGELOG.md).
