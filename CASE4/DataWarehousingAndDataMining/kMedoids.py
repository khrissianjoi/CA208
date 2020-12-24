C1Cost = 0
C2Cost = 0

def calculations(value):
  x = int(value[0])
  y = int(value[1])
  xC1Value = abs(x - xC1rep)
  yC1Value = abs(y - yC1rep)

  xC2Value = abs(x - xC2rep)
  yC2Value = abs(y - yC2rep)
  totalC1 = xC1Value + yC1Value
  totalC2 = xC2Value + yC2Value
  
  tableCostC1 = "_"
  tableCostC2 = "_"
  if (totalC1 > totalC2): 
    resultant = "C2"
    tableCostC2 = totalC2
    global C2Cost
    C2Cost += totalC2
  else:
    resultant = "C1"
    tableCostC1 = totalC1
    global C1Cost
    C1Cost += totalC1
  print(totalC1, totalC2, resultant, tableCostC1, tableCostC2)
  return

def firstCluster(table):
  for key in table:
    calculations(table[key])
  return

table = {
"A1": (2,10),
"A2": (2,5),
"A3": (8,4),
"A4": (5,8),
"A5": (7,5),
"A6": (6,4),
"A7": (1,2),
"A8": (4,9)
}
representativeObjects = ("A1", "A4")
xC1rep = int(table[representativeObjects[0]][0])
yC1rep = int(table[representativeObjects[0]][1])
xC2rep = int(table[representativeObjects[1]][0])
yC2rep = int(table[representativeObjects[1]][1])
firstCluster(table)

print("C1 cost:", C1Cost)
print("C2 cost:", C2Cost)
