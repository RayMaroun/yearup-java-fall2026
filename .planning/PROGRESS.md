# PROGRESS

## Week 1 visuals (25). Updated 2026-10-12, 9 pm Beirut.
- ALL 30 visuals built and verified (2026-10-12). Hero layout (picture first, caption, toolbar, Focus) applied to all 25 and re-verified in Chrome the same night. Rules in CLAUDE.md, agent brief in .planning/RESTYLE-BRIEF.md.
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
- [x] Exercise companions (10), spoiler-free: 10 done, 2026-10-13, checklist shape; the rest follow Ray's section reviews
- [x] Games (13, redone 2026-10-13 per Ray: 7 new mechanics + 6 kept, 7 quizzes dropped; see week-01-plan.md), all verified in the browser
- [x] manifest exercises/games arrays (2026-10-13)
- [x] GitHub Pages live 2026-10-13: https://raymaroun.github.io/yearup-java-fall2026/

## Week 2 (built 2026-10-15 night on Ray's instruction, ahead of his review; LOCAL ONLY until Mon 19 Oct)
- [x] Idea list drafted: .planning/week-02-plan.md (Ray confirms Thu 16 Oct). Agent brief: .planning/AGENT-BRIEF-W2.md. Workbook text: .planning/workbook-text/wb2a.txt, wb2b.txt, wb2w.txt.
- [x] 19 visuals built (Opus, one per page), static sweep clean (scratchpad sweep.sh), all 19 clicked through in Chrome by the lead: steps, chips, Experiment (15), rail. Examples from the rebuilt fall demos in 04.Weeks/Week 02/demos/ (demo-01 to demo-07).
- [x] 13 companions (checklist shape), ticks persist, links resolve once reference exists.
- [x] 8 games built, all 8 opened and started in Chrome (one answer each).
- [x] week-02/index.html (from the week 1 template), landing card set live (local), manifest filled (19/4/13/8).
- [x] Reference 4 pages built and opened in Chrome (glossary: 84 entries, every chip resolves).
- [x] search-index.json rebuilt (101 items, 2 weeks). Committed locally 7b0a73d. NOT PUSHED: push on Mon 19 Oct after Ray's review (git push origin main).
- Notes for Ray's review: page 03 teaches compareTo (not in the fall workbook, Ray decides); page 19 is the 2b debugger (2b skipped in spring); page 05 uses the workbook's own date example, not the theater one; page 15's exception name is from the demo, the workbook never names it.
