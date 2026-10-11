# PROGRESS

## Week 1 visuals (25). Updated 2026-10-12, 9 pm Beirut.
- ALL 28 visuals built and verified (2026-10-12). Hero layout (picture first, caption, toolbar, Focus) applied to all 25 and re-verified in Chrome the same night. Rules in CLAUDE.md, agent brief in .planning/RESTYLE-BRIEF.md.
- tools/pick-a-learner.html: wheel with the class roster (tools/roster.js, first names). Teacher only: not linked from any page, Ray opens it from a bookmark (2026-10-13).
- Lead verification routine per page: open via http://127.0.0.1:8765/YearUp/YearUp-Fall-2026/06.Website/yearup-java-fall2026/week-01/visuals/NN-slug.html
  (server: `python3 -m http.server 8765 --bind 127.0.0.1` from /Users/ray/Desktop/Training/Pluralsight), click through steps/chips with
  the Chrome tools, read console errors, run the static sweep (scratchpad sweep.sh: node --check, div balance, one style, title, take, rail, fonts, no em dash, no entity in script, back link, char count), then commit.
- Fixes applied by the lead so far: 02 code lines wrap; 07 wording "Here y is declared only".

## Done 2026-10-13 (early hours, while Ray was away)
- [x] Reference (4): cheat-sheet, glossary, common-errors, intellij-shortcuts. Verified in Chrome. Note: IntelliJ dialog wording on common-errors written from memory; confirm on a real machine.
- [x] 2026-10-13: 1a+1b merged workbook; visuals 01-04 renumbered to its section order, relabelled, first-maven-project. See DECISIONS.
- [x] week-01/index.html (tabs, grouped, hash lands on the item), index.html landing (12 weeks, no Tools card), search.js restyled, build-search-index.js reads manifests, search-index.json built (29 items).

## Still to do for week 1
- [ ] Exercise companions (10), spoiler-free
- [ ] Games (13); three need a spoiler check
- [ ] manifest exercises/games arrays (after Ray's review decisions)
- [ ] GitHub Pages publish when Ray says
