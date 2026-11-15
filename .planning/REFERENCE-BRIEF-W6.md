# Agent brief — building one reference page (Week 6)

You build exactly ONE reference page. Read first: `CLAUDE.md`, then the week 2 page with the same file name under `week-02/reference/` (cheat-sheet.html, glossary.html, common-errors.html; for junit-reference.html use `week-03/reference/date-patterns.html` as the base (a lookup table page)) and copy its CSS base, header, ONE control (filter chips or live filter box), card or table layout, cross-link style and rail block exactly. Change the content to week 5.
Workbook text (fall v7.2Y, source of truth): `.planning/workbook-text/wb5a.txt`. Spring content for ideas only: `/Users/ray/Desktop/Training/Pluralsight/YearUp/yearup-java-spring2026/week-06/reference/` (its design is not reused; check every fact against the fall text: BigDecimal.equals says 5.0 and 5.00 differ while compareTo says equal, setScale needs a RoundingMode, JUnit 5 uses org.junit.jupiter, a static method cannot use this, isAdult is age >= 18 in the fall text).
Cross-links: where an entry has a visual, link `../visuals/<file>` using the file names in `week-06/manifest.js` (only those). Examples from the instructor demos quoted in your task or invented; never an exercise (hotel objects, hotel operations, Room, Employee, Reservation, Hotel, money-math, NameFormatter, Blackjack, Card, Hand, Deck, car dealership).
Rules: learners not students; Raymond; US spelling; no emoji; no em dashes; no entities in script; Java 17; package com.pluralsight. `<title>Title | Week 6 Visual Hub</title>`, `.back` href `../index.html#<slug>`, rail `Rail.render(document.getElementById("rail"),{week:6,kind:"reference",current:"<slug>"})`. If you use a `.take`, exactly one.

## Deliver
Write `week-06/reference/<file>`. `node --check`; divs balanced; one style; title; rail; every href resolves to a file in the manifest. Do not edit other files, do not commit, do not open a browser. Report under 10 lines.

## Week 6 corrections to this brief (binding, they override anything above)
- The lists of forbidden exercise domains above are last week's. This week's list is in `.planning/week-06-plan.md` (the NEVER paragraph): the vehicle classes (Vehicle, Moped, Car, SemiTruck, Hovercraft), the assets exercise rules (house value by condition, vehicle depreciation, Cash) and the Car Dealership. The demo examples to use are quoted in the same file (Animal and Dog; Human, Caveman, ModernPerson; abstract Asset and House with the simple formula).
- Spring pages for ideas only: `/Users/ray/Desktop/Training/Pluralsight/YearUp/yearup-java-spring2026/week-06/`. Calibration pages for the fall design: the finished `week-05/` pages of the same kind.
- There is no data file and no JUnit this week. Money in any Java shown is BigDecimal. The fall slide for getClass uses getClass().getSimpleName().
- No learner first names in examples (roster first names in `../../docs/PEOPLE.md`); the instructor is Raymond.
