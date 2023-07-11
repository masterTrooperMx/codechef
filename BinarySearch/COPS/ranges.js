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

let A = range(1,41); // [1, 41]
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

function range1(arr) {
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


const max = 100;
// https://stackoverflow.com/questions/5836833/create-an-array-with-random-values
// randomly generated N = 40 length array 0 <= A[N] <= 39
const Mss = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
console.log('**', Mss);

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
Number.prototype.between = function(a, b, inclusive) {
    var min = Math.min.apply(Math, [a, b]),
      max = Math.max.apply(Math, [a, b]);
    return inclusive ? this >= min && this <= max : this > min && this < max;
  };

function inRange(r1, r2){ // r1 is theRange, r2 any range
    let A = r1;
    let [a0, a1] = [A[0], A[1]], [b0, b1] = r2;
    if(A == []){ // handle null values
        a0 = b0, a1 = b1;   
    }
    if(typeof(a0) == "number" && typeof(a1) == "number"){
        if(a0.between(b0,b1,true) || a1.between(b0,b1,true) || b0.between(a0,a1,true) || b1.between(a0,a1,true)){
            console.log('in', a0, a1, b0, b1);
            return true;
        } else {
            console.log('out');
            return false;
        }
    } else { console.log(typeof(a0), typeof(a1)); }
}

//console.log(mergeRange(range(R[0][0]), range(R[0][1])));
console.log(range1(R[0]));

let theRange = [ [1, 64] ];
console.log(theRange, theRange[0]);

// whole complete
const inf = 1, sup = 100;
theRange = [];
let Ms = Mss; //[12, 52, 56, 8, 23, 78, 45];
Ms = Ms.sort(function(a,b){return a-b;});
const M = Ms.length;
const h = 5;
console.log(Ms);
for(let j = 0; j < M; j++) {
    let hi = Ms[j];
    let left = Number(hi - h), right = Number(hi + h);
    // standarizing range
    if(left < inf){
        left = inf;
    }
    if(right > sup){
        right = sup;
    }
    // merging range
    if(theRange.length == []){ // new range
        theRange.push([left, right]);
    } else { // no new range
        let rIn = false;
        for(let k = 0; k < theRange.length; k++){ // find in all the ranges one that fits
            if(inRange(theRange[k], [left, right])){ // is one inside the other? single range
                theRange.splice(k, 1, [ Math.min(theRange[k][0], left), Math.max(theRange[k][1], right) ]);
                rIn = true;
            }
        }
        if(!rIn) {
            theRange.push([left, right]);
        }
    }
    console.log(hi, h, [left, right], theRange);
}