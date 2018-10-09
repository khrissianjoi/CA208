print("Enter a name and number, or a name and ? to query (!! to exit)\n", end="")

n = True
a = {}
while n:
	string = input()
	if string != "!!" :
		string = string.split()
		if string[0] not in a and string[1]!= "?":
			a[string[0]] = string[1]
		elif string[0] in a and string[1] != "?":
			a[string[0]] = string[1]
		elif string[0] in a and string[1] == "?":
			print("{} has number {}".format(string[0], a[string[0]]))
		elif string[0] not in a and string[1] == "?":
			print("Sorry, there is no {}".format(string[0]))
	elif string == "!!":
		print("Bye")
		n = False
