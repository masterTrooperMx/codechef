/**
 * Each of Sardar Singh's men has a name consisting of lowercase English alphabets. 
 * The power of a man is defined to be the maximum power over all possible rearrangements of this string.
 * Find the power of each of Sardar Singh's men.
 */

console.time('CALPOWER');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);

let input ='';
let Si = [];

function cacheInput(data) {
    input += data;
}
/*
* By ordering the letters of words we have the higher num. Can be simpler but passed OK
*/
function prepareInput() {
    input = input.split('\n');//map(Number);
}

function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  
    return result.slice(0, result.length - 1);
}

function main() { // creates a multidimensional array
    prepareInput();
    let T = 0;   
    T = Number(input.splice(0, 1)[0]); // test cases
    if(T > 0 && T < 61){
        // create array of arrays
        for(let i = 0; i < T; i++){
            Si.push(input.splice(0, 1)[0]); // Si string
        }
        console.log(T, Si);
        let totalPow = 0;
        for(let i = 0; i < Si.length; i++){
            let word = Si[i];
            // set words in alphabetic order
            let arr = word.split('').sort();
            word = arr.join('');
            console.log(word);
            let powStr = alphabetPosition(word).split(' '); // convert it to Array
            let k = 1;
            powStr.forEach(element => {
                totalPow += Number(element)*k++;
            });
            console.log(totalPow);
            totalPow = 0;
        }
        
    }
}

main();
console.timeEnd('CALPOWER');