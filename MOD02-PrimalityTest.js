function isPrime(n) {
    if (n === 0 || n === 1) {   // 1
        return false;   // 1
    } else {
        for (let i = 2; i < n; i++) {   // 1
            console.log("hello")
            if (n % i === 0) {  // n - 2
                return false;   // 1
            }
        }
        return true;
    }
}

// BEST CASE: n = 0 OR n = 1 OR n = 2 => O(1)
// AVERAGE CASE: O(n)
// WORST CASE: n = 27277 => n - 2 => O(n)

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(9));