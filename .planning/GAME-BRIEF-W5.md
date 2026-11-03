# Agent brief — building one game (Week 5)

You build exactly ONE game page. Read first: `CLAUDE.md` (design system, doctrine, examples rule, conventions), then two week 2 games as calibration: `week-02/games/parse-or-crash.html` and `week-02/games/index-inspector.html` (round structure, scoring, feedback line, restart, keyboard). Copy their CSS base, header, stage, rail block; change the mechanic and content. `week-05/manifest.js` gives your file name, title, group and desc (the desc IS the mechanic; build that).
Workbook text for accuracy: `.planning/workbook-text/wb4a.txt`, `wb4w.txt`. Examples: invented, or from the instructor demos quoted in your task. NEVER an exercise (hotel objects, hotel operations, Room, Employee, Reservation, Hotel, money-math, NameFormatter, Blackjack, Card, Hand, Deck, car dealership): do not use those domains or values.

## Rules
- One mechanic, 10 to 20 rounds, immediate feedback with the one-line why, a score, Restart. Every answer must be checkable and correct: compute real Java semantics in the page code (list state after operations, map get results, the exact formatted date for a fixed sample date, the exception a snippet throws). No ambiguous rounds. Where the learner types, accept reasonable whitespace variants.
- Learners not students; Raymond; US spelling; no emoji; no em dashes; no HTML entities inside `<script>`; Java 17.
- `<title>Title | Week 5 Visual Hub</title>`, `.back` href `../index.html#<slug>`, one `<style>`, one inline `<script>`, rail `Rail.render(document.getElementById("rail"),{week:5,kind:"games",current:"<file>"})`.

## Deliver
Write `week-05/games/<file>`. `node --check` the inline script; divs balanced; one style; title; rail. Do not edit other files, do not commit, do not open a browser. Report under 10 lines: mechanic, rounds, how answers are computed, what you checked.
