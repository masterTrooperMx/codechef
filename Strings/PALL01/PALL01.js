/*
The citizens of Byteland regularly play a game. 
They have blocks each denoting some integer from 0 to 9. 
These are arranged together in a random manner without seeing to form different numbers keeping in mind that the first block is never a 0. 
Once they form a number they read in the reverse order to check if the number and its reverse is the same. 
If both are same then the player wins. We call such numbers palindrome.

Ash happens to see this game and wants to simulate the same in the computer. 
As the first step he wants to take an input from the user and check if the number is a palindrome and declare if the user wins or not.
*/
console.time('PALL01');
let arr = '';

process.stdin.on('data',function(chunk){
    arr += chunk;
});

/*
The first line of the input contains T, the number of test cases. This is followed by T lines containing an integer N.
*/
function reverseString(s) {
    let r = '';
    for(let i = s.length-1; i >= 0; i--){
        r += s[i];
    }
    return r;
}

function prepareProcessInput() { // creates a multidimensional array
    let T = 0;   
    arr = arr.split('\n');
    T = Number(arr.splice(0, 1)[0]); // test cases
    // create array of arrays
    for(let i = 0; i < T; i++){
        let N = String(arr.splice(0, 1)[0]); // number
        let R = reverseString(N);
        // strings are array ECMA5
        console.log(N, R);
        // check palyndrome
        if( N === R ) {
            console.log('wins');
        } else {
            console.log('loses');
        }
    }
}

process.stdin.on('end',function(){
    prepareProcessInput();
});
console.timeEnd('PALL01');