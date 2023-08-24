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
* Brut force, take too long, solution was discarded by time in codechef
*/
function prepareInput() {
    input = input.split('\n');//map(Number);
}

function extractLetterWord(pos, word) {
    // position according to array position
    let letter = word.charAt(pos);
    let nword = word.substring(0,pos) + word.substring(pos+1);
    return [letter, nword];
}

function insertLetterWord(letter, pos, word) {
    // position according to array position
    if(pos == 0) {
        return letter + word;
    } else {
        return word.substring(0,pos) + letter + word.substring(pos);
    }
}
// generator
function *permute(a, n = a.length) {
    if (n <= 1) yield a.slice();
    else for (let i = 0; i < n; i++) {
      yield *permute(a, n - 1);
      const j = n % 2 ? 0 : i;
      [a[n-1], a[j]] = [a[j], a[n-1]];
    }
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
    }
    console.log(T, Si);

    let maxPow = 0;
    let maxStr = "";
    for(let i = 0; i < Si.length; i++){
        let word = Si[i];
        // split letter and word
        for(let j = 0; j < word.length; j++){ // move letter
            let [l, w] = extractLetterWord(j, word);
            console.log(l, w);
            // do the permutation
            for(let m = 0; m < w.length+1; m++){
                let nw = insertLetterWord(l, m, w); // insert letter
                console.log(`-${m}, ${nw}`);
                let powStr = alphabetPosition(nw).split(' '); // convert it to Array
                console.log(powStr);
                let k = 1;
                let totalPow = 0;
                powStr.forEach(element => {
                    //console.log(k);
                    totalPow += Number(element)*k++;
                });
                k = 1;
                // compare value to get max
                if(totalPow > maxPow){
                    maxPow = totalPow;
                    maxStr = nw;
                }
                console.log(totalPow);
            }    
        }
    }
    console.log(`maxPow ${maxPow}, maxStr ${maxStr}`);
}

main();
console.timeEnd('CALPOWER');