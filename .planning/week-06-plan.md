# Week 6 idea list — DRAFT 2026-11-15 (built ahead of Ray's review on his instruction to finish all the Workbook 5 work; nothing pushed, manifest live:false)

Source: fall Workbook 5a v7.2Y, text in `.planning/workbook-text/wb5a.txt`. Taught: Section 1-1 Why Inheritance?, 1-2 Simple Inheritance, 1-3 Working with Constructors, 2-1 Overriding Methods (polymorphism), 2-2 Abstraction. NOT taught, no pages: 2-3 Leveraging AI, Module 3 (Debugging Project, Practice Repository, CodeWars), Workbook 5b, 5c, Workshop 5. Week 6 hub = Workbook 5 only (the week-07 folder carries Workbook 6, which starts Wed Nov 18).
Spring week 6 hub (14 visuals, 4 reference, 6 companions, 10 games) checked idea by idea; spring pages are ideas only, the design is the fall one. Rule for every visual: ONE PICTURE YOU TOUCH (CLAUDE.md), calibration page `week-02/visuals/07-class-vs-object.html`.

Examples come from the instructor demos in `../../04.Weeks/Week 06/demos/` (rebuilt from Ray's spring demos) or are invented:
- demo-01-inheritance: `Animal` (private name, age; getters, setters; constructors Animal(name) and Animal(name, age) that print a trace line) and `Dog extends Animal` (private breed; Dog(name, breed) calls super(name), Dog(name, age, breed) calls super(name, age)). Values: a dog named Lucky, age 15, breed Doberman; Ray's running joke value is the word Potato.
- demo-02-polymorphism: `Human` with eat(), `Caveman extends Human` and `ModernPerson extends Human`, each overriding eat() with @Override (a caveman eats with hands, a modern person with a fork); Caveman has its own run(); a `List<Human>` holding all three kinds; `feed(String food, Human human)`; instanceof with a downcast to Caveman; getClass().getSimpleName(); a bad downcast that throws ClassCastException.
- demo-03-abstraction: abstract `Asset` (description, yearAcquired, originalCost as BigDecimal, abstract getValue()) and `House extends Asset` (address, squareFeet, lotSize; getValue = 180 x squareFeet + 0.25 x lotSize in BigDecimal); `new Asset(...)` does not compile; a finished method printMessage() inside the abstract class.
NEVER the exercises, in any page except their own companion: the vehicle classes (Vehicle, Moped, Car, SemiTruck, Hovercraft), the assets exercise rules (House value by condition 180/130/90/80 per square foot, Vehicle depreciation 3/6/8 percent, Cash), the Car Dealership. The Asset and House of demo-03 are allowed only with the demo's own simple formula. Invented domains are welcome (shapes, instruments, phones, pets, employees).
No learner first names in examples (roster in ../../docs/PEOPLE.md). Money is BigDecimal wherever a page shows Java.

## Visuals (14)
| # | Idea | Spring page | Verdict | Example |
|---|---|---|---|---|
| 01 | The duplication problem: two classes repeat the same fields and methods; pulling the shared part up into a parent leaves each child with only what is its own | 01-duplication-problem + 03-generalization | REBUILD, merged | invented: Cat and Dog cards with repeated name, age, eat(); tap a repeated member and it rises into Animal, once |
| 02 | Is-A: the sentence test for inheritance; "a Dog is an Animal" holds, "a Car is an Engine" does not (that is has-a) | 02-is-a-relationship | REBUILD | invented pairs; the learner flips a pair and the sentence answers yes or no and draws the arrow or refuses |
| 03 | Reading a class diagram: one box, three bands (name, attributes, methods), the signs + - #, the hollow arrow pointing at the parent | none | NEW (first time learners see class diagrams) | demo-01: Animal and Dog; tap any part of the drawing and it says what it is in one sentence |
| 04 | What a child inherits: a Dog object answers calls to members written in Animal; tap a member to see which class it lives in | 04-extends-keyword | REBUILD | demo-01: dog.setName, dog.getAge, dog.getBreed |
| 05 | Private, protected, public: who can reach a member, from the class itself, a child, another class in the package, a class outside | 05-protected-access | REBUILD | demo-01: Animal members with the three modifiers, pick who is knocking; same-package access to protected shown correctly |
| 06 | The constructor chain: new Dog(...) runs the Animal constructor first, then Dog's; one press per step, printed trace lines appear in order | 06-constructor-chain-order | REBUILD | demo-01: trace prints |
| 07 | super with arguments: which arguments travel up to the parent and which stay in the child; super(...) must be the first statement | 07-super-with-args | REBUILD | demo-01: new Dog("Lucky", 15, "Doberman"): name and age go up, breed stays |
| 08 | Method overriding: same call, the object's own class decides which version runs | 08-method-overriding | REBUILD | demo-02: eat() on a Human, a Caveman, a ModernPerson |
| 09 | The @Override annotation: a misspelled method silently becomes a new method; with @Override the compiler stops it | 09-override-annotation | REBUILD | demo-02: eat vs eet, toggle the annotation |
| 10 | Base class references: a Human variable can hold a Caveman; the variable type decides what you may call, the object decides what runs | 10-base-class-references | REBUILD | demo-02: Human h = new Caveman(); h.eat() runs Caveman's, h.run() does not compile |
| 11 | One list, many types: a List<Human> holds all three kinds; one press per element, each answers eat() its own way | 11-heterogeneous-collections | REBUILD | demo-02 |
| 12 | instanceof and downcasting: test first, then cast to reach the child's own method; a wrong cast throws ClassCastException | 12-instanceof-downcasting | REBUILD | demo-02: Caveman run(); the bad cast drawn in --warn |
| 13 | Abstract classes: an idea too general to build; new on it is refused, new on a concrete child works | 13-abstract-class | REBUILD | demo-03: Asset and House; invented second child allowed |
| 14 | Abstract methods: a blank the child must fill; leave it empty and the child does not compile | 14-abstract-methods | REBUILD | demo-03: getValue() |

## Reference (4)
cheat-sheet, glossary, common-errors (constructor Animal in class Animal cannot be applied / no default constructor in the parent; call to super must be first statement; name has private access in Animal; method does not override or implement a method from a supertype; ClassCastException; Asset is abstract; cannot be instantiated; Dog is not abstract and does not override abstract method), class-diagram-reference (NEW in place of spring uml-reference: reading and drawing a class box, the signs, the inheritance arrow, abstract in italics, how to do it in draw.io / diagrams.net in a few steps).

## Exercise companions (5 + Reading This Week's Exercises)
diagrams (1-1, groups, on paper or diagrams.net, no project), vehicle-inheritance (1-2), vehicle-inheritance-2 (1-3: NEW project, copy in; the workbook says continue), assets-manager (2-1: BigDecimal), abstract-assets-manager (2-2: NEW project, copy of assets-manager). Location `Desktop/pluralsight/java-development/workbook-5`. No companion for Exercise 3 Prompting Patterns (not taught) or Workshop 5 (dropped).

## Games (8)
is-a-or-has-a, who-owns-it (NEW), constructor-chain-tracer, override-detector, polymorphism-predictor, instanceof-sleuth, abstract-or-concrete, bug-hunter-6. Dropped from spring: flashcard-quiz-5 (flat quiz), studio-build, heterogeneous-hunt (covered by polymorphism-predictor).
