# Programme

`CLAUDE.md` und `GEMINI.md` binden nur `AGENTS.md` ein. Der Satz aus *Wenn …
dann* geht in jedem Programm; ein Befehl zeigt nur auf seinen Ablauf:

| Programm | Befehle in | Aufruf |
|---|---|---|
| Claude Code | `.claude/commands/` | `/aufnehmen` |
| Codex | `.agents/skills/` | `$aufnehmen` |
| Gemini CLI | `.gemini/commands/`, `.agents/skills/` | `/aufnehmen` |
| pi | `.agents/skills/` | `/skill:aufnehmen` |
| opencode | `.opencode/commands/`, `.agents/skills/` | `/aufnehmen` |

Eigene Befehle (`eigen-<name>`) legst du nur für das Programm an, mit dem
die Person arbeitet.

## Was dein Programm nicht kann

Ob dein Programm etwas kann, probierst du aus, statt es anzunehmen; ein
PDF oder eine `.docx` liest du auch über einen Befehl (etwa `pdftotext`).
Erst wenn kein Weg geht, sagst du einmal, was fehlt, und nimmst den Ersatz:

- **Keine Befehle:** Datum bei der Person erfragen und so nennen;
  Handprüfung statt Prüfwerkzeug (`agent/ablaeufe/pruefen.md` § 0);
  `wiki/log.md` mit dem Schreibwerkzeug am Dateiende fortschreiben.
- **Kein PDF, kein Bild:** um eine Textfassung bitten; die Datei bleibt im
  Eingang (`Rückfrage:`).
- **Kleiner Kontext:** aus `agent/regeln/SCHEMA.md` nur den gebrauchten
  Abschnitt, Quellen in Teilen mit `gelesen:`.
- **Kein Verschieben:** die Person bitten; Archivierung als `Rückfrage:` in
  der Übergabe.
