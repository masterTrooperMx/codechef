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
let levels = [];
let lcoins = [];

/**
 * The first line of input contains a single integer T denoting the number of test cases.
 * The first and the only line of each test case contains an integer N denoting the number of gold coins Chef has.
 */
function cacheInput(data) {
    input += data;
}

function sumAriSerie(n) {
    let suma = 0;
    suma = (n*(1+n))/2; // ya que son consecutivos a1 = 1y an = n
    return suma;
}

function getLevel(l) { // solving the cuadratic eq due to serie sum
    const a = 1, b = 1, c = -l, discriminant = b*b-4*a*c;
    if( discriminant >= 0) {
        return [Math.floor((-b + Math.sqrt(discriminant)) / (2 * a)), Math.floor((-b - Math.sqrt(discriminant)) / (2 * a))].filter(function(x){return x >= 0});
    } else { // complex roots nothing to do
        return 0;
    }
    
}

function prepareTriangle() {
    for(let i = 0; i < 10; i++){
        levels[i] = i+1;
        lcoins[i] = sumAriSerie(i+1);
    }
}

function prepareInput() {
    input = input.split('\n');//map(Number);
}

function main() {
    prepareInput();
    //prepareTriangle();
    let T = input.splice(0, 1)[0]; // test cases
    //number = 0;
    for(let i = 0; i < T; i++){
        let coins = Number(input.splice(0, 1)[0]);
        console.log(coins, Number(getLevel(coins))+1);
        //arrN.sort((a,b)=>a-b); // ascending order
        //let max = Math.max(...arrN);
        //let sumArr = arrN.splice(0, 2).reduce(function(x, y){ return x+y }); // to filter values from max
        //if(max == sumArr){
        //    console.log('YES');
        //} else {
        //    console.log('NO');
        //}
        //console.log(arrN, max, sumArr);
    }
 
    //process.stdout.write(input.join('\n'));
}

main();
console.timeEnd('TRICOIN');