/*
Chef has an array A of length N.

In one operation, Chef can choose any two distinct indices, i,j (1≤i,j≤N,i≠j) and either change 
Ai  to Aj  or change Aj  to Ai.

Find the minimum number of operations required to make all the elements of the array equal.
*/
let arr = '';
let arrDim = [];
let T = 0;

process.stdin.on('data',function(chunk){
    arr += chunk;
});

/*
First line will contain T, number of test cases. Then the test cases follow.
First line of each test case consists of an integer N - denoting the size of array A.
Second line of each test case consists of N space-separated integers A1 ,A2 ,…,AN  - denoting the array A.
*/
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set
// function unique values of array
function uniqueVals(arr) { // 0 all diff, length-1 all the same
    //a SET is a collection with unique values
    unique_nums = [...new Set(arr)];
    return unique_nums.length;
}

function processTestCases() {
    for(let i = 0; i < T; i++){
        let tmp = arr[i];
        let l = tmp.length;
        console.log('-', tmp);
        let equals = uniqueVals(tmp);
        console.log('--', equals);
        // number of each one
        if( equals == 1) {
            // nothing to do all are equal, its done
            console.log(0);
        } else {
            // check uniques vs length
            if(equals == l) { // all are different, pick any
                console.log(l - 1);    
            } else {
                console.log(l - equals);
            }
        }
    }
}

function prepareInput() { // creates a multidimensional array
    let out = [];
    arr = arr.split('\n');
    //console.log(arr);
    T = Number(arr.splice(0, 1)[0]);
    // create array of arrays
    for(let i = 0; i < T; i++){
        let n = Number(arr.splice(0, 1)[0]);
        arrDim.push(n);
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
    //console.log('arr',arr, T, arrDim);
    processTestCases();
});