const N = 150;
const coord_Q = [62,41];
// dirs are those directions possible to move from position
// hor_right, hor_left, vert_up, ver_down, diag_up_right, diag_down_rigth, diag_up_left, diag_down_left
let dirs = [false, false, false, false, false, false, false, false];

const zerosM = (m, n) => [...Array(m)].map(e => Array(n).fill(0));

const setQueenBoard = (coords, b) => {
    [x,y] = coords;
    console.log(coords);
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
                //console.log('!');
                b[j][i] = 1;
            }
            // left diag
            if((j-i) == diff && b[j][i] == 0){
                //console.log('*');
                b[j][i] = 1;
            }
        }
    }
    return b;
}

const countCellsOnes = (b) => {
    // contar los 1
    let ones = 0;
    matx.forEach(row => {
        let row_1s = row.filter(function(x) { return x == 1; });
        ones += row_1s.length;
    });
    return ones;
}

let matx = zerosM(N,N);
matx = setQueenBoard(coord_Q, matx);
matx = testPossDirs(coord_Q, matx);

console.log(matx, countCellsOnes(matx));

//console.log(matx[0][1]);
//console.log(matx[N][N]);