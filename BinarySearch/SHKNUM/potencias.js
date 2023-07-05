let potencias = [];
const max = 31;

for(let i = 0; i < max; i++){
    for(let j = 1; j < max;  j++){
        if(j != i){
            //console.log(i, j, Math.pow(2,i) + Math.pow(2,j));
            potencias.push(Math.pow(2,i) + Math.pow(2,j));
        }
    }
}
potencias = potencias.sort(function(a,b){return a-b}); // asc order
potencias = [... new Set(potencias)]; // unique vals

console.log(potencias, potencias.length);

function buscaPotencias(num){
    let res = [];
    let i = 0;
    //for(let i = 0; i < potencias.length; i++){
    //    if(potencias[i] >= num) {
    //        res.push(potencias[i],potencias[i-1]);
    //        break;
    //    }
    //}
    while(i++ < potencias.length){
        if(potencias[i] >= num){
            res.push(potencias[i],potencias[i-1]);
            break;
        }
    }
    return res;
}

const x = 123;
const [up, down] = buscaPotencias(x);
console.log(x, Math.min(up - x, x - down));