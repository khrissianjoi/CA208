## Definitions:

A <b>Error</b> is a human action producing an incorrect result. 
- Errors are not just accidents or mistakes.
- Errors are not cured by _'just being more careful'_
- Errors are not necessarily an act of incompetence
Errors are inevitable in a complex activity.

A <b>Defect</b> is a manifestation of human error in software.
Defects may be caused by requirements, design or coding errors.
They are discovered by either inspecting code or by inferring their existence from software failures.
Defects can be sometimes calls a _'bug'_ or a _'fault'_

A <b>Failure</b> is deviation of the software from its expected delivery or service.
A failure occurs when software does the _'wrong'_ thing.
Failurs sometimes will be called a _'problem'_, _'incident'_, _'issue'_.
example: products that are _too hard_ to use or _too slow_ (when a user experiences a problem)

A developer makes an ERROR → ... and injects a DEFECT into the software → ... and the fault causes software to FAIL.

<b>Software Testing</b> is the systematic exploration of a component/system with the main aim of finding and reporting defects.
Testing rigorously examines the component/system behaviour and reports defects found.
Tests are repeated to ensure that defect corrections have been effective.

<b>Debugging</b> A process undertaken by developers to identify the cause of defects in code and undertake corrections.
Debugging is done first to ensure that the component or system is at a level to enable rigorous testing.
Debugging can be used to understand the root cause of observed failures.

## Principles of Software Testing:

### Principle 1 - Testing shows the presence of defects:
Testing can show that defects are present, but cannot prove that there are no defects.

### Principle 2 - Exhaustive testing is impossible

### Principle 3 - Early testing:
Testing activities should start as early as possible in the software or system development life cycle, and should be focused on defined objectives.

### Principle 4 - Defect clustering
A small number of modules contain most of the defects discovered during pre-release testing, or show the most operational failures.

### Principle 5 - Pesticide paradox
If the same tests are repeated again and again, eventually, these test cases will no longer find new defects.

### Principle 6 - Testing is context dependent
The testing we do must take account of the context

### Principle 7 - Absence-of-errors fallacy
