## SOLID

The SOLID principles are _**five** dependecy management_ for OOP and design.

- **Single Responsibility Principle (SRP)**:
    there should never be more than one reason for a class to change. You should design your classes to that each has a single purpose.

    reduces the risk of new errors being introduced by limity changed to existing code
- **Open/Closed Principle**:
    specifies that software entities (classes,modules,functions,etc.) should be open for extension but closed for modification. The "closed" part of the rule states that once a module has been developed and tested, the code should only be adjusted to correct bugs. The "open" part says that you should be able to extend existing code in order to introduce new functionality.

    reduces the risk of new errors being introduced by limity changed to existing code.

- **Liskov Substitution Principle (LSP)**:
    states that "functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it".

    If you create a class with a dependency of a given type, you should be able to provide an object of that type or any of its subclasses without introducing unexpected results and without the dependent class knowing the actual type of the provided dependency. If the type of the dependency must be checked so that behaviour can be modified according to type, or if subtypes generated unexpected rules or side effects, the code may become more complex, rigid and fragile.

- **Interface Segregation Principle (ISP)**:
    specified that clients should not be forced to depend upon interfaces that they do not use. This rule means that when one class depends upon another, the number of members in the interface that is visible to the dependent class should be minimised.

- **Dependecy INversion Principle (DIP)**:
    that high level modules should not depend upon low level modules. Both should depend upon abstractions and that abstractions should not depend upon details. Details should depend upon abstractions.