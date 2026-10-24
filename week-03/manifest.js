/* Week 3 manifest: every page of the week, per kind, in order. The rail and the week index read this.
 * Visuals follow the idea list in .planning/week-03-plan.md (2026-10-24): file number = position in this list. */
window.HUB_MANIFEST = {
  week: 3,
  title: "Collections and File IO",
  visuals: [
    { file: "01-three-kinds-of-errors.html", title: "Three Kinds of Errors", group: "Workbook 3a · Section 1-1" },
    { file: "02-try-catch-flow.html", title: "try and catch", group: "Workbook 3a · Section 1-1" },
    { file: "03-reading-a-file.html", title: "Reading a File Line by Line", group: "Workbook 3a · Section 1-2" },
    { file: "04-from-line-to-object.html", title: "From Lines to Objects", group: "Workbook 3a · Section 1-2" },
    { file: "05-writing-a-file.html", title: "Writing to a File", group: "Workbook 3a · Section 2-1" },
    { file: "06-date-and-time-objects.html", title: "LocalDate, LocalTime, LocalDateTime", group: "Workbook 3a · Section 2-2" },
    { file: "07-date-patterns.html", title: "Date Patterns", group: "Workbook 3a · Section 2-2" },
    { file: "08-array-vs-arraylist.html", title: "Array vs ArrayList", group: "Workbook 3a · Section 3-1" },
    { file: "09-arraylist-operations.html", title: "ArrayList Operations", group: "Workbook 3a · Section 3-2" },
    { file: "10-hashmap-lookup.html", title: "HashMap Lookup", group: "Workbook 3a · Section 4-1" },
    { file: "11-hashmap-operations.html", title: "HashMap Operations", group: "Workbook 3a · Section 4-1" },
    { file: "12-waterfall-vs-agile.html", title: "Waterfall vs Agile", group: "Workbook 3b · Section 1-1" },
    { file: "13-scrum-cycle.html", title: "The Scrum Cycle", group: "Workbook 3b · Section 1-1" },
    { file: "14-user-story.html", title: "A User Story", group: "Workbook 3b · Section 2-1" },
    { file: "15-project-board.html", title: "The Project Board", group: "Workbook 3b · Section 3-1" }
  ],
  reference: [
    { file: "cheat-sheet.html", title: "Week 3 Cheat Sheet", group: "Reference", desc: "The syntax of the week on one page: try/catch, BufferedReader, FileWriter, dates, ArrayList, HashMap." },
    { file: "glossary.html", title: "Glossary", group: "Reference", desc: "The words of the week, each in one sentence, with the page that shows it. Java and Agile." },
    { file: "common-errors.html", title: "Common Errors", group: "Reference", desc: "FileNotFoundException, IOException, null from a map, index out of bounds, a forgotten close: what it says, what to do." },
    { file: "date-patterns.html", title: "Date Pattern Letters", group: "Reference", desc: "Every pattern letter DateTimeFormatter understands, with what it prints for one sample date." }
  ],
  exercises: [
    { file: "reading-the-exercises.html", title: "Reading This Week's Exercises", group: "Before you start", desc: "Tap any sentence of a workbook-style exercise and see what it asks you to write. Invented exercises, this week's words." },
    { file: "famous-quotes.html", title: "Famous Quotes", group: "Workbook 3a · Section 1-1", desc: "Ten quotes in an array, pick one by number, then add try/catch so a bad number does not crash the program." },
    { file: "bedtime-stories.html", title: "Bedtime Stories", group: "Workbook 3a · Section 1-2", desc: "Ask for a story file, read it with BufferedReader, print every line with its line number." },
    { file: "payroll-calculator.html", title: "Payroll Calculator", group: "Workbook 3a · Section 1-2", desc: "Read employees.csv line by line, split on the pipe, build Employee objects, print id, name and gross pay." },
    { file: "payroll-calculator-2.html", title: "Payroll Calculator 2", group: "Workbook 3a · Section 2-1", desc: "New project, copy the first one in: ask for the input and output file names and write the payroll as a csv." },
    { file: "format-dates.html", title: "Format Dates", group: "Workbook 3a · Section 2-2", desc: "Today's date and time in four formats with DateTimeFormatter, plus a GMT challenge." },
    { file: "search-engine-logger.html", title: "Search Engine Logger", group: "Workbook 3a · Section 2-2", desc: "A loop that asks for search terms and appends a timestamped line to logs.txt for launch, search and exit." },
    { file: "search-inventory.html", title: "Search Inventory", group: "Workbook 3a · Section 3-2", desc: "Products in an ArrayList, printed with printf; bonuses: load from inventory.csv, sort by name, a menu." },
    { file: "search-inventory-map.html", title: "Search Inventory Map", group: "Workbook 3a · Section 4-1", desc: "The same products in a HashMap keyed by id; look one up, say so when it is not there." },
    { file: "user-stories.html", title: "User Stories", group: "Workbook 3b · Section 2-1", desc: "Turn eight hardware store requirements into user stories: As a..., I want..., so that..." },
    { file: "github-project-board.html", title: "GitHub Project Board", group: "Workbook 3b · Section 3-1", desc: "A board named Hardware Store Project, a Testing column, one card per user story, with descriptions." },
    { file: "online-store.html", title: "Online Store", group: "Workshop 3w", desc: "Team workshop: products.csv into a list, a home screen, display and search products, a cart with a total." }
  ],
  games: [
    { file: "exception-hunter.html", title: "Exception Hunter", group: "Workbook 3a · Section 1-1", desc: "A short program and an input flash up: runs fine, or which exception? Fifteen rounds." },
    { file: "file-flow.html", title: "File Flow", group: "Workbook 3a · Sections 1-2 and 2-1", desc: "Put the scrambled lines of a read or a write back in the order that works." },
    { file: "date-formatter.html", title: "Date Formatter", group: "Workbook 3a · Section 2-2", desc: "One date, one pattern: type what it prints. Or the other way round." },
    { file: "arraylist-tracer.html", title: "ArrayList Tracer", group: "Workbook 3a · Section 3-2", desc: "add, set, remove, add at an index: type the list after each call." },
    { file: "hashmap-lookup.html", title: "HashMap Lookup", group: "Workbook 3a · Section 4-1", desc: "A map and a call: type what get returns, or null." },
    { file: "collection-picker.html", title: "List or Map?", group: "Workbook 3a · Modules 3 and 4", desc: "A situation in one sentence: array, ArrayList or HashMap? Say why in one word." },
    { file: "user-story-builder.html", title: "User Story Builder", group: "Workbook 3b · Section 2-1", desc: "Drag the three parts of a user story into place, then call the stories that are really tasks." },
    { file: "bug-hunter-3.html", title: "Bug Hunter 3", group: "Week 3", desc: "Fifteen snippets, one week 3 bug each: files, dates, lists, maps." }
  ]
};
