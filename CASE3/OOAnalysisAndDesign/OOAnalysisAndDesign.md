# SOLID

The SOLID principles are _**five** dependecy management_ for OOP and design.

- ### Single Responsibility Principle (SRP):
    - Classes should:
        - **NEVER** have more than one reason to change.
        - Have a single purpose.
    #### Advantages
    - Classes become smaller and cleaner.
    - Simpler code to understand and maintain.

    #### Violates SRP
    ```Python
    class Rectangle(length, height):
        def calculateArea():
            # do something
        def outputMessage():
            # do something
    ```
    outputMessage() should be outside the rectangle class as its own thing

    - ### Open/Closed Principle:
        - Software entities (classes, modules, functions, etc.) should:
            - be open for extension but closed for modification.
                - **Closed**: should only be _adjusted_ to correct bugs
                - **Open**: should only extend existing code in order to introduce _new functionality_.
        #### Advantages
        - reduces the risk of introducting new bugs to existing code (robust software)
        - reduced coupling and increased flexibility

    #### Violates OCP
    ```Java
    public class Shape {
        public Shape(String shape) {
        }
        public static float calculateShape {
        }
    }        
    ```
    ```Java
    public class Shape {
        public Shape(String shape) {
            this.shape == shape
        }
    }    

    public class Circle extends Shape {
        public Circle() {

        }
        public static float calculateShape {
            if(this.shape == "Circle") {
                // do something  
            } else {
                // do something
                }   
        }
    } 
    ```
- ### Liskov Substitution Principle (LSP):
    states that "functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it".

    - states that subclasses should be able to substitute for their base classes.
    If you create a class with a dependency of a given type, you should be able to provide an object of that type or any of its subclasses without introducing unexpected results and without the dependent class knowing the actual type of the provided dependency. If the type of the dependency must be checked so that behaviour can be modified according to type, or if subtypes generated unexpected rules or side effects, the code may become more complex, rigid and fragile.

    ```java
    public class Rectangle{

    }
    public class Square extends Rectangle {

    }
    ```
    Rectangle parameters are different from squares (incompatible)

- ### Interface Segregation Principle (ISP):
    - Clients should not be forced to depened upon interfaces that they do not use.
        - When one class depends upon another, the number of members in the interface is is visible to the dependent class should be minimised.

    ```Java
    public class Shape {
        public Shape(String shape) {
        }
        public static float getArea() {
            // do something
        }
        
        public static float getVolume() {
            // do something
        }
    }
    ```
    A square does not need a volume since it is 2D. A cube does not need an area. Calculations for areas should be in each 2D shape class, and volume into each 3D shape classes.

    #### Advantages
    - Class and their dependencies communicate using tightly-focused inferfaces, minimising dependencies on unused members and reducing coupling accordingly
    - Easier to implement
    - Improve flexibility and the possbility of reuse.
    - Robustness increase

- ### Dependecy Inversion Principle (DIP):
    - High level modules should not depend upon low level modules.
    - High level modules and low level modules should depend upon abstraction.
    - Abstraction should not depend upon details.
    - Details should depend upon abstractions.

    #### Advantages
    - Loosely coupled increases robustness of the software
    - Improves flexibility
    - Raise possibilty of reuse
    - Without DIP only low level classes can be easily reusable
    
    #### Violates DIP
    ```
    ```

# Unified Modeling Language (UML)
A standerdized modelling language that enables developers to _**visualise**_, _**construct**_, and _**document**_ artifacts of a software system.

### State Machines

**states**: round boxes
**transitions between states**: arrows
**events that cause transitions**: message on transition arrows
**start marker**: black blob
**stop marker**: black blob with ring

## Packages
Packages are used for:
    - **Convenience** (eg. to hide irrelevant detail)
    - **Allocate** work among team members
    - **Specify** and design a component

# Correctness and Sufficiency

## Correctness
Each part of the software or related to it satisfies the designated requirements and that together they satisfy all of the application's requirements

# Robustness
One implementation of a set of requirements is more robust than another if it can handle greater number of incorrect anomalous behaviour (user input, faulty data communication and developer error).

# Flexibility, Re-Usability, Efficiency

## Flexibility
1. Adding more of the same kind of functionality.
    - eg: bank applications should be able to handle other kinds of accounts without changing existing design or code.
2. Adding different functionality.
    - eg. add withdraw functionality to esixting deposit functionality
3. Change functionality
    - eg. allow overdrafts

## Re-usability

Re-use of methods, classes and combinations.
Qualities to make a method re-usable:
    - Its usage is defined completely in terms of pre-conditions.
    - It is uncoupled as much as possible from its enclosing class.
    - Its algorithm is explained in detail.
Qualities to make a class re-usable:
    - A complete class description
    - Class name and functionality match a real world concept
    - Reduced dependency on other classes


## Efficiency
High level concerns with efficiency rather than within individual algorithms or data structures.

1. Design for other criteria, Then cosider efficiency
    - make targeted changes to improve efficiency
2. Design for efficiency from the start
3. Combine (1) and (2)

### Trading off Robustness, Flexibility, Efficiency, Re-usability
1. (A) Extreme Programming Approach (Design for Sufficiency only) OR
1. (B) Flexibility-Driven Approach (Design for future requirements; Re-use should be a by-product)
2. Ensure Robustness
3. Provide enough Efficiency (Compromise re-use etc as necessary to attain efficiency requirements)
