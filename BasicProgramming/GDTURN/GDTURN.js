/*
Chef and Chefina are playing with dice. In one turn, both of them roll their dice at once.

They consider a turn to be good if the sum of the numbers on their dice is greater than 6.
Given that in a particular turn Chef and Chefina got X and Y on their respective dice, find whether the turn was good.
*/

process.stdin.resume();
process.stdin.setEncoding('utf8');
// vamos a leer toda la entrada, T y luego los ejemplos para que despues los analicemos
// lee pedazos de informacion
let T = '';
process.stdin.on('data', function (chunk) {
    //process.stdout.write('data: ' + chunk);
    T += chunk;
});
// CTRL+END
arrT = [];
process.stdin.on('end', function () {
    process.stdout.write(T);
    // removing empty lines
    T = T.split(/\r?\n/).filter(line => line.trim() != '').join('\n')
    //creating array with options
    arrT = T.split(/\r?\n/);
    console.table(arrT);
    // now check for test cases
    for (let i = 0; i < arrT.length; i++) {
        if(i > 0) {
            //luego lo quitamnos
            console.log(arrT[i]);
            let tarrT = arrT[i].split(' ');
            //console.log(tarrT);
            if( tarrT.reduce((a, b) => parseInt(a) + parseInt(b), 0) > 6 ){
                console.log('YES');
            } else {
                console.log('NO');
            }
        }
    }
});