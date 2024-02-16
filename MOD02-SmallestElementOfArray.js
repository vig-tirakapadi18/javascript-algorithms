function smallest(nums) {
    let smallest = nums[0]; // 1

    for (let i = 1; i < nums.length; i++) { // 1
        console.log("hell")
        if (smallest > nums[i]) {   // n
            smallest = nums[i]; // Best Case: 1, Worst Case: n-1
        }
    }

    return smallest;    // 1
}

// Best Case: n => O(n)
// Avg. Case: n => O(n)
// Worst Case: n => O(n)

console.log(smallest([1, 4, 3]));
console.log(smallest([45, 25, 19, 67, 34, 12, 2, 132]));