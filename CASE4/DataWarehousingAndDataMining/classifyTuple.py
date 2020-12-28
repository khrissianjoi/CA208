import math

def logBase2(val):
  if val != 0:
    return math.log(val,2)
  return 0

def expectedInformation(c1, c2):
  return -(c1) *logBase2(c1) - ((c2) * logBase2(c2))


def attributeExpectedInformationPart(x, c1, c2):
  return x * (expectedInformation(c1,c2))


def gainInformation(infoD, infoAttributeD):
  return infoD - infoAttributeD

print(expectedInformation(9/14,5/14))
# print(attributeExpectedInformationPart(/14, 2/5, 3/5) + attributeExpectedInformationPart(4/14,4/4,0/4) + attributeExpectedInformationPart(5/14,3/5,2/5))
# print(attributeExpectedInformationPart(4/14,1,0))
# print(attributeExpectedInformationPart(12/26, 0/12, 12/12))
# print(attributeExpectedInformationPart(14/26,6/12,8/14) + attributeExpectedInformationPart(12/26, 0/12, 12/12))
print(attributeExpectedInformationPart(14/26, 2/14,12/14) + attributeExpectedInformationPart(12/26, 8/12,4/12))