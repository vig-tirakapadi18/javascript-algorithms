function fib(n, memo) {
    let res;

    if (memo[n]) return memo[n];
    if (n === 0 || n === 1) res = 1;
    else res = fib(n - 1, memo) + fib(n - 2, memo);

    memo[n] = res;
    return res;
}

// Time Complexity: 2n => O(n)
// n = 5 => 9 executions
// n = 20 => 39 executions
// n = 30 => 59 executions

console.log(fib(5));
console.log(fib(10));
console.log(fib(15));