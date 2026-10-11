# Restyle brief: move ONE existing visual page to the hero layout (content untouched)

Read, in order: `CLAUDE.md` (section "Every visual page: the HERO LAYOUT"), then the reference page
`week-01/visuals/15-integer-division.html` (read the WHOLE file: its CSS and HTML are the pattern, and its script shows
how the caption, dots, empty readouts and Focus are wired). Then your page.

## What stays exactly the same
- Every word of content: lede claim (shorten to ONE line if longer; keep the bold claim), step sentences, chips, labels,
  code, console output, takeaway, hint. Do not rewrite copy. Do not add or remove steps.
- The page script's logic: steps, computations, presets, the model. Keep element ids so the script keeps working.
- Title, tag, back link, rail call, fonts link, ambient canvas, reduced-motion rule.

## What changes
- HTML structure and CSS follow the reference: topbar (lab + chips + Focus button) → hero `.pic` full width 390px
  (480px in Focus) → `.caption` (`.n` step counter + `.t` sentence) → `.toolbar` (Walk: Back · dots · Next · Reset ghost;
  Model: Step · Run · Back · Reset · Experiment; Glance: the page's ONE control) → `.hint` → `.support` (code left; readouts
  and console right; Model inputs above the readouts) → `.take` → rail.
- Status box becomes the caption. Its state classes (cut/left/ok/trouble/push/pop...) move to `.caption` and color the
  left border only.
- Step counter becomes `<div class="n" id="stepno"><small>step</small>3 / 9</div>`; add `.dots` in the toolbar
  (one `<i>` per step, `done` before, `now` current), rebuilt in setBtns().
- Readout tiles get class `empty` while they show "?" (see setStat in the reference).
- The picture is the hero: re-scale it to use the width (bigger elements, centered block; a 1.3x to 1.5x scale of your
  current geometry is usually right). Keep SVG/canvas pictures proportional; do not let them sit small in a corner.
- Add the Focus button and `body.solo` behavior exactly as in the reference (localStorage "hub-focus", label flip,
  re-render the picture when toggled so sizes recompute). The body class is `solo`, never `focus`.
- Glance pages: the control goes in the toolbar row; the caption text is the current state's sentence; `.support` holds
  whatever secondary panel the page had (detail text, code), or is omitted if there is nothing secondary.
- Model pages (15, 21): the live model is the hero; inputs go in `.support` above the readouts (they are edited while
  stopped, so they do not need to be in the eye line); Experiment button goes in the toolbar.
- Remove the old left/right `.grid` / `.panelL` / `.panelR` split and any CSS that is no longer used.

## Checks before you report
- `node --check` on the inline script; divs balanced; one `<style>`; one `.take`; rail present; no em dash; no HTML
  entity inside `<script>`; `<title>` unchanged; `.back` href unchanged.
- Count the visible non-code characters; it must not grow.
- Report in under 12 lines: file, what became the hero, where the control/toolbar is, anything you could not fit.
Do NOT open a browser, do NOT edit other files, do NOT commit.
