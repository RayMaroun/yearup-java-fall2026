# Week 1 idea list — CONFIRMED by the instructor 2026-10-12 (drafted 2026-10-11)

Source: fall Workbooks 1a, 1b, 1c (v7.2Y) learning objectives, cross-checked against the 25 spring visuals.
Verdicts: KEEP = same idea, re-skin in the new design at the named size. REBUILD = same idea, new interaction or new example.
NEW = no spring page. NONE = idea covered by the workbook text/image, no page. Sizes: Glance / Walk / Model.

## Visuals (25 → 23 if Module 1 pages are dropped: 15 keep, 4 rebuild, 2 new, 2 fold, 2 drop?) — revised 2026-10-11: Walk is the default, Glance only for labeled pictures
| # | Idea (workbook) | Spring page | Verdict | Size | Note |
|---|---|---|---|---|---|
| 01 | Maven project folder structure (1a) | 01-maven-project-structure | KEEP | Glance | click a folder, see what goes there |
| 02 | What version control is: timeline, roll back (1b 1-1) | 02-version-control-timeline | KEEP | Walk | |
| 03 | Local vs remote repository (1b 1-2, 1-3) | 03-distributed-vcs | KEEP | Glance | |
| 04 | Git through IntelliJ: change → commit → push → GitHub (1b) | 04-git-intellij-workflow | KEEP | Walk | matches v7.2: public repo |
| 05 | Binary counter (1c 1-2) | 05-binary-counter | DROP | | 1c Module 1 skipped in spring (Notion checklist, Tue); re-add only if the fall review changes that |
| 06 | Bytes and storage scale (1c 1-2) | 06-bytes-storage | DROP | | same |
| 08 | Compile → bytecode → JVM (1c 2-1) | 07-java-compilation | KEEP | Walk | |
| 09 | JDK ⊃ JRE ⊃ JVM (1c 2-1) | 08-jdk-jre-jvm | KEEP | Glance | |
| 10 | Data types and sizes (1c 3-1) | 09-data-types | KEEP | Glance | add "declared vs initialized / default values" as the control (folds the Variables idea) |
| 11 | final constants (1c 3-1) | 10-final-constants | KEEP | Glance | |
| 12 | Naming conventions (1c 3-1) | 11-naming-conventions | KEEP | Glance | |
| 13 | Concatenation vs addition: "1" + 2 + 3 (1c 3-2) | none | NEW | Walk | a classic beginner trap, one slider over the expression |
| 14 | Integer division and modulo (1c 3-2) | 12-integer-division | KEEP | Walk | |
| 15 | Pre/post increment (1c 3-2) | 13-pre-post-increment | KEEP | Walk | |
| 16 | Widening, narrowing, casting, literals are typed (1c 3-2) | 14-widening-narrowing | REBUILD | Walk | cup/size picture + the (byte)1000 overflow + 2.2f; v7.2 removed char from the chain |
| 17 | printf format specifiers (1c 3-3) | 15-printf-format | KEEP | Walk | v7.2 specifiers |
| 18 | Scanner buffer: nextInt then nextLine (1c 3-3) | 16-scanner-buffer | KEEP | Model | the mechanism is the lesson; instructor plays it in class |
| 19 | Scanner methods: next / nextLine / nextInt (1c 3-3) | 23-scanner-methods | KEEP | Walk | |
| 20 | if / else if / else path (1c 4-1) + conditional operator (4-3) | 17-if-else-flowchart | KEEP | Walk | add the ?: form as a toggle (folds the conditional operator) |
| 21 | Logical operators && || ! (1c 4-1) | 18-logical-operators | KEEP | Walk | |
| 22 | == vs .equals on Strings (1c 4-1) | 19-string-comparison | KEEP | Walk | |
| 23 | Method signature anatomy (1c 4-2) | 20-method-signature | KEEP | Walk | |
| 24 | Method call stack, parameters are copies (1c 4-2) | 21-method-call-stack | BUILT | Model | approved as the Model reference |
| 25 | Repeated code → one method (1c 4-2) | 22-method-decomposition | REBUILD | Walk | before/after toggle on the rectangle demo (demo-methods-java), not an exercise |
| 26 | One Scanner passed between methods (1c 4-2) | none | NEW | Walk | from InputApp demo (potatoScanner / tomatoScanner); workbook pp. 113-116 (three choices, re-declaring, passing). BUILT as 23. REVIEW with Ray: the trap chip shows the swallowing risk via type-ahead; the workbook's own trace shows line-by-line typing looks fine. Decide keep / soften / drop the trap chip. |
| 27 | switch: traditional with break, fall-through, arrow form (1c 4-3) | 24-switch-flow | REBUILD | Walk | both forms side by side, v7.2 teaches both |
| 28 | From problem to code: read, identify, plan, translate | 25-problem-decomposition | REBUILD | Walk | BUILT as 25 with an invented print-shop problem. EXTRA: not a workbook topic (instructor note 2026-10-12). Keep, redo, or drop at Ray's review. |
NONE: IntelliJ new-project dialog (workbook screenshots), Math class (a table), Section 3-4 AI (instructor's call), Module 5 debugging (Week 2 covers the debugger).

## Reference (4, all KEEP, re-skin, content refreshed to v7.2)
cheat-sheet (apply v7.2 fixes: taxRate 0.0825, 2.2f, Math.toRadians, main(String[] args)), glossary, common-errors (add 1a's Common Errors list), intellij-shortcuts (Mac + Windows columns).

## Exercise companions (10, all KEEP, spoiler-free, 3 updated)
shopping-list (renamed from shopping-cart), string-application, math-application, basic-calculator (ints, always multiply, show equation), payroll-calculator, sandwich-shop (new "no discount" line), sandwich-shop-2, method-practice (reordered sub-steps), payroll-calculator-2, rental-car-calculator ($22.5 output, step numbering).

## Games (13, all KEEP, re-skin; 3 need a content check for exercise spoilers)
type-matcher, cast-or-crash, name-that-convention, output-predictor*, format-fixer, bug-hunter*, condition-crafter, switch-tracer (both switch forms), method-builder, binary-challenge, flashcard-quiz, git-mission (IntelliJ flow), your-first-day*.
(*) verify the code shown is demo-based or invented, never an exercise solution.

## Size balance (corrected 2026-10-12): 25 visuals = Glance 6 · Walk 17 · Model 2. Theme: A (Expeditors tokens), confirmed by the instructor 2026-10-12. File number = position in the manifest order (01 to 25); the call stack stays 21.
