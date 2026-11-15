# Agent brief — building one game (Week 6)

You build exactly ONE game page. Read first: `CLAUDE.md` (design system, doctrine, examples rule, conventions), then two week 2 games as calibration: `week-02/games/parse-or-crash.html` and `week-02/games/index-inspector.html` (round structure, scoring, feedback line, restart, keyboard). Copy their CSS base, header, stage, rail block; change the mechanic and content. `week-06/manifest.js` gives your file name, title, group and desc (the desc IS the mechanic; build that).
Workbook text for accuracy: `.planning/workbook-text/wb5a.txt`. Examples: invented, or from the instructor demos quoted in your task. NEVER an exercise (hotel objects, hotel operations, Room, Employee, Reservation, Hotel, money-math, NameFormatter, Blackjack, Card, Hand, Deck, car dealership): do not use those domains or values.

## Rules
- One mechanic, 10 to 20 rounds, immediate feedback with the one-line why, a score, Restart. Every answer must be checkable and correct: compute real Java semantics in the page code (list state after operations, map get results, the exact formatted date for a fixed sample date, the exception a snippet throws). No ambiguous rounds. Where the learner types, accept reasonable whitespace variants.
- Learners not students; Raymond; US spelling; no emoji; no em dashes; no HTML entities inside `<script>`; Java 17.
- `<title>Title | Week 6 Visual Hub</title>`, `.back` href `../index.html#<slug>`, one `<style>`, one inline `<script>`, rail `Rail.render(document.getElementById("rail"),{week:6,kind:"games",current:"<file>"})`.

## Deliver
Write `week-06/games/<file>`. `node --check` the inline script; divs balanced; one style; title; rail. Do not edit other files, do not commit, do not open a browser. Report under 10 lines: mechanic, rounds, how answers are computed, what you checked.

## Week 6 corrections to this brief (binding, they override anything above)
- The lists of forbidden exercise domains above are last week's. This week's list is in `.planning/week-06-plan.md` (the NEVER paragraph): the vehicle classes (Vehicle, Moped, Car, SemiTruck, Hovercraft), the assets exercise rules (house value by condition, vehicle depreciation, Cash) and the Car Dealership. The demo examples to use are quoted in the same file (Animal and Dog; Human, Caveman, ModernPerson; abstract Asset and House with the simple formula).
- Spring pages for ideas only: `/Users/ray/Desktop/Training/Pluralsight/YearUp/yearup-java-spring2026/week-06/`. Calibration pages for the fall design: the finished `week-05/` pages of the same kind.
- There is no data file and no JUnit this week. Money in any Java shown is BigDecimal. The fall slide for getClass uses getClass().getSimpleName().
- No learner first names in examples (roster first names in `../../docs/PEOPLE.md`); the instructor is Raymond.
