function isPowerOfTwoImproved(n) {
    if (n < 1) {
        return false;
    }

    return (n & (n - 1)) === 0;
}

// Time Complexity: O(1)

console.log(isPowerOfTwoImproved(16));
console.log(isPowerOfTwoImproved(12));
console.log(isPowerOfTwoImproved(5));
console.log(isPowerOfTwoImproved(64));