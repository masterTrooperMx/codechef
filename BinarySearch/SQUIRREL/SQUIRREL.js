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
console.time('SQUIRREL');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);
let input ='';
let chestnuts = [0];

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
        const T = stringToArr(input.splice(0, 1)[0]); // Tis
        const P = stringToArr(input.splice(0, 1)[0]); // Pis
        const max = Math.max(...T); // max number of secs to wait
        //for(let j = 0; j < T.length; j++){
        let done = false, j = 0; // j secs
        while(!done){
            // first look at T the to P
            let h = 0, l = 0;
            h = T.indexOf(j+1); // idx
            //console.log(`j${j} h${h}`);
            if(h >= 0){
                chestnuts[j] = 1;
                l = P[h]; // val of idx
                if(l > 0){
                    if(chestnuts[j+l] > 0){
                        chestnuts[j+l] += 1;
                    } else {
                        chestnuts[j+l] = 1;
                    }
                } else {
                    chestnuts[h] += 0;
                }
            } else {
                if(chestnuts[j] > 0){
                    chestnuts[j] += 0;    
                } else {
                    chestnuts[j] = 0;
                }
            }
            //console.log(`${i} ${j} ${h} ${T[h]}->${l}, ${chestnuts}`);
            j++;
            if(j >= max){ // get chestnuts until we have our limit
                done = true;
            }
        }
        //console.log(i, "\n", 'Ts', T, "\n", 'Ps', P, "\n", 'mnk', `${m} trees, ${n} squirrels, ${k} chestnuts to have\n ${chestnuts}`);
        let sum = 0;
        j = 0;
        while(sum < k){
            sum += chestnuts[j];
            j++;
        }
        console.log(`${sum}-${j}`);
    }
}

main();
console.timeEnd('SQUIRREL');