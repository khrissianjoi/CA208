class Item():
    def __init__(self,v,w):
        self.val = v
        self.weight = w

def ks(cap, items, memo):
    if cap == 0:
        return 0
    else:
        if cap in memo:
            return memo[cap]
        else:
            options = [item.val + ks(cap - item.weight, items, memo) for item in items if item.weight <= cap]
            if len(options) == 0:
                return 0
            else:
                maxi = max(options)
                memo[cap] = maxi
                return maxi

items = [Item(20,5),Item(30,15)]
capacity = 30
print(ks(30,items,{}))

# bottom up
def dp_knapsack(initial_capacity, items):
    assert initial_capacity >= 0
    memo = [-math.inf] * (initial_capacity+1)
    
    dic = {(item.value/item.weight):(item.value,item.weight) for item in items}
    for i in range(initial_capacity+1):
        total_value = 0
        tmp = i
        for val in sorted(dic,reverse=True):
            weight = dic[val][1]
            value = dic[val][0]
            while weight <= tmp:
                total_value += value
                tmp -= weight
        memo[i] = total_value

    return memo