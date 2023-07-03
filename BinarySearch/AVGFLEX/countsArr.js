// https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
const counts = {};
const sampleArray = [ 1, 30, 30, 30 ];
sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
console.log(counts)

let avgArr = [];
let sum = 0;
Object.values(counts).forEach((v) => { avgArr.push(v) });
//console.log(avgArr);
avgArr.forEach((num) => { sum += num });
console.log(sum / avgArr.length);