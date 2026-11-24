/* Week 8 manifest: Capstone 2 (Deli, Pizza, Taco or Custom shop).
 * The week is PICTURES, like the spring week 8 (Ray, Nov 24 2026): hints that sit next to the capstone text,
 * never a rewrite of it. Two earlier versions were dropped the same day: 17 pages with a Toolbox, then five
 * text guides shown one step at a time. Ray: too much text, and learners must not use the hub as their only reference.
 * One page for the class diagram, five pictures for the build. A checklist page is still to come.
 * The enum picture was removed: Ray found it confusing.
 * Rules for every page: it matches the capstone text v7.2Y-R exactly (same rules, numbers, menu numbers, words);
 * it shows what the program must do, never which classes to create and never Java code of the capstone. */
window.HUB_PHASES = ["Design", "Build"];
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
    { file: "06-the-receipt-file.html", title: "The Receipt File", group: "Build", desc: "Confirm an order and watch its file name being made from the date and the time: yyyyMMdd-HHmmss, with the 24-hour clock." }
  ],
  reference: [],
  exercises: [],
  games: []
};
