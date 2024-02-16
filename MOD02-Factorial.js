function factorial(n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    return fact;
}

// Time Complexity: O(n)

console.log(factorial(3));
console.log(factorial(5));