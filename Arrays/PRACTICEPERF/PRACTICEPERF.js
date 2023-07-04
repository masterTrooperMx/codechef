/*
Most programmers will tell you that one of the ways to improve your performance in competitive programming is to practice a lot of problems.
Our Chef took the above advice very seriously and decided to set a target for himself.
Chef decides to solve at least 10 problems every week for 4 weeks.
Given the number of problems he actually solved in each week over 4 weeks as 

P1, P2, P3, and P4
​
output the number of weeks in which Chef met his target.
*/
let input = '';
function cacheInput(data) {
    input += data; 
}

function prepareInput() {
    input = input.split(/\s+/).map(Number);
}

function main() {
    let w = 0;
    prepareInput();
    T = input.length;
    //console.table(input);
    for(let i = 0; i < T; i++) {
        p = input.splice(0, 1)[0];
        //console.log(p);
        if( p >= 10 ) {
            //console.log(p);
            w++;
        }
    }
    console.log(w);
}
/*
There is a single line of input, with 4 integers 
P1 ,P2 ,P3, and P4. These are the number of problems solved by Chef in each of the 4 weeks.
*/
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', cacheInput).on('end', main);