function *permute(a, n = a.length) {
    if (n <= 1) yield a.slice();
    else for (let i = 0; i < n; i++) {
      yield *permute(a, n - 1);
      const j = n % 2 ? 0 : i;
      [a[n-1], a[j]] = [a[j], a[n-1]];
    }
}

let word = 'hello';

let perms = Array
                .from(permute(word.split(''))) // array of letters
                .map(perm => perm.join('')) // array of words
                .filter((el, idx, self) => (self.indexOf(el) === idx)) // array of unique words
                ;

console.log(perms);

function recall (a, n){
    if(n < 0) { // stop condition
        console.log(a[n+1]); // when n = -1, print a[0] and return all calls
    } else {
        console.log(n); // first do this when stack calls: n, n-1, n-2, ... , 0 or contidion to stop
        recall(a, n-1); // recursion call
        console.log(a[n]); // when returning of call do this, 0, 1, 2, ...
    }
}

recall(perms, perms.length);