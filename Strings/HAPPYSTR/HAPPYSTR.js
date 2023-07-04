/*
Chef has a string S with him. Chef is happy if the string contains a contiguous substring of length strictly greater than 2 in which all its characters are vowels.

Determine whether Chef is happy or not.

Note that, in english alphabet, vowels are a, e, i, o, and u.
*/
console.time('HAPPYSTR');
let arr = '';

process.stdin.on('data',function(chunk){
    arr += chunk;
});

/*
First line will contain 
T, number of test cases. Then the test cases follow.
Each test case contains of a single line of input, a string S.
*/
function prepareProcessInput() { // creates a multidimensional array
    let T = 0;   
    arr = arr.split('\n');
    T = Number(arr.splice(0, 1)[0]); // test cases
    // create array of arrays
    for(let i = 0; i < T; i++){
        let S = arr.splice(0, 1)[0]; // the number
        // strings are array ECMA5
        console.log(T, S);
        //console.log(S.match(/[aeiou]{3,}/));
        if(S.match(/[aeiou]{3,}/)) {
            console.log('Happy');
        } else {
            console.log('Sad');
        }
    }
}

process.stdin.on('end',function(){
    prepareProcessInput();
});
console.timeEnd('HAPPYSTR');