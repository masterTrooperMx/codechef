/**
 * Chef has an array A of N positive integers. Chef can perform the following operation any (possibly zero) number of times on the array.
 * 
 * Choose any index i such that (1<i≤N);
 * Choose an integer X such that (1≤X≤Ai );
 * Set A(i−1) :=A(i−1) +X;
 * Set Ai :=Ai −X. 
 *  Help Chef to minimize the maximum value of array A using the above operations .
 */
console.time('MINMAXARR');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);
let input ='';

/**
 * The first line of input will contain a single integer T, denoting the number of test cases.
 * Each test case consists of two lines of input.
 * The first line of each test case contains a single integer N, the size of array A.
 * The second line of each test case contains N space-seperated integers, the elements of array A.
 */
function cacheInput(data) {
    input += data;
}

function prepareInput() {
    input = input.split('\n'); //.map(Number);
}

const stringToArr = (str) => {
    let arr;
    if(typeof(str) == "string"){
        arr = str.split(' ').map(Number);
    }
    return arr;
}

const avgArr = (arr) => {
    return arr.reduce((acc, val) => acc+val, 0) / arr.length; // costly but elegant
}

const minmaxPlace = (arr) => {
    const max = Math.max(...arr);
    return arr.indexOf(max);
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

function main() {
    prepareInput();
    const t = Number(input.splice(0, 1)[0]); // test cases
    
    for(let i = 0; i < t; i++) {
        const N = Number(input.splice(0, 1)[0]); // size of array
        const A = stringToArr(input.splice(0, 1)[0]); // array of Ais
        // check max number place if is 0 we are done
        const maxP = minmaxPlace(A);
        let mid = Math.round(avgArr(A));
        console.log(`j 0, m ${mid}, X NA, A ${A}`);
        while(maxP != A.length){
            mid = Math.round(avgArr(A)); // must be the same every time
            let j = getRandomInt(A.length);
            let X = getRandomInt(A[j]);
            if((A[j-1]+ X)>0 && (A[j]-X)>0){
                A[j-1] += X;
                A[j] -= X;
            } else {
                X = "NA";
            }
            console.log(`j ${j}, m ${mid}, X ${X}, A ${A}`);
        }
        console.log(`A ${A}, N ${N}, mid ${mid}`);
    }
}

main();
console.timeEnd('MINMAXARR');