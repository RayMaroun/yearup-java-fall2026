# Agent brief — building one exercise companion (Week 6)

You build exactly ONE companion page. Read first: `CLAUDE.md` (design system, "Examples rule", "Companion shape", "No send your repository URL step", "One project per exercise"), then the calibration page `week-01/exercises/shopping-list.html` and one week 2 companion, `week-02/exercises/vehicle-inventory.html` and `week-02/exercises/cellphone-service-2.html` (the "new project, copy in" wording). Copy their CSS base, header, sections, tick behavior (localStorage), chips and rail block exactly; change only the content.
Workbook text: `.planning/workbook-text/wb5a.txt` (fall v7.2Y, source of truth). Grep your exercise heading and read it whole. `week-06/manifest.js` gives your file name, title, group and desc; link chips point at files listed in that manifest (visuals and reference), nothing else.

## Shape (binding)
Sections in this order, all visible at once, nothing behind Next: "What you are building" (2 short paragraphs: what it does, what it does not do), "Do these in order" (the workbook steps as tickable actions, each expanding to a "how" in IntelliJ terms and a "done when" line; ticks kept in localStorage under a key unique to the page), "What a finished run looks like" (output only, mono, with "yours will differ"), "Where people get stuck" (3 to 4 lines), "Pages that help" (chips). Spoiler-free: plain-English restatement, inputs and outputs, no solution code, never what to type inside main. The "how" names menus, files, class names and method names the workbook itself names. Text budget about 1300 visible characters.
- Project setup step: Maven, JDK 17, GroupId com.pluralsight, Create Git repository ticked, location `Desktop/pluralsight/java-development/workbook-5`, Share Project on GitHub. The workshop file inventory.csv goes at the project root (next to pom.xml); it comes from Raymond on Teams.
- Last step is "Commit and push". NEVER "send your repository URL to your instructor" (the workbook has it; the course dropped it).
- "Continue working on X" or "modify X" becomes: new project `x-2`, copy the previous code in, change it there, own repository.
- Bonus steps are marked Bonus and tickable too. Rules: learners not students; Raymond; US spelling; no emoji; no em dashes; no entities in script.
- `<title>Title | Week 6 Visual Hub</title>`, `.back` href `../index.html#<slug>`, rail: `Rail.render(document.getElementById("rail"),{week:6,kind:"exercises",current:"<file>"})`.

## Deliver
Write `week-06/exercises/<file>`. `node --check` the inline script; divs balanced; one style; title; rail; no em dash; every chip href exists in the manifest. Do not edit other files, do not commit, do not open a browser. Report under 10 lines.

## Week 6 corrections to this brief (binding, they override anything above)
- The lists of forbidden exercise domains above are last week's. This week's list is in `.planning/week-06-plan.md` (the NEVER paragraph): the vehicle classes (Vehicle, Moped, Car, SemiTruck, Hovercraft), the assets exercise rules (house value by condition, vehicle depreciation, Cash) and the Car Dealership. The demo examples to use are quoted in the same file (Animal and Dog; Human, Caveman, ModernPerson; abstract Asset and House with the simple formula).
- Spring pages for ideas only: `/Users/ray/Desktop/Training/Pluralsight/YearUp/yearup-java-spring2026/week-06/`. Calibration pages for the fall design: the finished `week-05/` pages of the same kind.
- There is no data file and no JUnit this week. Money in any Java shown is BigDecimal. The fall slide for getClass uses getClass().getSimpleName().
- No learner first names in examples (roster first names in `../../docs/PEOPLE.md`); the instructor is Raymond.
