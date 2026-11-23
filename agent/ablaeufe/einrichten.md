# Ablauf: einrichten

**Wofür:** Dein Wiki auf dich zuschneiden: Themen, Fragen, Ton.

Dieser Ablauf ist der ausdrückliche Auftrag, die Felder in `SOUL.md` zu
füllen (anders als in `agent/ablaeufe/aufnehmen.md` § 2 auch die Bereiche),
aber erst nach dem Ja zum Entwurf (§ 3). Vor § 4 schreibst du nichts; bricht
die Person ab, bleibt alles, wie es war.

## 0 · Zustand

- **Erster Lauf:** Das Wiki ist nicht eingerichtet (`AGENTS.md` →
  *Sitzungsbeginn* 1). Bereiche, die es in `wiki/` schon gibt, nimmst du in
  den Entwurf auf.
- **Weiterer Lauf** („Fokus ändern“): Du ergänzt und änderst nur, was die
  Person nennt. Bestehende Bereiche, Seiten und Leitfragen bleiben; einen
  Bereich löschst oder benennst du nicht um (`L04`).
- **Nichts doppelt:** Was schon steht (Leitfrage, Ausgangslage, Seite eines
  Vorhabens, Index-Eintrag), legst du nicht noch einmal an. Ein Lauf mit
  denselben Antworten ändert nur Log und Übergabe.
- **Steckbrief:** Lies `EINRICHTUNG.md`; du änderst sie nie. Zeilen, die mit
  `*Beispiel:` beginnen, und Kommentare `<!-- … -->` sind Vorlage;
  ausgefüllt ist eine Frage, wenn darunter anderer Text steht.
- Fehlt `wiki/meta/leitfragen.md`, legst du sie in § 4 an (Kopf wie
  `wiki/meta/luecken.md`, Format `agent/regeln/SCHEMA.md` → *Leitfragen*).
- `quellen/` fasst du nicht an (`L01`); den Bestand erschließt
  `agent/ablaeufe/uebernehmen.md`.

## 1 · Datenschutz

Zwei Sätze an die Person: Was du liest, geht an den Anbieter des Werkzeugs;
in `SOUL.md` und im Wiki stehen Rollen statt Namen (`L03`). Dann:

- Nennt der Steckbrief einen Namen, sagst du ihr, dass er dort stehen bleibt
  (die Datei gehört ihr) und im Wiki die Rolle in eckigen Klammern dafür
  steht (`agent/regeln/SCHEMA.md` → *Die Stimme der Person*).
- Du fragst, ob Dienstliches oder Angaben über andere Menschen vorkommen
  werden, außer der Steckbrief beantwortet es. Bei Ja schlägst du vor, `L03`
  in einer eigenen Leitplanke zu verschärfen
  (`agent/leitplanken/FORMAT.md` → *Verschärfen und abweichen*; Beispiel:
  „dann nehme ich auch eine Telefonliste des Vorstands nicht auf“), und
  nennst `handbuch/EINRICHTEN.md` → *Bevor du anfängst*.

## 2 · Nachfragen

Was der Steckbrief beantwortet, fragst du nicht noch einmal. Den Rest in
höchstens drei Nachrichten mit je höchstens vier Fragen; weiß die Person
nicht weiter, nennst du die Beispiele in `handbuch/steckbriefe/`.

1. Rolle und Zweck: wofür das Wiki, was sie damit können will.
2. Drei bis fünf Fokusthemen, je: was sie schon weiß, welche anderen Wörter
   sie dafür benutzt (`Auch:`), ob es sich langsam, mittel oder schnell
   ändert (`Tempo:`).
3. Leitfragen: was das Wiki einmal beantworten soll, eine bis drei je Thema.
4. Bis zu drei Vorhaben, mit Termin, falls es einen gibt.
5. Quellen, denen sie traut oder misstraut.
6. Anrede, Ton, Erfahrung (`neu` oder `kundig`).
7. Gibt es alte Notizen oder Dateien (Bestand)?

Nichts davon ist Pflicht; ein Feld ohne Angabe behält in `SOUL.md` seine
Klammer. Nur ohne Themenbereich ist das Wiki nicht eingerichtet, das sagst
du.

## 3 · Entwurf zeigen

In einer Nachricht:

- `SOUL.md` je Feld, das sich ändert: alt → neu (beim ersten Lauf ist „alt“
  der Klammertext). Wo die Person selbst formuliert hat, steht ihr Wortlaut
  unverändert, auch unter *Wofür das Wiki da ist*.
- Die Vorschau: welche Bereiche (Ordnernamen nach `agent/regeln/SCHEMA.md` →
  *Dateinamen und Links*, mit `Tempo:` und `Auch:`), welche Leitfragen,
  welche Seiten du anlegst.
