/* Week 4 manifest: Capstone 1 Accounting Ledger. Capstone week: guide pages under reference, hint pictures under visuals, no exercises, no games.
 * Plan in .planning/week-04-plan.md (2026-10-29). The rail and the week index read this. */
window.HUB_MANIFEST = {
  week: 4,
  live: true,
  title: "Capstone 1 · Accounting Ledger",
  visuals: [
    { file: "01-menu-flow-map.html", title: "Menu Flow Map", group: "Capstone 1 · hints", desc: "Press the letters and watch the path: Home, Ledger, Reports, and the way back from each." },
    { file: "02-one-line-one-object.html", title: "One Line, One Object", group: "Capstone 1 · hints", desc: "A csv line splits on the pipe into five fields, and each field has a type. That is your Transaction class." },
    { file: "03-deposit-or-payment.html", title: "Deposit or Payment", group: "Capstone 1 · hints", desc: "The user types a positive number. Flip the switch and see what gets stored, and what the ledger filters on later." },
    { file: "04-date-range-reports.html", title: "Date Range Reports", group: "Capstone 1 · hints", desc: "Pick today on the calendar and the four report ranges shade themselves. Rows light when they fall inside." },
    { file: "05-load-then-append.html", title: "Load Then Append", group: "Capstone 1 · hints", desc: "Start reads the whole file into the list. A new deposit appends one line. Start again and it is still there." },
    { file: "06-custom-search-pipeline.html", title: "Custom Search Pipeline", group: "Capstone 1 · hints", desc: "Five filters, fill the ones you want. Rows drop out stage by stage and a blank filter lets everything through." },
    { file: "07-commit-message.html", title: "The Commit Message", group: "Capstone 1 · hints", desc: "type: what changed, a blank line, bullets on what you did. The five types, six commits from this capstone, the usual bad lines rewritten, and a box to check your own." }
  ],
  reference: [
    { file: "build-guide.html", title: "Build Guide", group: "Capstone guide", desc: "Thirteen steps from empty project to demo, in the order to build them. Each one says what done looks like, what goes wrong, and what to commit." },
    { file: "requirements-checklist.html", title: "Requirements Checklist", group: "Capstone guide", desc: "The spec as tick boxes, screen by screen, with the exact letters and labels. Tick them before you demo." },
    { file: "demo-day.html", title: "Demo Day", group: "Capstone guide", desc: "The ten minutes, section by section: introduction, challenges, repository, code, live demo, questions. And what to check before you start." }
  ],
  exercises: [],
  games: []
};
