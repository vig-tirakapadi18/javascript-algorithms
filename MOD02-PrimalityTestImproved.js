function isPrimeImproved(n) {
    if (n === 0 || n === 1) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

// BEST CASE: n = 0 OR n = 1 OR n = 2 => O(1)
// AVERAGE CASE: O(sqrt(n))
// WORST CASE: n = 27277 => n - 2 => O(sqrt(n))

console.log(isPrimeImproved(0));
console.log(isPrimeImproved(1));
console.log(isPrimeImproved(2));
console.log(isPrimeImproved(3));
console.log(isPrimeImproved(9));