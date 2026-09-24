---
title: '{{title}}'
type: notiz
tags: []                             # erster Tag: der Bereich, also der Ordnername
aliases: []                          # optional, Synonyme für die Suche
created: {{date:YYYY-MM-DD}}
updated: {{date:YYYY-MM-DD}}
quellen: []                          # Pflicht, wenn die Notiz aus einer Datei in quellen/ stammt
status: skizze                       # aktiv | veraltet | ersetzt | skizze
stimme: ich                          # bleibt ich, auch mit Ergänzungen des Agenten
# kein Feld sicherheit: Die Notiz gibt wieder, was die Person denkt, nicht was belegt ist.
# gegenposition: ''                  # wahlweise, wenn die Notiz eine These vertritt
# gleiche_form: []                   # wenn eine Seite aus einem anderen Bereich dieselbe Struktur hat
# ursache_stoff: ''                  # vier Ursachen, wenn ergiebig (regeln/LINSEN.md)
# ursache_form: ''
# ursache_wirkung: ''
# ursache_zweck: ''
# pruefen_bis: JJJJ-MM-TT            # nur bei Stoff, der an einem Datum veraltet
---

# {{title}}

<!-- Dateiname mit Datum vorn: JJJJ-MM-TT-kurztitel.md, das Datum aus der Notiz, sonst der Tag der Aufnahme. Ein eigener Gedanke, kurz und für sich lesbar. Der ganze Wortlaut der Person steht in einem [!ich]-Block, Backticks darin bleiben stehen. -->

> [!ich]
> 

*Ergänzt vom Agenten:*

<!-- Was ab hier steht, ergänzt der Agent. Die Seite bleibt stimme: ich (regeln/SCHEMA.md). -->

## Verbindungen

<!-- Je Zeile ein Link auf eine andere Seite, dazu ein Halbsatz, warum sie dazugehört. Den Gegenlink auf der anderen Seite setzen. Links auf Meta-Seiten und Moduldateien brauchen keinen. -->

## Offene Fragen

<!-- Was die Notiz offenlässt. Abschnitt darf fehlen. -->

## Verlauf

<!-- Neue Zeilen kommen ans Ende. -->
- {{date:YYYY-MM-DD}}: angelegt
