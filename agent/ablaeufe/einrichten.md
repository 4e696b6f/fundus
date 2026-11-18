# Ablauf: einrichten

**Wofür:** Dein Wiki auf dich zuschneiden: Themen, Fragen, Ton.

Auslöser: „einrichten“, „Fokus ändern“, `/einrichten`, oder die Person nimmt
deinen Vorschlag aus `AGENTS.md` → *Sitzungsbeginn* 1 an.

Dieser Ablauf ist der ausdrückliche Auftrag, `SOUL.md` zu schreiben, aber
erst nach dem Ja zum Entwurf (§ 3). Anders als bei `agent/ablaeufe/aufnehmen.md`
§ 2 trägst du die Bereiche hier selbst in `SOUL.md` ein. Vor § 4 schreibst
du nichts; bricht die Person ab, bleibt alles, wie es war.

## 0 · Zustand

- **Erster Lauf:** Das Wiki ist nicht eingerichtet (`AGENTS.md` →
  *Sitzungsbeginn* 1). Das gilt auch, wenn es in `wiki/` schon Bereiche gibt
  (nach einem Abbruch oder aus `agent/ablaeufe/aufnehmen.md` § 2): Dann
  zeigst du den ganzen Entwurf und nimmst die vorhandenen Bereiche darin auf.
- **Weiterer Lauf** („Fokus ändern“, das Wiki ist eingerichtet): Du
  ergänzt und änderst nur, was die Person nennt. Bestehende Bereiche, Seiten
  und Leitfragen bleiben; einen Bereich löschst oder benennst du nicht um
  (`L04`).
- **Nach einem Abbruch:** Was schon steht (dieselbe Leitfrage, die
  Ausgangslage eines Bereichs, ein Index-Eintrag), legst du nicht noch
  einmal an.
- **Steckbrief:** Lies `EINRICHTUNG.md`. Zeilen, die mit `*Beispiel:` beginnen,
  und Kommentare `<!-- … -->` sind Vorlage; ausgefüllt ist eine Frage, wenn
  darunter anderer Text steht.
- Fehlt `wiki/meta/leitfragen.md`, legst du sie in § 4 an (Kopf wie
  `wiki/meta/luecken.md`, Format `agent/regeln/SCHEMA.md` → *Leitfragen*).

## 1 · Datenschutz

Zwei Sätze an die Person: Was du liest, geht an den Anbieter des Werkzeugs;
in `SOUL.md`, Steckbrief und Wiki stehen Rollen statt Namen (`L03`). Dann
fragst du, ob Dienstliches oder Angaben über andere Menschen vorkommen werden,
außer der Steckbrief beantwortet es. Bei Ja schlägst du vor, `L03` in einer
eigenen Leitplanke zu verschärfen (`agent/leitplanken/FORMAT.md` →
*Verschärfen und abweichen*), und nennst `handbuch/EINRICHTEN.md` → *Bevor
du anfängst*.

## 2 · Nachfragen

Was der Steckbrief beantwortet, fragst du nicht noch einmal. Den Rest in
höchstens drei Nachrichten mit je höchstens vier Fragen; weiß die Person
nicht weiter, nennst du die Beispiele in `handbuch/steckbriefe/`.

1. Rolle und Zweck: wofür das Wiki, was sie damit können will.
2. Drei bis fünf Fokusthemen, je: was sie schon weiß, welche anderen Wörter
   sie dafür benutzt, wie schnell sich das Thema ändert.
3. Leitfragen: was das Wiki einmal beantworten soll, eine bis drei je Thema.
4. Bis zu drei Vorhaben.
5. Quellen, denen sie traut oder misstraut.
6. Anrede, Ton, Erfahrung (`neu` oder `kundig`).
7. Gibt es alte Notizen oder Dateien (Bestand)?

Nichts davon ist Pflicht. Was offen bleibt, bleibt als Klammertext in
`SOUL.md` stehen, außer bei den Themenbereichen: Ohne mindestens einen
Bereich ist das Wiki nicht eingerichtet, das sagst du.

## 3 · Entwurf zeigen

In einer Nachricht:

- `SOUL.md` als ganzer neuer Text (beim weiteren Lauf nur die geänderten
  Abschnitte). Aufbau und Überschriften der Vorlage bleiben; du füllst die
  Klammern und löschst ihren Hilfetext. Die Stimme der Person bleibt ihre:
  Wo sie selbst formuliert hat, übernimmst du den Wortlaut.
