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

## Every visual page: the HERO LAYOUT (approved by the instructor 2026-10-12; reference `week-01/visuals/14-integer-division.html`)
The picture is the page. Everything else supports it and sits below it. Order, top to bottom:
1. `<a class="back" href="../index.html#NN-slug">← Week N index</a>`
2. `.tag` eyebrow (workbook section), `h1`, `.lede` = ONE line, the bold claim only (under ~140 characters).
3. `.stage` (padding 18px, no inner panel split):
   - `.topbar`: a `.lab` word, the preset `.chips` (Walk/Model), and the `.focus` button on the right (always present).
   - `.pic`: the hero picture, full width, 390px tall (480px in Focus). It is the ONLY thing the eye should land on.
     Glance: the diagram itself. Walk: the thing that changes per step. Model: the live model (stack, buffer, ...).
     Empty state shows a small centered mono hint ("10 and 3 · press Next").
   - `.caption`: the one sentence for the current step, directly under the picture: `.n` step number ("3 / 9", Sora,
     accent) and `.t` the sentence (Inter 1.02rem, left border 3px that takes the step color). Glance: the sentence that
     describes the current state of the control.
   - `.toolbar` (border-top): Walk = Back · `.dots` (one per step, current marked) · Next · Reset (ghost, right).
     Model = Step · Run · Back · Reset · Experiment. Glance = its ONE control (segmented switch, slider, ...) lives here.
   - `.hint` one mono line (keys, where the example comes from).
   - `.support` (2 columns, hidden in Focus): left the code (`.code`), right `.side` with `.readout` stat tiles and the
     `.console`. Readouts carry class `empty` (faded) until they hold a value. Model inputs go here too, above the readouts.
4. Exactly one `.take` (hidden in Focus).
5. `<div id="rail"></div>` + manifest + rail scripts, exactly as before.
- **Focus** (`body.solo`): hides `.support`, `.take`, `.hint`; enlarges `.pic` and the caption text. Only on pages that HAVE a `.support` area (instructor, 2026-10-12): a Focus button that visibly does nothing is worse than none. Glance pages without support get no button. Toggled by `#bFocus`,
  stored in `localStorage["hub-focus"]`, read on load. Full view is the default. The button label flips "Focus" / "Focus on".
  Never name the body class `focus` (it collides with the button class).
- Nothing appears before it has a value; no "?" tiles in the eye line. One accent color per step state, not several.
- Keyboard: ← / → = prev/next page (rail), Esc = index, space = next step (Walk/Model) when focus is not on a control.
- `<title>Title | Week N Visual Hub</title>`. One `<style>`, one inline `<script>` for the page.

## THE DOCTRINE — adapted for this cohort (set 2026-10-11 with the instructor)
The audience is beginners, most of them not developers yet. The hub is a whiteboard that moves while the
instructor talks: a visual **complements the live explanation**, it is not a lab the learner has to work
through, and it must not overload them. The Expeditors doctrine (richness bar, mini-simulators) was written
for experienced engineers; here it applies only to the few pages where the hidden mechanism IS the lesson.

**Rules that stay from Expeditors:** one idea per page; the thing on screen is what you interact with;
minimal prose (one `.lede`, one `.take`, under ~1200 visible non-code characters); never replay the demo in
a browser; the gate is idea by idea from the workbook's learning objectives, not section by section; a
visual exists only when something is hidden, too big, or too abstract to see, or when the mental model
itself is the invisible thing (foundations exception, which applies often with beginners).

**Three sizes. The size is a floor, not a ceiling: pick the size that makes the idea clear to someone meeting it
for the first time. Anything with a "how it works" gets a Walk at least. Glance is only for ideas with no process
in them. The idea list names the size for every page. NOTHING on this hub is a static picture: every page,
Glance included, is interactive. Motion is used where it carries the idea, not as decoration.**
- **Glance** (ideas with no process in them): a diagram with ONE control, a toggle, a slider, a hover,
  a click, and the diagram responds: boxes resize, layers light up, a value slides into its slot.
  No steps, no inputs, no state to manage. Examples: data types and sizes, naming conventions, JDK/JRE/JVM.
  **Motion only when it shows something (instructor, 2026-10-12): never animation for its own sake.** A
  layer lighting up answers a question; a token flying around a static diagram does not. If nothing in the
  idea moves, the page responds to its control and otherwise stays still.
- **Walk** (the default): a step-through that shows what happens behind the scenes, 4 to 10 steps, Next and
  Reset, one sentence per step, the picture changes at each step. Evaluation order, truncation, what == compares,
  the string printf builds, the path through if/else, a loop running.
- **Model**: the full simulator with editable inputs, computed outcomes, and an experiment that lets the
  learner break the rule and see the consequence. Only where the mechanism is the whole point and the
  instructor wants to play with it in class: the call stack, the Scanner buffer. Few per week.
  `week-01/visuals/24-method-call-stack.html` is the reference for this size, not the template for all.

**Design is the same for all three sizes** (header, stage, panels where they make sense, takeaway, rail).
A Glance page may drop the left/right split and put its one control under the animation.

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

## Agents
Pages are built by subagents, one page per agent, from this file + the calibration page of the size + the
workbook text + the demo code. Use **Opus** for pages (quality matters more than cost; a redo costs more).
Use Sonnet for mechanical work: diffs, link checks, compile checks. The lead verifies every page in a browser.

## Workflow per week
1. After the week's content review is done in `04.Weeks/Week NN/review.md`.
2. Read the fall workbooks for the week and the spring hub's pages for the same week.
3. Produce the idea list: for each idea, keep-and-reskin / rebuild / new / drop, with a one-line reason;
   same for reference pages, exercise companions, games. Instructor confirms before building.
4. Build: one page per task, at the size named in the idea list, against the approved reference page for
   that size (Model: `week-01/visuals/24-method-call-stack.html`; Glance and Walk: the first approved page of each). Verify every page in a browser: interaction works, text budget, links resolve,
   rail renders, `node --check` on the inline script.
5. Update `week-NN/manifest.js`, the week index, the landing page, and run `build-search-index.js`.
6. Record progress in `.planning/PROGRESS.md`; plan changes in `.planning/DECISIONS.md`.

## Pre-commit sweep
Div balance; every href resolves; `<title>` set; one style, one script; no console errors on load;
fonts link present; rail present on every content page; no exercise solution anywhere outside companions.
