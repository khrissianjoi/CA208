phone_numbers.py 

print("Enter a name and number, or a name and ? to query (!! to exit)\n", end="")

n = True
dic = {}
while n:
	string = input()
	if string != "!!" :
		string = string.split()
		if string[0] not in dic and string[1]!= "?":
			dic[string[0]] = string[1]
		elif string[0] in dic and string[1] != "?":
			dic[string[0]] = string[1]
		elif string[0] in dic and string[1] == "?":
			print("{} has number {}".format(string[0], dic[string[0]]))
		elif string[0] not in a and string[1] == "?":
			print("Sorry, there is no {}".format(string[0]))
	elif string == "!!":
		print("Bye")
		n = False
_____________________________________________________________________________________
student_marks.py

import sys
def make_map():
	dic = {}	
	f = sys.stdin.readlines()
	for line in f:
		line = line.split()
		dic[line[0]] = line[1]

	return dic

_____________________________________________________________________________________
word_length.py

import sys
def get_counts_dict(lst):
	dic = {}
	for word in lst:
		count = len(word)
		if count not in dic:
			dic[count] = 1
		elif count in dic:
			dic[count] += 1

	return dic
