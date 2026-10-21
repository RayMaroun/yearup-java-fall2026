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

## Every visual page: ONE PICTURE YOU TOUCH (Ray, 2026-10-21; calibration page `week-02/visuals/07-class-vs-object.html`)
This replaces the hero layout and the Glance / Walk / Model sizes. The old shape (code listing, readouts, console,
step counter, dots, hint line, Focus button, Next and Back) made the learner read code and look in five places
while one thing happened. Ray: "the visuals are there to make things easier, not harder."

**The rule: a page is one drawn thing the learner touches, and one sentence that answers. Nothing else.**
1. `<a class="back" href="../index.html#NN-slug">← Week N index</a>`
2. `.tag` eyebrow (workbook section), `h1`, `.lede` = ONE line, an invitation, under ~90 characters
   ("One class, many objects. Build a few and press their buttons.").
3. `.stage` (padding 22px): the picture fills it. There is no panel split, no top bar, no toolbar.
   - The picture is the idea drawn big with the design system: a blueprint card and object cards, a locked box,
     a row of numbered boxes with a hand on one, a track with a gate. Fields and methods are rows on a card, never
     a listing. **No code listing anywhere on the page.** At most one mono line per action, the Java statement
     that the press stands for (`instructor.work(5);`), and it lives in the sentence, not in a panel.
   - The action is on the picture itself: a button on the card, a clickable box, one or two small inputs on the
     thing they fill. One press, one visible consequence. Up to three playgrounds stacked on a page when the
     idea has two or three faces (String vs StringBuilder side by side counts as one).
   - `.caption` under the picture, separated by a border-top: `.t` the one sentence (Inter 1.05rem, left border 3px
     taking the tone: accent, `.y` gold for a change, `.g` good for a build, `.w` warn for a failure), with the
     optional `.line` mono statement under it; a ghost Reset button on the right. The sentence answers the last
     press. Before any press it states what is on screen.
   - Motion only where the idea moves: the card slides out of the blueprint, the hand is blocked at the lock, the
     pointer steps along the row, the old value is struck through next to the new one. Nothing else moves.
   - A loop page advances one pass per press (never "passes 2 to 10 repeat"); the counter, the check and the printed
     value change on each press.
   - A failure (out of bounds, parse error, private access) is shown on the picture in `--warn` with the exception
     name in the mono line; the page never crashes or freezes.
4. Exactly one `.take` at the end, one paragraph.
5. `<div id="rail"></div>` + manifest + rail scripts, exactly as before.
- Text budget: under ~700 visible characters of prose outside the picture.
- `localStorage` is not used on visuals. Keyboard: Enter in an input presses its button; ← / → = prev/next page (rail), Esc = index.
- Reduced motion: transitions off, the picture still responds.
- `<title>Title | Week N Visual Hub</title>`. One `<style>`, one inline `<script>` for the page.
- Design system values, header, `.take`, rail and ambient canvas unchanged (see above). Buttons on the picture use
  mono, gold text for method calls, accent tint for `new` and builds; inputs mono with accent focus ring.

## THE DOCTRINE — adapted for this cohort (set 2026-10-11, reshaped 2026-10-21 with the instructor)
The audience is beginners, most of them not developers yet. The hub is a whiteboard that moves while the
instructor talks and a toy the learner can poke at home. A visual **complements the live explanation**, it is
not a lab and not a narrated walk. The learner acts, the page answers.

**Rules that stay:** one idea per page; one example per page, from the week's demos when it fits; the thing on
screen is what you interact with; minimal prose; never replay the demo in a browser; the gate is idea by idea
from the workbook's learning objectives; a visual exists only when something is hidden, too big, or too
abstract to see, or when the mental model itself is the invisible thing (often, with beginners).
**Nothing on this hub is a static picture, and no animation for its own sake.**

## YearUp conventions (differ from Expeditors)
- Git through IntelliJ (Share Project on GitHub, commit panel), not the CLI. Learner repos are public.
- Java 17, Maven, package `com.pluralsight`, Amazon Corretto 17 in IntelliJ.
- Both `switch` forms are taught in Workbook 1c: traditional first, then arrow. Show both where switch appears.
- Terminology: learners, not students; the instructor is Raymond; no grades talk, no internal names.
- US spelling. No emoji. No em dashes. No HTML entities inside `<script>`.

