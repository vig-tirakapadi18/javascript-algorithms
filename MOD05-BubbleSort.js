function bubbleSort(arr) {
    const resultArr = [...arr];

    for (let outer = 0; outer < resultArr.length; outer++) {
        let outerEl = resultArr[outer];

        for (let inner = outer + 1; inner < resultArr.length; inner++) {
            let innerEl = resultArr[inner];

            if (outerEl > innerEl) {
                resultArr[outer] = innerEl;
                resultArr[inner] = outerEl;

                outerEl = resultArr[outer];
                innerEl = resultArr[inner];
            }
        }
    }

    return resultArr;
}

// Best Case: Items are already sorted => [1, 2, 3, 4, 5] => O(n)
// Avg. Case: Random order, don't know where element is => [5, 1, 3, 2, 6] => O(n^2)
// Worst Case: Items are sorted but in wrong order => [5, 4, 3, 2, 1] => O(n^2)

const arr = [3, 1, 5, 2, 9, 7];
console.log(bubbleSort(arr));
