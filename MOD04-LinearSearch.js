function findElement(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) return i;
    }
}

const arr = [10, 23, 42, 13, 18, 97, 68, 58];
console.log(findElement(arr, 97));

function findObjElement(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof key === "object" &&
            key !== null &&
            key.name === arr[i].name &&
            key.age === arr[i].age
        ) {
            return i;
        }
    }
}

const objArr = [
    { name: "vig", age: 23 },
    { name: "vis", age: 21 },
    { name: "abc", age: 20 }
];
console.log(findObjElement(objArr, { name: "abc", age: 20 }));