## Skipped content rule
If the instructor skips a module or section (see `04.Weeks/Week NN/review.md` and the Notion Teaching Checklist),
it gets no visual, no game, no reference entry. Week 1: 1c Module 1 was skipped in spring (confirm each run).

## Examples rule (set 2026-10-11 with the instructor)
- Visuals and games use the examples from the instructor's demos of that week (`04.Weeks/Week NN/demos/`)
  or invented ones. **Never an exercise**, so no solution is shown ahead of time.
- Exercise companions are the only place an exercise appears and they are spoiler-free: plain-English
  restatement, inputs and outputs, a flow diagram, one example run. No solution code.
- **Companion shape (Ray, 2026-10-13): a checklist, not a visual.** The reader is a learner who did not understand the
  workbook instructions. Everything is visible at once, nothing behind Next: "What you are building" (2 short
  paragraphs, what it does and what it does not do), "Do these in order" (the workbook steps as tickable actions,
  each expanding to "how" in IntelliJ terms and a "done when" line; ticks kept in localStorage), "What a finished run
  looks like" (output only, with "yours will differ"), "Where people get stuck" (3 to 4 lines), "Pages that help"
  (chips to visuals and reference). No hero picture, no steps to click through. The "how" text names menus, files and
  names; it never says what to type inside main. Calibration page: `week-01/exercises/shopping-list.html`.
  Text budget for companions is about 1300 visible characters (prose is their job).
- **One project per exercise (Ray, 2026-10-13):** when the workbook says "modify" or "refactor" the previous exercise, the companion
  says: new project named `x-2`, copy the previous code in, change it there, own repository. Never the same project.

## Agents
Pages are built by subagents, one page per agent, from this file + the calibration page + the
workbook text + the demo code. Use **Opus** for pages (quality matters more than cost; a redo costs more).
Use Sonnet for mechanical work: diffs, link checks, compile checks. The lead verifies every page in a browser.

## Workflow per week
1. After the week's content review is done in `04.Weeks/Week NN/review.md`.
2. Read the fall workbooks for the week and the spring hub's pages for the same week.
3. Produce the idea list: for each idea, keep-and-reskin / rebuild / new / drop, with a one-line reason;
   same for reference pages, exercise companions, games. Instructor confirms before building.
4. Build: one page per task, against the calibration page `week-02/visuals/07-class-vs-object.html`. Verify every
   page in a browser: every press answers, text budget, links resolve, rail renders, `node --check` on the inline script.
5. Update `week-NN/manifest.js`, the week index, the landing page, and run `build-search-index.js`.
6. Record progress in `.planning/PROGRESS.md`; plan changes in `.planning/DECISIONS.md`.

## Pre-commit sweep
Div balance; every href resolves; `<title>` set; one style, one script; no console errors on load;
fonts link present; rail present on every content page; no exercise solution anywhere outside companions.


## Demos are a source, never a subject (Ray, 2026-10-13)
Examples come from the week's demos (`04.Weeks/Week NN/demos/`), never from exercises. But the page never says so: no "from the X demo", no "(invented)", no "names from Raymond's demo". Labels say "Example", not "Example from the demo". The learner sees code, not its provenance.

## One example per page (Ray, 2026-10-17)
A visual takes ONE example from the demo and shows ONE idea with it. It never walks the whole demo block: no second example, no "and here is the loop version", no hand-over to the next page's topic. If the demo has three examples for an idea, the page uses the first one that carries the idea. Ray: "the visuals should not have everything the demos have; we only need to show one example."

## Loops run one pass per press (Ray, 2026-10-18, kept 2026-10-21)
When a page shows a loop, every pass is its own press, with the counter, the check and the printed value changing on each one. Never "passes 2 to 10 repeat". If a pass has several parts (check, body, update), they light one after another inside the press. Changing an input restarts the loop.

## The visual explains the concept (Ray, 2026-10-18)
A page exists to make ONE concept clear to a learner. The demo is a source of examples, not a script: use a demo example when it fits the concept, invent or adapt one when it does not, and never put something on the page only because the demo has it. "The visual is not responsible for the demo. If an example from the demo fits, fine. If not, we care about explaining the concept visually." Together with the rules above: one idea, one example, the example from the demo when it fits.
