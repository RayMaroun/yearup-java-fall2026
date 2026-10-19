/* Week 2 manifest: every page of the week, per kind, in order. The rail and the week index read this.
 * Visuals follow the draft idea list (2026-10-15): file number = position in this list. */
window.HUB_MANIFEST = {
  week: 2,
  title: "Strings, Classes, Loops and Arrays",
  visuals: [
    { file: "01-comparing-strings.html", title: "Comparing Strings", group: "Workbook 2a · Section 1-1", size: "walk" },
    { file: "02-string-methods.html", title: "String Methods", group: "Workbook 2a · Section 1-1", size: "glance" },
    { file: "03-string-to-number.html", title: "String to Number", group: "Workbook 2a · Section 1-2", size: "walk" },
    { file: "04-string-to-date.html", title: "String to Date", group: "Workbook 2a · Section 1-2", size: "walk" },
    { file: "05-string-immutability.html", title: "Strings Are Immutable", group: "Workbook 2a · Section 1-4", size: "walk" },
    { file: "06-stringbuilder.html", title: "StringBuilder", group: "Workbook 2a · Section 1-4", size: "walk" },
    { file: "07-class-vs-object.html", title: "Class vs Object", group: "Workbook 2a · Section 2-1", size: "walk" },
    { file: "08-encapsulation.html", title: "Encapsulation", group: "Workbook 2a · Section 2-1", size: "walk" },
    { file: "09-what-new-does.html", title: "What new Does", group: "Workbook 2a · Section 2-1", size: "walk" },
    { file: "10-method-overloading.html", title: "Method Overloading", group: "Workbook 2a · Section 2-3", size: "walk" },
    { file: "11-constructor-overloading.html", title: "Constructor Overloading", group: "Workbook 2a · Section 2-3", size: "walk" },
    { file: "12-loop-types.html", title: "Three Loops, One Job", group: "Workbook 2a · Section 3-1", size: "walk" },
    { file: "13-break-vs-continue.html", title: "break vs continue", group: "Workbook 2a · Section 3-1", size: "walk" },
    { file: "14-arrays-indexing.html", title: "Arrays and Indexes", group: "Workbook 2a · Section 3-2", size: "model" },
    { file: "15-for-each-loop.html", title: "for-each vs for", group: "Workbook 2a · Section 3-2", size: "walk" },
    { file: "16-sort-and-copy.html", title: "Sorting and Copying Arrays", group: "Workbook 2a · Section 3-2", size: "walk" },
    { file: "17-debugger.html", title: "The Debugger", group: "Workbook 2b · Section 1-2", size: "walk" }
  ],
  reference: [
    { file: "cheat-sheet.html", title: "Week 2 Cheat Sheet", group: "Reference", desc: "The syntax of the week on one page: String methods, parsing, StringBuilder, classes, loops, arrays." },
    { file: "glossary.html", title: "Glossary", group: "Reference", desc: "The words of the week, each in one sentence, with the page that shows it." },
    { file: "common-errors.html", title: "Common Errors", group: "Reference", desc: "What the compiler or the runtime says, what it means, how to fix it." },
    { file: "intellij-shortcuts.html", title: "IntelliJ Shortcuts", group: "Reference", desc: "Generate, run configurations and the debugger keys, Mac and Windows side by side." }
  ],
  exercises: [
    { file: "full-name-generator.html", title: "Full Name Generator", group: "Workbook 2a · Section 1-1", desc: "Four prompts, trim each answer, build one full name with the parts that were given." },
    { file: "full-name-parser.html", title: "Full Name Parser", group: "Workbook 2a · Section 1-1", desc: "One line in, first, middle and last name out, with (none) when there is no middle name." },
    { file: "highscore-wins.html", title: "High Score Wins", group: "Workbook 2a · Section 1-2", desc: "Split Home:Visitor|21:9 twice, parse the scores, print the winner or Tie!." },
    { file: "theater-reservations.html", title: "Theater Reservations", group: "Workbook 2a · Section 1-2", desc: "Name, date and ticket count in, one confirmation line out, with the date parsed and reformatted." },
    { file: "address-builder.html", title: "Address Builder", group: "Workbook 2a · Section 1-4", desc: "Append each answer to a StringBuilder as it is typed, print the billing and shipping block." },
    { file: "cellphone-service.html", title: "Cell Phone Service", group: "Workbook 2a · Section 2-1", desc: "A CellPhone class with private fields, a no-argument constructor, getters and setters, five prompts." },
    { file: "cellphone-service-2.html", title: "Cell Phone Service 2", group: "Workbook 2a · Section 2-2", desc: "New project, copy the first one in: add dial, a second phone and a static display method." },
    { file: "cellphone-service-3.html", title: "Cell Phone Service 3", group: "Workbook 2a · Section 2-3", desc: "New project again: a five-argument constructor, a third phone, and the optional dial overload." },
    { file: "looping-exercises.html", title: "Looping Exercises", group: "Workbook 2a · Section 3-1", desc: "Three classes, three loops: while, do/while, and a for countdown that ends with Launch!." },
    { file: "roll-the-dice.html", title: "Roll the Dice", group: "Workbook 2a · Section 3-1", desc: "A Dice class, 100 rolls of two dice, and counters for the sums 2, 4, 6 and 7." },
    { file: "test-statistics.html", title: "Test Statistics", group: "Workbook 2a · Section 3-2", desc: "An array of ten scores: average, high, low, and the median as a bonus." },
    { file: "vehicle-inventory.html", title: "Vehicle Inventory", group: "Workbook 2a · Section 3-2", desc: "A Vehicle class, an array of twenty, six preloaded, and a six-option menu loop." },
    { file: "neighborhood-library.html", title: "Neighborhood Library", group: "Workshop 2w", desc: "Friday workshop: a Book class, an array of books, check out and check in by id." }
  ],
  games: [
    { file: "string-method-match.html", title: "String Method Match", group: "Workbook 2a · Section 1-1", desc: "A String and a method call flash up: type exactly what it returns. Twenty rounds against the clock." },
    { file: "parse-or-crash.html", title: "Parse or Crash", group: "Workbook 2a · Section 1-2", desc: "A typed line meets parseInt, parseDouble or LocalDate.parse: value, NumberFormatException or DateTimeParseException?" },
    { file: "class-builder.html", title: "Class Builder", group: "Workbook 2a · Sections 2-1 to 2-3", desc: "Put the scrambled lines of a class back in a valid order: header, fields, constructor, getters, setters, methods." },
    { file: "constructor-picker.html", title: "Constructor Picker", group: "Workbook 2a · Section 2-3", desc: "A call appears: click the constructor or method overload that runs, or call the compile error." },
    { file: "loop-tracer.html", title: "Loop Tracer", group: "Workbook 2a · Section 3-1", desc: "Read a loop and type what it prints, one line at a time, until end." },
    { file: "break-or-continue.html", title: "break or continue", group: "Workbook 2a · Section 3-1", desc: "Fill the one blank that makes the loop print the target, then watch the real output." },
    { file: "index-inspector.html", title: "Index Inspector", group: "Workbook 2a · Section 3-2", desc: "An array and an expression flash up: type the value, or crash for an index out of bounds." },
    { file: "bug-hunter-2.html", title: "Bug Hunter 2", group: "Week 2", desc: "Fifteen snippets, one week 2 bug each: find the line before the compiler does." }
  ]
};
