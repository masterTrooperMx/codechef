/*
Mario was going to gift Princess Peach a string S of even length N.

Mario was clumsy and thus, broke the string in the middle. He now has two strings A and B such that A=S[1, N/2] and B=S[ N/2 +1,N].

Mario is not sure about the order in which he should join the strings A and B to get the string S. 
Thus, he joins the strings in any random order. 
Find whether it is guaranteed that Mario will get the same string S if he joins the strings A and B in any order.

Note that S[L,R] denotes a substring of string S starting at index L and having a length (R−L+1).
*/
console.time('BROKENSTRING');
let arr = '';

process.stdin.on('data',function(chunk){
    arr += chunk;
});

/*
The first line of input will contain a single integer T, denoting the number of test cases.
Each test case consists of two lines of input:
The first line of each test case contains N - the length of the initial string S.
The second line contains the string S.
*/
function prepareProcessInput() { // creates a multidimensional array
    let T = 0;   
    arr = arr.split('\n');
    T = Number(arr.splice(0, 1)[0]); // test cases
    // create array of arrays
    for(let i = 0; i < T; i++){
        let N = arr.splice(0, 1)[0]; // length of string
        let S = arr.splice(0, 1)[0]; // guest
        let A = S.slice(0, N/2);
        let B = S.slice(-N/2);
        // strings are array ECMA5
        console.log(N, S, A, B);
        // check AB == BA
        if( S === A+B && S === B+A ) {
            console.log('YES');
        } else {
            console.log('NO');
        }
    }
}

process.stdin.on('end',function(){
    prepareProcessInput();
});
console.timeEnd('BROKENSTRING');