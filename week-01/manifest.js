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
    { file: "06-maven-project-structure.html", title: "Maven Project Structure", group: "Workbook 1a · Section 1-3", size: "glance" },
    { file: "07-git-intellij-workflow.html", title: "Git Through IntelliJ", group: "Workbook 1a · Section 1-4", size: "walk" },
    { file: "08-java-compilation.html", title: "Compile, Bytecode, JVM", group: "Workbook 1c · Section 2-1", size: "walk" },
    { file: "09-jdk-jre-jvm.html", title: "JDK, JRE, JVM", group: "Workbook 1c · Section 2-1", size: "glance" },
    { file: "10-data-types.html", title: "Data Types and Sizes", group: "Workbook 1c · Section 3-1", size: "glance" },
    { file: "11-final-constants.html", title: "final Constants", group: "Workbook 1c · Section 3-1", size: "glance" },
    { file: "12-naming-conventions.html", title: "Naming Conventions", group: "Workbook 1c · Section 3-1", size: "glance" },
    { file: "13-concat-vs-addition.html", title: "Concatenation vs Addition", group: "Workbook 1c · Section 3-2", size: "walk" },
    { file: "14-integer-division.html", title: "Integer Division and Modulo", group: "Workbook 1c · Section 3-2", size: "walk" },
    { file: "15-pre-post-increment.html", title: "Pre and Post Increment", group: "Workbook 1c · Section 3-2", size: "walk" },
    { file: "16-widening-narrowing.html", title: "Widening, Narrowing, Casting", group: "Workbook 1c · Section 3-2", size: "walk" },
    { file: "17-printf-format.html", title: "printf Format Specifiers", group: "Workbook 1c · Section 3-3", size: "walk" },
    { file: "18-scanner-buffer.html", title: "Scanner Buffer", group: "Workbook 1c · Section 3-3", size: "model" },
    { file: "19-scanner-methods.html", title: "Scanner Methods", group: "Workbook 1c · Section 3-3", size: "glance" },
    { file: "20-if-else-path.html", title: "if / else Path", group: "Workbook 1c · Section 4-1", size: "walk" },
    { file: "21-logical-operators.html", title: "Logical Operators", group: "Workbook 1c · Section 4-1", size: "walk" },
    { file: "22-string-comparison.html", title: "== vs .equals", group: "Workbook 1c · Section 4-1", size: "walk" },
    { file: "23-method-signature.html", title: "Method Signature", group: "Workbook 1c · Section 4-2", size: "walk" },
    { file: "24-method-call-stack.html", title: "Method Call Stack", group: "Workbook 1c · Section 4-2", size: "model" },
    { file: "25-method-decomposition.html", title: "Repeated Code to One Method", group: "Workbook 1c · Section 4-2", size: "walk" },
    { file: "26-one-scanner.html", title: "One Scanner, Many Methods", group: "Workbook 1c · Section 4-2", size: "walk" },
    { file: "27-switch-flow.html", title: "switch, Both Forms", group: "Workbook 1c · Section 4-3", size: "walk" },
    { file: "28-problem-to-code.html", title: "From Problem to Code", group: "Workbook 1c · Module 4", size: "walk" }
  ],
  reference: [
    { file: "cheat-sheet.html", title: "Week 1 Cheat Sheet", group: "Reference", desc: "The syntax of the week on one page: types, operators, Scanner, printf, if, switch, methods." },
    { file: "glossary.html", title: "Glossary", group: "Reference", desc: "The words of the week, each in one sentence, with the page that shows it." },
    { file: "common-errors.html", title: "Common Errors", group: "Reference", desc: "What the compiler says, what it means, how to fix it." },
    { file: "intellij-shortcuts.html", title: "IntelliJ Shortcuts", group: "Reference", desc: "The keys worth knowing in week 1, Mac and Windows side by side." }
  ],
  exercises: [],
  games: []
};
