# Reference page brief (Week 1)

Read `CLAUDE.md` (design tokens, "Every visual page: the HERO LAYOUT", conventions) and `week-01/visuals/08-jdk-jre-jvm.html`
(a Glance page: copy its CSS base, header, stage, caption, takeaway, rail, ambient canvas). Then read the spring page named in your
task (under `/Users/ray/Desktop/Training/Pluralsight/YearUp/yearup-java-visuals/week-01/reference/`) for CONTENT only; its design is not reused.
Workbook text for accuracy: `.planning/workbook-text/wb1a.txt`, `wb1b.txt`, `wb1c.txt` (v7.2Y). Demos: `../../04.Weeks/Week 01/demos/`.

## Shape of a reference page
- Same header as a visual: `.back` (href `../index.html#<slug>`), `.tag` "Week 1 · Reference", `h1`, one-line `.lede`.
- `.stage` with: a `.topbar` holding ONE control (filter chips by topic, or a live filter box) and NO Focus button;
  then the content as cards or a table inside a `.pic`-like container with `min-height` (not fixed height), no overflow hidden.
- Reference pages are the only pages allowed more text, but keep every entry to one line where possible, mono for code.
- The ONE control must do something: filter chips hide every card not in that topic; the filter box narrows rows as you type.
- Cross-links: where an entry has a visual page, link it: `<a href="../visuals/NN-slug.html">`. Use the file names in `week-01/manifest.js`.
- No `.take` on reference pages is fine; if you use one, exactly one.
- Rail: `<div id="rail"></div>`, then `<script src="../manifest.js"></script><script src="../../assets/rail.js"></script>`
  and `Rail.render(document.getElementById("rail"),{kind:"reference",current:"<slug>"})`.
- `<title>Title | Week 1 Visual Hub</title>`. One `<style>`, one inline `<script>`. US spelling, no emoji, no em dashes, no entities inside `<script>`.
- Content rules: Java 17, package `com.pluralsight`, learners not students, instructor is Raymond. Skip Workbook 1c Module 1 (binary, bytes) entirely.
  Never show an exercise solution; examples come from the demos or are invented.
- v7.2 fixes to apply where relevant: taxRate 0.0825; float literal `2.2f`; `Math.toRadians`; `main(String[] args)`; both switch forms.

## Checks before you report
`node --check` on the inline script; divs balanced; one style; title; rail present; no em dash; no entity in script; every `href` you wrote
points at a file that exists in `week-01/visuals/` (list the folder). Report in under 12 lines. Do not open a browser, do not edit other files, do not commit.
