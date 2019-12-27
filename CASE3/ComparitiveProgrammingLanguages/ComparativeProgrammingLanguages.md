# Data, Types and Scope

## Types
Types are sets that defined by the values the set contains and the operations on these values.

### Primitive Types
cannot be decomposed into simplet values.
- **Boolean**
    - 2 values, _true_ or _false_ or predefined values, (eg in C, 0 is false else is true)
- **Character**
    - language defined or implementation defined _set of characters_ (ASCII, ISO Latin, UNICODE).
- **Integer**
    - language defined or implementation defined _range of whole numbers_.
    - defined by the target computer's word size and integer arithmetic capabilities 
- **Floating**
    - language defined or implementation defined _subset of real numbers_.
    - determined by the target computer's word size and floating-point arithmetic capabilities. 

#### Discrete Primitive Type:
one-to-one mapping with the range of integers.

### Composite Types
A type whose values are composed from simpler values. Fancy name for a data structure.
#### Cartesian Products
eg. tuples, records
The notation (x,y) whose first value is x and the second value is y.
- **Basic Operations**
    - **construction**
    - **selection**
#### Mapping
eg. arrays
The notation
m: S &rarr; T
represents a mapping m from set S to set T (every value in S is mapped to a value in T)
An indexed sequence of elements with one element of T for each index (from S)
- **Basic Operations**
    - **construction**
    - **indexing**
#### Disjoint Unions
eg. algebraic types, discriminated records and objects.
Selected from one of several, possibly different,sets.
The notation
S + T
represents a disjoin union of sets S and T.
Each element of S + T consists of a tag which identifies which original set the element came from and a variant which is the value from the original set.
- **Basic Operations**
    - **construction**
    - **tag test**
    - **projection**
#### Recursive
eg. lists and trees.
A type that is defined in terms of iteself.
Recursive types occur in:
- **Lists**:
    If elements in list are the same type it is homogeneous, else hetrogeneous.
    - **Basic Operations**
        - **construction**
        - **length**
        - **empty test**
        - **head selection**
        - **tail selection**
        - **concatentation**
- **Strings**:
    A sequence of characters.
    - **Basic Operations**
        - **length**
        - **equality test**
        - **lexicographical comparison**
        - **character selection**
        - **substring selection**
        - **concatentation**

### Type System

## Syntax vs Semantics
### Syntax
- The _form_ or _structure_ of the expressions, statements, and program units.
- Context free grammars
- Regular expressions
eg: Traffic Light: green(bottom);yellow;red
### Semantics
- The meaning of the expressions, statements and program units.
- Interpreter
- Compiler
eg: green=go;...;red = stop

## Pointers and Memory Management

### Managing Dynamic Memory
#### Allocate memory
- request a block of memory big enough to a defined data element. 
- run-time system allocates a sufficient block of memory for the memory pool and returns a pointer to the allocated block and returns the pointer to the allocated block
#### Release memory
(where languages differ)
- the allocated memory is released back to the memory pool.
    - **C:** programmer controls the release of memory
    - **C++:** a mix of programmer control and data structure lifetime
    - **Java:** automatic, garbage collection

#### Garbage Collection

## Abstractions

### The Abstraction Principle
construct other types of procedures. 
This states that it is possible to design procedures that abstract over any syntactic category, provided only that the constructs in the syntactic category specify some kind of computation.