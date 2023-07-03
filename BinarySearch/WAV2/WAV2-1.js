/**
 * Chef is stuck in the wavey world of polynomials. 
 * You are given all N roots of a polynomial P(x)=∏i=1N(x−ai). 
 * The roots are pairwise distinct integers, but they are not given in any particular order.
 * To help Chef escape, you should answer Q queries (numbered 1 through Q). 
 * For each valid i, in the i-th query, you are given an integer xi​ and you have to determine whether P(xi) is positive, negative or 0.
 * (x-a1)(x-a2)(x-a3)...(x-an) = 0
 */
console.time('WAV2-1');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);
let input ='';

/**
 * The first line of the input contains two space-separated integers N and Q.
 * The second line contains N space-separated integers a1,a2,…,aN​.
 * Q lines follow. For each valid i, the i-th of these lines contains a single integer xi​ describing the i-th query.
 */
function cacheInput(data) {
    input += data;
}

function prepareInput() {
    input = input.split('\n'); //.map(Number);
}

// const execQueries = (x, Poly) => {
//     // (x - a1)(x - a2) ... (x-aN)
//     let res = 1;
//     for(let i = 0; i < Poly.length; i++) {
//         res *= x - Poly[i];
//     }
//     return res;
// }
const execQueries = (x, Poly) => {
    let res = 1;
    if(typeof(Poly) == "object") {
        Poly.forEach(e => {
            res *= (x - e);
        });
    }
    return res;
}

function main() {
    prepareInput();
    let temp = input.splice(0, 1)[0]; // N, Q
    const [N, Q] = temp.split(' ').map(Number);

    temp = input.splice(0, 1)[0]; // Ais
    let Ais = [];
    if(typeof(temp) == "string") {
        Ais = temp.split(" ").map(Number);
    }

    for(let i = 0; i < Q; i++) {
        let x = Number(input.splice(0, 1)[0]); // xi
        let res = execQueries(x, Ais);
        if( res > 0) {
            console.log("POSITIVE");
        } else if( res < 0 ) {
            console.log("NEGATIVE");
        } else {
            console.log("0");
        }        
    }
    //console.log(N, Q, Ais, xs);
}

main();
console.timeEnd('WAV2-1');