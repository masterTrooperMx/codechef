

console.time('MATCHES');
const matches = {
    '0': 6,
    '1': 2,
    '2': 5,
    '3': 5,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 3,
    '8': 7,
    '9': 6
};

let arr = '';

process.stdin.on('data',function(chunk){
    arr += chunk;
});

function prepareProcessInput() { // creates a multidimensional array
    let T = 0;   
    arr = arr.split('\n');
    T = Number(arr.splice(0, 1)[0]); // test cases
    // create array of arrays
    for(let i = 0; i < T; i++){
        let [A, B] = (arr.splice(0, 1)[0]).split(' ').map(Number);
        let sum = A + B;
        // convert A into array of chars
        let a_S = String(sum).split('');
        console.log(sum, a_S);
        let m = 0;
        for(let i = 0; i < a_S.length; i++){
            m += matches[a_S[i]];
            //console.log(a_S[i]);
            //console.log(matches[a_S[i]]);
        }
        console.log(m);
        m = 0;
    }
}

process.stdin.on('end',function(){
    prepareProcessInput();
});
console.timeEnd('MATCHES');