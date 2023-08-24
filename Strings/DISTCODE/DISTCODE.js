/**
 * Sergey recently learned about country codes - two letter strings, denoting countries. 
 * For example, BY stands for Belarus and IN stands for India. 
 * Mesmerized by this new discovery, Sergey now looks for country codes everywhere!
 * 
 * Sergey has recently found a string S consisting of uppercase Latin letters. 
 * He wants to find the number of different country codes that appear in S as contiguous substrings. 
 * For the purpose of this problem, consider that every 2-letter uppercase string is a valid country code.
 */

console.time('DISTCODE');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);

let input ='';
let codes = [];

function cacheInput(data) {
    input += data;
}

/*
* Brut force attemp
*/
function prepareInput() {
    input = input.split('\n');//map(Number);
}

function main() { // creates a multidimensional array
    prepareInput();
    let T = 0;   
    T = Number(input.splice(0, 1)[0]); // test cases
    if(T > 0 && T < 101){
        // create array of arrays
        for(let i = 0; i < T; i++){
            //codes.push(input.splice(0, 1)[0]); // codes string
            let strC = input.splice(0, 1)[0];
            console.log(strC);
            for(let j = 0; j < strC.length-1; j++){
                codes.push(strC[j]+strC[j+1]);
            }
            console.log(codes);
            console.log([... new Set(codes)]);
            console.log([... new Set(codes)].length);
            codes = [];
        }
    }
}

main();
console.timeEnd('DISTCODE');