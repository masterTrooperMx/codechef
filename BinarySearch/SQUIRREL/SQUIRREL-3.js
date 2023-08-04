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
console.time('SQUIRREL-3');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);
let input ='';
let T = [], P = [];
let chestnuts = 0;
//const max = Math.pow(10,6); // max number of secs to wait

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

function main() {
    prepareInput();
    const t = Number(input.splice(0, 1)[0]); // test cases
    
    for(let i = 0; i < t; i++) {
        const [m,n,k] = stringToArr(input.splice(0, 1)[0]); // m trees, n squirrels, k chestnuts from nearest tree
        // a fact is that Pi/Ti is a rate of chestnut generation is a function
        T = stringToArr(input.splice(0, 1)[0]); // Tis
        P = stringToArr(input.splice(0, 1)[0]); // Pis
        let l = 0;
        let h = Math.pow(10,9);
        while(l <= h){
            let mid = Math.round((l+h)/2);
            let x = new Array(m);
            let sum = 0;
            for(let j = 0; j < x.length; j++){
                x[j] = Math.max(Math.round((mid-T[j])/P[j])+1, 0);
            }
            //console.log(x);
            x = x.sort((a,b) => a-b).reverse();
            sum = x.reduce((a,b) => a+b);
            console.log(`l ${l}, h ${h}, mid ${mid}, sum ${sum}`);
            if(sum >= k){
                chestnuts = mid; // cleaning array for new test case
                h = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        console.log(`\n\n${chestnuts}`);
        //console.log(i, "\n", 'Ts', T, "\n", 'Ps', P, "\n", 'mnk', `${m} trees, ${n} squirrels, ${k} chestnuts to have\n ${chestnuts}`);
        // look for nummer k
        //console.log(binarySearch(sums, k, (a,b) => a-b)+1);
    }
}

main();
console.timeEnd('SQUIRREL-3');