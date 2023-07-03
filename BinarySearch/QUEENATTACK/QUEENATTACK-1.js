console.time('QUEENATTACK-1');
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

const testPossDirs = (coords) => {
    let board = zerosM(N,N);
    let [x,y] = coords;
    let sum = x+y;
    let diff = Math.abs(x-y);
    let positions = 0;
    // fill 2d Array and count 1s on same cycle
    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            if(i+1 == y && j+1 == x) {
                board[j][i] = 'Q';
            }
            // vert
            if(i+1 == y && board[j][i] == 0) {
                //b[j][i] = 1;
                positions++;
            }
            // hor
            if(j+1 == x && board[j][i] == 0) {
                //b[j][i] = 1;
                positions++;
            }
            // right diag
            if((i+j+2) == sum && board[j][i] == 0){
                //b[j][i] = 1;
                positions++;
            }
            // left diag
            if((j-i) == diff && board[j][i] == 0){
                //b[j][i] = 1;
                positions++;
            }
        }
    }
    return positions;
}

function main() {
    prepareInput();
    let T = input.splice(0, 1)[0]; // test cases
    for(let i = 0; i < T; i++){
        let X = 0, Y = 0; // queen coords
        [N, X, Y] = (input.splice(0, 1)[0]).split(' ').map(Number);

        console.log(testPossDirs([X,Y])); // count positions
    }
}

main();
console.timeEnd('QUEENATTACK-1');