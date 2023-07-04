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
// function get mode number
const mode = a => 
  Object.values(
    a.reduce((count, e) => {
      if (!(e in count)) {
        count[e] = [0, e];
      }
      
      count[e][0]++;
      return count;
    }, {})
  ).reduce((a, v) => v[0] < a[0] ? a : v, [0, null])[1];
;

const l_num = (a, n) => (a.filter( function(x) { return x == n; }).length);

function processTestCases() {
    for(let i = 0; i < T; i++){
        let tmp = arr[i];
        console.log('-', tmp);
        let n = mode(tmp);
        let l = l_num(tmp, n);
        console.log('--', n, l)
        console.log( tmp.length - l);
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