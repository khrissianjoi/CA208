

### Follow
FOLLOW(X) is the set of terminals that can immediately follow X.
So t ∈ FOLLOW(X) if there is any derivation containing Xt. This
would include any derivation containing XYZt where Y and Z are
nullable.
To compute FOLLOW(A) for all nonterminals A, apply the following
rules until nothing can be added to any FOLLOW set.
1. Place \$ in FOLLOW(S) where S is the start symbol and \$ in the end of input marker.
2. If there is a production rule A → αBβ, then everything in
FIRST(β), except ε, is in FOLLOW(B).
3. If there is a production rule A → αB, or a production rule
A → αBβ where FIRST(β) contains , then everything in
FOLLOW(A) is in FOLLOW(B).