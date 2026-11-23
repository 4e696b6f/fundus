# Ablauf: fragen

**Wofür:** Im Wiki nachschlagen, mit Fundstellen.

Jede Sachfrage (was, warum, wie viel, was tun), auch mitten in anderer
Arbeit und zu Seiten, die du gerade selbst geschrieben hast: Du suchst im
Wiki, statt aus dem Gesprächsverlauf zu antworten, auch wenn der Index die
Antwort schon zu haben scheint. Fragen nach deiner eigenen Arbeit („was hast
du geändert?“) sind keine Sachfragen.

## 1 · Suchen mit Stichwörtern, nicht mit der Frage

Aus „Wie wirkt sich Schlafmangel aufs Lernen aus?“ werden zwei oder drei
Suchwörter in der Grundform: `schlaf lernen`.

Suche in `wiki/` und, falls es eins gibt, im Modul des Fachgebiets, nicht im
übrigen Ordner; das Modul ist kein Rückfall für dünne Treffer. Lies die
drei Seiten mit den meisten Treffern und antworte aus dem, was dort steht,
nicht aus dem Gedächtnis.

Bei einer Frage nach Zahl, Dauer, Menge oder Vergleich verfolgst du die
Links dieser drei Seiten eine Stufe weiter, auch bei genug Treffern.

## 2 · Wenn es dünn wird: breiter suchen

Bei weniger als zwei Treffern, einer Frage nach einem Konzept oder wenn den
Treffern die erfragte Angabe fehlt (eine Zahl, eine Teilgruppe), erweiterst
du die Suche, Stufe für Stufe:

1. Synonyme und Oberbegriffe (`schlaf` → `erholung`, `muedigkeit`), die
   Wörter hinter `Auch:` im Index und das Feld `aliases:` der Treffer
2. die Links der besten Treffer eine Stufe weiter verfolgen
3. die übrigen Module in `module/`, falls das Thema dort vorkommen könnte
4. **die Rohdateien**, immer, auch bei `gelesen: 'ganz'`: die Datei im
   Archiv jeder thematisch passenden `quelle`-Seite mit den Suchwörtern
   durchsuchen (PDF: Text herausziehen, sonst
   `agent/regeln/PROGRAMME.md`), ebenso Passendes im Bestand laut `wiki/meta/bestand.md`. Bei einem Treffer
   antwortest du mit der Fundstelle aus der Rohdatei, ergänzt die
   `quelle`-Seite samt `gelesen:` und berichtigst jede Lücke oder Aussage,
   die das Gegenteil sagt.

Erst danach gilt: Dazu steht nichts im Wiki. „Quelle X sagt dazu nichts“
schreibst du, auch als Lücke, nur mit dem Suchweg.

## 3 · Antworten

- mit Fundstelle: `[[seite]]` und, wo vorhanden, die Stelle in der Quelle;
  aus einem Modul den Pfad der Moduldatei
- Was nicht im Wiki steht (allgemeines Wissen, deine Schlussfolgerung, auch
  eine aus Wiki-Seiten, ein Handlungsvorschlag), kennzeichnest du im selben
  Satz: „Nicht aus dem Wiki: …“. Du gibst es nie als Inhalt einer Wiki-Seite
  aus. Verbietet eine Leitplanke das Ergänzen, ergänzt du nicht.
- bei `sicherheit: strittig` beide Seiten nennen
- Antwort mit Zahl, Datum oder Frist: vorher die Belegprobe
  (`agent/regeln/SCHEMA.md` → *Belegprobe*).
- Einen Termin, den die Antwort braucht, rechnest du genau aus, statt ihn
  zu schätzen („Mitte Februar“); er ist eine Frist: sofort die Zeile
  `Frist JJJJ-MM-TT: was · [[seite]]` in die Übergabe
  (`agent/ablaeufe/feierabend.md` § 1).
- Fehlte ein Beleg, den die Antwort gebraucht hätte, trägst du die Frage im
  selben Zug nach `wiki/meta/luecken.md` ein (Format dort). Eine
  gekennzeichnete Schlussfolgerung allein ist keine Lücke.

## 4 · Die Antwort nicht im Chat verlieren

Hat die Antwort etwas zusammengeführt, das so noch nirgends steht, bietest
du an, sie als Seite anzulegen, meist als `bruecke` oder als Ergänzung einer
bestehenden Seite.

Gleicht die Frage einer offenen Leitfrage und ist sie jetzt belegt
beantwortet, schlägst du das vor (`agent/regeln/SCHEMA.md` → *Leitfragen*).

Eintrag in `wiki/log.md` nur, wenn eine Seite entstanden oder geändert ist;
eine neue Zeile in `luecken.md` ist eine Änderung. Dann auch das
Prüfwerkzeug: `node agent/werkzeug/pruefen.js`
(`agent/ablaeufe/pruefen.md` § 0).
