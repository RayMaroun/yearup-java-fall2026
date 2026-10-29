# Week 4 plan: Capstone 1 Accounting Ledger (built 2026-10-29, Ray's go; nothing pushed before Fri Oct 30 class)

Capstone week, so the week page has a different shape from weeks 1 to 3: no exercises, no games. Ray 2026-10-29: "we have a lot of struggling students this time around", the center of the week is a step-by-step Build Guide; the visuals hang off its steps. Spec: `.planning/workbook-text/capstone-1.txt` (pdftotext of Capstone 1 - Accounting Ledger v7.2Y). Starter (FinancialTracker.java with 16 TODOs, transactions.csv) goes out as a Teams message; Transaction.java is NOT given, learners write it first. Capstones are submitted in Brightspace, never through the submission form.

Rule for every page: hints, never the solution. No listing of solution code anywhere. A visual shows one mechanism on one picture; the Build Guide says what to build in words and pseudo-steps.

## Manifest kinds
- `reference` = the three guide pages (group "Capstone guide"): build-guide, requirements-checklist, demo-day.
- `visuals` = six pictures (group "Capstone 1 · hints").
The index is custom (not the four-tab page): a "how the week runs" strip, the three guide cards, the six visuals.

## Visuals (6; spring had 7, Menu Letter Map dropped, same content as Menu Flow Map)
| # | File | Title | The learner does | The picture answers | Guide step |
|---|---|---|---|---|---|
| 01 | 01-menu-flow-map.html | Menu Flow Map | Presses the letters D P L X on the Home card, then A D P R H on Ledger, then 1 to 5 and 0 on Reports; the current screen lights and the path is drawn | Which letter leads to which screen, every screen has a way back, X is the only exit | 5, 8, 10 |
| 02 | 02-one-line-one-object.html | One Line, One Object | Taps a csv line, it splits on the pipe into five boxes; taps each box to see which type it becomes (LocalDate, LocalTime, String, String, double) | The file format decides the fields of Transaction, and each field has a type | 3, 4 |
| 03 | 03-deposit-or-payment.html | Deposit or Payment | Types a positive amount, flips a Deposit/Payment switch, sees the stored sign and the file line; a running balance moves | The user always types a positive number, a payment is stored negative, the sign is what later filters deposits from payments | 6, 7, 9 |
| 04 | 04-date-range-reports.html | Date Range Reports | Picks "today" on a small calendar (default Nov 6 2026); four bands shade the ranges Month To Date, Previous Month, Year To Date, Previous Year; sample rows light when inside | Where each range starts and ends, inclusive, and the January edge for Previous Month | 10 |
| 05 | 05-load-then-append.html | Load Then Append | Presses Start (lines flow from the file into the list one per press), Add deposit (one line is appended to the file end), Exit, Start again (the new line comes back) | Read the whole file once at start, append one line per new transaction, never rewrite the file | 4, 6 |
| 06 | 06-custom-search-pipeline.html | Custom Search Pipeline | Fills some of the five filters, leaves others blank; rows drop out stage by stage; a blank filter is a pass-through | Blank means no filter, filters combine with AND, one pass over the list | 12 |

Sample data for the pictures: the starter transactions.csv (21 rows, Nov 2024 to Nov 3 2026). Use a handful of its rows, not all.

## Reference (3)
- build-guide.html "Build Guide": 13 numbered steps in build order. Each step: Do (words, pseudo-steps, at most one short mono fragment where a learner freezes), Done looks like (what the screen or the file shows), Watch out (the one or two mistakes the step produces), Commit (a suggested message). Steps link the visual that helps. Written by the lead.
- requirements-checklist.html "Requirements Checklist": the spec as tick boxes grouped by screen, exact letters and labels from the PDF, plus Other requirements, Bonus, Demonstration. Boxes remembered in localStorage (per browser), Reset button. Counter "n of N".
- demo-day.html "Demo Day": Ray's presentation guide (05.Capstones/capstone-1/presentation-guide.md) as six numbered sections with sub-bullets, a time budget per section that adds to 10 minutes, and a "before you present" check list.

## Landing page
index.html WEEKS row 4 flips to live with the Friday push.
