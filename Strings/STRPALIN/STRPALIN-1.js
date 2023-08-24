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
* Brut force attemp
*/
function isPalin(A) {
    let nA = A.split('').reverse().join('');
    if(A == nA){
        return true;
    } else {
        return false;
    }
}
function allSubsStr(str) {
    let res = [];
    function subStrings(sIdx, eIdx){
        if(eIdx == str.length){
            return;
        }
        if(sIdx > eIdx){
            subStrings(0, eIdx+1);
        } else {
            res.push(str.slice(sIdx, eIdx+1));
            subStrings(sIdx+1, eIdx);
        }
    }
    subStrings(0,0);
    return [... new Set(res)]; // unique values
}


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
            let arrA = allSubsStr(strA);
            let arrB = allSubsStr(strB);
            console.log(strA, strB, '...', arrA, arrB);
            for(let j = 0; j < arrA.length; j++){
                for(let k = 0; k < arrB.length; k++){
                    let word = arrA[j] + arrB[k];
                    palin = isPalin(word);
                    if(palin) {
                        console.log('YES');
                        break;
                    }
                    console.log(j, k, word, isPalin(word));
                    //console.log(subA, subB);
                }
                if(palin) {
                    break;
                }
            }
            console.log('-----');
            if(!palin) {
                console.log('NO');
            }
        }
    }
}

main();
console.timeEnd('STRPALIN');