/*
Given the list of numbers, you are to sort them in non decreasing order.
non decreasing = increasing
[1, 2, 3, 4, 5] increasing
[5, 4, 3, 2, 1] decreasing
https://nodejs.org/api/process.html
https://www.geeksforgeeks.org/node-js-process-stdin-property/
*/
/* We have populated the solutions for the 10 easiest problems for your support.*/
/* Click on the SUBMIT button to make a submission to this problem.*/
// Begin reading from stdin so the process does not exit.
console.time('TSORT');
process.stdin.resume();
process.stdin.setEncoding('utf8');
/* 
The process.stdin property is an inbuilt application programming interface of the process module which listens for the user input. 
The stdin property of the process object is a Readable Stream. It uses on() function to listen for the event.
name of the stream = data, associated handler cacheInput
when finished input set signal of streand to [end] and handler main
*/
process.stdin.on('data', cacheInput).on('end', main);
let input ='';
// your code goes here

/*
t – the number of numbers in list, then t lines follow [t <= 10^6].
Each line contains one integer: N [0 <= N <= 10^6]
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/
function cacheInput(data) {
    input += data;
}

function prepareInput() {
    input = input.split('\n');//.map(Number);
}

function main() {
    prepareInput();
    let T = input.splice(0, 1)[0]; // not used yet
    number = 0;
    let sumArr=[]; // not used yet
    input.sort((a,b)=>a-b);
 
    process.stdout.write(input.join('\n'));
}

main();
console.timeEnd('TSORT');