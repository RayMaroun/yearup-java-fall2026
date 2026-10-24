# Week 3 content brief (shared by every content agent). Written 2026-10-24.

Fall folder F = /Users/ray/Desktop/Training/Pluralsight/YearUp/YearUp-Fall-2026
Spring folder S = /Users/ray/Desktop/Training/Pluralsight/YearUp/YearUp-Spring-2026
Week folder W = F/04.Weeks/Week 03

Read first: F/docs/WORKFLOW.md (sections "Before the week", "Shape of a week", "One project per exercise", "Commented-out code", "Workshop starter code"), F/docs/WORKING-WITH-RAY.md, F/docs/DECISIONS.md (search 2026-10-17 and 2026-10-22 entries), F/04.Weeks/Week 02/review.md (the week 2 pattern).

## Sources
- Fall workbook text (v7.2Y, source of truth): F/06.Website/yearup-java-fall2026/.planning/workbook-text/wb3a.txt, wb3b.txt, wb3w.txt, wb3-outline.txt
- Spring workbook PDFs (v7.1Y, for diffs): S/02.Student Courseware - to Deploy/Week 3_ Java Collections and FileIO/*.pdf (pdftotext -layout is at /opt/homebrew/bin/pdftotext; write text files into the scratchpad only)
- Fall data files: F/02.Student Courseware - to Deploy/Week 3_ Java Collections and FileIO/DataFiles.zip (employees.csv, goldilocks.txt, hansel_and_gretel.txt, inventory.csv, mary_had_a_little_lamb.txt, products.csv with a header row and a Department column)
- Spring instructor demos (what Ray typed in class): S/Live-Env/workbook-3/demo-*-java (payroll-calculator, SearchInventory, SearchInventoryMap there are exercises done live: never copied as demos)
- Spring solutions: S/Solutions-For-Me/pluralsight/java-development-spring-2026/workbook-3/, workshops/online-store/, capstones/FinancialTracker/
- Project layout template: F/04.Weeks/Week 02/workbook-2/address-builder (copy .idea/, .mvn/, .gitignore, pom.xml shape; artifactId = project name; groupId com.pluralsight; Java 17). Never copy target/ or .DS_Store.

## Rules that bind every file
- Ray's spring code is the base. Keep it as it is; add comments; change code ONLY where the fall v7.2Y text differs from spring (prompt wording, formats, new requirements). Alternatives Ray left as commented code stay whole. (Ray, 2026-10-17: "if my previous solution is already good, keep it as it is".)
- Fully commented: a header comment that says what the program does, a short comment per step that says WHY, never narration of the obvious. Solutions are shared with learners.
- Commented-out code: two or more switched-off lines in one /* ... */ pair; a single switched-off line keeps //; explanations are always //.
- One project per exercise: "continue working on X" or "modify X" becomes a NEW project named x-2 with the code copied in. payroll-calculator-modified becomes payroll-calculator-2.
- Terminology: learners, never students (prose and identifiers). The instructor is Raymond. US spelling. No em dashes. No emoji. Potato Sensei and Raymond's own values are fine; no first name of a learner from the fall roster (do not invent realistic learner names; "Ray", "Mason", "Claude" from the spring demos are fine).
- Every project must compile and run on JDK 17: export JAVA_HOME=$(/usr/libexec/java_home -v 17); cd into src/main/java and javac with a file list (paths contain spaces), run with java -cp. Data files a program reads sit at the project root (working directory), exactly like spring.
- Do not touch anything under F/01, F/02, F/03, S/ (read-only), Live-Env, or the public repo yearup-fall-section-8-2026. Do not git commit anything. Do not delete: if something must go, mv it to ~/.Trash/.
- Every open question for Ray (a judgment call you did not make) goes into the review.md you are told to write, as a short bullet. Do not decide content questions silently.
- Report back in under 20 lines: what you built, what compiled, what you changed from spring and why, open questions.
