/**
 * Chef likes strings a lot but he likes palindromic strings more. Today, Chef has two strings A and B, each consisting of lower case alphabets.
 * Chef is eager to know whether it is possible to choose some non empty strings s1 and s2 where s1 is a substring of A, s2 is a substring of B such that s1 + s2 is a palindromic string. 
 * Here '+' denotes the concatenation between the strings.
 */

console.time('STRPALIN');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);

let input ='';

function cacheInput(data) {
    input += data;
}
/*
* Will try to find an element of string A in string B, if so we have the chance to create a palindrome
*/

function prepareInput() {
    input = input.split('\n');//map(Number);
}

function main() { // creates a multidimensional array
    prepareInput();
    let T = 0;   
    T = Number(input.splice(0, 1)[0]); // test cases
    if(T > 0 && T < 11){
        let palin = false;
        // create array of arrays
        for(let i = 0; i < T; i++){
            let strA = input.splice(0, 1)[0];
            let strB = input.splice(0, 1)[0];
            for(let j = 0; j < strA.length; j++){
                if(strB.includes(strA[j])){
                    palin = true;
                    console.log('YES');
                    break;
                }
            }
            if(!palin){
                console.log('NO');
            }
            palin = false;
            console.log('-----');
        }
    }
}

main();
console.timeEnd('STRPALIN');