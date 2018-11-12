	def is_present(self, s):
		return self.recur_present(self.root, s)

	def recur_present(self, ptr, s):
		if ptr == None:
			return False
		elif ptr.item == s:
			return True
		elif s > ptr.item:
			return self.recur_present(ptr.right, s)
		elif s < ptr.item:
			return self.recur_present(ptr.left, s)
