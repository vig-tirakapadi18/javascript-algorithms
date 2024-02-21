function findElement(sortedArr, key) {
    let startIdx = 0;
    let endIdx = sortedArr.length - 1;

    while (startIdx <= endIdx) {
        let middleIdx = startIdx + Math.floor((endIdx - startIdx) / 2);

        if (sortedArr[middleIdx] === key) return middleIdx;

        if (sortedArr[middleIdx] < key) startIdx = middleIdx + 1;
        else endIdx = middleIdx - 1;
    }
}

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(findElement(arr, 30));