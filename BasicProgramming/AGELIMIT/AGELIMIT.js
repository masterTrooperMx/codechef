/*
Chef wants to appear in a competitive exam. To take the exam, there are following requirements:

Minimum age limit is X (i.e. Age should be greater than or equal to X).
Age should be strictly less than Y.
Chef's current Age is A. Find whether he is currently eligible to take the exam or not.
*/

let input = '';

function cacheInput(data) {
    input += data; 
}

function prepareInput() {
    input = input.split(/\s+/).map(Number);
}

function main() {
    prepareInput(); // hace un array de numeros haciendo casting y lo deja en input
    let T = input.splice(0, 1)[0]; // saca el primer numero
    for(let i = 0; i < T; i++) {
        const X = input.splice(0, 1)[0];
        const Y = input.splice(0, 1)[0];
        const A = input.splice(0, 1)[0];
        if( A >= X && A < Y) {
            console.log('YES');
        } else {
            console.log('NO');
        }
    }
}

/*
Input Format
First line will contain T, number of test cases. Then the test cases follow.
Each test case consists of a single line of input, containing three integers ,
X,Y, and A as mentioned in the statement.
*/
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', cacheInput).on('end', main);