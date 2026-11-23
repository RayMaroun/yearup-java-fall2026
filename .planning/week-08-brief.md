# Week 8 (Capstone 2) picture pages: common brief for page builders

You build ONE page of the Year Up Java Visual Hub, week 8. Read this whole brief, then your page spec.

## Read first, in this order
1. `06.Website/yearup-java-fall2026/CLAUDE.md` (design system with exact values, the "one picture you touch" rule, conventions). It is binding, with the three exceptions listed below.
2. Three finished pages in the CURRENT style, to copy the shell, CSS and tone from (header, `.stage`, `.caption` with its tones, `.take`, ambient canvas, rail). Read at least two fully:
   - `06.Website/yearup-java-fall2026/week-07/visuals/19-stream-methods-one-at-a-time.html` (tabs, things that travel, one sentence that answers)
   - `06.Website/yearup-java-fall2026/week-07/visuals/20-reduce.html` (parts that light up as they are used)
   - `06.Website/yearup-java-fall2026/week-07/visuals/21-packages-layer-feature-or-mixed.html` (a switch between views of the same thing)
3. `06.Website/yearup-java-fall2026/week-08/options.js`: the data of the four capstone options (Deli, Pizza, Taco, Custom). It is the ONLY source of option data: names, lists, prices, menu lines, questions. Never retype a price or a list in your page.
4. The capstone text of at least the Deli, as a learner sees it: `pdftotext -layout "04.Weeks/Week 08/deploy/Capstone 2 - The Deli - Solo v7.2Y-R.pdf" -` (the other three are next to it: Pizza, Taco, Custom). Your page must agree with it sentence for sentence.

Base folder for all paths: `/Users/ray/Desktop/Training/Pluralsight/YearUp/YearUp-Fall-2026`

## Who the page is for
Adult beginners, seven weeks into their first Java course, building this capstone alone in one week. Some are lost. Some will follow the hub pages INSTEAD of reading the text, so a page must be complete and exactly right: the same rules, the same numbers, the same menu numbers and the same words as the text ("extra portion", "regular toppings", "premium", "included"). Never simplify a rule and never leave one out of the part your page covers.

## The line you must not cross
A page shows WHAT the program must do: the rules, the screens, the questions and their order, where each choice leads, how a price adds up, with real numbers. It never shows HOW to build it:
- no class names for the capstone, no "which class holds what", no class diagram of the capstone;
- no Java code of the capstone (no method, no loop, no `if`). A date pattern such as `yyyyMMdd-HHmmss` is data, not code, and is fine. The enums page is the one exception and has its own rule in its spec.
- Do not say or imply that there is one right design.

## Exceptions to CLAUDE.md for week 8 (decided with the instructor)
1. Shared data: each page loads `<script src="../options.js"></script>` BEFORE its own inline script and reads `window.CAP2`. Use `CAP2.cents()` and `CAP2.money()` for every sum.
2. The option switch: every page that shows option data has, at the top of the stage, four pill buttons (The Deli, The Pizza, The Taco, Custom). Start on `CAP2.saved()`, call `CAP2.save(key)` on change. This is the one allowed use of localStorage on these pages. Switching redraws the whole picture with that option's words and numbers.
3. Text budget: up to about 900 visible characters of prose outside the picture.

## Style of the picture (what the instructor asked for on Nov 22)
- The learner acts and the page answers. Things MOVE: an item travels from a list to the order, a price line lands in the total, the user "walks" from one screen to the next. Motion only where it carries the idea. Under `prefers-reduced-motion` the page still works, without the travel.
- One press, one visible consequence, and the `.caption` sentence answers that press in plain words. Before any press it says what is on screen and what to do.
- Start from what the learner already knows (a paper order pad, a cashier asking questions, a price list on a wall) rather than from programming words.
- Never a wall of text. Never a static picture.

## Hard rules
- One self-contained HTML file (one `<style>`, one inline `<script>`, vanilla JS, ES5-style like the model pages), plus `../options.js`, `../manifest.js`, `../../assets/rail.js`.
- `<title>Title | Week 8 Visual Hub</title>`; back link `<a class="back" href="../index.html#SLUG">&#8592; Week 8 index</a>`; eyebrow `.tag` "Capstone 2 &middot; <phase>"; exactly one `.take` at the end; then `<div id="rail"></div>` and
  `<script src="../manifest.js"></script><script src="../../assets/rail.js"></script><script>Rail.render(document.getElementById("rail"),{week:8,kind:"visuals",current:"SLUG"});</script>`
- Never style bare `.done` or `.now` (the rail uses them).
- Learners, never "students". The instructor is Raymond. US spelling. No emoji. No em dashes. No HTML entities inside `<script>`. No people's names in examples.
- Every user-visible number comes from `CAP2`. Custom has no signature items and its special question is the learner's own: handle both without breaking.
- Do NOT edit `manifest.js`, `options.js`, the week index or any other file. Write your one page only.

## NO BROWSER, of any kind
The instructor is sharing his screen in class right now. Do not open Chrome, do not run headless Chrome, do not use any browser or screenshot tool, do not `open` any file, do not start a server. Verify by other means:
1. Extract the inline script and run `node --check` on it.
2. Run the script in Node against a stand-in `document` you write (a small fake DOM in a scratch file OUTSIDE the hub folder) and drive your own logic functions with each of the four options: every price and every list your page computes must match `options.js`. Keep the page's logic in plain functions that take data and return data, so this is possible.
3. Check by reading: every `id` used in the script exists in the HTML, div tags balance, no option-specific word is hard-coded.
Say in your report exactly which of these you ran. The page will be looked at in a browser later by someone else.

## Report back (short)
The file you wrote, what the learner does on it and what answers, how you verified it (which of the three checks, with the numbers you compared), anything in the capstone text you had to interpret, anything you could not do.
