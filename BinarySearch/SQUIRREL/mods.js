let T = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let j = 0; j < 10; j++){
    for(let i = 0; i < T.length; i++){
        //if(T[i]%i === 0){
            console.log(`${T[i]} % ${j} ${T[i]%j}`);
        //}
    }
}
