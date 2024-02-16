// function sumUp(n) {
//     let res = 0;
//     for (let i = 1; i <= n; i++) {
//         res = res + i;
//     }

//     return res;
// }

// let start;
// let end;

// start = performance.now();
// console.log(sumUp(10));
// end = performance.now();
// console.log(end - start);

// start = performance.now();
// console.log(sumUp(1000));
// end = performance.now();
// console.log(end - start);

// start = performance.now();
// console.log(sumUp(100000));
// end = performance.now();
// console.log(end - start);

// start = performance.now();
// console.log(sumUp(10000000000000));
// end = performance.now();
// console.log(end - start);

// function sumUp(n) {
//     return (n / 2) * (1 + n);
// }

// nums = [1, 30, 23]
function sumArrayElements(nums) {
    // WAY 01
    let res = 0;    // 1
    for (let i = 0; i < nums.length; i++) { // 1
        res += nums[i]; // 3 => n
    }

    // WAY 02
    // for (const el of nums) {
    //     res += el;
    // }

    return res; // 1

    // WAY 03
    // return nums.reduce((res, currNum) => res += currNum, 0);
    // reducer() still has the same implementation as loop so it has same Time Complexity "O(n)"
}

// T = 1 + 1 + 1 + n = 3 + n
// T = n => O(n) => Linear Time Complexity

console.log(sumArrayElements([1, 2, 3, 4, 5]));