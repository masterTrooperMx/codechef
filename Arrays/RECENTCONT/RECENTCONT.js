/*
CodeChef recently revamped its practice page to make it easier for users to identify the next problems they should solve by introducing some new features:

Recent Contest Problems - Contains only problems from the last 2 contests
Separate Un-Attempted, Attempted, and All tabs
Problem Difficulty Rating - The Recommended dropdown menu has various difficulty ranges so that you can attempt the problems most suited to your experience
Popular Topics and Tags

Chef has been participating regularly in rated contests but missed the last two contests due to his college exams. 
He now wants to solve them and so he visits the practice page to view these problems.

Given a list of N contest codes, where each contest code is either START38 or LTIME108, help Chef count how many problems were featured in each of the contests.
*/
let arr = '';
let N = 0;
let aContest = [];
process.stdin.on('data',function(chunk){
    arr += chunk;
});

/*
First line will contain T, number of test cases. Then the test cases follow.
Each test case contains of two lines of input.
First line of input contains the total count of problems that appeared in the two recent contests - N.
Second line of input contains the list of N contest codes. Each code is either START38 or LTIME108, to which each problem belongs.
*/
function prepareInput() {
    let out = [];
    arr = arr.split('\n');
    //console.log(arr);
    N = Number(arr.splice(0, 1)[0]);
    // create array of arrays
    for(let i = 0; i < N; i++){
        let n = Number(arr.splice(0, 1)[0]);
        let tmp = (arr.splice(0, 1)[0]).split(' ');
        //console.log(tmp);
        if(tmp != []){
            out.push(tmp);
            aContest.push(n);
        }
    }
    arr = out;
}

function calcContests() { // cccode = 'START38' o 'LTIME108'
    let cStart38 = 0, cLtime108 = 0;
    for(let i = 0; i < N; i++){
        let n = aContest[i];
        let tmp = arr[i];
        for(let j = 0; j < n; j++){
            // con fors
            if(tmp[j] == 'START38'){
                cStart38++;
            }
            if(tmp[j] == 'LTIME108'){
                cLtime108++;
            }
            // con maps sin fors
        }
        console.log(cStart38, cLtime108);
        cStart38 = 0; cLtime108 = 0;
    }
}

process.stdin.on('end',function(){
    //console.log(arr);
    prepareInput();
    console.log('arr',arr, aContest, N);
    calcContests();
});