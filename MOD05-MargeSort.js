function mergeSort(arr) {
    if (arr.length < 2) return arr;

    if (arr.length === 2) return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    const leftSortedArr = mergeSort(leftArr);
    const rightSortedArr = mergeSort(rightArr);

    const mergedArr = [];
    let leftArrIdx = 0;
    let rightArrIdx = 0;

    while (leftArrIdx < leftSortedArr.length || rightArrIdx < rightSortedArr.length) {
        if (leftArrIdx >= leftSortedArr.length ||
            leftSortedArr[leftArrIdx] > rightSortedArr[rightArrIdx]
        ) {
            mergedArr.push(rightSortedArr[rightArrIdx]);
            rightArrIdx++;
        } else {
            mergedArr.push(leftSortedArr[leftArrIdx]);
            leftArrIdx++;
        }
    }

    return mergedArr;
}

// Recursive Time complexity: 
// O(n^lgb (a)) => a=2(2 recursive function calls), b=2(splitting array into halves)
// => O(n^lg2(2)) => O(n)
// Outside recursive step: O(n) (Because of 1 while loop)
// Work same inside as outside recursive step: O(n^lgb (a) * lg n) => O(n * lg n)

const sortedArr = mergeSort([4, -1, 3, -2, 6, -10, 9, -17, -15, 3, -1]);
console.log(sortedArr);