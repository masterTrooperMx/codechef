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

//https://www.geeksforgeeks.org/make-all-elements-of-an-array-equal-by-adding-or-subtracting-at-most-k/
// Function to equalize the array by
// adding or subtracting at most K
// value from each element
function equalize(arr, n, k){
    // Finding the minimum element
    // from the array
    let min_ele
        = arr.sort((a, b) => a - b)[0]
    // Boolean variable to check if the
    // array can be equalized or not
    let flag = true;
 
    // Traversing the array
    for (let i = 0; i < n; i++) {
        // Checking if the values lie
        // within the possible range
        // for each element
        if (!((arr[i] + k) >= min_ele + k
            && min_ele + k >= (arr[i] - k))) {
 
            // If any value doesn't lie in
            // the range then exit the loop
            flag = false;
            break;
        }
    }
 
    if (flag) {
 
        // Value after equalizing the array
        return min_ele + k;
    }
 
    // Array cannot be equalized
    else
        return -1;
}

let K = 4;
let N = A.length;
console.log(equalize(A, N, K));