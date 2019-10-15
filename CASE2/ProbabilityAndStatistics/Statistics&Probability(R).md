## Combinations and Permutations

_Passwords consist of three letters. Find the probability that a randomly chosen password will not have any repeated letters._
?????????

No element can appear more than once in the sequence.

```
E = 
P(E)

```


### Permutations

We do not ignore the order, there is just one combination.
e.g &rarr; (3,1) and (1,3) are both counted.

<sup>n</sup>P<sub>k</sub> = n(n-1)...(n-k+1) = $$\frac{n!}{(n-k)!}

Examples:

_How many sequences of two elements from these three?_

<pre>Elements3 = {1,2,3}

<sup>3</sup>P<sub>2</sub> = 3 * 2 = 6 

R &rarr; prod(3:2)

Elements4 = {1,2,3,4}.

<sup>4</sup>P<sub>3</sub> = 4 * 3 = 12

R &rarr; prod(4:3)

</pre> 

_How many sequences of three elements from these four?_

<pre>Elements4 = {1,2,3,4}

<sup>4</sup>P<sub>2</sub> = 4 * 3 * 2 = 12

4th element can be either of the 4 options, 3rd element can be 3 of the options etc...

R &rarr; prod(4:2)
</pre>

### Combinations
We ignore the order, there is just one combination.

Examples:

_How many sets (combinations) of two elements from these three?_

<pre>Elements3 = {1,2,3}

<sup>3</sup>C<sub>2</sub> = 3

R &rarr; choose(3,2)
</pre>

_How many combinations of two elements from four?_

<pre>
Elements4 = {1,2,3,4}

<sup>4</sup>C<sub>3</sub> = 6

R &rarr; choose(4,2)
</pre>

_How many unordered of three elements from four?_

<pre>
Elements4 = {1,2,3,4}
<sup>4</sup>C<sub>3</sub> = 4

R &rarr; choose(4,3)
</pre>

### Formulas and Rules
```
P(A or B) = P(A) + P(B) - P(A and B)

P(A) = P(A and B) + P(A and ¬B)

P(A and B) = P(B|A) x P(A)

P(¬A and B) = P(B|¬A) x P(¬H)

P(¬A|¬B) = 1 - P(A|¬B)

conditional probability

P(B|A) = P(A and B) / P(A) 

P(A and B) = P(A) x P(B|A)


a and b are mutually exclusive

P(A|B) = P(B)
```


### Bayes Theorem

P(A|B) x P(B) = P(B|A) x P(A)

#### Independant
```
P(P1 and P2|H) = P(P1|H) x P(P2|H)

P(P1 and P2) = P(P1 and P2|H) x P(H) + P(P1 and P2|¬H)P(¬H)
=
P(P1 and P2) = P(P1|H) x P(P2|H) x P(H) + P(P1|¬H) x P(P2|¬H) x P(¬H)


```
Example:

A = the man is a millionaire
B = the man dries a Porsche

P(A) = 0.01
P(B|A) = 0.3
P(B) = 0.004

_Suppose you saw a man driving a Porsche. What is the probability that he is a millionaire?_
<pre>
P(A|B) = P(B|A) x P(A) / P(B) = (0.3 x 0.01) / 0.004 = 0.75
</pre>

Probability of a man that drives a Porche is a millionair is 0.75

### Hypergeometric distribution

P(X = x) = (-----)

M = successes
L = failures
N = total (M+L)
n = elements selected

_Draw 6 cards from a deck without replacement. What is the probability of getting two hearts?_
```

```
