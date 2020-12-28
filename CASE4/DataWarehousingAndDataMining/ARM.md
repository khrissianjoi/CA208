| Transation Number | Transactions (itemsets) |
| ------------------ | ------------------ |
| 1 | {a, b, c}      |
| 2 | {a, b, c, d, e}|
| 3 | {b}  |
| 4 | {c, d, e} |
| 5 | {c} |
| 6 | {b, c, d} |
| 7 | {c, d, e} |
| 8 | {c, e} |

m = 5 (# itemset) 
l = {a, b, c, d, e}
n = 8 (transations)

### Count

**count(a)** = transactions 1, 2 = **2**
**count(a, b)** = transactions 1, 2 = **2**
**count(a, b, c)** = transactions 1, 2 = **2**
**count(a, b, c, d)** = transactions 2 = **1**
**count(a, b, c, d, e)** = transactions 2 = **1**

### Support
``
support(S) = count(S)/n
``
**support(a)** = 2/8 = 0.25
**support(a, b)** = 2/8 = 0.25
**support(a, b, c)** = 2/8 = 0.25
**support(a, b, c, d)** = 1/8 = 0.125
**support(a, b, c, d, e)** = 1/8 = 0.125

### Prediction
to examine the contents of the database and define rules, known as _association rules_, in the data.

eg. when item _c_ and _d_ are bought, item _e_ is also purchased.

_cd &#8594; e_

**_L_** = {c, d} **_R_** = {e}

L matches four transactions: 2, 4, 6, 7
L ∪ R matches 3 transactions: 2, 4, 7

count(L) = 4
count(L ∪ R) = 3

support(L) = count(L) / n = 4/8
support(L ∪ R) = count(L ∪ R) / n = 3/8

support(L &#8594; R) = support(L ∪ R)

### Confidence
confidence(L → R) = count(L ∪ R)/count(L)
or
confidence(L → R) = support(L ∪ R)/support(L)

therefore:
confidence(L → R) = count(c, d, e)/count(c, d) = 3/4 = 0.75

### Lift
lift(L → R) = count(L ∪ R) / count(L) X support(R)

### Leverage
leverage(L → R) = support(L∪R)−support(L) X support(R)