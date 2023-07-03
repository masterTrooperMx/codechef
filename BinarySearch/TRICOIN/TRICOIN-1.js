/**
 * Chef belongs to a very rich family which owns many gold mines. Today, he brought N gold coins and decided to form a triangle using these coins. Isn't it strange?
 * Chef has a unusual way of forming a triangle using gold coins, which is described as follows:
 * He puts 1 coin in the 1st row.
 * then puts 2 coins in the 2nd row.
 * then puts 3 coins in the 3rd row.
 * and so on as shown in the given figure.
 * ESTO ES UNA SERIE ARITMETICA
 */
// Begin reading from stdin so the process does not exit.
console.time('TRICOIN');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);
let input ='';
let lim = 100000; // con este limite paso!
let sumaS = [];

/**
 * The first line of input contains a single integer T denoting the number of test cases.
 * The first and the only line of each test case contains an integer N denoting the number of gold coins Chef has.
 */
function cacheInput(data) {
    input += data;
}

function sumAriSerie(l) {
    for(let i = 0; i < l; i++){
        if(i == 0){
            sumaS[i] = 1;
        } else {
            //sumaS[i] = serie[i]+sumaS[i-1];
            sumaS[i] = (i+1) + sumaS[i-1];
        }
    }
}

function getLevelSerie(num, l) {
    let nivel = 0;
    for(let i = 0; i < l; i++){
        if(sumaS[i] >= num) {
            if(sumaS[i] == num) {
                nivel = i+1;
            } else {
                nivel =  i;
            }
        }
        if(nivel > 0){
            break;
        }
    }
    return nivel;
}

function prepareInput() {
    input = input.split('\n');//map(Number);
}

function main() {
    prepareInput();
    sumAriSerie(lim);
    let T = input.splice(0, 1)[0]; // test cases
    //number = 0;
    for(let i = 0; i < T; i++){
        let coins = Number(input.splice(0, 1)[0]);
        console.log(coins, getLevelSerie(coins, lim));
    }
}

main();
console.timeEnd('TRICOIN');