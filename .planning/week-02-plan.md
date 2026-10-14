# Week 2 idea list — DRAFT 2026-10-15 (Ray reviews Thu 16 Oct; built ahead on his instruction, nothing pushed before Mon 19 Oct)

Source: fall Workbook 2a v7.2y (Strings, Classes, Loops and Arrays), 2b (IntelliJ part 2, skipped in spring, debugger kept as one page), cross-checked against the 16 spring visuals.
Verdicts as in week 1: KEEP / REBUILD / NEW / NONE. Walk is the default; Glance only for ideas with no process; Model only where the mechanism is the lesson.

## Visuals (18: 11 keep, 3 rebuild, 4 new)
| # | Idea (workbook) | Spring page | Verdict | Size | Note |
|---|---|---|---|---|---|
| 01 | String methods: what each returns on one sample string (2a 1-1 p.6, 9-12) | 01-string-methods | KEEP | Glance | one control: pick the method, the result slides out; length, charAt, indexOf, substring, trim, toUpperCase, replace, contains, split |
| 02 | Strings are immutable: toUpperCase() returns a new String, the old one stays (2a 1-1) | 02-string-immutability | KEEP | Walk | the "wrong first" moment: call without assignment, nothing changes |
| 03 | Comparing Strings: equals, equalsIgnoreCase, compareTo (2a 1-1 p.7-8) | none (week 1 has == vs equals) | NEW | Walk | week 2 adds equalsIgnoreCase and compareTo; == stays a one-step reminder |
| 04 | String to number: parseInt, parseDouble, what breaks (2a 1-2 p.17) | 03-string-parsing | KEEP | Walk | NumberFormatException as the experiment step; why read with nextLine then parse |
| 05 | String to date: LocalDate.parse and the format (2a 1-2 p.18) | 04-string-conversion | REBUILD | Walk | only the date half; parsing moved to 04 |
| 06 | StringBuilder: append builds in place, toString at the end (2a 1-4 p.28-29) | none | NEW | Walk | the builder grows step by step next to the String + String version |
| 07 | Class vs object: one blueprint, many instances (2a 2-1 p.33-38) | 00-intro + 05-classes-objects | REBUILD | Walk | merged into one page; fields get values at `new` |
| 08 | Encapsulation: private fields, getters and setters as the gate (2a 2-1 p.35, 2-2 p.44) | 06-encapsulation | KEEP | Walk | default access modifier as the last step |
| 09 | What `new` does: memory, constructor, `this.name = name` (2a 2-1 p.36-38) | 09-object-lifecycle | REBUILD | Walk | the constructor body line by line |
| 10 | Two variables, one object: references (2a 2-2 p.43) | none | NEW | Walk | change through one name, see it through the other |
| 11 | Method overloading: the compiler picks by the parameter list (2a 2-3 p.51-52) | 08-method-overloading | KEEP | Walk | |
| 12 | Constructor overloading and this(...) (2a 2-3 p.53-54) | 07-constructor-overloading | KEEP | Walk | |
| 13 | Loop types: while, do/while, for, the same loop three ways (2a 3-1 p.59-62) | 10-loop-types | KEEP | Walk | counter, condition, body, update highlighted each pass |
| 14 | break vs continue (2a 3-1 p.63-64) | 11-break-continue | KEEP | Walk | |
| 15 | Arrays: index, length, zero-based, out of bounds (2a 3-2 p.69-70) | 12-arrays-indexing | KEEP | Model | editable index, the out-of-bounds experiment |
| 16 | for-each vs indexed for (2a 3-2 p.71-72) | 13-for-each-loop | KEEP | Walk | |
| 17 | Passing and returning arrays: a method changes the caller's array (2a 3-2 p.73-74) | none | NEW | Walk | |
| 18 | Sorting and copying arrays: Arrays.sort, copy vs same reference (2a 3-2 p.75-78) | 14-array-operations | KEEP | Walk | |
| 19 | Debugger: breakpoint, step over, variables, stack frame (2b 1-2 p.24-32) | 15-debugger-walkthrough | KEEP | Walk | 2b skipped in spring; kept as the one page learners can use alone. Ray decides. |
NONE: 1-3 Using AI (Ray's hands-on session, pages as reading); 2b 1-1 code generation (Generate menu goes into intellij-shortcuts reference); Module 4 practice repo and Code Wars.

## Reference (4, all KEEP, content refreshed): cheat-sheet (String methods, parsing, StringBuilder, class syntax, loops, arrays), glossary, common-errors (NumberFormatException, ArrayIndexOutOfBounds, NullPointerException on an unset field, missing return), intellij-shortcuts (add Generate: constructor, getters/setters, toString; debugger keys).

## Exercise companions (12 + workshop = 13, checklist shape, spoiler-free)
full-name-generator, full-name-parser, highscore-wins, theater-reservations, address-builder, cellphone-service, cellphone-service-2 (new project, copy in), cellphone-service-3 (new project, copy in), looping-exercises, test-statistics, vehicle-inventory, roll-the-dice (2a 3-1 Exercise 2, in the fall workbook), neighborhood-library (Workshop 2, Friday).

## Games (plan after the demos review; one mechanic each, examples from demos or invented)
Candidates from spring: string-method-match, parse-challenge, loop-tracer, index-inspector, class-builder, constructor-picker, break-or-continue, debug-detective, bug-hunter-2, access-denied. Dropped: array-index-quiz, flashcard-quiz-2 (flat quizzes).

## Size balance: 19 visuals = Glance 1 · Walk 17 · Model 1.
