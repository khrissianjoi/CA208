def fib(n,memo):
    if n in memo:
        return memo[n]
    if n == 0:
        return 0
    if n == 1:
        return 1
    else:
        memo[n] = fib(n-1,memo) +fib(n-2,memo)
    return memo[n]

def fib_bu(n):
    memo = [0,1] + ([0] * (n - 1))
    for i in range(2,n+1):
        memo[i] = memo[i-1] + memo[i-2]
    return memo[n]
print(fib(10,{}))
print(fib_bu(10))