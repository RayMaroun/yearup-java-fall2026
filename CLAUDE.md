# CLAUDE.md — YearUp Java Visual Hub, Fall 2026

Read this whole file before writing any page. Then read `.planning/PROGRESS.md` for what exists and
what is next. Design, doctrine and conventions below are fixed; do not deviate.

## What this is
Interactive HTML/CSS/JS teaching aids for the Year Up Java Focus Academy, Fall 2026, Section 8
(12 Oct to 31 Dec 2026). Published on GitHub Pages: `RayMaroun/yearup-java-fall2026`.
Two audiences: the instructor (Raymond) on screen in class, full-screen in Chrome; and learners on
their own between sessions. Every page must work standalone, no explanation needed.
- One self-contained HTML file per page: one `<style>`, one `<script>`, vanilla JS, no frameworks,
  no build. Shared files allowed: `assets/rail.js`, `search.js`, Google Fonts. Internet is assumed.
- Source of truth for content: the fall workbooks in
  `../../02.Student Courseware - to Deploy/Week N_ .../*.pdf` (v7.2Y) and the instructor demos in
  `../../04.Weeks/Week NN/demos/`. The spring hub `/Users/ray/Desktop/Training/Pluralsight/YearUp/yearup-java-visuals/`
  is a base to keep, rebuild, or drop per idea. Never a constraint.

## Structure
```
index.html                 landing: 12-week grid
week-NN/index.html         week hub: tabs Visuals | Reference | Exercises | Games, grouped by workbook/module
week-NN/visuals/NN-slug.html
week-NN/reference/{cheat-sheet,glossary,common-errors,intellij-shortcuts}.html
week-NN/exercises/<exercise-slug>.html
week-NN/games/<game-slug>.html
assets/rail.js             numbered rail + prev/next, per week; Rail.render(el, {week, kind, current})
search.js, build-search-index.js, search-index.json
```

## Design system — EXACT VALUES (from the Expeditors hub, week 9 + capstone set; do not change)
```
:root{
  --bg:#080c17; --bg2:#0c1428; --surface:rgba(255,255,255,.045); --line:rgba(255,255,255,.09);
  --ink:#eef2fb; --muted:#8496b6; --accent:#6ea0ff; --accent2:#8b7bff; --good:#46d98a; --warn:#ff6a6a;
  --gold:#ffc862; --disp:'Sora',system-ui,sans-serif; --body:'Inter',system-ui,sans-serif;
  --mono:'JetBrains Mono',ui-monospace,monospace;
}
```
- Fonts: `<link href="https://fonts.googleapis.com/css2?family=Sora:wght@500;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">`
- Body background: `radial-gradient(1200px 700px at 70% -10%,#141d38 0%,transparent 55%), radial-gradient(900px 600px at 10% 110%,#161233 0%,transparent 50%), #080c17`
  plus the ambient `<canvas id="amb">` (fixed, inset 0, opacity .6, drifting faint dots; disabled under
  `prefers-reduced-motion`).
