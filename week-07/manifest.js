/* Week 7 manifest: every page of the week, per kind, in order. The rail and the week index read this.
 * Visuals follow the idea list in .planning/week-07-plan.md (2026-11-15): file number = position in this list. */
window.HUB_MANIFEST = {
  week: 7,
  title: "Advanced OOP",
  live: false,            // flip to true on Ray's go, then rebuild the search index
  visuals: [
    { file: "01-what-an-interface-is.html", title: "What an Interface Is", group: "Workbook 6a · Section 1-1" },
    { file: "02-why-not-two-parents.html", title: "Why Not Two Parents", group: "Workbook 6a · Section 1-2" },
    { file: "03-interface-or-abstract-class.html", title: "Interface or Abstract Class", group: "Workbook 6a · Section 1-2" },
    { file: "04-implementing-an-interface.html", title: "Implementing an Interface", group: "Workbook 6a · Section 2-1" },
    { file: "05-one-class-several-interfaces.html", title: "One Class, Several Interfaces", group: "Workbook 6a · Section 2-1" },
    { file: "06-an-interface-as-a-type.html", title: "An Interface as a Type", group: "Workbook 6a · Section 2-1" },
    { file: "07-instanceof-with-interfaces.html", title: "instanceof With Interfaces", group: "Workbook 6a · Section 2-2" },
    { file: "08-default-methods.html", title: "Default Methods", group: "Workbook 6a · Section 2-2" },
    { file: "09-code-to-the-interface.html", title: "Code to the Interface", group: "Workbook 6a · Section 2-2" },
    { file: "10-comparable.html", title: "Comparable", group: "Workbook 6a · Section 2-2" },
    { file: "11-the-need-for-generics.html", title: "The Need for Generics", group: "Workbook 6a · Section 3-1" },
    { file: "12-a-generic-class.html", title: "A Generic Class", group: "Workbook 6a · Section 3-2" },
    { file: "13-a-generic-method.html", title: "A Generic Method", group: "Workbook 6a · Section 3-2" },
    { file: "14-bounded-types.html", title: "Bounded Types", group: "Workbook 6a · Section 3-3" },
    { file: "15-source-transformation-destination.html", title: "Source, Transformation, Destination", group: "Workbook 6a · Section 4-1" },
    { file: "16-anatomy-of-a-lambda.html", title: "Anatomy of a Lambda", group: "Workbook 6a · Section 4-2" },
    { file: "17-the-stream-pipeline.html", title: "The Stream Pipeline", group: "Workbook 6a · Section 4-3" },
    { file: "18-reduce.html", title: "reduce", group: "Workbook 6a · Section 4-3" },
    { file: "19-packages-layer-or-feature.html", title: "Packages: Layer or Feature", group: "Packages" }
  ],
  reference: [
    { file: "cheat-sheet.html", title: "Week 7 Cheat Sheet", group: "Reference", desc: "The syntax of the week on one page: an interface, implements, default methods, Comparable, a generic class and method, a lambda, the stream methods." },
    { file: "glossary.html", title: "Glossary", group: "Reference", desc: "The words of the week, each in one sentence, with the page that shows it." },
    { file: "common-errors.html", title: "Common Errors", group: "Reference", desc: "A method left unimplemented, two defaults that clash, a type outside the bounds, a stream used twice, a lambda that changes a local variable: what it says, what to do." },
    { file: "stream-methods.html", title: "Stream Methods", group: "Reference", desc: "filter, map, sorted, distinct, forEach, count, reduce, collect and toList: what goes in, what comes out, one example each." },
    { file: "class-diagram-reference.html", title: "Class Diagram Reference 2", group: "Reference", desc: "Beyond one box and one arrow: interfaces and the dashed arrow, has-a lines, how many, static and abstract marks, a whole design on one page." }
  ],
  exercises: [
    { file: "reading-the-exercises.html", title: "Reading This Week's Exercises", group: "Before you start", desc: "Tap any sentence of a workbook-style exercise and see what it asks you to write. Invented exercises, this week's words." },
    { file: "fixed-assets.html", title: "Fixed Assets", group: "Workbook 6a · Section 1-2", desc: "In groups, no code: redraw the fixed assets diagram so that the portfolio holds valuables through an interface." },
    { file: "portfolio-manager.html", title: "Portfolio Manager", group: "Workbook 6a · Section 2-1", desc: "A Valuable interface, a FixedAsset parent with three children, a bank account and a credit card, used from main." },
    { file: "portfolio-manager-2.html", title: "Portfolio Manager 2", group: "Workbook 6a · Section 2-2", desc: "New project, copy the first one in: a Portfolio class that holds any Valuable and finds the most and least valuable." },
    { file: "working-with-interfaces.html", title: "Working With Interfaces", group: "Workbook 6a · Section 2-2", desc: "A Person class that implements Comparable, so a list of people sorts itself by last name." },
    { file: "custom-collections.html", title: "Custom Collections", group: "Workbook 6a · Section 3-3", desc: "A generic FixedList that refuses to grow past its maximum size, tested with numbers and dates." },
    { file: "data-processing.html", title: "Data Processing", group: "Workbook 6a · Section 4-1", desc: "A list of people searched and summarized with traditional loops: matches by name, average, oldest and youngest age." },
    { file: "data-processing-2.html", title: "Data Processing 2", group: "Workbook 6a · Section 4-3", desc: "New project, copy the first one in: the same answers again, this time with streams in a new package." }
  ],
  games: [
    { file: "interface-implementer.html", title: "Interface Implementer", group: "Workbook 6a · Section 2-1", desc: "An interface and a class: does the class compile, and if not, which method is missing or wrong." },
    { file: "which-calls-compile.html", title: "Which Calls Compile", group: "Workbook 6a · Section 2-1", desc: "A variable of an interface type holding an object: pick the calls the compiler accepts." },
    { file: "default-or-override.html", title: "Default or Override", group: "Workbook 6a · Section 2-2", desc: "Interfaces with default methods and a class: predict which version prints, or whether it compiles at all." },
    { file: "comparable-sorter.html", title: "Comparable Sorter", group: "Workbook 6a · Section 2-2", desc: "A compareTo rule and a short list: put the items in the order sort() will leave them." },
    { file: "generics-validator.html", title: "Generics Validator", group: "Workbook 6a · Section 3-3", desc: "A generic declaration and a line that uses it: compiles, or the reason it does not." },
    { file: "lambda-lab.html", title: "Lambda Lab", group: "Workbook 6a · Section 4-2", desc: "A lambda and one input: what does it return, or what does it print." },
    { file: "stream-predictor.html", title: "Stream Predictor", group: "Workbook 6a · Section 4-3", desc: "A list and a stream pipeline: predict the result." },
    { file: "bug-hunter-7.html", title: "Bug Hunter 7", group: "Workbook 6a", desc: "Short snippets with interfaces, generics and streams, one bug each: tap the line that breaks it." }
  ]
};
