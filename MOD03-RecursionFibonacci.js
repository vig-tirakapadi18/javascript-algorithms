function fib(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
}

// Loop-based Solution: O(n)
// fib(4) => 9 Executions
// fib(5) => 15 Executions
// fib(6) => 25 Executions
// Exponential growth in Recursion: NOT a best solution and quickly crashes
//                  the program for higher numbers
// Recursion based solution: O(2^n)

console.log(fib(4));
console.log(fib(5));
console.log(fib(6));