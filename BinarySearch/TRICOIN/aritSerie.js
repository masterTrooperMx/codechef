let lim = 100;
let sumaS = [];
let input = [3, 5, 7, 11, 23, 8, 2, 14, 67];

/*
function creaSerieArit(lim){
    for(let i  = 0; i < lim; i++){
        serie[i] = i+1;
    }
}
*/

function sumAriSerie(l) {
    for(let i = 0; i < l; i++){
        if(i == 0){
            sumaS[i] = 1;
        } else {
            //sumaS[i] = serie[i]+sumaS[i-1];
            sumaS[i] = (i+1) + sumaS[i-1];
        }
    }
}

function getLevelSerie(num, l) {
    let nivel = 0;
    for(let i = 0; i < l; i++){
        if(sumaS[i] >= num) {
            if(sumaS[i] == num) {
                nivel = i+1;
            } else {
                nivel =  i;
            }
        }
        if(nivel > 0){
            break;
        }
    }
    return nivel;
}

//creaSerieArit(lim);
sumAriSerie(lim);
for(let i = 0; i < input.length; i++){
    console.log(input[i], getLevelSerie(input[i], lim));
}
//sumaS = serie.forEach((x) => {S += x});

console.log(sumaS);