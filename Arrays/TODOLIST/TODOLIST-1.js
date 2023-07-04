/*
CodeChef recently revamped its practice page to make it easier for users to identify the next problems they should solve by introducing some new features:

Recent Contest Problems - contains only problems from the last 2 contests
Separate Un-Attempted, Attempted, and All tabs
Problem Difficulty Rating - the Recommended dropdown menu has various difficulty ranges so that you can attempt the problems most suited to your experience
Popular Topics and Tags
Like most users, Chef didn’t know that he could add problems to a personal to-do list by clicking on the magic '+' symbol on the top-right of each problem page. 
But once he found out about it, he went crazy and added loads of problems to his to-do list without looking at their difficulty rating.

Chef is a beginner and should ideally try and solve only problems with difficulty rating strictly less than 1000. 
Given a list of difficulty ratings for problems in the Chef’s to-do list, please help him identify how many of those problems Chef should remove from his to-do list, 
so that he is only left with problems of difficulty rating less than 1000.
*/
let input = '';
function cacheInput(data) {
    input += data; 
}

function prepareInput() {
    input = input.split(/\s+/).map(Number);
}

function processSlice(L, A) {
    //console.log(L, A);
    const lim = A.filter((x) => { return x >= 1000 }); //A.map(function(x) { return x>=1000 ? 1 : 0}); // tambien con filter
    console.log(lim.length); // los que cumplen la condicion
}

function main() {
    prepareInput();
    const T = input.splice(0, 1)[0];
    //console.table(input);
    for(let i = 0; i < T; i++) {
        const l = input.splice(0, 1)[0];
        const a = input.splice(0, l);
        //console.log(l, a);
        processSlice(l, a);
    }
    //console.log(T);
}
/*
The first line of input will contain a single integer T, the number of test cases. Then the testcases follow.
Each testcase consists of 2 lines of input.
The first line of input of each test case contains a single integer, 
N, which is the total number of problems that the Chef has added to his to-do list.
The second line of input of each test case contains 
N space-separated integers D1 ,D2 ,…,DN , which are the difficulty ratings for each problem in the to-do list.
 */
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', cacheInput).on('end', main);