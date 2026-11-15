# Agent brief — building one Visual Hub page (Week 7)

You build exactly ONE page. Read, in this order, before writing anything:
1. `CLAUDE.md` in this repo. Every rule is binding, above all the section "Every visual page: ONE PICTURE YOU TOUCH" and the doctrine under it. The older hero/Walk/Glance/Model shape is retired; ignore any page or brief that still uses it.
2. The calibration page `week-02/visuals/07-class-vs-object.html`: copy its CSS base, header, `.stage`, `.caption`, `.take`, rail block and ambient canvas exactly, then draw your own picture inside the stage. Also look at `week-02/visuals/12-loop-types.html` (one pass per press) and `week-02/visuals/14-arrays-indexing.html` (a failure shown on the picture) for how two other ideas were drawn.
3. The workbook text for your section: `.planning/workbook-text/wb6a.txt` (pdftotext of the fall v7.2Y PDFs). Grep your section heading and read the pages around it. The workbook is the source of truth for terminology.
4. `.planning/week-07-plan.md` row for your page: the idea and the example. The example comes from the instructor demo named in your task (code is quoted in the task; the demo projects are being rebuilt under `../../04.Weeks/Week 07/demos/` and may not be there yet; the quoted code is enough). NEVER use an exercise (the exercises this week: hotel objects and responsibilities, hotel operations (Room, Employee, Reservation, Hotel), hotel unit tests, money-math, NameFormatter static classes, Blackjack (Card, Hand, Deck), car dealership). Do not use those domains.
5. `week-07/manifest.js` for your file name, title and group (the eyebrow `.tag` text is the group).

## Hard rules
- One drawn thing the learner touches, one sentence that answers. No code listing, no readouts panel, no console, no step counter, no dots, no hint line, no Next/Back, no Focus. At most one mono Java statement per press, inside the caption sentence (`.line`). Text budget under ~700 visible characters outside the picture. Lede under 90 characters, an invitation.
- The action is ON the picture: a button on a card, a clickable box, one small input on the thing it fills. One press, one visible consequence. Up to three playgrounds stacked when the idea has two or three faces.
- Motion only where the idea moves. Nothing decorative. Reduced motion respected (transitions off, page still responds).
- A loop or a read advances ONE step per press. A failure is drawn on the picture in `--warn` with the exception name in the mono line; the page never freezes. Reset button in the caption as in the calibration page.
- Check the picture is CORRECT (mechanism and values), not just pretty.
- Java 17, package `com.pluralsight`, learners not students, the instructor is Raymond. US spelling. No emoji. No em dashes anywhere (comma, colon or period). No HTML entities inside `<script>`.
- One `<style>`, one inline `<script>`, then `<div id="rail"></div><script src="../manifest.js"></script><script src="../../assets/rail.js"></script>` and `Rail.render(document.getElementById("rail"),{week:7,kind:"visuals",current:"<file>"})` exactly as the calibration page does (copy and change the number). `<title>Title | Week 7 Visual Hub</title>`. `.back` href `../index.html#NN-slug`. Google Fonts link and ambient canvas present. Exactly one `.take` at the end, one paragraph.
- Keyboard: the rail handles left/right/esc; Enter in an input presses its button. Do not fight the rail.
- Layout holds at 1280px and at 900px wide; at phone width the picture stacks.

## Deliver
- Write `week-07/visuals/<file from the manifest>`. Run `node --check` on the inline script (extract it with sed). Self-check: div open/close counts match; one style; title; one take; rail present; no em dash; no entity in script; no exercise code; text budget.
- Do NOT edit any other file. Do NOT commit. Do NOT open a browser; the lead verifies in Chrome.
- Final report, under 12 lines: file written, size, what the learner touches and what answers, which example was used, what you checked, anything unsure.

## Week 7 corrections to this brief (binding, they override anything above)
- The lists of forbidden exercise domains above are from an earlier week. This week's list is in `.planning/week-07-plan.md` (the NEVER paragraph): the fixed assets and portfolio classes, the Person class sorted with Comparable, FixedList, the data-processing people list. The demo examples to use are described in the same file and the real demo code is in `../../04.Weeks/Week 07/demos/` (read it).
- Calibration pages for the design are the FINISHED WEEK 6 pages of the same kind (`week-06/visuals/10-variable-type-object.html`, `11-base-class-references.html`, `12-a-parent-type-parameter.html` for visuals; `week-06/exercises/`, `week-06/reference/`, `week-06/games/` for the others). Copy their CSS base, header, caption, take and rail block. Spring pages for ideas only: `/Users/ray/Desktop/Training/Pluralsight/YearUp/yearup-java-spring2026/week-07/`.
- Read the paragraph "What Ray's week 6 review taught us" in the plan and apply it.
- Every compiler or runtime message shown must be the real javac / JVM text for Java 17: verify by compiling a tiny sample in a folder under /private/tmp/claude-501/-Users-ray-Desktop-Training-Pluralsight-YearUp-YearUp-Fall-2026/f8e4dbeb-2a69-45d5-9469-6c83d7e1d013/scratchpad/hub7/ (never inside the repo).
- The page has more than one script tag (your inline script, the manifest, the rail): when you run `node --check`, extract only your own inline script.
- Never write a double-escaped entity such as `&amp;middot;` in the HTML. No HTML entities inside your script.
- No learner first names in examples (roster first names in `../../docs/PEOPLE.md`); the instructor is Raymond. Money in any Java shown is BigDecimal.
