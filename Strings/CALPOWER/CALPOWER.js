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

function makePermutation(str) {
    let perms = [];
    let arrStr = str.split('');
    for(let i = 0; i < arrStr.length; i++){
        let iLett = arrStr[i];
        
        perms.push()
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

    for(let i = 0; i < Si.length; i++){
        let word = Si[i];
        let powStr = alphabetPosition(word).split(' '); // convert it to Array
        console.log(powStr);
        let j = 1;
        let totalPow = 0;
        powStr.forEach(element => {
            totalPow += element*j++;
        });
        console.log(totalPow);
    }
}

main();
console.timeEnd('CALPOWER');