### Haskell Notes

```haskell
mySum [] = 0 -- base case
mySum (x:xs) = x + mySum xs -- inductive case
```

## Haskell List Functions
```haskell
> last [2,4,6,8] -- returns last element
8
> init [2,4,6,8] -- returns list of all elements but the last
[2,4,6]
> length [2,4,6,8] -- returns the length of the list
4
> null [2,4,6,8] -- returns boolean, if list is empty
False
> reverse [2,4,6,8] -- returns the reverse
[8,6,4,2]
> take 2 [2,4,6,8]
[2,4]
> drop 3 [2,4,6,8]
[8]
> maximum [2,8,4,9,6] -- returns the maximum element
9
> minimum [2,8,4,9,6] -- returns the minimum element
2
> sum [2,8,4,9,6] -- returns the sum of all the elements
29
> elem 4 [2,8,4,6] -- returns boolean, if element in list
True
```

