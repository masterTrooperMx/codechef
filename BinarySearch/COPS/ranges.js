// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// In JavaScript, arrays aren't primitives but are instead Array objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
const range = (v, k) => {
    // Array(length?) constructor
    // .map(callbacFn, thisArg), idx is the array index
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    // https://stackoverflow.com/questions/16046532/what-does-variable-name-mean-in-javascript
    // _ is a valid variable identifier in JavaScript, and could theoretically refer to anything.
    return Array(k - v + 1).fill().map((_, idx) => v + idx)
}

// r1 elements that r2 does not have
const rangeIntersection = (r1, r2) => {
    return r1.filter(item => !r2.includes(item));
}

// merge 2 ranges
const rangeMerge = (r1, r2) => {
    return r1.concat(r2);
}

// whole range of houses
let O = range(1,100); //  [1, 100]

let A = range(1,41); // [1. 41]
let B = range(55,95); // [55, 95]

console.log(A, B);

// merge 2 ranges
let C = rangeMerge(A, B);
console.log(C);
// get all that are in O and not in C
console.log((rangeIntersection(O, C)).length);
//console.log(C.map((_, idx) => idx*1));

A = range(1, 31); // [1, 31]
B = range(19, 45); // [19, 45]
console.table(rangeIntersection(O, rangeMerge(A, B)));

function range(arr) {
    let [start, end] = arr;
    if(start === end) return [start];
    return [start, ...range(start + 1, end)];
}

function mergeRange(r1, r2) {
    return [...r1, ...r2];
}

const R = [[1, 64],
     [1, 68],
     [1, 100],
     [1, 100]];

//console.log(mergeRange(range(R[0][0]), range(R[0][1])));
console.log(range(R[0]));