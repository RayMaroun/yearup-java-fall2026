# Agent brief: building one Week 4 (Capstone 1) hub page

You build exactly ONE page. Read, in this order, before writing anything:
1. `CLAUDE.md` in this repo. Every rule is binding, above all "Every visual page: ONE PICTURE YOU TOUCH".
2. The calibration page `week-02/visuals/07-class-vs-object.html` (visuals) or `week-03/reference/your-readme.html` (reference pages): copy its CSS base, header, stage/caption/take (visuals) or section layout (reference), rail block and ambient canvas exactly, then draw your own content.
3. `.planning/workbook-text/capstone-1.txt`: the capstone spec. Source of truth for every letter, label and requirement. Quote labels exactly ("D) Add Deposit", "Month To Date").
4. `.planning/week-04-plan.md`: your row (the learner does / the picture answers) or your reference page paragraph.
5. `week-04/manifest.js` for your file name, title and group (the eyebrow `.tag` text is the group).

## Capstone-specific rules
- HINTS, NEVER THE SOLUTION. No code listing anywhere. A visual may show at most one short mono Java statement per press inside the caption `.line`. A reference page may show one short mono fragment per step at most, never a method body.
- The domain IS the capstone (transactions, deposits, payments, vendors). Sample rows come from the starter transactions.csv quoted in your task. Use a handful, not all.
- Learners write Transaction.java themselves; the starter FinancialTracker.java has TODO methods. Never show or imply the contents of either beyond the spec.
- Dates: Java 17 LocalDate/LocalTime, pattern yyyy-MM-dd and HH:mm:ss, file lines `date|time|description|vendor|amount`, amounts with two decimals, payments negative.

## Hard rules (same as week 3)
- Visuals: one drawn thing the learner touches, one sentence that answers. No readouts panel, no console, no step counter, no Next/Back. The action is ON the picture. One press, one visible consequence. Motion only where the idea moves. Reduced motion respected. Reset button in the caption. Check the picture is CORRECT (dates, signs, ranges), not just pretty.
- Learners not students, the instructor is Raymond. US spelling. No emoji. No em dashes anywhere (comma, colon or period). No HTML entities inside `<script>`.
- One `<style>`, one inline `<script>`, then `<div id="rail"></div><script src="../manifest.js"></script><script src="../../assets/rail.js"></script>` and `Rail.render(document.getElementById("rail"),{week:4,kind:"<visuals|reference>",current:"<file without .html>"})`. `<title>Title | Week 4 Visual Hub</title>`. `.back` href `../index.html#<file without .html>`, text "Week 4 index". Google Fonts link and ambient canvas present. Visuals: exactly one `.take` at the end, one paragraph.
- Layout holds at 1280px and 900px; at phone width the picture stacks.

## Deliver
- Write `week-04/<kind>/<file from the manifest>`. Run `node --check` on the inline script (extract it with sed). Self-check: div open/close counts match; one style; title; rail present; no em dash; no entity in script; no solution code.
- Do NOT edit any other file. Do NOT commit. Do NOT open a browser; the lead verifies in Chrome.
- Final report, under 12 lines: file written, size, what the learner touches and what answers (or the sections, for a reference page), what you checked, anything unsure.
