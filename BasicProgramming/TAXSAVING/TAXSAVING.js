/*
In Chefland, everyone who earns strictly more than Y rupees per year, has to pay a tax to Chef. 
Chef has allowed a special scheme where you can invest any amount of money and claim exemption for it.

You have earned X (X>Y) rupees this year. Find the minimum amount of money you have to invest so that you don't have to pay taxes this year.
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
    for( let i = 0; i < T; i++ ) {
        let X = input.splice(0, 1)[0];
        let Tx = input.splice(0, 1)[0];
        if( X >= Tx ) {
            console.log(X-Tx);
        }
    }
}
/*
The first line of input will contain a single integer T, denoting the number of test cases.
Each test case consists of a single line of input consisting of two space separated integers 
X and Y denoting the amount you earned and the amount above which you will have to pay taxes.
*/
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', cacheInput).on('end', main);