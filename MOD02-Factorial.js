function factorial(n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    return fact;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
// In the for loop, "i" is re-created with every iteration, 
// So memory for "i" is not stored permanently

console.log(factorial(3));
console.log(factorial(5));