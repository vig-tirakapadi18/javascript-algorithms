function isPowerOfTwo(n) {
    if (n < 1) {
        return false;
    }
    let divNum = n;
    while (divNum > 1) {
        if (divNum % 2 === 1) {
            return false;
        }

        divNum = divNum / 2;
    }
    return true;
}

// Best Case: n = 13(Odd Nums) => O(1)
// Avg. Case: O(lg n)
// Worst Case: n = 1125899906842624 (2^50) => 50 Executions => O(lg n)
// n = 8 (2^3) => 3 Executions => O(lg n)
// n = 64 (2^5) => 5 Executions => O(lg n)

console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(12));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(64));
