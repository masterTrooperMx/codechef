/**
 * 
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
The first line of input will contain a single integer T, denoting the number of test cases.
Each test case consists of two lines of input:
The first line of each test case contains N - the length of the initial string S.
The second line contains the string S.
*/
function prepareInput() {
    input = input.split('\n');//map(Number);
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
        console.log(T, Si);

        let maxPow = 0;
        let maxStr = "";
        for(let i = 0; i < Si.length; i++){
            let word = Si[i];
            let perms = Array
                .from(permute(word.split('')))
                .map(perm => perm.join(''))
                .filter((el, idx, self) => (self.indexOf(el) === idx));
            console.log(perms);
            for(let j = 0; j < perms.length; j++){
                let nw = perms[j];
                let powStr = alphabetPosition(nw).split(' '); // convert it to Array
                let k = 1;
                let totalPow = 0;
                powStr.forEach(element => {
                    //console.log(k);
                    totalPow += Number(element)*k++;
                });
                if(totalPow > maxPow){
                    maxPow = totalPow;
                    maxStr = nw;
                }
                console.log(totalPow);
            } 
        }
        console.log(`maxPow ${maxPow}, maxStr ${maxStr}`);
    }
}

main();
console.timeEnd('CALPOWER');