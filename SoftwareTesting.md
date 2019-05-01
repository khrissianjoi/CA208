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

<b>Exit Criteria</b> is to define when to stop testing, such as at the end of a test level or when a set of tests has a specific goal.
Evaluating exit criteria is the activity where test execution is assessed against the defined objectives.
Exit criteria should be objective and measurable
- all tests run successfully
- all faults found are fixed and re-tested
- coverage target (set and) met
- time (or cost) limit exceeded
If exit criteria are met, the software/system can be released to the next test phase or production.

<b>Software Testing</b> is the systematic exploration of a component/system with the main aim of finding and reporting defects.
Testing rigorously examines the component/system behaviour and reports defects found.
Tests are repeated to ensure that defect corrections have been effective.
Testing is done by tester.

<b>Debugging</b> A process undertaken by developers to identify the cause of defects in code and undertake corrections.
Debugging is done first to ensure that the component or system is at a level to enable rigorous testing.
Debugging can be used to understand the root cause of observed failures.
Debugging is done by programmer or developer.

<b>Black-Box</b>
Testing method where the internal structure/design of the item being tested in NOT KNOWN to the tester.
Test is carried out by testers.
Programming Knowledge is not required to carry out Black-Box Testing
- Fucntional Testing
- Non-Functional Testing
- Regression Testing

<b>White-Box</b>
Testing method where the internal structure/ design of the item being tested is KNOWN to the tester.
Test in typically carried out by software developers.
Programming Knowledge is required to carry out White-Box Testing.
- Path Testing
- Loop Testing
- Condition Testing


## Dynamic and Static Testing

<b>Static tests</b> are tests that do not involve executing software (prevention)
examples:
 - Requirements
 - Designs
 - Code
 - Test plans
 
![Screenshot from 2019-05-01 23-04-46](https://user-images.githubusercontent.com/34526517/57045463-90e60080-6c65-11e9-8916-5ddfe13081be.png)


 
 <b>Dynamic tests</b> is completed by walking the real application with valid entries to verify the expected results (cure).
 examples:
 - Integration or Componenet Integration testing
 - Program (unit)
 - System testing
 - User acceptance testing
 
 ![Screenshot from 2019-05-01 23-02-28](https://user-images.githubusercontent.com/34526517/57045381-4ebcbf00-6c65-11e9-948f-ac8d249e980a.png)

 
## Fundamental Test Process

### The Test Process
- <b>Test planning</b> : determines how the test strategy will be implemented
- Test planning identifies, at a high level, the scope, approach and dependencies:
the software component(s) to be tested.
additional infrastructure to test the component.
the approach to test design.
the test completion criteria.

- <b>Test control</b> : measuring and analyzing results monitoring and documenting progress, test coverage and exit criteria

- _<b>Test analysis</b>_ : tangible test conditions and test designs are derived from the baseline documents

- <b>Test design</b> : Designing the test environment set-up and identifying any required infrastructure and tools.

- <b>Test implementation (preperation)</b> : test conditions are transformed into test cases and testware, and the environment is set up from the test cases

- <b>Test exectuion and recording</b> : Test cases are run either manually or by using test execution tools, according to the planned sequence

- <b>Evaluation exit criteria and reporting</b> : test execution is assessed against the defined objectives

- <b>Test closure activities</b> : provides stakeholders the evidence theyneed to make a decision (to release, to postpone, or in extreme circumstances, to cancel)

## Expected Results

Specifications, requirements (baselines) etc. define what the software is required to do.
A baseline document describes how we require the system to behave (User requirement, design, spec. etc.)
Without requirements, developers cannot build, testers cannot test.
Programmers need them to write the code.
Testers need them to identify the things that need testing and compare test results with the requirments.

If we don't define expected result before we execute the test:
- a plausible, but erroneous, result may be interpreted as the correct result
- there may be a subconscious desire to see the software pass the test

## Continuous Integration

<b>Continuous Integration</b> a development practice that requires developers to integrate code into a shared repository several times a day.
Each check-in is then verified by an automated build, allowing teams to detectproblems early.
By integrating regularly, you can detect errors quickly, and locate them more easily.
Automated builds are inherently associated with unit testing.

![CI](https://user-images.githubusercontent.com/34526517/56735671-06ca0380-675e-11e9-92bd-cc353945e90d.png)

## Functional and Non-functional system

<b>Functional system testing</b>
concerned with:
- _functional requirements_
- fault detection a major objective
- _'what_ the system must do"
examples: unit testing, user acceptance, integration testing, unit testing. 

<b>Non-functional system testing</b>
- concerned with _non-functional_ or technical requirements.
- "_how_ the system does what it does."
examples: performance testing, stress testing, probability testing, compliance testing.

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

## Configuration Management

<b>Configuration management</b> may involve insuring that:
All items of testware are identified, version controllege, tracked for changes, related to each other and related to development items so that all identified documents and software items are referenced unambiguously in test documentation.

The configuration managment procedures and ingrastructure (tools) should be chosen, documented and implemnted.

### Symptoms of poor configuration management
- Bugs that were fixed suddenly reappear
- Wrong functionality shipped
- Wrong code tested
- Undocumented features suddenly appear
- Tested features suddenly disappear
- Can't trace which customer has which version of code

### Answers Congfiguration Management provies
- What is our current software configuration?
- What is its status?
- How do we control changes to our configuration?
- What changes have been made to our software?
- Does anyone else's changes affect our software?
