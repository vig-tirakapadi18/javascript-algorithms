function findElement(sortedArr, key, offset) {
    let startIdx = 0;
    let endIdx = sortedArr.length - 1;

    let middleIdx = Math.floor((endIdx - startIdx) / 2);

    if (sortedArr[middleIdx] === key) {
        return middleIdx + offset;
    }

    if (sortedArr[middleIdx] < key) {
        startIdx = middleIdx + 1;
        offset = offset + middleIdx + 1;
    } else {
        endIdx = middleIdx;
    }

    return findElement(sortedArr.splice(startIdx, endIdx + 1), key, offset);
}

// a: 1 (calling recursive function only once)
// b: 2 (splitting array into 2 halves, so n/2)
// O(n^lgb a) => O(n^lb2 1) => O(n^0) => O(1)
// Overall Runtime Time Complexity: 
// Same work inside and outside: O(n^lgb a * lg n) => O(1 * lg n) => O(lg n)

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(findElement(sortedArr, 7, 0));