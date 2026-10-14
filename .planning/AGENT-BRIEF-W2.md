# Agent brief — building one Visual Hub page (Week 2)

You build exactly ONE page. Read, in this order, before writing anything:
1. `CLAUDE.md` in this repo (design tokens, doctrine, sizes, conventions). Every rule there is binding.
2. The calibration page for your size, copy its structure, CSS base, header, stage, takeaway, rail, ambient canvas:
   - Glance: `week-01/visuals/10-jdk-jre-jvm.html (Glance reference from week 1)`
   - Walk:   `week-01/visuals/16-integer-division.html (Walk reference from week 1; copy its CSS and structure exactly)`
   - Model:  `week-01/visuals/26-method-call-stack.html (Model reference)`
3. The workbook text for your section: `.planning/workbook-text/wb2a.txt` and `wb2b.txt` (pdftotext output of the v7.2y PDFs). Grep for your section heading and read the pages around it. The workbook is the source of truth for terminology and the v7.2 details.
4. The instructor demo named in your task, under `../../04.Weeks/Week 02/demos/<name>/src/main/java/com/pluralsight/`. Examples on the page come from there or are invented. NEVER from an exercise.
5. The spring page named in your task (under `/Users/ray/Desktop/Training/Pluralsight/YearUp/yearup-java-spring2026/week-02/visuals/`), for the idea and any good example. Its design and code are NOT reused; the design is the calibration page.
6. `week-02/manifest.js` for your file name, title and group (the eyebrow `.tag` text comes from the group plus the section topic).

## Hard rules (the instructor rejects pages that break these)
- Nothing static: the page responds to the learner. But motion only where it shows something. No animation for its own sake, no decorative tokens flying around. A Glance page responds to its ONE control and otherwise stays still.
- Walk: 4 to 10 steps, Next / Back / Reset, space = next, one sentence per step in the `.status` box, the picture changes at every step, a step counter "Step N of M". Optional preset chips as in the calibration page. No free-text inputs.
- Model: editable inputs, computed outcomes (never hard-coded replays), Step / Run / Back / Reset, one "Experiment" that breaks the rule and shows the consequence.
- Glance: one control (toggle, segmented switch, slider, hover or click on a part) and the diagram responds. No steps, no inputs.
- Check the visual metaphor is CORRECT, not just pretty. If a picture would mislead (wrong math, wrong mechanism), change the picture.
- Text budget: one `.lede` (one bold claim), one `.take` at the end, under ~1200 visible non-code characters on the page. One idea per page.
- Java 17, package `com.pluralsight`, learners not students, instructor is Raymond. US spelling. No emoji. No em dashes anywhere (use a comma, a colon or a period). No HTML entities inside `<script>`; use `&middot;`, `&rarr;` etc. only in HTML. Both switch forms where switch appears.
- One `<style>`, one inline `<script>` for the page, then the manifest + rail scripts exactly as in the calibration page. `<title>Title | Week 2 Visual Hub</title>`. `.back` href `../index.html#NN-slug`. Google Fonts link present. Ambient canvas present. `prefers-reduced-motion` respected.
- Keyboard: the rail handles left/right/esc. Do not add handlers that fight it. Space for next on Walk/Model only when focus is not on a button or input.
- Layout must hold at 1280px wide and at 900px wide (the grid collapses to one column under 860px as in the calibration CSS). Status box must have a min-height so buttons do not jump between steps.

## Deliver
- Write the file to `week-02/visuals/<file from the manifest>`.
- Run `node --check` on the inline script (extract it with sed as the lead does) and fix errors.
- Self-check: div open/close counts match; one style; title; one take; rail present; no em dash; no entity in script; no exercise code on the page.
- Do NOT edit any other file. Do NOT commit. Do NOT open a browser; the lead verifies in Chrome.
- Final report, under 15 lines: file written, size, steps or control, which demo example was used, what you checked, anything you were unsure about.

## Week 2 additions
- The hero layout section of CLAUDE.md is binding: picture first, caption, toolbar, hint, support, one take. The Walk reference page shows it applied; the Glance reference page (week 1 page 10) may predate it, so take the layout from the Walk page and the single-control behavior from the Glance page.
- Rail scripts: `<script src="../manifest.js"></script><script src="../../assets/rail.js"></script>` and the Rail.render call with `{week: 2, kind: "visuals", current: "<file>"}` exactly as the week 1 reference page does it (copy and change the number).
- The learner is a beginner meeting the idea for the first time; the cohort is slower than the last one. Fewer steps with bigger changes beat many small steps. Every step sentence under 110 characters.
- Example values from the week 2 demos or invented. Never from an exercise (the exercises are: full names, high score wins, theater reservations, address builder, cell phone service, looping exercises, test statistics, vehicle inventory, neighborhood library, car inventory, palindromes). Do not use those domains.
