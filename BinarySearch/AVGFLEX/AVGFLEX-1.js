/**
 * There are N students in a class, where the i-th student has a score of Ai.
 * The i-th student will boast if and only if the number of students scoring less than or equal Ai​ is greater than the number of students scoring greater than Ai.
 * Find the number of students who will boast.
 */
console.time('AVGFLEX-1');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);
let input ='';

/**
 * The first line contains T - the number of test cases. Then the test cases follow.
 * The first line of each test case contains a single integer N - the number of students.
 * The second line of each test case contains N integers A1,A2,…,AN​ - the scores of the students.
 */
function cacheInput(data) {
    input += data;
}

function prepareInput() {
    input = input.split('\n'); //.map(Number);
}

function getAvg(arr) {
    const counts = {};
    arr.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

    let avgArr = [];
    let sum = 0;
    Object.values(counts).forEach((v) => { avgArr.push(v) });
    avgArr.forEach((num) => { sum += num });
    return sum / avgArr.length;
}
function main() {
    prepareInput();
    let T = Number(input.splice(0, 1)[0]); // test cases
    for(let i = 0; i < T; i++) {
        let N = Number(input.splice(0, 1)[0]); // number of students
        let A = input.splice(0, 1)[0]; // scores
        A = A.split(' ').map(Number).sort(function(a,b){ return a-b; });
        if(N == A.length){
            let avgflex = getAvg(A);
            let boast = A.filter(e => e > avgflex).length;
            console.log(A, avgflex, boast);
        }

        //console.log(T, N, A);
    }
}

main();
console.timeEnd('AVGFLEX-1');