/*
Somu went to the gym today. He decided to do X sets of squats. Each set consists of 15 squats. 
Determine the total number of squats that he did today.
*/
let input = '';
function cacheInput(data) {
    input += data; 
}

function prepareInput() {
    input = input.split(/\s+/).map(Number);
}

function main() {
    prepareInput();
    const T = input.splice(0, 1)[0];
    if(input.length % T == 0){ // checamos que el numero de entradas sean las que esperamos
        const squat = input.map((x) => { return x*15 });
        squat.forEach(day => {
            console.log(day);
        });
    }
}
/*
The first line contains a single integer T — the number of test cases. Then the test cases follow.
The first and only line of each test case contains an integer X — the total number of sets of squats that Somu did.
*/
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', cacheInput).on('end', main);
// node SQUATS-1 < input.txt