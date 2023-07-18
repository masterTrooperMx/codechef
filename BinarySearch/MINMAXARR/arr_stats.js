const A = [1, 5, 7, 6];
const B = [1,9,3,6];
const C = [5,5,3,6];
const D = [5,5,4,5];
//const B = [5, 15, 19];
//const C = [10, 3, 5, 7];

//#Source https://bit.ly/2neWfJ2 
const median = arr => {
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };

// average
const mean = arr => {
    let sum = 0;
    for (let number of arr) {
        sum += number;
    }
    average = sum / arr.length;
    return average;
}
// mode
const mode = arr => {
    const mode = {};
    let max = 0, count = 0;
  
    for(let i = 0; i < arr.length; i++) {
      const item = arr[i];
      
      if(mode[item]) {
        mode[item]++;
      } else {
        mode[item] = 1;
      }
      
      if(count < mode[item]) {
        max = item;
        count = mode[item];
      }
    }
     
    return max;
  };

// rango
const range = arr => {
    arr.sort((a, b) => a - b);
    
    return [arr[0], arr[arr.length - 1]];
  };

console.log('mediana', Math.ceil(median(A)), 'media', Math.ceil(mean(A)), 'moda', mode(A), 'rango', range(A));
console.log('mediana', Math.ceil(median(B)), 'media', Math.ceil(mean(B)), 'moda', mode(B), 'rango', range(B));
console.log('mediana', Math.ceil(median(C)), 'media', Math.ceil(mean(C)), 'moda', mode(C), 'rango', range(C));
console.log('mediana', Math.ceil(median(D)), 'media', Math.ceil(mean(D)), 'moda', mode(D), 'rango', range(D));

/*
const anaArr = arr => {
    for(let i = 0; i < arr.length; i++){
        if(i > 0) {
            // se puede aplicar
            let X = arr.slice(0, i);
            console.log(X);
            for(idx in X){
                //console.log(`${i}, ${idx}, ${A[i-1]}->${A[i-1]+X[idx]}, ${A[i]}->${A[i]-X[idx]}`);
                let tmp = A;
                tmp[i-1] = tmp[i-1]+X[idx];
                tmp[i] = tmp[i]-X[idx];
                console.log(tmp);
            }
        }
    }
};

anaArr(A);
*/