/*
In older days finding square roots seemed to be difficult but nowadays it can be easily done using in-built functions available across many languages .

Assume that you happen to hear the above words and you want to give a try in finding the square root of any given integer using in-built functions. 
So here's your chance.
https://nodejs.org/api/process.html
https://www.geeksforgeeks.org/node-js-process-stdin-property/
*/
// Begin reading from stdin so the process does not exit.
console.time('FSQRT');
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', cacheInput).on('end', main);
let input ='';
// your code goes here

/*
The first line of the input contains an integer T, the number of test cases. 
T lines follow. 
Each line contains an integer N whose square root needs to be computed.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
For each line of the input, output the square root of the input integer, rounded down to the nearest integer, in a new line.
*/
function cacheInput(data) {
    input += data;
}

function prepareInput() {
    input = input.split('\n').map(Number);
}

function main() {
    prepareInput();
    let T = input.splice(0, 1)[0]; // number tests cases
    //number = 0;
    //let sumArr=[]; // not used yet
    //input.sort((a,b)=>a-b);
    input = input.map((x) => Math.floor(Math.sqrt(x)));
 
    process.stdout.write(input.join('\n'));
}

main();
console.timeEnd('FSQRT');