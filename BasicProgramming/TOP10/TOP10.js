/*
Chef has been working hard to compete in MasterChef.
He is ranked X out of all contestants. However, only 
10 contestants would be selected for the finals.

Check whether Chef made it to the top 10 or not?
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
        if(x <= 10) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    }
}
/*
The first line of input will contain a single integer T, denoting the number of test cases.
Each test case consists of one integers X — the current rank of Chef.
*/
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', cacheInput).on('end', main);