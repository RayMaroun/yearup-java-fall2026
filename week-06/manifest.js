/* Week 6 manifest: every page of the week, per kind, in order. The rail and the week index read this.
 * Visuals follow the idea list in .planning/week-06-plan.md (2026-11-15): file number = position in this list. */
window.HUB_MANIFEST = {
  week: 6,
  title: "Inheritance",
  live: true,             // live 2026-11-16 (Ray's go)
  visuals: [
    { file: "01-the-duplication-problem.html", title: "The Duplication Problem", group: "Workbook 5a · Section 1-1" },
    { file: "02-is-a.html", title: "Is-A", group: "Workbook 5a · Section 1-1" },
    { file: "03-reading-a-class-diagram.html", title: "Reading a Class Diagram", group: "Workbook 5a · Section 1-1" },
    { file: "04-what-a-child-inherits.html", title: "What a Child Inherits", group: "Workbook 5a · Section 1-2" },
    { file: "05-private-protected-public.html", title: "Private, Protected, Public", group: "Workbook 5a · Section 1-2" },
    { file: "06-constructor-chain.html", title: "The Constructor Chain", group: "Workbook 5a · Section 1-3" },
    { file: "07-super-with-arguments.html", title: "super With Arguments", group: "Workbook 5a · Section 1-3" },
    { file: "08-method-overriding.html", title: "Method Overriding", group: "Workbook 5a · Section 2-1" },
    { file: "09-the-override-annotation.html", title: "The @Override Annotation", group: "Workbook 5a · Section 2-1" },
    { file: "10-variable-type-object.html", title: "Variable, Type, Object", group: "Workbook 5a · Section 2-1" },
    { file: "11-base-class-references.html", title: "Base Class References", group: "Workbook 5a · Section 2-1" },
    { file: "12-a-parent-type-parameter.html", title: "A Parent-Type Parameter", group: "Workbook 5a · Section 2-1" },
    { file: "13-heterogeneous-collections.html", title: "One List, Many Types", group: "Workbook 5a · Section 2-1" },
    { file: "14-instanceof-and-downcasting.html", title: "instanceof and Downcasting", group: "Workbook 5a · Section 2-1" },
    { file: "15-abstract-classes.html", title: "Abstract Classes", group: "Workbook 5a · Section 2-2" },
    { file: "16-abstract-methods.html", title: "Abstract Methods", group: "Workbook 5a · Section 2-2" }
  ],
  reference: [
    { file: "cheat-sheet.html", title: "Week 6 Cheat Sheet", group: "Reference", desc: "The syntax of the week on one page: extends, super, protected, overriding, a base class reference, instanceof, an abstract class." },
    { file: "glossary.html", title: "Glossary", group: "Reference", desc: "The words of the week, each in one sentence, with the page that shows it." },
    { file: "common-errors.html", title: "Common Errors", group: "Reference", desc: "No default constructor in the parent, super not first, private access from a child, a missing override, ClassCastException, cannot instantiate an abstract class: what it says, what to do." },
    { file: "class-diagram-reference.html", title: "Class Diagram Reference", group: "Reference", desc: "How to read and draw a class box: name, attributes, methods, the visibility signs, the inheritance arrow, abstract in italics." }
  ],
  exercises: [
    { file: "reading-the-exercises.html", title: "Reading This Week's Exercises", group: "Before you start", desc: "Tap any sentence of a workbook-style exercise and see what it asks you to write. Invented exercises, this week's words." },
    { file: "diagrams.html", title: "Diagrams", group: "Workbook 5a · Section 1-1", desc: "In groups, no code: draw four vehicle classes, compare them, then pull what they share into a parent class." },
    { file: "vehicle-inheritance.html", title: "Vehicle Inheritance", group: "Workbook 5a · Section 1-2", desc: "A Vehicle parent class and four child classes with no constructors, used from main through inherited getters and setters." },
    { file: "vehicle-inheritance-2.html", title: "Vehicle Inheritance 2", group: "Workbook 5a · Section 1-3", desc: "New project, copy the first one in: constructors in every class, each child calling super, main rebuilt with the new arguments." },
    { file: "assets-manager.html", title: "Assets Manager", group: "Workbook 5a · Section 2-1", desc: "Asset, House and Vehicle with an overridden getValue in BigDecimal, one list of assets, instanceof to show the details." },
    { file: "abstract-assets-manager.html", title: "Abstract Assets Manager", group: "Workbook 5a · Section 2-2", desc: "New project, copy Assets Manager in: Asset becomes abstract with an abstract getValue, then a Cash class joins." },
    { file: "gym-memberships-diagram.html", title: "Gym Memberships: Drawing the Class Diagram", group: "Homework", desc: "Step 1 of the homework in six tickable steps: sort the words, fill a box, draw the arrow, mark what is abstract, export class-diagram.png. Practiced on library items." }
  ],
  games: [
    { file: "is-a-or-has-a.html", title: "Is-A or Has-A", group: "Workbook 5a · Section 1-1", desc: "Two things appear: decide whether one IS a kind of the other, HAS the other, or neither." },
    { file: "who-owns-it.html", title: "Who Owns It", group: "Workbook 5a · Section 1-2", desc: "A member and a class tree: pick the class where the member is written, then say whether a given class can use it." },
    { file: "constructor-chain-tracer.html", title: "Constructor Chain Tracer", group: "Workbook 5a · Section 1-3", desc: "A new statement and constructors that print: put the printed lines in the order they appear." },
    { file: "override-detector.html", title: "Override Detector", group: "Workbook 5a · Section 2-1", desc: "A parent method and a child method: override, overload, or a compile error with @Override." },
    { file: "polymorphism-predictor.html", title: "Polymorphism Predictor", group: "Workbook 5a · Section 2-1", desc: "A variable of the parent type holding a child object: predict what the call prints." },
    { file: "instanceof-sleuth.html", title: "instanceof Sleuth", group: "Workbook 5a · Section 2-1", desc: "An object and a test or a cast: true, false, compiles, or ClassCastException." },
    { file: "abstract-or-concrete.html", title: "Abstract or Concrete", group: "Workbook 5a · Section 2-2", desc: "A class and a statement: does it compile, and if not, which rule about abstract classes stops it." },
    { file: "bug-hunter-6.html", title: "Bug Hunter 6", group: "Workbook 5a", desc: "Short inheritance snippets with one bug each: tap the line that breaks it." }
  ]
};
