/**
 * Chef is stuck in the wavey world of polynomials. 
 * You are given all N roots of a polynomial P(x)=∏i=1N(x−ai). 
 * The roots are pairwise distinct integers, but they are not given in any particular order.
 * To help Chef escape, you should answer Q queries (numbered 1 through Q). 
 * For each valid i, in the i-th query, you are given an integer xi​ and you have to determine whether P(xi) is positive, negative or 0.
 * (x-a1)(x-a2)(x-a3)...(x-an) = 0
 */
console.time('WAV2-2');
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
        let prod = 1;
        Ais.map( a => { prod *= (x - a) } );
        if(prod > 0){
            console.log("POSITIVE");
        } else if(prod < 0){
            console.log("NEGATIVE");
        } else {
            console.log("0");
        }
        //console.log(N, Q, Ais, x, prod);
    }
}

main();
console.timeEnd('WAV2-2');