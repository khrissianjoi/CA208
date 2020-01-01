# Formal Grammars and the Chomsky Hierarchy

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

# Turing Machines

# Lambda Calculus, Reducibility & Cellular Automata

# Complexity

# Linear Bounded Automata, Context Sensitive Languages, Type 1 Grammars