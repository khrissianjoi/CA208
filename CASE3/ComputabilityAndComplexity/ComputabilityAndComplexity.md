# Formal Grammars and the Chomsky Hierarchy

## Automata
A formal device that can function as a grammar

## Operations on Strings
**Reverse** of string _x_ = _x_<sup>R</sup>
```math
(abcd)^R = dcba
\\
∈^R = ∈
```
**Concatenation** of strings _x_ and _y_ = _x_^_y_
```math
(abc)\hat{}(cba) = abccba
```

## Grammars
### Formal Grammar
- A deductive system of axioms and rules of inference which generates the sentences of language as its theorems.

Grammars have two alphabets that are disjoin:
    - **terminal** alphabet
    - **non-terminal** alphabet:
        - within intermediate strings when using a grammer to parse a string.

## The Chomsky Hierarchy
Classifies gramars according to the kinds of rewrite rules they contain.

![Chomsky Hierarchy](../images/chomsky.ppm)

The top most general grammars that have fewest restrictions on the kinds of rules they use

**Type 0**: LHS of rules must have atleast one terminal symbol
**Type 1**: Each rules of the form
```math
αAβ → αψβ, where ψ ≠ e
```
**Type 2**: Each rule is of the form
```math
A → ψ
``` 
**Type 3**: Each rules if of the form
```math
A → xB or A → x
```
### Type 3 Grammars
- must have a single non-terminal on the LHS and RHS
- generate **regular languages**

```math
S → aA\\
A → aA\\
A → bB\\
B → bB\\
B → ∈
```

### Type 2 Grammars
- LHS if a rule is non-terminal
- generate _**context-free**_ languages
```math
S → ∈\\
S → aB\\
S → bA\\
B → b\\
B → bS\\
A → a\\
A → aS\\
A → bAA\\
B → aBB
```

### Type 1 Grammars
- α and β can be empty but ψ can’t be empty
- _**context sensitive**_

### Type 0 Grammar*
- _**recursively enumerable languages**_
- the LHS is a string of terminals and non-terminals with atleast one non-terminal
- LHS cannot be null
- RHS a string of terminals and non-terminals
```math
S → ABS\\
S → ∈\\
AB → BA\\
BA → AB\\
A → a\\
B → b
```
# Functional Programming and Haskell

# Finite Automata
an abstraction computing device
- Input = string of symbols
- Reads one symbol at a time
- Reads the symbol from left to right
- Reads the symbols from left to right
- Halts after reading the lawst symbol

## Concatentation
Given two sets of strings, A and B, the concatenation of A and B, denoted A ⋅ B (or just AB), is the set of strings {x ⌢ y∣x ∈ A and y ∈ B}
Example:
```
If A = {a,b} and B = {cc,d}, then AB = {acc,ad,bcc,bd}
```

## Kleene Star or Closure of A
the set formed by concatentating members of A any number of times (including zero) in any order and allowing repetition.
Example:
```
{a,bb}* = {, a, bb, aa, abb, bba, bbbb, aaa, aabb, abba, ...}
```
## Regular Languages
Given an alphabet Σ:
1. ∅ is a regular language
2. For any string x ∈ Σ∗, {x} is a regular language
3. If A and B are regular languages, so is A ⋃ B
4. If A and B are regular languages, so is AB
5. If A is a regular language, so is A∗
6. Nothing else is a regular language unless its being so follows 1-5

# Pushdown Automata, Context Free Grammars and Languages
## Non-deterministic PDA
There is more than one possible _**course of action**_ given the same start state, current input symbol, current intem on the top of the stack.
There exists atleast one computational path on which the input is accepted.
## Deterministic PDA
Each from-state, input tape reading symbol and top of the stack combination is unique.
Only _**one possible course of action**_ given any applicable from-state, current input symbol and top of stack and only one possibly computational path for any string accepted by this PDA.

# Turing Machines
A Turing Machine, M, accepts a language L, iff M accepts all strings in L and rejects (i.e., fails to halt on) all strings not in L.
A language is Turing acceptable if and only if there is some Turing Machine that accepts it.

A Turing Machine, M, is a quadruple (K, Σ,s, δ), where
▸ K is a finite set of states,
▸ Σ is a finite set (the alphabet) containing #,
▸ s ∈ K is the initial state;
▸ δ is a (partial) function from K × Σ to K × (Σ ∪ {L,R}) (set of rules).

# Lambda Calculus, Reducibility & Cellular Automata

# Complexity

# Linear Bounded Automata, Context Sensitive Languages, Type 1 Grammars