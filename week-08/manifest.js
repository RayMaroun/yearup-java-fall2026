/* Week 8 manifest: Capstone 2 (Deli, Pizza, Taco or Custom shop).
 * The week is pictures: hints that sit next to the capstone text, never a rewrite of it.
 * Two pages to work from: the Path (the order of work, ten stops) and the Requirements Checklist
 * (the text as tick boxes). Then one page for the class diagram, five pictures for the build, one optional bonus page.
 * Rules for every page: it matches the capstone text exactly (same rules, numbers, menu numbers, words);
 * it shows what the program must do, never which classes to create and never Java code of the capstone. */
window.HUB_PHASES = ["Start here", "Design", "Build", "Bonus \u00b7 optional"];
window.HUB_MANIFEST = {
  week: 8,
  live: false,
  title: "Capstone 2 \u00b7 Your Shop",
  visuals: [
    { file: "01-your-class-diagram.html", title: "Your Class Diagram", group: "Design", desc: "One order on the counter. Press each part and ask your own diagram about it: is there a place for it, what does it remember, can it tell its price." },
    { file: "02-menu-flow-map.html", title: "Menu Flow Map", group: "Build", desc: "Every screen of your application and where each choice leads. Press an option and walk from Home to the receipt and back." },
    { file: "03-what-an-order-can-hold.html", title: "What an Order Can Hold", group: "Build", desc: "Add things to an order pad, watch the total, and press Checkout: an empty order is refused, a drink alone is fine." },
    { file: "04-building-one-item.html", title: "Building One Item", group: "Build", desc: "The questions of the Add screen, in order: the type, the size, the premium toppings with Extra?, the regular toppings, the sauces, the special option." },
    { file: "05-how-a-price-adds-up.html", title: "How a Price Adds Up", group: "Build", desc: "The price table of your option, live: pick a size, add toppings, add an extra portion, and see where every number comes from." },
    { file: "06-the-receipt-file.html", title: "The Receipt File", group: "Build", desc: "Confirm an order and watch its file name being made from the date and the time: yyyyMMdd-HHmmss, with the 24-hour clock." },
    { file: "07-signature-items.html", title: "Signature Items", group: "Bonus \u00b7 optional", desc: "Optional, and only when everything else works. A ready-made item the customer can still change: choose one, take a topping off, put another on." }
  ],
  reference: [
    { file: "capstone-2-path.html", title: "The Capstone 2 Path", group: "Start here", desc: "The order of work: ten stops from your capstone text to Demo Day. Press a stop, tick what is done, and see which pictures help with it." },
    { file: "requirements-checklist.html", title: "Requirements Checklist", group: "Start here", desc: "Did you build everything? Your capstone text as tick boxes, in your option's own words and prices: the rules, every screen, the receipt, the repository." }
  ],
  exercises: [],
  games: []
};
