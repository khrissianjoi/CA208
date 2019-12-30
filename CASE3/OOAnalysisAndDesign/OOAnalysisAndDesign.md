# SOLID

The SOLID principles are _**five** dependecy management_ for OOP and design.

- ### Single Responsibility Principle (SRP):
    - Classes should:
        - **NEVER** have more than one reason to change.
        - Have a single purpose.
    - reduces the risk of new errors being introduced by limity changed to existing code
    
- ### Open/Closed Principle:
    - Software entities (classes, modules, functions, etc.) should:
        - be open for extension but closed for modification.
            - **Closed**: should only be _adjusted_ to correct bugs
            - **Open**: should only extend existing code in order to introduce _new functionality_.
    - reduces the risk of new errors being introduced by limity changed to existing code.

- ### Liskov Substitution Principle (LSP):
    states that "functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it".

    If you create a class with a dependency of a given type, you should be able to provide an object of that type or any of its subclasses without introducing unexpected results and without the dependent class knowing the actual type of the provided dependency. If the type of the dependency must be checked so that behaviour can be modified according to type, or if subtypes generated unexpected rules or side effects, the code may become more complex, rigid and fragile.

- ### Interface Segregation Principle (ISP):
    - Clients should not be forced to depened upon interfaces that they do not use.
        - When one class depends upon another, the number of members in the interface is is visible to the dependent class should be minimised.

- ### Dependecy Inversion Principle (DIP):
    - High level modules should not depend upon low level modules.
    - High level modules and low level modules should depend upon abstraction.
    - Abstraction should not depend upon details.
    - Details should depend upon abstractions.
