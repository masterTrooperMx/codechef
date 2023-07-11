/**
 * Hay 100 casas ubicadas en línea recta. La primera casa tiene el número 1 y la última tiene el número 100. 
 * Algunas M casas de estas 100 están ocupadas por policías.
 * El ladrón Devu acaba de robar el bolso de PeePee y está buscando una casa para esconderse.
 * PeePee usa Internet 4G rápido y envía el mensaje a todos los policías de que un ladrón llamado Devu acaba de robar su bolso y se metió en una casa.
 * Devu sabe que los policías corren a una velocidad máxima de x casas por minuto en línea recta y buscarán durante un máximo de y minutos. 
 * Devu quiere saber cuántas casas son seguras para escapar de la policía. 
 * Ayúdelo a obtener esta información.
 */
console.time('COPS'); // a la primera!
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);
let input ='';
const inf = 1, sup = 100;
let theRange = [];

function cacheInput(data) {
    input += data;
}
/**
 * x*y = casas visitar
 * M = [M1, M2, ..., Mk]
 * para cada Mi calcular su dominio en la recta
 * un rango es un arreglo con [inicio, final], son cerrados y pueden haber muchos siempre y cuando sean discontinuos, si son continuos se hace merge y sale uno unico
 */
function prepareInput() {
    input = input.split('\n');//map(Number);
}

function range(start, end) {
    if(start === end) return [start];
    return [start, ...range(start + 1, end)];
}

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
Number.prototype.between = function(a, b, inclusive) {
    var min = Math.min.apply(Math, [a, b]),
      max = Math.max.apply(Math, [a, b]);
    return inclusive ? this >= min && this <= max : this > min && this < max;
  };

  function inRange(r1, r2){ // r1 is theRange, r2 any range
    let A = r1;
    let [a0, a1] = [A[0], A[1]], [b0, b1] = r2;
    if(A == []){ // handle null values
        a0 = b0, a1 = b1;   
    }
    if(typeof(a0) == "number" && typeof(a1) == "number"){
        if(a0.between(b0,b1,true) || a1.between(b0,b1,true) || b0.between(a0,a1,true) || b1.between(a0,a1,true)){
            console.log('in', a0, a1, b0, b1);
            return true;
        } else {
            console.log('out');
            return false;
        }
    } else { console.log(typeof(a0), typeof(a1)); }
}

function main() {
    prepareInput();
    let T = input.splice(0, 1)[0]; // test cases
    for(let i = 0; i < T; i++){
        let tmp = input.splice(0, 1)[0];
        if(typeof(tmp) == "string"){
            tmp = tmp.split(' ').map(Number);
        }
        let [M, x, y] = tmp;
        // houses
        let Ms = (input.splice(0, 1)[0]).split(' ').map(Number).sort(function(a,b){ return a-b; });
        const h = x*y;
        let L_i = 1, L_s = 0;
       for(let j = 0; j < M; j++) {
            let hi = Ms[j];
            let left = Number(hi - h), right = Number(hi + h);
            // standarizing range
            if(left < inf){
                left = inf;
            }
            if(right > sup){
                right = sup;
            }
            // merging range
            if(theRange.length == []){ // new range
                theRange.push([left, right]);
            } else { // no new range
                let rIn = false;
                for(let k = 0; k < theRange.length; k++){ // find in all the ranges one that fits
                    if(inRange(theRange[k], [left, right])){ // is one inside the other? single range
                        theRange.splice(k, 1, [ Math.min(theRange[k][0], left), Math.max(theRange[k][1], right) ]);
                        rIn = true;
                    }
                }
                if(!rIn) {
                    theRange.push([left, right]);
                }
            }
            console.log(hi, h, [left, right], theRange);
        }
        // clean range with resulted ranges and see what is left
        let houses = range(1, 100);
        for(let l = 0; l < theRange.length; l++){
            let [a, b] = theRange[l];
            for(let m = 0; m < b-a+1; m++){
                let idx = houses.indexOf(a+m);
                houses.splice(idx, 1);
            }
        }
        console.log(theRange, houses, houses.length);
        console.log('------');
        theRange = [];
    }
}

main();
console.timeEnd('COPS');