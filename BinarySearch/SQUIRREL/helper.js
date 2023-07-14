const T = [ 5, 1, 2 ];
const P = [ 1, 2, 1 ];
let nueces = [];

function parseArrays() {
    function fillSpaces(start, step) { // array cell to start, step of fill
        for(let i = start; i < k; i += step){
            if(nueces[i] > 0){
                nueces[i] += 1;
            } else {
                nueces[i] = 1;
            }
        }
    }
    let k = 5;
    let h = 0, l = 0;
    for(let j = 0; j < k; j++){
        h = T.indexOf(j+1); // idx
        l = P[h]; // val of idx
        fillSpaces(h, l);
    }
}

parseArrays();
console.log(`${nueces}`);