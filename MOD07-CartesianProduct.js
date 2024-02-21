function cartesianProd(setA, setB) {
    if (setA.length <= 0 || setB.length <= 0) {
        return;
    }

    const products = [];

    for (const setAEl of setA) {
        for (const setBEl of setB) {
            products.push([setAEl, setBEl]);
        }
    }

    return products;
}

// Time & Space Complexity: O(n * m) (Both Arrays having different size) 
// => O(n^2) (If both arrays has same size)

const setA = ['black', 'gray'];
const setB = ['s', 'm', 'l'];

console.log(cartesianProd(setA, setB));