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

## dhyper(x, M, L, n)

Hypergeometric distribution

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

## Poisson Distribution

### dpois(X, λ)
Probability Density Function, the probability that the random variable will be within some range

X = number of events, distributed independently in time, occurring in a fixed time interval.
λ = average



### ppois(X, λ, boolean)
Cumulative Probability Function, the probability that the random variable will be lower than or equal to a value.

If there are twelve cars crossing a bridge per minute on average, find the probability of having seventeen or more cars crossing the bridge in a particular minute.

```
> ppois(16, 12, FALSE)
[1] 0.101291
> ppois(16, 12) #probability of having 16 or less cars
[1] 0.89871
```
