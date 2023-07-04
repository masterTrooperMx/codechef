/*
Given a positive integer N, MoEngage wants you to determine if it is possible to rearrange the digits of N (in decimal representation) and obtain a multiple of 5.

For example, when N=108, we can rearrange its digits to construct 
180=36⋅5 which is a multiple of 5.

https://stackoverflow.com/questions/9960908/permutations-in-javascript
*/
console.time('DIGARR');
let arr = '';

process.stdin.on('data',function(chunk){
    arr += chunk;
});

/*
The first line contains an integer T, the number of test cases. The description of the T test cases follow.
Each test case consists of two lines
The first line contains a single integer D, the number of digits in N.
The second line consists of a string of length D, the number N (in decimal representation). 
It is guaranteed that the string does not contain leading zeroes and consists only of the characters 0,1,…9.
*/
const scrambleNums = (inputArr) => {
    let result = [];
  
    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next))
       }
     }
   }
  
   permute(inputArr)
  
   return result;
}

const testNumsMult = (inputArr, num) => {
    // multidimensional array
    let nA = inputArr.length;
    let s = '';
    let Y = false;
    for(let i = 0; i < nA; i++) {
        s = inputArr[i].join('');
        if( Number(s)%num == 0 ){
            Y = true;
        }
    }
    (Y) ? console.log('Yes') : console.log('No');
}

function prepareProcessInput() { // creates a multidimensional array
    let T = 0;   
    arr = arr.split('\n');
    T = Number(arr.splice(0, 1)[0]); // test cases
    // create array of arrays
    for(let i = 0; i < T; i++){
        let D = Number(arr.splice(0, 1)[0]); // number of digits
        let N = arr.splice(0, 1)[0]; // the number
        // strings are array ECMA5
        console.log(D, N);
        if(N.length == D) {
            if( Number(N)%5 == 0 ){
                console.log('Yes');
            } else {
                //console.log(scrambleNums(N.split('')));
                testNumsMult(scrambleNums(N.split('')), 5);
            }
        }
    }
}

process.stdin.on('end',function(){
    prepareProcessInput();
});
console.timeEnd('DIGARR');