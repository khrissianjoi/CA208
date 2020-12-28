import math

def euclideanDistance(i, j):
  currentVal = 0
  for n, iVal in enumerate(i):
    jVal = j[n]
    currentVal += (iVal -jVal)**2

  return math.sqrt(currentVal)

def graphPrint(i):
  out = ""
  for point in points:
    if i != point:
      out += " " + str(euclideanDistance(points[i],points[point]))
    else:
      out += " " + "0"
      break
  print(out)

points = {
  "A" : [1,5,7],
  "B" : [1,4,4],
  "C" : [4,1,9],
  "D" : [2,3,5],
  "E" : [5,1,9],
  "F" : [4,8,4],
  "G" : [3,3,3],
  "H" : [3,2,11],
  "I" : [5,4,9],
}

graphPrint("A")
graphPrint("B")
graphPrint("C")
graphPrint("D")
graphPrint("E")
graphPrint("F")
graphPrint("G")
graphPrint("H")
graphPrint("I")
