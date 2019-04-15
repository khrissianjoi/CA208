## mean(x, na.rm)
```R
> imdb_rating = file$imdb_rating
> mean(imdb_rating,na.rm = TRUE)
[1] 7.386097
```

## sd(x, na.rm)
```R
> imdb_rating = file$imdb_rating
> sd(imdb_rating,na.rm = TRUE)
[1] 0.7324394
```
## sample(x, size, replace, prob)
takes a sample of the specified size from the elements of x using either with or without replacement.

```R
> x <- c(0:5)
> sample(x, 3)
[1] 1 3 4
> sample(x,2,0.2)
[1] 5 4
> sample(x,2,replace =TRUE)
[1] 1 4
```

## runif(x)

generates x numbers between 0-1
```R
> r = runif(5)
[1] 0.1574274 0.4831302 0.0916280 0.8297348 0.1899056


for (i in c(1:1000))
{
	curr = runif(1) 
	if(curr > 0.98)
	{
		print(curr)
	}
}
```

## prod()

returns the multiplication of all the values in the arguments
```R
> x <- c(1,2,3,4)
> prod(x)
[1] 24
> prod(5:10)
[1] 151200    #5 x 6 x 7 x 8 x 9 x 10
```

## choose()

returns the combination <sup>n</sup>C<sub>r</sub>
```R
> choose(5,2)
[1] 10
> choose(4,3)
[1] 4
```

## pnorm(x, mean, sd)
```R
> pnorm(45, 45, 4) #P(X < 45)
[1] 0.5
> 1- pnorm(45, 45, 4) #P(X > 45)
[1] 0.5
>  pnorm(50, 45, 4)-pnorm(40, 45,4 ) #P(40 < X < 50)
[1]  0.7887005
```
## Hypergeometric Distribution
without replacement
### dhyper(x, M, L, n)


Draw 6 cards from a deck without replacement. What is the probability of getting two hearts?
M = successes
L = failures
N = total (M+L)
n = elements selected

```R
> dhyper(2,13,39,6)
[1] 0.3151299
> round(dhyper(2,13,39,6),5)
[1] 0.31513


```

## Geometric Distribution

X = geometric random variable

Example

_Products produced by a machine has a 3% defective rate._

What is the probability that the first defective occurs in the fifth item inspected?
### dgeom(x, prob)
```R
> dgeom (x= 4, prob = .03)
[1] 0.02655878

#the probability of
#exactly 4 trials before first defective or
#exactly 5 trials to first defective
```
_What is the probability that the first defective occurs in the first five inspections?_
### pgeom(x, prob)
```R
> pgeom(4, .03)
[1] 0.1412660
#the probability of
#up to 4 trials before first defective or
#up to 5 trials to first defective
```
_a production line which has a 20% defective rate, what is the minimum number of inspections,that would be necessary so that the probability of observing a defective is more that 75%?_
### qgeom(k, prob)
```R
> qgeom(.75,.2)
[1] 6
#returns the number of trials before first defective that
#has a probabilty of .75.
```
## Binomial Distribution
with replacement
n = no of trials
p = probability of success
q = 1 − p = probability of failure
X = no of successes in n trials


_Five terminals on an on-line computer system are attached to a communication line to the central computersystem. The probability that any terminal is ready to transmit is 0.95. Let X denote the number of ready terminals._

### dbinom(x, n, prob)
```R
> dbinom(x = 3, size =5, prob = .95)
[1] 0.02143438
```
_sample :n = 5, p = .95_
### pbinom(x, n, prob)
```R
#P(X ≤ 3):
> pbinom(3, 5, .95)
[1] 0.0225925
#P(X > 3):
> 1-pbinom(3, 5, .95)
[1] 0.9774075
#P(X ≤ 4):
> pbinom (4, size = 20, prob =.2)
[1] 0.6296483
```
_It is known that 20% of integrated circuit chips on a production line are defective. To maintain and monitor the quality of the chips, a sample of twenty chips is selected at regular intervals for inspection. Let X denote the number of defectives found in the sample._
_Up to how many defectives will the batches contain with at least 95% certainty?_
### qbinom(k, n, prob)
```R
>qbinom(.95, 20, .2)
[1] 7

```
## Poisson Distribution

### dpois(X, λ)
Probability Density Function, the probability that the random variable will be within some range

X = number of events, distributed independently in time, occurring in a fixed time interval.
λ = average



### ppois(X, λ, boolean)
Cumulative Probability Function, the probability that the random variable will be lower than or equal to a value.

If there are twelve cars crossing a bridge per minute on average, find the probability of having seventeen or more cars crossing the bridge in a particular minute.

```R
> ppois(16, 12, FALSE)
[1] 0.101291
> ppois(16, 12) #probability of having 16 or less cars
[1] 0.89871
```

### qpois(k, λ)

Consider a computer system with Poisson job-arrival stream at an average of 2 per minute. Determine the probability that in any one-minute interval there will be, maximum arrivals with at least 90% certainty.

```R
> qpois(.9,2)
[1] 4
```
