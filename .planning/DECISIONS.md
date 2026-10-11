# DECISIONS

## 2026-10-11 — Hub created
New repo for the fall cohort; design from Expeditors week 9 + capstone rail; doctrine carried over; examples rule (demos only, never exercises).

## 2026-10-12 — Theme A, list confirmed, calibration pages
Instructor kept the Expeditors tokens as they are (THEME-B variant deleted) and confirmed the week 1 idea list. The plan summary said 21 visuals; the confirmed table holds 25 (Glance 6, Walk 17, Model 2), so 25 are built. File numbers follow the manifest order, which keeps the call stack at 21. Calibration pages: Walk = 16-integer-division (10 and 3 from the operators demo), Glance = 10-jdk-jre-jvm.

## 2026-10-12 — Calibration feedback
Instructor: no animation for its own sake (JDK page: travelling file removed, the switch that lights the needed layer stays). Walk page step 9: the per-group "+ .5" chips were wrong; the leftover now moves into a dashed partial group labeled ".5 of a group" and the readout shows 3 + .5 = 3.5. The Walk page was approved in form ("looks great, the animation really helps").

## 2026-10-12 — Page 16 is a comparison, not a run
Instructor: stepping "line by line" through four Scanner calls read like one program eating the same buffer. Rebuilt as a Glance: the method is the one control (next / nextLine / nextInt / nextDouble / all four), typed-line chips stay, the code area shows only the one line that runs. Rule for later pages: a catalog of alternatives is a switch, never a step sequence.

## 2026-10-13 · Pick a Learner is a teacher tool, not a hub page
Dropped the Tools card from the landing page and the link from the week 1 footer. The page stays at tools/pick-a-learner.html (first names only) and Ray opens it from a bookmark. Reason: students gain nothing from it, and spinning it in class invites chatter.

## 2026-10-13 · Workbooks 1a and 1b merged into "Workbook 1a - IntelliJ and Git"
Ray's day 1 order: Git and GitHub (talk), IntelliJ and the first project, Share on GitHub, Shopping List exercise. Visuals renumbered to follow it: 01 version-control-timeline (1a · 1-1), 02 local-vs-remote (1-2), 03 maven-project-structure (1-3), 04 git-intellij-workflow (1-4). Pages 01, 02 and 04 now show first-maven-project / HelloWorld.java (the demo Ray builds live); the testing-git demo is retired. 1c pages untouched. Search index rebuilt.

## 2026-10-13 · Two new Glance pages for the merged 1a, visuals renumbered
Ray approved: 03 Your Folder Structure (Desktop/pluralsight tree, repository boundary = project folder), 04 The New Project Dialog (six fields plus sample code, click a field), and a "Share on GitHub" moment added first in 02 Local vs Remote. Inserted at manifest positions 03 and 04, so 03-25 became 05-27 (call stack is now 23). Week 1 now has 27 visuals. All three verified in Chrome.

## 2026-10-13 · Folder structure is page 01; Local vs Remote starts at "Local only"
Ray: the folder tree is the first thing he does on day 1, so it is visual 01 (group "Workbook 1a · Day 1 setup"); timeline 02, local-vs-remote 03, dialog 04. Local vs Remote reworked: opens at moment 1 "Local only" (GitHub and teammate columns are dashed placeholders), "Share on GitHub" creates the GitHub block (short reveal, motion that shows the mechanism), then Edited, Committed, Pushed, Pulled. Six moments, same hash on both sides.

## 2026-10-13 · Centralized vs Distributed Glance added as visual 03
Ray: the difference must be clear briefly. One switch (Centralized / Distributed), same three computers and one server; clicking the server takes it offline and shows the consequence (nobody commits vs commits keep working, push later). Inserted in Section 1-1 after the timeline; 03-27 became 04-28 (call stack 24). Week 1: 28 visuals.

## 2026-10-13 · "Maven, the Build System" Glance as visual 06, before Maven Project Structure
Ray: learners pick "Build system: Maven" in the dialog without knowing what it is, and target/ appears after the first Run. Page shows what Maven reads (pom, src) and makes (target, jars) across Compile / Run / Package / Clean. Placed before the folder-structure page ("what" before "where"). 06-28 became 07-29; call stack 25. Week 1: 29 visuals.

## 2026-10-13 · "Variables, Named Boxes" Walk as visual 12
Ray noticed Section 3-1 "Variables" had no page. Built as a Walk: declare creates the box, initialize fills, assign replaces, read copies, reading an unfilled local is a compile error. Placed after Data Types and Sizes (workbook order p.46 then p.47); 12-29 became 13-30. Week 1: 30 visuals.

- 2026-10-13: exercise companions are checklist pages, not Walk visuals (Ray: the first three, built as Walks, were more confusing than the workbook for a struggling learner). Shopping List rebuilt as the calibration; string-application and math-application to be redone in the same shape after Ray approves it. No solution code or in-words solution anywhere on them.
