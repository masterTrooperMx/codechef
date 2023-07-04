/*
There are three (3) friends and a total of N candies.
There will be a fight amongst the friends if all of them do not get the same number of candies.

Chef wants to divide all the candies such that there is no fight. Find whether such distribution is possible.

Find if N%3 == 0
if( n >= 3 ) { 
    // is possible
    if( n % 3 == 0 ) {
        // YES
    } else { // NO }
}
else { // not possible}
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
    for(let i = 0; i < T; i++) {
        n = input.splice(0, 1)[0];
        if(n >= 3) {
            // is possible
            if (n%3 == 0) {
                console.log("YES");    
            } else {
                console.log("NO");    
            }
        } else {
            console.log("NO");
        }
    }
}
/*
The first line of input will contain a single integer T, denoting the number of test cases.
Each test case consists of a single integer N - the number of candies.
*/
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', cacheInput).on('end', main);