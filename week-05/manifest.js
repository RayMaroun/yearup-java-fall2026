/* Week 5 manifest: every page of the week, per kind, in order. The rail and the week index read this.
 * Visuals follow the idea list in .planning/week-05-plan.md (2026-11-04): file number = position in this list. */
window.HUB_MANIFEST = {
  week: 5,
  title: "Introduction to OOP",
  live: true,            // flip to true on Ray's go, then rebuild the search index
  visuals: [
    { file: "01-thinking-in-objects.html", title: "Thinking in Objects", group: "Workbook 4a · Section 1-1" },
    { file: "02-one-object-one-job.html", title: "One Object, One Job", group: "Workbook 4a · Section 1-2" },
    { file: "03-encapsulation.html", title: "Encapsulation", group: "Workbook 4a · Section 2-1" },
    { file: "04-the-constructor.html", title: "The Constructor", group: "Workbook 4a · Section 2-1" },
    { file: "05-derived-getters.html", title: "Derived Getters", group: "Workbook 4a · Section 2-1" },
    { file: "06-boolean-getters.html", title: "Boolean Getters", group: "Workbook 4a · Section 2-1" },
    { file: "07-default-access.html", title: "Default Access", group: "Workbook 4a · Section 2-1" },
    { file: "08-methods-change-state.html", title: "Methods Change State", group: "Workbook 4a · Section 2-2" },
    { file: "09-cohesion.html", title: "Cohesion", group: "Workbook 4a · Section 2-2" },
    { file: "10-method-overloading.html", title: "Method Overloading", group: "Workbook 4a · Section 2-3" },
    { file: "11-testing-pyramid.html", title: "The Testing Pyramid", group: "Workbook 4a · Section 3-1" },
    { file: "12-arrange-act-assert.html", title: "Arrange, Act, Assert", group: "Workbook 4a · Section 3-2" },
    { file: "13-why-doubles-drift.html", title: "Why Doubles Drift", group: "Workbook 4a · Section 4-1" },
    { file: "14-bigdecimal-operations.html", title: "BigDecimal Operations", group: "Workbook 4a · Section 4-1" },
    { file: "15-what-static-means.html", title: "What Static Means", group: "Workbook 4a · Section 4-2" },
    { file: "16-instance-vs-static.html", title: "Instance vs Static", group: "Workbook 4a · Section 4-2" },
    { file: "17-utility-classes.html", title: "Utility Classes", group: "Workbook 4a · Section 4-2" },
    { file: "18-has-a-relationship.html", title: "Has-A", group: "Workbook 4a · Section 5-1" }
  ],
  reference: [
    { file: "cheat-sheet.html", title: "Week 5 Cheat Sheet", group: "Reference", desc: "The syntax of the week on one page: a class, constructors, getters and setters, overloading, a JUnit test, BigDecimal, static." },
    { file: "glossary.html", title: "Glossary", group: "Reference", desc: "The words of the week, each in one sentence, with the page that shows it." },
    { file: "common-errors.html", title: "Common Errors", group: "Reference", desc: "Private access, no matching constructor, non-static from a static context, setScale without a rounding mode, @Test not found: what it says, what to do." },
    { file: "junit-reference.html", title: "JUnit Reference", group: "Reference", desc: "The dependency, where tests live, how IntelliJ runs them, test naming, and every assertion you need this week." }
  ],
  exercises: [
    { file: "reading-the-exercises.html", title: "Reading This Week's Exercises", group: "Before you start", desc: "Tap any sentence of a workbook-style exercise and see what it asks you to write. Invented exercises, this week's words." },
    { file: "hotel-objects.html", title: "Objects at a Hotel", group: "Workbook 4a · Section 1-1", desc: "On paper: list the objects a hotel needs and what each one knows." },
    { file: "hotel-responsibilities.html", title: "Responsibilities at a Hotel", group: "Workbook 4a · Section 1-2", desc: "On paper: give each hotel object its responsibilities, then check who does what." },
    { file: "hotel-operations.html", title: "Hotel Operations", group: "Workbook 4a · Section 2-1", desc: "Room, Reservation and Employee classes with private fields, constructors, getters and derived getters, used from main." },
    { file: "hotel-operations-2.html", title: "Hotel Operations 2", group: "Workbook 4a · Section 2-2", desc: "New project, copy the first one in: checkIn, checkOut, cleanRoom on Room; punchIn and punchOut on Employee." },
    { file: "hotel-operations-3.html", title: "Hotel Operations 3", group: "Workbook 4a · Section 2-3", desc: "New project, copy the second one in: punchIn and punchOut overloads with no parameters, a Hotel class with two constructors, bookRoom and derived availability getters." },
    { file: "hotel-operations-testing.html", title: "Hotel Operations Tests", group: "Workbook 4a · Section 3-2", desc: "New project, copy in: JUnit dependency, RoomTest and EmployeeTest with Arrange, Act, Assert." },
    { file: "money-math.html", title: "Money Math", group: "Workbook 4a · Section 4-1", desc: "A float, a double and a BigDecimal grow by ten cents, then by 19.99 a thousand times: compare what prints." },
    { file: "static-classes.html", title: "Static Classes", group: "Workbook 4a · Section 4-2", desc: "A NameFormatter utility class with static format methods, checked with unit tests, never instantiated." },
    { file: "name-formatter-methods.html", title: "NameFormatter, Line by Line", group: "Workbook 4a · Section 4-2", desc: "The solution of Static Classes run one line per press, with the variables changing. For after you have tried the exercise." },
    { file: "blackjack.html", title: "Blackjack", group: "Workbook 4a · Section 5-1", desc: "Card, Hand and Deck working together: deal two cards each, print the hands and their values." },
    { file: "car-dealership.html", title: "Car Dealership", group: "Workshop 4w", desc: "Workshop: Vehicle, Dealership, DealershipFileManager and UserInterface; search, add, remove, save to inventory.csv." }
  ],
  games: [
    { file: "know-vs-do-sorter.html", title: "Know vs Do Sorter", group: "Workbook 4a · Module 1", desc: "A sentence about an object: is it something it knows (a field) or something it does (a method)?" },
    { file: "derived-or-stored.html", title: "Derived or Stored?", group: "Workbook 4a · Section 2-1", desc: "A getter name and a class: does it read a field or compute a value?" },
    { file: "overload-matcher.html", title: "Overload Matcher", group: "Workbook 4a · Section 2-3", desc: "Three versions of one method and a call: pick the one Java runs, or say it does not compile." },
    { file: "pyramid-climber.html", title: "Pyramid Climber", group: "Workbook 4a · Section 3-1", desc: "A test described in one line: unit, integration or end to end?" },
    { file: "aaa-sort.html", title: "AAA Sort", group: "Workbook 4a · Section 3-2", desc: "Scrambled lines of a test: put them under Arrange, Act, Assert in order." },
    { file: "pick-the-assertion.html", title: "Pick the Assertion", group: "Workbook 4a · Section 3-2", desc: "What the test wants to check: pick the assertion that says it." },
    { file: "exact-or-drift.html", title: "Exact or Drift?", group: "Workbook 4a · Section 4-1", desc: "A money calculation in double or BigDecimal: type what prints." },
    { file: "static-or-instance.html", title: "Static or Instance?", group: "Workbook 4a · Section 4-2", desc: "A member described in one line: static or instance, and can you call it without an object?" },
    { file: "has-a-hunter.html", title: "Has-A Hunter", group: "Workbook 4a · Section 5-1", desc: "Pairs of classes: which one has the other, and what field carries it?" },
    { file: "bug-hunter-5.html", title: "Bug Hunter 5", group: "Week 5", desc: "Fifteen snippets, one week 5 bug each: classes, constructors, tests, BigDecimal, static." }
  ]
};
