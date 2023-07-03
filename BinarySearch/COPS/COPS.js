/**
 * Hay 100 casas ubicadas en línea recta. La primera casa tiene el número 1 y la última tiene el número 100. 
 * Algunas M casas de estas 100 están ocupadas por policías.
 * El ladrón Devu acaba de robar el bolso de PeePee y está buscando una casa para esconderse.
 * PeePee usa Internet 4G rápido y envía el mensaje a todos los policías de que un ladrón llamado Devu acaba de robar su bolso y se metió en una casa.
 * Devu sabe que los policías corren a una velocidad máxima de x casas por minuto en línea recta y buscarán durante un máximo de y minutos. 
 * Devu quiere saber cuántas casas son seguras para escapar de la policía. 
 * Ayúdelo a obtener esta información.
 */

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