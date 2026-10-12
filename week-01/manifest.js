/* Week 1 manifest: every page of the week, per kind, in order. The rail and the week index read this.
 * Visuals follow the confirmed idea list (2026-10-12): 25 pages, file number = position in this list. */
window.HUB_MANIFEST = {
  week: 1,
  title: "Introduction to Java",
  visuals: [
    { file: "01-folder-structure.html", title: "Your Folder Structure", group: "Workbook 1a · Day 1 setup", size: "glance" },
    { file: "02-version-control-timeline.html", title: "Version Control Timeline", group: "Workbook 1a · Section 1-1", size: "walk" },
    { file: "03-centralized-vs-distributed.html", title: "Centralized vs Distributed", group: "Workbook 1a · Section 1-1", size: "glance" },
    { file: "04-local-vs-remote.html", title: "Local vs Remote Repository", group: "Workbook 1a · Section 1-2", size: "glance" },
    { file: "05-new-project-dialog.html", title: "The New Project Dialog", group: "Workbook 1a · Section 1-3", size: "glance" },
    { file: "06-maven-build-system.html", title: "Maven, the Build System", group: "Workbook 1a · Section 1-3", size: "glance" },
    { file: "07-maven-project-structure.html", title: "Maven Project Structure", group: "Workbook 1a · Section 1-3", size: "glance" },
    { file: "08-git-intellij-workflow.html", title: "Git Through IntelliJ", group: "Workbook 1a · Section 1-4", size: "walk" },
    { file: "09-java-compilation.html", title: "Compile, Bytecode, JVM", group: "Workbook 1c · Section 2-1", size: "walk" },
    { file: "10-jdk-jre-jvm.html", title: "JDK, JRE, JVM", group: "Workbook 1c · Section 2-1", size: "glance" },
    { file: "11-data-types.html", title: "Data Types and Sizes", group: "Workbook 1c · Section 3-1", size: "glance" },
    { file: "12-variables.html", title: "Variables, Named Boxes", group: "Workbook 1c · Section 3-1", size: "walk" },
    { file: "13-final-constants.html", title: "final Constants", group: "Workbook 1c · Section 3-1", size: "glance" },
    { file: "14-naming-conventions.html", title: "Naming Conventions", group: "Workbook 1c · Section 3-1", size: "glance" },
    { file: "15-concat-vs-addition.html", title: "Concatenation vs Addition", group: "Workbook 1c · Section 3-2", size: "walk" },
    { file: "16-integer-division.html", title: "Integer Division and Modulo", group: "Workbook 1c · Section 3-2", size: "walk" },
    { file: "17-pre-post-increment.html", title: "Pre and Post Increment", group: "Workbook 1c · Section 3-2", size: "walk" },
    { file: "18-widening-narrowing.html", title: "Widening, Narrowing, Casting", group: "Workbook 1c · Section 3-2", size: "walk" },
    { file: "19-printf-format.html", title: "printf Format Specifiers", group: "Workbook 1c · Section 3-3", size: "walk" },
    { file: "20-scanner-methods.html", title: "Scanner Methods", group: "Workbook 1c · Section 3-3", size: "glance" },
    { file: "21-scanner-buffer.html", title: "Scanner Buffer", group: "Workbook 1c · Section 3-3", size: "model" },
    { file: "22-if-else-path.html", title: "if / else Path", group: "Workbook 1c · Section 4-1", size: "walk" },
    { file: "23-logical-operators.html", title: "Logical Operators", group: "Workbook 1c · Section 4-1", size: "walk" },
    { file: "24-string-comparison.html", title: "== vs .equals", group: "Workbook 1c · Section 4-1", size: "walk" },
    { file: "25-method-signature.html", title: "Method Signature", group: "Workbook 1c · Section 4-2", size: "walk" },
    { file: "26-method-call-stack.html", title: "Method Call Stack", group: "Workbook 1c · Section 4-2", size: "model" },
    { file: "27-method-decomposition.html", title: "Repeated Code to One Method", group: "Workbook 1c · Section 4-2", size: "walk" },
    { file: "28-one-scanner.html", title: "One Scanner, Three Ways", group: "Workbook 1c · Section 4-2", size: "glance" },
    { file: "29-switch-flow.html", title: "switch, Both Forms", group: "Workbook 1c · Section 4-3", size: "walk" },
    { file: "30-problem-to-code.html", title: "From Problem to Code", group: "Workbook 1c · Module 4", size: "walk" }
  ],
  reference: [
    { file: "cheat-sheet.html", title: "Week 1 Cheat Sheet", group: "Reference", desc: "The syntax of the week on one page: types, operators, Scanner, printf, if, switch, methods." },
    { file: "glossary.html", title: "Glossary", group: "Reference", desc: "The words of the week, each in one sentence, with the page that shows it." },
    { file: "common-errors.html", title: "Common Errors", group: "Reference", desc: "What the compiler says, what it means, how to fix it." },
    { file: "intellij-shortcuts.html", title: "IntelliJ Shortcuts", group: "Reference", desc: "The keys worth knowing in week 1, Mac and Windows side by side." }
  ],
  exercises: [
    { file: "shopping-list.html", title: "Shopping List", group: "Workbook 1a · Section 1-5", desc: "Project, package, class, main, ten println lines, share on GitHub." },
    { file: "string-application.html", title: "String Application", group: "Workbook 1c · Section 3-2", desc: "VariableApp and Receipt: pick the type for each value, print it in a sentence." },
    { file: "math-application.html", title: "Math Application", group: "Workbook 1c · Section 3-2", desc: "Eight questions answered with the Math class, each with a clear message." },
    { file: "basic-calculator.html", title: "Basic Calculator", group: "Workbook 1c · Section 3-3", desc: "Two numbers and a menu from the keyboard, one equation printed." },
    { file: "payroll-calculator.html", title: "Payroll Calculator", group: "Workbook 1c · Section 3-3", desc: "Name, hours and rate from the keyboard, gross pay printed with two decimals." },
    { file: "sandwich-shop.html", title: "Sandwich Shop", group: "Workbook 1c · Section 4-1", desc: "Size and age in, one price out: if / else if / else twice." },
    { file: "sandwich-shop-2.html", title: "Sandwich Shop, Loaded", group: "Workbook 1c · Section 4-1", desc: "Add one yes/no question to working code without breaking it." },
    { file: "method-practice.html", title: "Method Practice", group: "Workbook 1c · Section 4-2", desc: "Four tiny programs: call a void method, reuse one, get a value back, get true or false back." },
    { file: "payroll-calculator-2.html", title: "Payroll Calculator, Refactored", group: "Workbook 1c · Section 4-2", desc: "Same program, same output, split into methods you plan first." }
  ],
  games: []
};
