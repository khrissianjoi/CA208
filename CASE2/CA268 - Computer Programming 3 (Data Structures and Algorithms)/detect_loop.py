def append(self, s):
	new = LinkedList()
	curr = self.head
	while curr != None:
		new.add(curr.item)
		curr = curr.next
		self.remove()
	self.add(s)
	curr = new.head
	while curr != None:
		self.add(curr.item)
		curr = curr.next

def rotate(self):
	new = LinkedList()
	first = LinkedList()
	first.add(self.head.item)
	self.remove()
	curr = self.head
	while curr != None:
		new.add(curr.item)
		curr = curr.next
		self.remove()
	self.add(first.head.item)
	new_curr = new.head
	while new_curr != None:
			self.add(new_curr.item)
			new_curr = new_curr.next

def detect_loop(linkedlst):
	curr = linkedlst.head
	while curr != None:
		curr = curr.next
		if curr == linkedlst.head:
			return True
	return False
