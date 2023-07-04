/*
Mario transforms each time he eats a mushroom as follows:

If he is currently small, he turns normal.
If he is currently normal, he turns huge.
If he is currently huge, he turns small.
Given that Mario was initially normal, find his size after eating X mushrooms.
*/
let arr = '';
const sizes = Object.freeze({
    SMALL: 1,
    NORMAL: 2,
    HUGE: 3,
});
let marioSize = sizes.NORMAL;

function getValEnum(val) {
    let out = 'HUGE';
    for (const [key, value] of Object.entries(sizes)) {
        if( value == val) {
            //console.log(`${key}: ${value}`);
            out = `${key}`;
        }
    }
    return out;
}

process.stdin.on('data',function(chunk){
    arr += chunk;
});
/*
The first line of input will contain one integer T, the number of test cases. Then the test cases follow.
Each test case contains a single line of input, containing one integer X.
*/
process.stdin.on('end',function(){
    arr = arr.split('\n').map(Number); // array of numbers
    const T = arr.splice(0, 1)[0];
    for( let i = 0; i < T; i++ ) {
        //console.log(arr.splice(0, 1)[0]);
        let mush = arr.splice(0, 1)[0];
        marioSize += mush;
        //console.log(marioSize, marioSize%3);
        //console.log(Object.values(sizes));
        console.log(getValEnum(marioSize%3));
        marioSize = sizes.NORMAL;
    } 
});