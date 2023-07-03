/**
 * Chef has started developing interest in playing chess, and was learning how the Queen moves.
 * Chef has an empty N×N chessboard. He places a Queen at (X,Y) and wonders - What are the number of cells that are under attack by the Queen?
 */
console.time('QUEENATTACK');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);
let input ='';
let N = 0;

// version no OO
/**
 * The top-left cell is (1,1), the top-right cell is (1,N), the bottom-left cell is (N,1) and the bottom-right cell is (N,N).
 * The Queen can be moved any number of unoccupied cells in a straight line vertically, horizontally, or diagonally.
 * The cell on which the Queen is present, is not said to be under attack by the Queen.
 * 
 * The first line contains a single integer T - the number of test cases.
 * Then the test cases follow.
 * The first and only line of each test case contains three integers N, X and Y, as described in the problem statement.
 */
function cacheInput(data) {
    input += data;
}

function prepareInput() {
    input = input.split('\n');//map(Number);
}

const zerosM = (m, n) => [...Array(m)].map(e => Array(n).fill(0));

const setQueenBoard = (coords, b) => {
    [x,y] = coords;
    //console.log(coords);
    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            if(i+1 == y && j+1 == x) {
                b[j][i] = 'Q';
            }
        }
    }
    return b;
}

const testPossDirs = (coords, b) => {
    [x,y] = coords;
    sum = x+y;
    diff = Math.abs(x-y);
    console.log(sum, diff);
    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            //console.log(j, i+1 == y, b[j][i] == 0, b[j][i]);
            //console.log(j, i, (j-i+2) == diff, b[j][i] == 0, b[j][i]);
            // vert
            if(i+1 == y && b[j][i] == 0) {
                b[j][i] = 1;
            }
            // hor
            if(j+1 == x && b[j][i] == 0) {
                b[j][i] = 1;
            }
            // right diag
            if((i+j+2) == sum && b[j][i] == 0){
                b[j][i] = 1;
            }
            // left diag
            if((j-i) == diff && b[j][i] == 0){
                b[j][i] = 1;
            }
        }
    }
    return b;
}

const countCellsOnes = (b) => {
    // contar los 1
    let ones = 0;
    b.forEach(row => {
        let row_1s = row.filter(function(x) { return x == 1; });
        ones += row_1s.length;
    });
    return ones;
}

function main() {
    prepareInput();
    let T = input.splice(0, 1)[0]; // test cases
    //number = 0;
    for(let i = 0; i < T; i++){
        let X = 0, Y = 0; // queen coords
        [N, X, Y] = (input.splice(0, 1)[0]).split(' ').map(Number);
        let board = zerosM(N,N);
        board = setQueenBoard([X,Y], board); // since JS does not have matrix object but array of arrays
        board = testPossDirs([X,Y], board);
        //console.log(N, X, Y, board, countCellsOnes(board));
        console.log(N, X, Y, countCellsOnes(board));
    }
}

main();
console.timeEnd('QUEENATTACK');