# Week 3 idea list — DRAFT 2026-10-24 (built ahead of Ray's review on his instruction "do everything, make sure everything is ready"; nothing pushed)

Source: fall Workbook 3a v7.2Y (Exceptions, File IO, Dates, ArrayList, HashMap), 3b (Agile, User Stories, GitHub Project Board), 3w Online Store. Spring week 3 hub (14 visuals, 4 reference, 11 companions, 11 games) checked idea by idea. Fall deploys 3a, 3b, 3w only: 3c GitHub (README) is not in the fall set, the outline's "Debugging with IntelliJ" and "JAR files" are not in any fall PDF. Rule for every visual: ONE PICTURE YOU TOUCH (CLAUDE.md), calibration page `week-02/visuals/07-class-vs-object.html`.

## Visuals (14: 10 rebuild, 4 agile pages rebuilt to the rule, 2 spring pages dropped)
| # | Idea | Spring page | Verdict | Example (from the fall demos, never an exercise) |
|---|---|---|---|---|
| 01 | Three kinds of errors: compile, logic, runtime | none | NEW | demo-01: `printLn` typo, discount math that prints a wrong price, index typed from the keyboard |
| 02 | try and catch: the jump to catch, the program goes on | 01-try-catch-flow | REBUILD | demo-01: two numbers, a division, second number 0 |
| 03 | Reading a file line by line until null | 02-buffered-reader | REBUILD | demo-02: poem.txt, readLine one press per line |
| 04 | Writing to a file: write, close, append true | 03-filewriter-bufferedwriter | REBUILD | demo-03: potato.txt lines, tomato.txt append |
| 05 | LocalDate, LocalTime, LocalDateTime and their parts | 04-local-date-time | REBUILD | demo-04: today, getDayOfWeek, getMonthValue, getHour |
| 06 | Date patterns: format and parse with a pattern | 05-datetime-formatter | REBUILD | demo-04: `MM/dd/yyyy` parse of 10/17/2026, `E, MMM dd, yyyy HH:mm:ss` format |
| 07 | Array vs ArrayList: fixed boxes vs a list that grows | 06-array-vs-arraylist | REBUILD | demo-05: names Raymond, Potato; a third add |
| 08 | ArrayList operations: add, get, set, remove shifts, add at index | 07-arraylist-operations | REBUILD | demo-05: kids Natalie, Brittany, Zachary |
| 09 | HashMap lookup: key in, value out, null when missing | 09-hashmap-operations (half) | REBUILD | demo-06: statesAndCapitals, get("TX"), get("OK") |
| 10 | HashMap operations: put, same key replaces, remove, values, keySet | 09 (other half) | REBUILD | demo-06: Product map 1 Potato, 2 Tomato |
| 11 | Waterfall vs Agile: what a changed requirement costs | 11-waterfall-vs-agile | REBUILD | invented: a bus tracker app |
| 12 | The Scrum cycle: sprint, standup, review, retro | 12-scrum-cycle | REBUILD | invented |
| 13 | A user story: role, want, benefit | 13-user-story-anatomy | REBUILD | invented: bus tracker (the hardware store is the exercise) |
| 14 | The project board: a card moves Todo, In Progress, QA, Done | 14-github-project-board | REBUILD | invented |
DROPPED: 08-hashmap-hashing (buckets and hash functions are deeper than the workbook, Ray: visuals make things easier); 10-list-vs-map decision tree (becomes the game List or Map?).

## Reference (4): cheat-sheet, glossary (Java and Agile words), common-errors, date-patterns (spring date-format-patterns kept: the one table learners look up).

## Exercise companions (11 + the new "Reading This Week's Exercises" page = 12)
famous-quotes, bedtime-stories, payroll-calculator, payroll-calculator-2 (new project, copy in; the fall text says "continue working on"), format-dates, search-engine-logger, search-inventory, search-inventory-map, user-stories (3b), github-project-board (3b), online-store (workshop 3w, team). No "send your URL" step anywhere.
NEW: `exercises/reading-the-exercises.html`, first of its kind (Ray, 2026-10-22, for struggling learners): invented exercises written in the workbook's house style with the week's words; tap a sentence, see what it asks for in code terms. Built by hand.

## Games (8): exception-hunter, file-flow (order the lines), date-formatter, arraylist-tracer, hashmap-lookup, collection-picker (List or Map?), user-story-builder, bug-hunter-3. Dropped: agile-glossary and flashcard-quiz-3 (flat quizzes), open-for-business (it is the workshop).
