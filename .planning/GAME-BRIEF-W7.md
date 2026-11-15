# Agent brief — building one game (Week 7)

You build exactly ONE game page. Read first: `CLAUDE.md` (design system, doctrine, examples rule, conventions), then two week 2 games as calibration: `week-02/games/parse-or-crash.html` and `week-02/games/index-inspector.html` (round structure, scoring, feedback line, restart, keyboard). Copy their CSS base, header, stage, rail block; change the mechanic and content. `week-07/manifest.js` gives your file name, title, group and desc (the desc IS the mechanic; build that).
Workbook text for accuracy: `.planning/workbook-text/wb6a.txt`. Examples: invented, or from the instructor demos quoted in your task. NEVER an exercise (hotel objects, hotel operations, Room, Employee, Reservation, Hotel, money-math, NameFormatter, Blackjack, Card, Hand, Deck, car dealership): do not use those domains or values.

## Rules
- One mechanic, 10 to 20 rounds, immediate feedback with the one-line why, a score, Restart. Every answer must be checkable and correct: compute real Java semantics in the page code (list state after operations, map get results, the exact formatted date for a fixed sample date, the exception a snippet throws). No ambiguous rounds. Where the learner types, accept reasonable whitespace variants.
- Learners not students; Raymond; US spelling; no emoji; no em dashes; no HTML entities inside `<script>`; Java 17.
- `<title>Title | Week 7 Visual Hub</title>`, `.back` href `../index.html#<slug>`, one `<style>`, one inline `<script>`, rail `Rail.render(document.getElementById("rail"),{week:7,kind:"games",current:"<file>"})`.

## Deliver
Write `week-07/games/<file>`. `node --check` the inline script; divs balanced; one style; title; rail. Do not edit other files, do not commit, do not open a browser. Report under 10 lines: mechanic, rounds, how answers are computed, what you checked.

## Week 7 corrections to this brief (binding, they override anything above)
- The lists of forbidden exercise domains above are from an earlier week. This week's list is in `.planning/week-07-plan.md` (the NEVER paragraph): the fixed assets and portfolio classes, the Person class sorted with Comparable, FixedList, the data-processing people list. The demo examples to use are described in the same file and the real demo code is in `../../04.Weeks/Week 07/demos/` (read it).
- Calibration pages for the design are the FINISHED WEEK 6 pages of the same kind (`week-06/visuals/10-variable-type-object.html`, `11-base-class-references.html`, `12-a-parent-type-parameter.html` for visuals; `week-06/exercises/`, `week-06/reference/`, `week-06/games/` for the others). Copy their CSS base, header, caption, take and rail block. Spring pages for ideas only: `/Users/ray/Desktop/Training/Pluralsight/YearUp/yearup-java-spring2026/week-07/`.
- Read the paragraph "What Ray's week 6 review taught us" in the plan and apply it.
- Every compiler or runtime message shown must be the real javac / JVM text for Java 17: verify by compiling a tiny sample in a folder under /private/tmp/claude-501/-Users-ray-Desktop-Training-Pluralsight-YearUp-YearUp-Fall-2026/f8e4dbeb-2a69-45d5-9469-6c83d7e1d013/scratchpad/hub7/ (never inside the repo).
- The page has more than one script tag (your inline script, the manifest, the rail): when you run `node --check`, extract only your own inline script.
- Never write a double-escaped entity such as `&amp;middot;` in the HTML. No HTML entities inside your script.
- No learner first names in examples (roster first names in `../../docs/PEOPLE.md`); the instructor is Raymond. Money in any Java shown is BigDecimal.
