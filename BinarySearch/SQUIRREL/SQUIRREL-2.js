/**
 * There are n squirrel(s) waiting below the feet of m chestnut tree(s). 
 * The first chestnut of the i-th tree will fall right after Ti second(s), and one more every Pi second(s) after that. 
 * The “big mama” of squirrels wants them to bring their nest no less than k chestnuts to avoid the big storm coming, 
 * as fast as possible! 
 * So they are discussing to wait below which trees to take enough chestnuts in the shortest time. 
 * Time to move to the positions is zero, and the squirrels move nowhere after that.
 * 
 * Calculate the shortest time (how many seconds more) the squirrels can take enough chestnuts. 
 */
console.time('SQUIRREL-2');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);
let input ='';
let chestnuts = [];

/**
 * The first line contains an integer t, the number of test cases, for each:
 *  The first line contains the integers m,n,k, respectively.
 *  The second line contains the integers Ti (i=1..m), respectively.
 *  The third line contains the integers Pi (i=1..m), respectively.
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

function fillSpaces(start, step, max) { // array cell to start, step of fill
    //console.log(`${start}, ${step}, ${max}`);
    if( start && step && max){
        for(let i = start-1; i < max; i += step){
            if(chestnuts[i] > 0){
                chestnuts[i] += 1;
            } else {
                chestnuts[i] = 1;
            }
        }
    }
}

// functional binary search
// https://stackoverflow.com/questions/22697936/binary-search-in-javascript
function binarySearch(arr, el, compare_fn) {
    let m = 0;
    let n = arr.length - 1;
    while (m <= n) {
        let k = (n + m) >> 1;
        let cmp = compare_fn(el, arr[k]);
        if (cmp > 0) {
            m = k + 1;
        } else if(cmp < 0) {
            n = k - 1;
        } else {
            return k;
        }
    }
    return ~m;
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
console.timeEnd('SQUIRREL-2');