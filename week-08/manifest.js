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
    { file: "class-diagram-notation-2.html", title: "Class Diagram Notation 2", group: "Design: your class diagram", desc: "Interfaces and the dashed arrow, has-a lines with the diamond, several of something, a whole design on one page. The reference from week 7." }
  ],
  exercises: [],
  games: []
};
