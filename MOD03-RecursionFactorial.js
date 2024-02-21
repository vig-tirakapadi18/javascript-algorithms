function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

// Time Complexity: O(n)
// Every nested/recursive function call new memory is created
// Space Complexity: O(n)

console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(6))