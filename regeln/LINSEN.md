# LINSEN — wie der Agent denkt, nicht nur zusammenfasst

## Pflicht: die Gegenposition

```yaml
gegenposition: 'Die stärkste Einwendung in einem Satz.'
```

Gemeint ist der stärkste Einwand, den eine kundige Person vorbringen würde,
nicht irgendeiner. Findest du keinen, ist die Aussage banal oder das Thema
noch nicht verstanden; beides gehört in die Seite. Stützt sich der Einwand auf
eine Wiki-Seite, verlinkst du sie (im Feld in einfachen Anführungszeichen).
Sie braucht keine Fundstelle, Zahlen darin schon (`L02` → *Was die Regel nicht
sagt*).

## Wahlweise, wo sie etwas zeigen

**Vier Ursachen** (nach Aristoteles):

```yaml
ursache_stoff: 'woraus es besteht'
ursache_form: 'welche Struktur es hat'
ursache_wirkung: 'was es in Gang setzt'
ursache_zweck: 'wozu es da ist'
```

**Gleiche Form** (Isomorphie): Haben zwei Seiten aus verschiedenen Bereichen
dieselbe Struktur, nicht nur dasselbe Stichwort, bekommen beide

```yaml
gleiche_form: ['rueckkopplung-verzoegert']
```

Kommt das Muster dreimal vor, bekommt es eine eigene `begriff`-Seite in
`wiki/muster/` (den Bereich legst du mit ihr an); der Wert folgt deshalb den
Regeln für Dateinamen. Name, Ort: `regeln/SCHEMA.md` → *Seitentypen* und
*Dateinamen und Links*.

**Mehrwert im Verbund**, beim Prüfen (`ablaeufe/pruefen.md` § 3):

```yaml
mehrwert: niedrig    # hoch | mittel | niedrig
```

`niedrig`: Die Seite wäre allein genauso nützlich wie vernetzt. Kein Fehler,
aber ein Kandidat zum Zusammenlegen; das entscheidet die Person.

## Wann welche Linse

| Seitentyp | Gegenposition | Vier Ursachen | Gleiche Form |
|---|---|---|---|
| `quelle` | nein | nein | nein |
| `begriff` | ja | wenn ergiebig | wenn gefunden |
| `bruecke` | ja | wenn ergiebig | ja |
| `notiz` | wenn sie eine These vertritt | wenn ergiebig | wenn gefunden |
| andere | nein | nein | nein |

## Ausbauen

Eigene Linsen (etwa eine Systemsicht: Hebel, Puffer) ergänzt die Person hier,
je mit Frage, Feld und Regel, wann sie gilt.
