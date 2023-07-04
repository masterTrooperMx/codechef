/*
Bob and Alice are having a lockout match between them. There are three problems in the contest worth 
A, B, and C points respectively. Only the first player to solve a problem gets points for that problem. 
It is impossible for Bob and Alice to solve a problem at the same time. 
Chef wants to know if there is any chance of a draw if Bob and Alice manage to solve all 3 problems. 
A draw occurs when both players end with equal number of points.
*/
// Begin reading from stdin so the process does not exit.
console.time('LOCKDRAW');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);
let input ='';
// your code goes here

/*
First line will contain 
T, number of testcases. Then the testcases follow.
Each testcase contains of a single line of input, three space separated integers A, B, and C.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/
function cacheInput(data) {
    input += data;
}

function prepareInput() {
    input = input.split('\n');//map(Number);
}

function main() {
    prepareInput();
    let T = input.splice(0, 1)[0]; // test cases
    //number = 0;
    for(let i = 0; i < T; i++){
        let arrN = (input.splice(0, 1)[0]).split(' ').map(Number);
        arrN.sort((a,b)=>a-b); // ascending order
        let max = Math.max(...arrN);
        let sumArr = arrN.splice(0, 2).reduce(function(x, y){ return x+y }); // to filter values from max
        if(max == sumArr){
            console.log('YES');
        } else {
            console.log('NO');
        }
        //console.log(arrN, max, sumArr);
    }
 
    //process.stdout.write(input.join('\n'));
}

main();
console.timeEnd('LOCKDRAW');