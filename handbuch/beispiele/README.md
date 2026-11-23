# Beispiele: so sieht „fertig“ aus

> Auch diese Beispiele sind mit Hilfe einer KI geschrieben, mehr dazu im
> KI-Hinweis der [README](../../README.md).

Fünf Dateien aus einem erfundenen Wiki über einen Gemüsegarten, passend zum
Steckbrief [garten.md](../steckbriefe/garten.md). Das Merkblatt, den Verein
und die Notiz gibt es nicht. Die Dateien zeigen dir und deinem Agenten, wie
eine fertige Seite aussieht.

Sie gehören nicht zu deinem Wiki. Sie liegen im Handbuch, die Ansicht und die
Prüfung zählen sie nicht mit, und dein Agent schreibt hier nichts hinein.
Über jeder Datei steht eine Zeile, die sie als Beispiel kennzeichnet; diese
Zeile gehört nicht zum Muster.

| Datei | Was sie ist | Wo sie in einem echten Wiki läge |
|---|---|---|
| [schnecken-fernhalten.md](schnecken-fernhalten.md) | Themenseite (Typ `begriff`) | im Themenordner *schaedlinge* unter `wiki/` |
| [quelle-merkblatt-schnecken.md](quelle-merkblatt-schnecken.md) | Seite zu einer Quelle (Typ `quelle`) | ebenda |
| [2026-06-14-schnecken-hochbeet.md](2026-06-14-schnecken-hochbeet.md) | eigene Notiz (Typ `notiz`) | ebenda |
| [beetplan-fruehjahr-2027.md](beetplan-fruehjahr-2027.md) | Vorhaben (Typ `projekt`) | im Themenordner *gemuese* unter `wiki/` |
| [UEBERGABE.md](UEBERGABE.md) | der Zettel für die nächste Sitzung | `eigen/gedaechtnis/UEBERGABE.md` |

## Worauf du achten kannst

**Themenseite.** Hier schlägst du nach. Sie sammelt, was alle Quellen zu
einem Thema sagen, jede Aussage mit Fundstelle und Link zur Quellenseite. Wo
das Merkblatt sich selbst einschränkt („nicht gesichert“), bleibt die
Einschränkung an der Aussage. Deine eigene Erfahrung steht wörtlich im
farbigen Kasten daneben, mit dem Hinweis, aus welcher Notiz sie stammt. Im
Kopf steht eine Gegenposition: der stärkste Einwand gegen die Seite.

**Quellenseite.** Sie sagt nur, was die Quelle sagt, und ist der Beleg für
die Themenseite. `gelesen:` hält fest, ob der Agent die Quelle ganz gelesen
hat oder nur einen Ausschnitt. Der erste Absatz nennt, wer spricht, den Stand
und die Schwäche der Quelle. Was keine eigene Themenseite bekommen hat, steht
unter *Offene Fragen*.

**Notiz.** Dein Wortlaut steht ganz im Kasten, samt Datum und Liste. Aus
`#später` am Zeilenanfang wird `\#später`: Obsidian zeigt weiter „#später“,
macht aber kein Schlagwort daraus. Der Agent ergänzt nur unter der Zeile
*Ergänzt vom Agenten*, hier die Verbindungen.

**Vorhaben.** Dein Satz aus dem Steckbrief steht wörtlich da. Der Termin, den
der Agent errechnet hat, steht mit Rechenweg auf der Seite und ist als
Folgerung gekennzeichnet; als Frist steht er auch in der Übergabe.

**Übergabe.** Unter *Offen* steht je Datei, die noch im Eingang liegt, genau
eine Zeile: eine `Rückfrage:` (der Agent wartet auf dich) oder ein
`Entschieden:` mit deinem Satz und dem Datum (er fragt nicht noch einmal).
Die ersten vier Zeilen unter *Nicht vergessen* stehen immer da, dann folgen
Fristen und was du dir selbst vorgemerkt hast.

## Für den Agenten

Die Regeln stehen in `agent/regeln/SCHEMA.md` → *Wann eine Seite fertig ist*
und für die Übergabe in `agent/ablaeufe/feierabend.md` § 1. Weicht ein
Beispiel davon ab, gelten die Regeln. Inhalte aus diesen Dateien übernimmst
du nie in ein Wiki: Sie sind erfunden.

## In Obsidian

Die Beispiele liegen in deinem Ordner und erscheinen deshalb in Obsidians
Suche und im Graphen. Stört dich das: Einstellungen → „Dateien und Links“ →
„Ausgeschlossene Dateien“ (Excluded files), dort `handbuch/beispiele/`
eintragen.
