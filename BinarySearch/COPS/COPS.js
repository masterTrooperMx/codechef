/**
 * Hay 100 casas ubicadas en línea recta. La primera casa tiene el número 1 y la última tiene el número 100. 
 * Algunas M casas de estas 100 están ocupadas por policías.
 * El ladrón Devu acaba de robar el bolso de PeePee y está buscando una casa para esconderse.
 * PeePee usa Internet 4G rápido y envía el mensaje a todos los policías de que un ladrón llamado Devu acaba de robar su bolso y se metió en una casa.
 * Devu sabe que los policías corren a una velocidad máxima de x casas por minuto en línea recta y buscarán durante un máximo de y minutos. 
 * Devu quiere saber cuántas casas son seguras para escapar de la policía. 
 * Ayúdelo a obtener esta información.
 */
console.time('COPS');
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', cacheInput).on('end', main);
let input ='';
let inf = 1, sup = 100;

function cacheInput(data) {
    input += data;
}
/**
 * x*y = casas visitar
 * M = [M1, M2, ..., Mk]
 * para cada Mi calcular su dominio en la recta
 */

let x = 7, y = 8;
let dist = x*y;
const M = [12, 52, 56, 8];

M = M.sort(function(a,b){ return a-b; }); // orden numerico

console.log(dist, M);

const getDist = (h, d) => {
    // h place, d distance
    let rigth = 0, left = 0;
    
}
function prepareInput() {
    input = input.split('\n');//map(Number);
}

function range(start, end) {
    if(start === end) return [start];
    return [start, ...range(start + 1, end)];
}

function main() {
    prepareInput();
    let T = input.splice(0, 1)[0]; // test cases
    for(let i = 0; i < T; i++){
        let [M, x, y] = (input.splice(0, 1)[0]).split(' ').map(Number);
        M = (input.splice(0, 1)[0]).split(' ').map(Number).sort(function(a,b){ return a-b; });
        // houses
        let h = x*y;
        let L_i = 1, L_s = 0;
        M.forEach(house => {
            let d_lef = 0, d_rig = 0, d_h_1 = house - inf, d_h_100 = sup - house;
            let i = 0, s = 0;
            d_lef = house - h;
            d_rig = house + h;
            i = (d_h_1 >= 0 && d_lef < 0) ? 1: Math.max(d_lef-1, inf);
            s = (d_h_100 >=0 && d_rig >= 0)? (d_h_100 > d_rig)? d_rig: Math.min(d_rig, sup) : sup;
            L_i = Math.min(L_i, i);
            L_s = Math.max(L_s, s);
            //console.log(h, house, d_h_1, d_lef, d_h_100, d_rig);
            //console.log(house, i, d_h_100, d_rig);
            console.log(house, h, i, s);
        });
        //console.log(M, x, y, h, h >= sup/2);
        console.log('--', L_i, L_s, '--');
    }
}

main();
console.timeEnd('COPS');