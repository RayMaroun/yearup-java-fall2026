# PROGRESS

## Week 1 visuals (25). Updated 2026-10-12, 9 pm Beirut.
- Verified in Chrome and committed: 01 02 03 04 05 06 07 08 09 10 11 12 21
- Verified in Chrome (13 both paths; 15 bug path, experiment toggle NOT yet tested, button id differs from bMut; 16 all steps): 13 15 16
- Built by agents, NOT yet browser-verified: 14 18 19
- Agents still running (files may appear any minute): 17 20 22 23 24 25
- Lead verification routine per page: open via http://127.0.0.1:8765/YearUp/YearUp-Fall-2026/06.Website/yearup-java-fall2026/week-01/visuals/NN-slug.html
  (server: `python3 -m http.server 8765 --bind 127.0.0.1` from /Users/ray/Desktop/Training/Pluralsight), click through steps/chips with
  the Chrome tools, read console errors, run the static sweep (scratchpad sweep.sh: node --check, div balance, one style, title, take, rail, fonts, no em dash, no entity in script, back link, char count), then commit.
- Fixes applied by the lead so far: 02 code lines wrap; 07 wording "Here y is declared only".

## Still to do for week 1
- [ ] Reference (4): cheat-sheet, glossary, common-errors, intellij-shortcuts
- [ ] Exercise companions (10), spoiler-free
- [ ] Games (13); three need a spoiler check
- [ ] week-01/index.html (tabs), index.html landing, build-search-index.js run, manifest reference/exercises/games arrays
- [ ] GitHub Pages publish when Ray says