- Page header: `.back` (mono .8rem, muted) → `.tag` eyebrow (mono .72rem, uppercase, letter-spacing .22em,
  accent) → `h1` (Sora 700, clamp(2.3rem,6vw,3.6rem), gradient text #fff→#b9c6e6, letter-spacing -.03em)
  → `.lede` (muted, 64ch, 1.05rem, one `<b>` sentence in ink).
- `.stage`: the work area. Gradient surface, `1px solid var(--line)`, radius 24px, padding 8px, inset
  highlight + deep shadow. Inside, `.grid{grid-template-columns:360px 1fr;gap:8px}` with `.panelL`
  (controls, tinted accent gradient) and `.panelR` (the live model, `rgba(6,10,20,.5)`). Radius 18px.
- Labels: `.lab` mono .7rem uppercase muted. Stats: `.stat .k` mono .62rem / `.v` Sora 1.45rem tabular.
- Status line: `.status` mono .82rem, left border 3px accent; `.acting` → good, `.trouble` → warn.
- Buttons: `.btn` Inter 500 .84rem, radius 11px, surface bg, border line; hover accent; `.warn`/`.gold`
  hover variants; disabled opacity .35.
- Takeaway: `.take` (accent gradient, left border 3px accent, radius 12px) with `.tk` mono eyebrow and one
  `<p>`. Exactly ONE per page, at the end, before the rail.
- Week index: `.tab-nav` / `.tab-btn` with `.tab-count`; `.section-title` mono .72rem accent uppercase
  .16em; `.link` cards with `.num` box (Sora 700, accent tint), `.title`, `.desc`, `.tag-live` / `.tag-wip`.
- Radius: stage 24, panels 18, cards 14, buttons 11, chips 999. Transitions .15s to .3s.
- Reference model pages: `Expeditors/visual-hub/week-09/visuals/03-the-reconciliation-loop.html`,
  `week-09/index.html`, `capstone/08-the-pipeline.html` (header + rail), `capstone/assets/rail.js`.
- NOT taken from the capstone set: the SVG system map. It was capstone-specific.

## Every visual page
1. `<a class="back" href="../index.html#NN-slug">← Week N index</a>` (lands on the item, right tab).
2. `.tag` = the workbook section it belongs to (e.g. "Workbook 1c · Section 4-2 · Static methods").
3. `h1` title, `.lede` one or two sentences with one bold claim, readable alone, may include "click…".
4. `.stage` with the interactive model. The thing on screen IS what you interact with: click a line to run
   it, step a flow, drag, build, break it. Never "read static code, then operate a widget below".
5. Optional hint line (mono .72rem muted).
6. Exactly one `.take` box.
7. `<div id="rail"></div>` + `<script src="../../assets/rail.js"></script>` +
   `Rail.render(document.getElementById('rail'), {week:1, kind:'visuals', current:'21-method-call-stack'})`.
   The rail reads `week-NN/manifest.js` (one array per kind, in order) so every page gets dots for the
   whole tab, the current one marked, titles on hover, prev/next.
8. `<title>Title | Week N Visual Hub</title>`. Keyboard: ← / → = prev/next, Esc = back to index.

## THE DOCTRINE (from the Expeditors hub, applies here unchanged)
A visual takes ONE idea and makes the invisible part visible and manipulable, so the moment of
interaction is the moment of understanding. It is an extra: it exists only when there is genuinely
something to show.
- **Three lenses**, pick the one that matches why the idea is hard: behind-the-scenes (a hidden mechanism:
  the Scanner buffer, the call stack, the compiler's steps), big-picture (a system too large to hold:
  JDK/JRE/JVM, Maven layout), tangible (an abstract rule given a body: widening vs narrowing, integer division).
- **The gate, idea by idea, never section by section.** List the module's distinct ideas from the learning
  objectives. For each: is something hidden, too big, or too abstract, AND not already carried by a sentence,
  a table, or a workbook image? If not, no visual, and say why. Then add an extra only for a non-headline
  idea that trips learners up. Lands at roughly 8 to 12 rich visuals per module.
- **The test for code weeks:** what can't they see when they run it themselves? If "nothing", it isn't a visual.
  Never replay the demo in a browser; show the machinery under it.
- **Foundations exception:** for a beginner cohort, the mental model itself may be the invisible thing
  (what a class is, what a test is). Those get a page even if there is no hidden mechanism.
- **The richness bar**, all six: a model not a slideshow (outcomes computed, not canned); depth (a third
  interaction still teaches); breadth (several different things to try); shows the machinery (intermediate
  states, cause→effect); contingent narration (the explanation responds to the specific action); you can get
  it wrong and learn from it. Fewer, richer beats many, thin.
- **Minimal prose.** One `.lede`, one `.take`. Under ~1600 visible non-code characters, 2000 hard ceiling.
- **Design the interaction to the topic.** Step-throughs, click-to-run, builders, sorters, matrices, live
  consoles. A multi-state machine is right when the states are the mechanism.

## YearUp conventions (differ from Expeditors)
- Git through IntelliJ (Share Project on GitHub, commit panel), not the CLI. Learner repos are public.
- Java 17, Maven, package `com.pluralsight`, Amazon Corretto 17 in IntelliJ.
- Both `switch` forms are taught in Workbook 1c: traditional first, then arrow. Show both where switch appears.
- Terminology: learners, not students; the instructor is Raymond; no grades talk, no internal names.
- US spelling. No emoji. No em dashes. No HTML entities inside `<script>`.

## Examples rule (set 2026-10-11 with the instructor)
- Visuals and games use the examples from the instructor's demos of that week (`04.Weeks/Week NN/demos/`)
  or invented ones. **Never an exercise**, so no solution is shown ahead of time.
- Exercise companions are the only place an exercise appears and they are spoiler-free: plain-English
  restatement, inputs and outputs, a flow diagram, one example run. No solution code.

## Workflow per week
1. After the week's content review is done in `04.Weeks/Week NN/review.md`.
2. Read the fall workbooks for the week and the spring hub's pages for the same week.
3. Produce the idea list: for each idea, keep-and-reskin / rebuild / new / drop, with a one-line reason;
   same for reference pages, exercise companions, games. Instructor confirms before building.
4. Build: one page per task, against the approved reference page (`week-01/visuals/NN-method-call-stack.html`
   is the calibration page). Verify every page in a browser: interaction works, text budget, links resolve,
   rail renders, `node --check` on the inline script.
5. Update `week-NN/manifest.js`, the week index, the landing page, and run `build-search-index.js`.
6. Record progress in `.planning/PROGRESS.md`; plan changes in `.planning/DECISIONS.md`.

## Pre-commit sweep
Div balance; every href resolves; `<title>` set; one style, one script; no console errors on load;
fonts link present; rail present on every content page; no exercise solution anywhere outside companions.