- Falls nötig der Vorschlag aus § 1 und das Angebot aus § 4.6.

Dann wartest du auf die Antwort. Ändert die Person etwas, zeigst du nur die
Änderung und wartest wieder.

## 4 · Schreiben

Nach dem Ja, in dieser Reihenfolge; `SOUL.md` zuletzt, denn erst sie macht
das Wiki „eingerichtet“:

1. **Leitfragen** in `wiki/meta/leitfragen.md` unter *Offen*, je Frage eine
   Zeile im Wortlaut der Person (`agent/regeln/SCHEMA.md` → *Leitfragen*).
2. **Bereiche:** Je Fokusthema, zu dem die Person mehr als einen Satz
   Vorwissen genannt hat, eine `notiz`
   `JJJJ-MM-TT-<bereich>-ausgangslage.md` in `wiki/<bereich>/`: ihr Wortlaut
   in einem `[!ich]`-Block nach `agent/regeln/SCHEMA.md` → *Die Stimme der
   Person*, darunter `*Ergänzt vom Agenten:*` und `## Verbindungen` nur zu
   Seiten, die es gibt. Je Block ein ganzer Absatz oder Listenpunkt,
   ungekürzt; nennt er mehrere Themen, steht er auf jeder ihrer Seiten ganz.
   **Von dir kommt keine Tatsache dazu** (`L02`), auch keine Definition.
   Sonst entsteht keine Seite und kein leerer Ordner; der Bereich steht dann
   nur in `SOUL.md` und im Index.
3. **Vorhaben:** je Vorhaben eine `projekt`-Seite im passenden Bereich
   (`agent/vorlagen/projekt.md`; passt keiner, fragst du im Entwurf): der
   Wortlaut der Person im `[!ich]`-Block wie in Schritt 2, `status: skizze`,
   `sicherheit: niedrig`, bis eine Quelle sie trägt. Ein Termin mit Datum
   kommt als `Offen: Frist JJJJ-MM-TT: was · [[seite]]` in den Log-Eintrag
   (§ 5), ein ungefährer („im März“) steht nur auf der Seite.
4. **Index und eigene Leitplanke:** jeden Bereich unter *Bereiche*, mit
   `Tempo:` und `Auch:` aus den Angaben der Person
   (`agent/regeln/SCHEMA.md` → *Index*), unter *Meta* `[[leitfragen]]`,
   falls noch nicht da. Eine bestätigte eigene Leitplanke aus § 1: Datei in
   `eigen/leitplanken/` und Zeile in `eigen/EIGEN.md`.
5. **`SOUL.md`:** Du **ersetzt nur die eckigen Klammern**, jede mit einer
   gezielten Ersetzung durch den bestätigten Inhalt; die Datei schreibst du
   nie neu.
   - Alles außerhalb der Klammern bleibt, auch Abschnitte der Person oder
     aus einer älteren Fassung.
   - Beim weiteren Lauf ersetzt du nur den Inhalt des genannten Feldes.
   - Fehlt ein Abschnitt der Vorlage (`SOUL.md` von vor 0.6), hängst du ihn
     mit Überschrift an.
   - Am Ende steht die Zeile `*Eingerichtet am JJJJ-MM-TT, zuletzt geändert
     am JJJJ-MM-TT.*`; ändert ein Lauf an `SOUL.md` nichts, bleibt auch sie.
6. **Sicherheitsnetz:** Ist `git` installiert, fragst du
   `git rev-parse --show-toplevel` ab (`agent/ablaeufe/feierabend.md` § 4):
   - Fehler (kein Repository): Du bietest `git init` und einen ersten Commit
     an; erst nach dem Ja.
   - Eigenes Repository: Hat es einen Remote auf das Fundus-Repository,
     sagst du der Person, dass sie dorthin nie hochladen soll, und änderst
     nichts daran.
   - Fremdes Repository: kein `git init`, kein Commit, nur ein Satz an die
     Person.

## 5 · Abschließen

1. Log-Eintrag vom Typ `einrichtung` mit `Neu:` und `Geändert:`; hat sich
   nichts geändert, die Zeile `Keine Änderung`.
2. Prüfwerkzeug und Zwischenstand der Übergabe
   (`agent/ablaeufe/feierabend.md` § 5).
3. An die Person, kurz: was jetzt eingerichtet ist; die drei Sätze für den
   Anfang („Nimm die neue Quelle auf.“, „Was wissen wir über …?“,
   „Feierabend.“); als nächster Schritt bei Bestand `übernehmen`, sonst je
   Leitfrage, welche **Art** von Quelle sie voranbringt (Studie, Leitfaden,
   Erfahrungsbericht …). Titel oder Autorinnen nennst du nie aus dem
   Gedächtnis (`L02`).
