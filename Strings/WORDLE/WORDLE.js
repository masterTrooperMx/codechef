/*
Chef invented a modified wordle.

There is a hidden word S and a guess word T, both of length 5.

Chef defines a string M to determine the correctness of the guess word. For the ith  index:

If the guess at the i th  index is correct, the ith  character of M is G.
If the guess at the i th  index is wrong, the ith  character of M is B.
Given the hidden word S and guess T, determine string M.
*/
console.time('WORLDE');
let arr = '';

process.stdin.on('data',function(chunk){
    arr += chunk;
});

/*
First line will contain T, number of test cases. Then the test cases follow.
Each test case contains of two lines of input.
First line contains the string S - the hidden word.
Second line contains the string G - the guess word.
*/
function prepareProcessInput() { // creates a multidimensional array
    let T = 0;   
    arr = arr.split('\n');
    T = Number(arr.splice(0, 1)[0]); // test cases
    // create array of arrays
    for(let i = 0; i < T; i++){
        let S = arr.splice(0, 1)[0]; // hidden
        let G = arr.splice(0, 1)[0]; // guest
        let M = '';
        // strings are array ECMA5
        console.log(S, G);
        for(let j = 0; j < S.length; j++){
            if(S[j] == G[j]){
                M += 'G';
            } else {
                M += 'B';
            }
        }
        console.log(M);
    }
}

process.stdin.on('end',function(){
    prepareProcessInput();
});
console.timeEnd('WORLDE');