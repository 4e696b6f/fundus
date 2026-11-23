# Ablauf: Zusammenhänge

**Wofür:** Verbindungen zwischen Themen suchen und Brücken vorschlagen.

Jeder Lauf geht durch § 1 bis § 5, mit eigenem Log-Eintrag; ein Satz im
Eintrag `aufnehmen` ersetzt ihn nicht.

## 1 · Umfang festlegen

- Nach einem Auftrag zum Aufnehmen (ohne Nachfrage): die Seiten, die er
  angelegt oder geändert hat.
- Nach einem Nachzügler (`agent/ablaeufe/aufnehmen.md` § 7): nur dessen
  Seiten.
- Auf Zuruf: die heute neuen oder geänderten, wenn die Person nichts
  anderes nennt.

Nie das ganze Wiki.

## 2 · Je Seite

- **Gegenlinks:** fehlende setzen.
- **Nachbarn:** mit den zwei oder drei tragenden Begriffen der Seite suchen,
  passende Seiten mit Begründung verlinken.
- **Projekte und Vorhaben:** Berührt die Seite ein laufendes `projekt` oder
  ein Vorhaben aus `SOUL.md` → *Woran ich gerade arbeite*, sagst du es der
  Person sofort, in einem Satz. Ist der Abschnitt leer (auch nur mit dem
  Klammertext der Vorlage), fragst du nicht nach. Ein errechneter Termin ist
  eine Frist (`agent/ablaeufe/feierabend.md` § 1).
- **Linsen:** fehlende `gegenposition:` nachtragen, `gleiche_form:` prüfen;
  ab dem dritten Vorkommen die Musterseite anlegen (`agent/regeln/LINSEN.md` →
  *Gleiche Form*).

## 3 · Muster über Bereiche hinweg

Gesucht: zwei Seiten aus verschiedenen Themenbereichen mit derselben
Struktur, nicht nur demselben Stichwort. Bei nur einem Bereich entfällt die
Suche nach Paaren.

1. **Anlegen nur nach Zustimmung der Person.** Du schlägst vor.
2. **Struktur:** Für jede Seite im Umfang fragst du, ob eine Seite aus einem
   anderen Bereich dieselbe Form hat (erst `gleiche_form:`, dann die Suche).
3. **Die Person selbst:** Verbindet ein `[!ich]`-Block im Umfang zwei
   Bereiche, etwa mit einer Methode aus dem einen für den anderen, ist das ein
   Kandidat, auch ohne gleiche Struktur.
4. **Jeder Vorschlag** und jede Idee, die später Brücke werden könnte, wird
   eine Zeile `Offen: Brückenidee …` im Log-Eintrag (§ 5).
5. **Zustimmung:** Die Seite entsteht nach `agent/regeln/SCHEMA.md`, `[!ich]` aus
   der Rohdatei, danach die Belegprobe (`agent/regeln/SCHEMA.md` →
   *Belegprobe*). Einen neuen Ordner `wiki/bruecken/` oder `wiki/muster/`
   trägst du in `wiki/index.md` ein.
6. **Ablehnung:** festhalten nach `agent/ablaeufe/aufnehmen.md` § 7.

## 4 · Widersprüche

Sagt eine neue Seite etwas anderes als eine alte oder eine Moduldatei:
vorgehen wie `agent/ablaeufe/aufnehmen.md` § 4.

## 5 · Bericht

An die Person, kurz: gesetzte Links, vorgeschlagene Brücken, neue
Widersprüche, betroffene Projekte und Vorhaben. Dazu ein Log-Eintrag vom Typ
`verknuepfen`: was du gesucht und was du gefunden hast, auch wenn es nichts
war. „Geprüft“ allein genügt nicht. Zum Schluss das Prüfwerkzeug:
`node agent/werkzeug/pruefen.js` (`agent/ablaeufe/pruefen.md` § 0).

```markdown
## [2026-09-23] verknuepfen | Auftrag Artikel Wiederholen, Notiz Lernplan
Gesucht: `wiederholen abstand`, `lernplan woche`; Gegenlinks aller vier Seiten
Geändert: spaced-repetition.md ↔ lernkurven.md (gleicher Mechanismus)
Brücken: [!ich] in 2026-09-23-lernplan verbindet keine zwei Bereiche
Widersprüche: keine neuen · Projekte, Vorhaben: keins betroffen
Offen: Brückenidee lernkurven × sport (verzögerte Rückmeldung), vorgeschlagen
```
