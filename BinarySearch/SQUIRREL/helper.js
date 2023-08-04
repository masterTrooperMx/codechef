let T = [ 5, 1, 2 ];
let P = [ 1, 2, 1 ];
let nueces = [];

function parseArrays() {
    function fillSpaces(start, step) { // array cell to start, step of fill
        for(let i = start; i < k; i += step){
            if(nueces[i] > 0){
                nueces[i] += 1;
            } else {
                nueces[i] = 1;
            }
        }
    }
    let k = Math.pow(10,6);
    let h = 0, l = 0;
    for(let j = 0; j < k; j++){
        h = T.indexOf(j+1); // idx
        l = P[h]; // val of idx
        fillSpaces(h, l);
    }
}

//parseArrays();
//console.log(`${nueces}`);

const divArrs = (den, num) => { // suppose in den we have any zeroes
    let arr = [];
    if((den.length > 0 && num.length > 0) && 
       (den.length == num.length)){
        for(let i = 0; i < den.length; i++){
            arr.push(num[i]/den[i]);
        }
    }
    return arr;
}

const max = Math.pow(10,6); // max number of secs to wait
const calcNuts = (arr, N) => {
    let calc = [];
    let c = Math.floor(-1 * arr.reduce((a, b) => a+b));
    for(let i = 1; i < max; i++){ // like seconds
        // check sec to compute
        for(let j = 0; j < arr.length; j++){
            if((Number(T[j])%i) === 0) {
                // if is second produce Pi nuts
                console.log(`${T[j]%i} ${T[j]} % ${i} ${arr[j]} ${c}`);
                c += Math.ceil(Number(arr[j]));
            }
        }
        //console.log(i, c);
        if(c >= N){
            calc.push(i, c);
            break;
        }
    }
    return calc;
}

let h = divArrs(T,P);
console.log(h);

console.log(calcNuts(h, 5));

T = [5, 1, 2];
P = [1, 1, 1];

h = divArrs(T,P);
console.log(h);

console.log(calcNuts(h, 5));

let x = new Array(3);
x.forEach((e) => e+10);
console.log(x);