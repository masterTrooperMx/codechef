/*
Recently, Chef visited his doctor. The doctor advised Chef to drink at least 2000 ml of water each day.

Chef drank 
X ml of water today. Determine if Chef followed the doctor's advice or not.
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
    //console.table(input);
    const T = input.splice(0, 1)[0];
    for(let i = 0; i < T; i++) {
        x = input.splice(0, 1)[0];
        if(x >= 2000) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    }
}
/*
The first line contains a single integer 
T — the number of test cases. Then the test cases follow.
The first and only line of each test case contains one integer 
X — the amount of water Chef drank today.
*/
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', cacheInput).on('end', main);