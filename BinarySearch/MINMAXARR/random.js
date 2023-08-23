// https://erikmartinjordan.com/occurrences-array-javascript

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const getRandomIntX = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

const getMaxReptInt = (arr) => {
    let counter = {};
    // find duplicates
    arr.forEach(name => counter[name] ? counter[name] ++ : counter[name] = 1);
    // Getting max number of occurrences
    let max = Math.max(...Object.values(counter));
    // Getting array of highest duplicate values
    let highest = Object.entries(counter).filter(([name, reps]) => reps === max);
    return highest[0][0];
}

for(let i = 0; i < 100; i++){
    console.log(`i ${i}, rI ${getRandomInt(i)}, rIX ${getRandomIntX(1, i)}`);
}

A1 = [5,3,5,6];
A2 = [6,2,7,4];
A3 = [6,2,5,6];

let counter = {};
A1.forEach(name => counter[name] ? counter[name] ++ : counter[name] = 1);
// Getting max number of occurrences
let max = Math.max(...Object.values(counter));
// Getting array of highest duplicate values
let highest = Object.entries(counter).filter(([name, reps]) => reps === max);
console.log(`c ${counter}, m ${max}, h ${highest}, A ${A1}`);
counter = {};
A2.forEach(name => counter[name] ? counter[name] ++ : counter[name] = 1);
highest = Object.entries(counter).filter(([name, reps]) => reps === max);
console.log(`c ${counter}, m ${max}, h ${highest}, A ${A2}`);
counter = {};
A3.forEach(name => counter[name] ? counter[name] ++ : counter[name] = 1);
highest = Object.entries(counter).filter(([name, reps]) => reps === max);
console.log(`c ${counter}, m ${max}, h ${highest}, A ${A3}`);
console.log(highest[0][0]);

A4 = [1,5,7,6,5];
mh = getMaxReptInt(A4);
console.log(`h ${mh} r ${getRandomIntX(1,mh)}`);