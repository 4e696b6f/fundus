# LINSEN — wie der Agent denkt, nicht nur zusammenfasst

Eine Zusammenfassung wiederholt eine Quelle. Das Wiki soll mehr können: zeigen,
wo eine Aussage schwach ist, woher etwas kommt und wo zwei ferne Themen
dieselbe Form haben. Dafür gibt es Linsen. Jede ist eine konkrete Frage an eine
Seite, und ihr Ergebnis steht als Feld im Frontmatter. So sieht man später, ob
eine Seite schon durchdacht ist.

## Pflicht: die Gegenposition

```yaml
gegenposition: 'Die stärkste Einwendung in einem Satz.'
```

Pflichtfeld bei `begriff` und `bruecke` (alle Pflichtfelder:
`regeln/SCHEMA.md`), wahlweise bei einer `notiz`, die eine These vertritt.
Gemeint ist nicht irgendein Einwand, sondern der stärkste, den eine kundige
Person vorbringen würde. Findest du keinen, ist die Aussage entweder banal oder
du hast das Thema noch nicht verstanden. Beides gehört in die Seite.

Die Gegenposition ist ein Einwand, keine Tatsache, und braucht deshalb keine
Fundstelle. Stützt sie sich auf eine Seite im Wiki, verlinkst du sie (im Feld
in einfachen Anführungszeichen). Zahlen darin brauchen eine Fundstelle wie
überall (`L02`).

## Wahlweise, wo sie etwas zeigen

**Vier Ursachen** (nach Aristoteles), bei Begriffen und Brücken, die mehr als
eine Sicht vertragen:

```yaml
ursache_stoff: 'woraus es besteht'
ursache_form: 'welche Struktur es hat'
ursache_wirkung: 'was es in Gang setzt'
ursache_zweck: 'wozu es da ist'
```

**Gleiche Form** (Isomorphie): Zwei Seiten aus verschiedenen Bereichen haben
dieselbe Struktur, nicht nur dasselbe Stichwort. Dann bekommen beide

```yaml
gleiche_form: ['rueckkopplung-verzoegert']
```

und das Muster eine eigene `begriff`-Seite in `wiki/muster/`, sobald es dreimal
vorkommt. `wiki/muster/` ist ein Meta-Bereich wie `wiki/meta/`: Du legst ihn
ohne Nachfrage an, wenn die erste Musterseite entsteht. Eine Brücke
(`type: bruecke`) braucht das Feld immer, denn es ist ihr Grund.

**Mehrwert im Verbund**, beim Prüfen (`ablaeufe/pruefen.md` § 3):

```yaml
mehrwert: niedrig    # hoch | mittel | niedrig
```

`niedrig` heißt: Die Seite wäre allein genauso nützlich wie vernetzt. Das ist
kein Fehler, aber ein Kandidat, sie mit einer anderen zusammenzulegen. Das
entscheidet die Person.

## Wann welche Linse

| Seitentyp | Gegenposition | Vier Ursachen | Gleiche Form |
|---|---|---|---|
| `quelle` | nein | nein | nein |
| `begriff` | ja | wenn ergiebig | wenn gefunden |
| `bruecke` | ja | wenn ergiebig | ja |
| `notiz` | wenn sie eine These vertritt | wenn ergiebig | wenn gefunden |
| andere | nein | nein | nein |

## Ausbauen

Wer mehr will, ergänzt hier eigene Linsen, zum Beispiel eine Systemsicht (Was
ist Hebel, was Puffer?) oder eine Handlungssicht (Wer sind die Beteiligten,
welche Züge haben sie?). Jede neue Linse braucht dreierlei: eine Frage, ein
Feld und eine Regel, wann sie gilt. Sonst bleibt sie Dekoration.
