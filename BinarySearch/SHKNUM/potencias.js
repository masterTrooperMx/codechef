let potencias = [];
const max = 9;

for(let i = 0; i < max; i++){
    for(let j = 1; j < max;  j++){
        if(j != i && j > i){
            //console.log(i,j);
            potencias.push(Math.pow(2,i) + Math.pow(2,j));
        }
    }
}
potencias = potencias.sort(function(a,b){return a-b});

console.log(potencias, potencias.length);

function buscaPotencias(num){
    let res = [];
    for(let i = 0; i < potencias.length; i++){
        if(potencias[i] >= num) {
            res.push(potencias[i],potencias[i-1]);
            break;
        }
    }
    return res;
}

console.log(4, buscaPotencias(4));