- Die Vorschau: welche Bereiche (Ordnernamen nach `agent/regeln/SCHEMA.md` →
  *Dateinamen und Links*), welche Leitfragen, welche Seiten du anlegst.
- Falls nötig der Vorschlag aus § 1 und das Angebot aus § 4.5.

Dann wartest du auf die Antwort. Ändert die Person etwas, zeigst du nur die
Änderung und wartest wieder.

## 4 · Schreiben

Nach dem Ja, in dieser Reihenfolge; `SOUL.md` zuletzt, denn erst sie macht
das Wiki „eingerichtet“, und ein Abbruch davor lässt sich mit einem neuen
Lauf zu Ende bringen:

1. **Leitfragen** in `wiki/meta/leitfragen.md` unter *Offen*, je Frage eine
   Zeile im Wortlaut der Person (`agent/regeln/SCHEMA.md` → *Leitfragen*).
2. **Bereiche:** Je Fokusthema, zu dem die Person Vorwissen genannt hat, eine
   `notiz` `JJJJ-MM-TT-<bereich>-ausgangslage.md` in `wiki/<bereich>/`: ihr
   Wortlaut in einem `[!ich]`-Block nach `agent/regeln/SCHEMA.md` → *Die
   Stimme der Person* (aus dem Steckbrief oder dem Gespräch), darunter
   `*Ergänzt vom Agenten:*` und `## Verbindungen` nur zu Seiten, die es
   gibt. Je Block ein ganzer Absatz oder Listenpunkt aus dem Steckbrief,
   ungekürzt; nennt ein Absatz mehrere Themen, steht er auf jeder ihrer
   Seiten ganz. **Von dir kommt keine Tatsache dazu** (`L02`), auch keine
   Definition. Ohne Vorwissen entsteht keine Seite und kein leerer Ordner;
   der Bereich steht dann nur in `SOUL.md` und im Index.
3. **Index:** jeden Bereich unter *Bereiche* (`agent/regeln/SCHEMA.md` →
   *Index*), unter *Meta* `[[leitfragen]]`, falls noch nicht da.
4. Bestätigte eigene Leitplanke aus § 1: Datei in `eigen/leitplanken/` und
   Zeile in `eigen/EIGEN.md`.
5. **`SOUL.md`** wie bestätigt. Am Ende, nach dem letzten Abschnitt, die Zeile
   `*Eingerichtet am JJJJ-MM-TT, zuletzt geändert am JJJJ-MM-TT.*` (nur zur
   Information; ob das Wiki eingerichtet ist, entscheiden die
   Themenbereiche). Ändert ein weiterer Lauf an `SOUL.md` nichts, bleibt
   auch diese Zeile.
6. **Sicherheitsnetz:** Gibt es keinen Ordner `.git` und ist `git`
   installiert, bietest du an, `git init` und einen ersten Commit zu machen;
   erst nach dem Ja. Gibt es `.git` mit einem Remote auf das Fundus-Repository,
   sagst du der Person, dass sie dorthin nie hochladen soll, und änderst
   nichts daran.

## 5 · Abschließen

1. Log-Eintrag vom Typ `einrichtung` mit `Neu:` und `Geändert:`; hat sich
   nichts geändert, die Zeile `Keine Änderung`.
2. Zwischenstand der Übergabe (`agent/ablaeufe/feierabend.md` § 5).
3. An die Person, kurz: was jetzt eingerichtet ist; die drei Sätze für den
   Anfang („Nimm die neue Quelle auf.“, „Was wissen wir über …?“,
   „Feierabend.“); als nächster Schritt bei Bestand `übernehmen`, sonst für
   jede Leitfrage, welche **Art** von Quelle sie voranbringt (Studie,
   Leitfaden, Erfahrungsbericht …). Titel oder Autorinnen nennst du nur aus
   dem Wiki oder der Person, nie aus dem Gedächtnis (`L02`).

## Was immer gilt

- Ein zweiter Lauf mit denselben Antworten legt nichts doppelt an und
  ändert keine Seite; nur Log und Übergabe bekommen eine Zeile.
- `quellen/` fasst du nicht an (`L01`); den Bestand erschließt
  `agent/ablaeufe/uebernehmen.md`.
- `EINRICHTUNG.md` gehört der Person, du änderst sie nicht.
