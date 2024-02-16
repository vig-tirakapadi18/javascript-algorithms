function fib(n) {
    const fibSequence = [1, 1]; // 1
    for (let i = 2; i < n + 1; i++) {   // 1
        fibSequence.push(fibSequence[i - 2] + fibSequence[i - 1]);  // n - 1
    }
    // console.log(fibSequence);
    return fibSequence[n];  // 1
}

// T = 1 + 1 + n - 1 + 1
// T = 2 + n
// T = n => O(n)

console.log(fib(4));
console.log(fib(5));