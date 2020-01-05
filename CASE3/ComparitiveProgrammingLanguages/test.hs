notT :: Bool -> Bool
notT check = not check

oddT :: Int -> Bool
oddT n
    | n `mod` 2 == 0 = True
    | otherwise = False
-- even = not . odd
-- higher order function
power :: (Int,Float) ->Float
power (n,b)
    | n == 0 = 0.0
    | otherwise = b * power (x, b)
    where x = n - 1

powerc :: Int -> Float -> Float
powerc n b
    | n == 0 = 1.0
    | otherwise = b * powerc x b
    where x = n - 1
-- sqr = powerc 3

-- disjoint union
data Number = Exact Integer | Inexact Float
              deriving (Show, Read)

check :: Int -> Number
check n =
    let pi = Inexact 3
    in pi

-- pattern matching
data Shape = Point | Circle Float | Rectangle Float Float

area :: Shape -> Float
area s =
    case s of 
        Point -> 0.0
        Circle r -> pi * r * r
        Rectangle w h -> w * h

myDelete :: Int -> [Int] -> [Int]
myDelete element (currentElem:[]) = [currentElem]
myDelete element (currentElem:remainingElem)
    | element == currentElem = remainingElem
    | otherwise = [currentElem] ++ myDelete element remainingElem