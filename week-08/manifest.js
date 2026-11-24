/* Week 8 manifest: Capstone 2 (Deli, Pizza, Taco or Custom shop).
 * FIVE pages, on purpose (Ray, Nov 24 2026: the first version had 17 pages and a Toolbox, too much to find a way through):
 * one guide for the design, one guide for the build, the text as a checklist, and the two finish pages.
 * The guides show one step at a time (walk.js). The pictures in visuals/ are not listed here:
 * they open inside the build step that uses them, and the enum picture inside the design guide.
 * Rules for every page: it matches the capstone text v7.2Y-R exactly (same rules, numbers, menu numbers, words);
 * it steers and asks, it never says which classes to create and never shows Java code of the capstone. */
window.HUB_PHASES = ["Design", "Build", "Finish"];
window.HUB_MANIFEST = {
  week: 8,
  live: false,
  title: "Capstone 2 \u00b7 Your Shop",
  visuals: [],
  reference: [
    { file: "class-diagram-guide.html", title: "Class Diagram Guide", group: "Design", desc: "From your capstone text to a diagram you can explain, one step at a time. The last step shows what is still open before you show it to Raymond." },
    { file: "build-guide.html", title: "Build Guide", group: "Build", desc: "From an empty project to Demo Day, one step at a time: the classes and their prices first, the screens after. Each step has its picture and says what done looks like." },
    { file: "requirements-checklist.html", title: "Requirements Checklist", group: "Build", desc: "Your capstone text as tick boxes, in your option's own words and numbers: the rules, the prices, every screen, the receipt, the repository." },
    { file: "readme-and-repository.html", title: "README and Repository", group: "Finish", desc: "Everything the capstone asks for besides the program: the repository, the board, the commits, the diagram file, its picture, the README." },
    { file: "demo-day.html", title: "Demo Day", group: "Finish", desc: "The ten minutes on Friday, December 4, part by part, and what to check before you start." }
  ],
  exercises: [],
  games: []
};
