/*
Vasya likes the number 239. Therefore, he considers a number pretty if its last digit is 
2, 
3 or 
9.

Vasya wants to watch the numbers between L and R (both inclusive), so he asked you to determine how many pretty numbers are in this range. Can you help him?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/
let arr = '';
let T = 0;
let L = 0, R = 0;

process.stdin.on('data',function(chunk){
    arr += chunk;
});

/*
The first line of the input contains a single integer T denoting the number of test cases. The description of T test cases follows.
The first and only line of each test case contains two space-separated integers L and R.
*/
// create array like object with length
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

function searchMagicNums() {
    magicN = ['2','3','9'];
    cMagig = 0;
    for(let i = 0; i < T; i++){
        //console.log(arr[i]);
        [L, R] = arr[i]; //destructuring array
        let tmp = range(L, R, 1).map(String);
        tmp.forEach(num => {
            let dig = num.slice(-1);
            if( magicN.indexOf(dig) > -1 ) {
               cMagig++;
               //console.log(num); 
            }
        });
        console.log(cMagig);
        cMagig = 0;
    }
}

function prepareInput() {
    let out = [];
    arr = arr.split('\n');
    //console.log(arr);
    T = Number(arr.splice(0, 1)[0]);
    // create array of arrays
    for(let i = 0; i < T; i++){
        //let n = Number(arr.splice(0, 1)[0]);
        let tmp = (arr.splice(0, 1)[0]).split(' ').map(Number);
        //console.log(tmp);
        if(tmp != []){
            out.push(tmp);
        }
    }
    arr = out;
}

process.stdin.on('end',function(){
    //console.log(arr);
    prepareInput();
    //console.log('arr',arr, T);
    searchMagicNums();
});