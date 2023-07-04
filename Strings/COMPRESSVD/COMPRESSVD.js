/*
Chef recorded a video explaining his favorite recipe. However, the size of the video is too large to upload on the internet. 
He wants to compress the video so that it has the minimum size possible.

Chef's video has N frames initially. The value of the i th  frame is A i . Chef can do the following type of operation any number of times:

Choose an index (1≤i≤N) such that the value of the i th  frame is equal to the value of either of its neighbors and remove the ith  frame.
Find the minimum number of frames Chef can achieve.
*/
console.time('COMPRESSVD');
let arr = '';

process.stdin.on('data',function(chunk){
    arr += chunk;
});

/*
First line will contain T, the number of test cases. Then the test cases follow.
The first line of each test case contains a single integer N - the number of frames initially.
The second line contains N space-separated integers, A1 ,A2 ,…,AN  - the values of the frames.
*/
function checkDups(s){
    let ds = [];
    let n = s.length;
    for(let i = 0; i < n; i++){
        if(i < n-1){
            if(s[i] != s[i+1]){
                ds.push(s[i]);
            }
        } else {
            ds.push(s[i]);
        }
    }
    //console.log(ds);
    return(ds.length);
}

function prepareProcessInput() { // creates a multidimensional array
    let T = 0;   
    arr = arr.split('\n');
    T = Number(arr.splice(0, 1)[0]); // test cases
    // create array of arrays
    for(let i = 0; i < T; i++){
        let N = Number(arr.splice(0, 1)[0]); // number of frames
        let A = (arr.splice(0, 1)[0]).split(' '); // frames values
        // strings are array ECMA5
        console.log(N, A);
        if(A.length == N) {
            console.log(checkDups(A));
        }
    }
}

process.stdin.on('end',function(){
    prepareProcessInput();
});
console.timeEnd('COMPRESSVD');