const a = [1, 4, 99];

console.log(a.reduce(function(x) {return x*15}, 0));

console.log(a.map(function(x) { return x*15}));

const lim = a.map(function(x) { return x<10 ? 1 : 0});
console.log(lim.reduce((a, b) => a + b, 0));