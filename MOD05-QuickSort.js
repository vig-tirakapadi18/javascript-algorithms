function quickSort(arr) {
    const copiedArr = [...arr];

    if (copiedArr.length <= 1) {
        return copiedArr;
    }

    const smallerElementsArr = [];
    const biggerElementsArr = [];
    const pivotElement = copiedArr.shift();
    const equalElementsArr = [pivotElement];

    while (copiedArr.length) {
        const currEl = copiedArr.shift();
        if (currEl === pivotElement) {
            equalElementsArr.push(currEl);
        } else if (currEl < pivotElement) {
            smallerElementsArr.push(currEl);
        } else {
            biggerElementsArr.push(currEl);
        }
    }

    const smallerElementsSortedArr = quickSort(smallerElementsArr);
    const biggerElementsSortedArr = quickSort(biggerElementsArr);

    return smallerElementsSortedArr.concat(equalElementsArr, biggerElementsSortedArr);
}

// Time complexity of recursive step: O(n^lgb(a)) => O(n^lg2(2)) => O(n^1) => O(n)
// Time complexity outside recursive step: O(n)
// Overall time complexity(same as inside and outside so, O(n^lgb(a) * lg n))
// => O(n * lg n)

const sortedArr = quickSort([4, -1, 3, -2, 6, -10, 9, -17, -15, 3, -1]);
console.log(sortedArr);