/**
 * Sheokand is good at mathematics. One day, to test his math skills, Kaali gave him an integer N. 
 * To impress Kaali, Sheokand has to convert N into an integer M that can be represented in the form 2^x+2^y 
 * (where x and y are non-negative integers such that x<>y). 
 * In order to do that, he can perform two types of operations:
 *  add 1 to N
 *  subtract 1 from N
 * However, Sheokand is preparing for his exams. 
 * Can you help him find the minimum number of operations required to convert N into a valid integer M?
 */
console.time('SHKNUM-2');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);
let input ='';
let N = 0;
let potencias = [];
const max = 31;

/**
 * The first line of the input contains a single integer T denoting the number of test cases. 
 * The description of T test cases follows.
 * The first and only line of each testcase contains a single integer N.
 */
function cacheInput(data) {
    input += data;
}

function prepareInput() {
    input = input.split('\n'); //.map(Number);
    // prepare potence of upper triangle of squared matrix
    for(let i = 0; i < max; i++){
        for(let j = 1; j < max;  j++){
            if(j != i){
                //console.log(i,j);
                potencias.push(Math.pow(2,i) + Math.pow(2,j));
            }
        }
    }
    potencias = potencias.sort(function(a,b){return a-b}); // asc order
    potencias = [... new Set(potencias)]; // unique vals
}

function buscaPotencias(num){
    let i = 0;
    while(i++ < potencias.length){
        if(potencias[i] >= num){
            break;
        }
    }
    if (potencias[i] == 0) {
        console.log(0);
    } else {
        console.log(Math.min(potencias[i]-N, N-potencias[i-1]));
    }
}

function main() {
    prepareInput();
    let T = Number(input.splice(0, 1)[0]); // test cases
    for(let i = 0; i < T; i++) {
        N = Number(input.splice(0, 1)[0]); // number of students
        buscaPotencias(N);
        //console.log(i, N, up-N, N-down);
    }
}

main();
console.timeEnd('SHKNUM-2');