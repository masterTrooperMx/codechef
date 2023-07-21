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

function minmax(arr, n, k){
    // Finding the minimum element
    // from the array
    let min_ele
        = Math.min([...arr]);//arr.sort((a, b) => a - b)[0]
    // Boolean variable to check if the
    // array can be equalized or not
    let flag = true;
 
    // Traversing the array
    for (let i = 0; i < n; i++) {
        // Checking if the values lie
        // within the possible range
        // for each element
        if (!((arr[i] + k) >= min_ele + k
            && min_ele + k >= (arr[i] - k))) {
 
            // If any value doesn't lie in
            // the range then exit the loop
            flag = false;
            break;
        }
    }
 
    if (flag) {
 
        // Value after equalizing the array
        return min_ele + k;
    }
 
    // Array cannot be equalized
    else
        return -1;
}

function main() {
    prepareInput();
    const t = Number(input.splice(0, 1)[0]); // test cases
    
    for(let i = 0; i < t; i++) {
        const [m,n,k] = stringToArr(input.splice(0, 1)[0]); // m trees, n squirrels, k chestnuts from nearest tree
        const T = stringToArr(input.splice(0, 1)[0]); // Tis
        const P = stringToArr(input.splice(0, 1)[0]); // Pis
        const max = Math.pow(10,6); // max number of secs to wait
        let sums = [];
        for(let j = 0; j < max; j++){
            let h = T.indexOf(j+1); // idx
            let l = P[h]; // val of idx
            fillSpaces(h, l, max);
            //console.log(`${i} ${j}, ${T[h]}->${l}, ${chestnuts}`);
            if(j > 0){
                sums[j] = sums[j-1] + chestnuts[j];
            } else {
                sums[j] = chestnuts[j];
            }
        }

        console.log(i, "\n", 'Ts', T, "\n", 'Ps', P, "\n", 'mnk', `${m} trees, ${n} squirrels, ${k} chestnuts to have\n ${chestnuts}\n ${sums}`);
        // look for nummer k
        console.log(binarySearch(sums, k, (a,b) => a-b)+1);

        chestnuts = []; // cleaning array for new test case
    }
}

main();
console.timeEnd('MINMAXARR');