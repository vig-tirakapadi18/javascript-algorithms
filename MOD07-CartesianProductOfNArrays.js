// MOD07-CartesianProductOfNArrays.js
function cartesianProd(setA, setB) {
    const products = [];

    for (let setAEl of setA) {
        if (!Array.isArray(setAEl)) {
            setAEl = [setAEl];
        }

        for (let setBEl of setB) {
            products.push([...setAEl, setBEl]);
        }
    }

    return products;
}

function cartesian(...sets) {
    let tempArr = sets[0];

    for (let i = 1; i < sets.length; i++) {
        tempArr = cartesianProd(tempArr, sets[i]);
    }

    return tempArr;
}

// Time Complexity: O(n^x) 
// n = assuming length of longest array(Worst case), x = num of arrays

const colors = ['black', 'gray'];
const sizes = ['s', 'm', 'l', 'xl'];
const styles = ['v-cut', 'rounded'];

// console.log(cartesianProd(colors, sizes));
console.log(cartesian(colors, sizes, styles));