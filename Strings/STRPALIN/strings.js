let strA = 'Miracomova';
let strB = 'ritmo';

for(let i = 0; i < strA.length; i++){
    for(let j = 0; j < strB.length; j++){
        console.log(i,j);
        console.log(strA.substring(0,i+1), strB.substring(j));
    }
}

str = strA;
res = [];
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
console.log(res.sort());
res = [... new Set(res)].sort();
console.log('res', res);

function allSubsStr(str) {
    let result = [];
  
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
}
res1 = [];
res1 = [... new Set(allSubsStr(str))].sort();
console.log('res1', res1);
console.log(res.length, res1.length);
console.log(res.sort() === res1.sort());