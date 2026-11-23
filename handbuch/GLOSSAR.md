# Glossar

Sechzehn Wörter, mehr brauchst du für Fundus nicht.

| Wort | Was es heißt |
|---|---|
| **Agent** | Das KI-Programm, das dein Wiki führt. Es liest, schreibt Seiten und hält sich an die Regeln in diesem Ordner. Welches Programm das ist, wählst du selbst ([Programm wählen](EINRICHTEN.md#programm-wählen)); die Regeln sind für alle dieselben. |
| **Quelle** | Eine Datei, aus der Wissen kommt: Artikel, PDF, eigene Notiz. Neue legst du in `quellen/eingang/`, verarbeitete liegen in `quellen/archiv/`, alte Sammlungen in `quellen/bestand/`. |
| **Bereich** | Ein Themenordner in `wiki/`, etwa `wiki/garten/`. Mit welchen du anfängst, steht in `SOUL.md`. |
| **Themenseite** | Die Seite zu einem Thema, über alle Quellen hinweg. Hier schlägst du nach. Die Seiten zu einzelnen Quellen (ihr Name beginnt mit `quelle-`) sind die Belege dazu. |
| **Leitfrage** | Eine Frage, die dein Wiki einmal beantworten soll. Sie gibt die Richtung vor (`wiki/meta/leitfragen.md`). Als beantwortet gilt sie erst, wenn du Ja sagst. |
| **Deine Stimme** | Was du selbst geschrieben hast, steht wörtlich in einem farbigen Kasten (`[!ich]`). Der Agent formuliert es nie um. |
| **Steckbrief** | `EINRICHTUNG.md`: deine Antworten für die Einrichtung. Freiwillig. |
| **Übergabe** | Der Zettel, den der Agent sich für die nächste Sitzung schreibt (`eigen/gedaechtnis/UEBERGABE.md`). |
| **Rückfrage** | Eine Frage des Agenten an dich, die noch offen ist. Sie steht in der Übergabe, bis du antwortest. |
| **Entschieden** | Deine Antwort, in der Übergabe festgehalten mit deinem Satz und dem Datum. Danach fragt der Agent dazu nicht noch einmal. |
| **Frist** | Ein Termin, der dich betrifft, etwa ein Anmeldeschluss aus einer Quelle oder ein Tag, den der Agent für dich errechnet hat. Fristen stehen in der Übergabe; ist eine vorbei, sagt der Agent es zuerst. |
| **Leitplanke** | Eine Regel, die immer gilt, etwa: Quellen bleiben unverändert, nichts wird erfunden. |
| **Belegprobe** | Bevor eine Themenseite, eine Antwort mit Zahl oder ein Text für andere fertig ist, sieht der Agent jede Zahl, jeden Namen und jedes Datum einzeln an der Fundstelle nach. Wochentage und Fristen rechnet er aus, statt sie zu schätzen. |
| **Prüfwerkzeug** | Ein kleines mitgeliefertes Programm (`agent/werkzeug/pruefen.js`), das nachzählt, was sich nachzählen lässt: Links ins Leere, fehlende Angaben, Daten, Fristen. Der Agent startet es selbst. Denselben Bericht zeigt dir die Ansicht unter „Prüfung“ ([Anleitung](ANSICHT.md#prüfung)); installieren musst du dafür nichts. |
| **Ausgabe** | Ein Text, den der Agent auf deinen Wunsch für andere schreibt, etwa ein Brief (`ausgaben/`). |
| **Modul** | Ein fertiges Wissenspaket zu einem Fachgebiet, das du einhängen kannst (`module/`). |

Wie fertige Seiten aussehen, zeigen die [Beispiele](beispiele/README.md).
Alles, was du selbst anpasst, gehört nach `eigen/`. Dort überschreibt es
kein Update.
