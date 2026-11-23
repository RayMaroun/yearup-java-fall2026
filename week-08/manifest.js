/* Week 8 manifest: Capstone 2 (Deli, Pizza, Taco or Custom shop). Capstone week: guide pages under reference,
 * pictures of the rules and the flow under visuals, no exercises, no games.
 * The week index groups the pages by PHASE (the "group" of each entry), in the order of PHASES below.
 * Rules for every page: it matches the capstone text v7.2Y-R exactly (same rules, numbers, menu numbers, words);
 * it shows what the program must do, never which classes to create and never Java code of the capstone. */
window.HUB_PHASES = ["Start here", "Design: your class diagram", "Build", "Finish", "Toolbox"];
window.HUB_MANIFEST = {
  week: 8,
  live: false,
  title: "Capstone 2 · Your Shop",
  visuals: [
    { file: "01-a-fixed-list-of-choices.html", title: "A Fixed List of Choices (enum)", group: "Design: your class diagram", desc: "Optional. What an enum is, on T-shirt sizes: text can be anything, an enum can only be one of its values, a value can carry a price, and values() builds a menu." },
    { file: "02-menu-flow-map.html", title: "Menu Flow Map", group: "Build", desc: "Every screen of your application and where each choice leads. Press an option and walk from Home to the receipt and back." },
    { file: "03-what-an-order-can-hold.html", title: "What an Order Can Hold", group: "Build", desc: "Add things to an order pad, watch the total, and press Checkout: an empty order is refused, a drink alone is fine." },
    { file: "04-building-one-item.html", title: "Building One Item", group: "Build", desc: "The questions of the Add screen, in order: the type, the size, the premium toppings with Extra?, the regular toppings, the sauces, the special option." },
    { file: "05-how-a-price-adds-up.html", title: "How a Price Adds Up", group: "Build", desc: "The price table of your option, live: pick a size, add toppings, add an extra portion, and see which cell every number comes from." },
    { file: "06-the-receipt-file.html", title: "The Receipt File", group: "Build", desc: "Confirm an order and watch its file name being made from the date and the time: yyyyMMdd-HHmmss, with the 24-hour clock." }
  ],
  reference: [
    { file: "capstone-2-path.html", title: "The Capstone 2 Path", group: "Start here", desc: "The whole capstone on one page, in the order to do it: the text, your option, the two checks with Raymond, the build week, Demo Day. Tick as you go." },
    { file: "reading-your-capstone-text.html", title: "Reading Your Capstone Text", group: "Start here", desc: "Where each rule is in your text and what its words mean: premium, regular, included, extra portion, special option, signature." },
    { file: "class-diagram-1-from-text-to-classes.html", title: "From the Text to Your Classes", group: "Design: your class diagram", desc: "Part 1 of the class diagram guide. Read with two colors, sort your words, and make the seven decisions every design for this capstone has to make." },
    { file: "class-diagram-2-drawing-it.html", title: "Drawing It in diagrams.net", group: "Design: your class diagram", desc: "Part 2. What goes in a box, which line means what, the five passes to draw in, and four drawing mistakes to spot." },
    { file: "class-diagram-3-check-your-diagram.html", title: "Check Your Diagram", group: "Design: your class diagram", desc: "Part 3. Walk one order through your diagram, look for the six usual traps, save it in your project, then show it to Raymond." },
    { file: "class-diagram-notation.html", title: "Class Diagram Notation", group: "Design: your class diagram", desc: "The class box, the plus and minus signs, the inheritance arrow, italics for abstract. The reference from week 6, here so you do not have to look for it." },
    { file: "class-diagram-notation-2.html", title: "Class Diagram Notation 2", group: "Design: your class diagram", desc: "Interfaces and the dashed arrow, has-a lines with the diamond, several of something, a whole design on one page. The reference from week 7." },
    { file: "build-guide.html", title: "Build Guide", group: "Build", desc: "Fourteen steps from an empty project to Demo Day, in the order to build them: the classes and their prices first, the screens after. Each step says what done looks like and what to commit." },
    { file: "requirements-checklist.html", title: "Requirements Checklist", group: "Build", desc: "Your capstone text as tick boxes, in your option's own words and numbers: the rules, the prices, every screen, the receipt, the repository. Tick them before you demo." },
    { file: "readme-and-repository.html", title: "README and Repository Checklist", group: "Finish", desc: "Everything the capstone asks for besides the program: the repository, the board, the commits, the diagram file, its picture, and the README that shows it." },
    { file: "demo-day.html", title: "Demo Day", group: "Finish", desc: "The ten minutes on Friday, December 4, part by part: your shop, your design, a live order, one piece of your own code, questions. And what to check before you start." }
  ],
  /* pages from earlier weeks, listed on the week 8 index under Toolbox (links, not copies) */
  toolbox: [
    { href: "../week-03/visuals/14-user-story.html", title: "User Story", from: "Week 3", desc: "How to write a user story for your project board." },
    { href: "../week-03/visuals/15-project-board.html", title: "Project Board", from: "Week 3", desc: "The GitHub project board: a card per user story, a checklist of tasks inside." },
    { href: "../week-03/reference/your-readme.html", title: "Your README", from: "Week 3", desc: "The course README template, section by section." },
    { href: "../week-04/visuals/07-commit-message.html", title: "The Commit Message", from: "Week 4", desc: "type: what changed. The five types, good and bad examples." },
    { href: "../week-03/reference/date-patterns.html", title: "Date Patterns", from: "Week 3", desc: "The letters of a date pattern: yyyy, MM, dd, HH, mm, ss." },
    { href: "../week-05/visuals/14-bigdecimal-operations.html", title: "BigDecimal Operations", from: "Week 5", desc: "Money in Java: add, multiply, compare, with exact cents." },
    { href: "../week-05/visuals/18-has-a-relationship.html", title: "Has-A", from: "Week 5", desc: "One object that holds another, or a list of others." },
    { href: "../week-06/visuals/02-is-a.html", title: "Is-A", from: "Week 6", desc: "When inheritance is the right line: say the sentence out loud." },
    { href: "../week-06/visuals/08-method-overriding.html", title: "Method Overriding", from: "Week 6", desc: "A child that answers the same question in its own way." },
    { href: "../week-06/visuals/12-a-parent-type-parameter.html", title: "A Parent-Type Parameter", from: "Week 6", desc: "One method that accepts every child of a parent." },
    { href: "../week-06/visuals/13-heterogeneous-collections.html", title: "A List of Different Things", from: "Week 6", desc: "One list that holds several kinds of object." },
    { href: "../week-06/visuals/15-abstract-classes.html", title: "Abstract Classes", from: "Week 6", desc: "A parent that is never built by itself." },
    { href: "../week-06/visuals/16-abstract-methods.html", title: "Abstract Methods", from: "Week 6", desc: "A method every child must write." },
    { href: "../week-07/visuals/01-what-an-interface-is.html", title: "What an Interface Is", from: "Week 7", desc: "A list of what something can do, with no code." },
    { href: "../week-07/visuals/03-interface-or-abstract-class.html", title: "Interface or Abstract Class", from: "Week 7", desc: "Which one fits: shared data, or only a shared ability." },
    { href: "../week-07/visuals/04-implementing-an-interface.html", title: "Implementing an Interface", from: "Week 7", desc: "A class that promises to do what the interface lists." },
    { href: "../week-07/visuals/09-code-to-the-interface.html", title: "Code to the Interface", from: "Week 7", desc: "Why a list of an interface type keeps your code short." }
  ],
  exercises: [],
  games: []
};
