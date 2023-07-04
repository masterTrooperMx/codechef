/*
The game of billiards involves two players knocking 3 balls around on a green baize table. 
Well, there is more to it, but for our purposes this is sufficient.
The game consists of several rounds and in each round both players obtain a score, based on how well they played. 
Once all the rounds have been played, the total score of each player is determined by adding up the scores in all 
the rounds and the player with the higher total score is declared the winner.
The Siruseri Sports Club organises an annual billiards game where the top two players of Siruseri play against each other. 
The Manager of Siruseri Sports Club decided to add his own twist to the game by changing the rules for determining the winner. 
In his version, at the end of each round, the cumulative score for each player is calculated, and the leader and her current lead are found. 
Once all the rounds are over the player who had the maximum lead at the end of any round in the game is declared the winner.
*/
let arr = '';
let N = 0;
process.stdin.on('data',function(chunk){
    arr += chunk;
});

/*
The first line of the input will contain a single integer N (N ≤ 10000) indicating the number of rounds in the game. 
Lines 2,3,...,N+1 describe the scores of the two players in the N rounds. 
Line i+1 contains two integer Si and Ti, the scores of the Player 1 and 2 respectively, in round i. 
You may assume that 1 ≤ Si ≤ 1000 and 1 ≤ Ti ≤ 1000.
*/
function prepareInput() {
    let out = [];
    arr = arr.split('\n');
    //console.log(arr);
    N = Number(arr.splice(0, 1)[0]);
    for(let i = 0; i < N; i++){
        let tmp = (arr.splice(0, 1)[0]).split(' ').map(Number);
        //console.log(tmp);
        if(tmp != []){
            out.push(tmp);
        }
    }
    arr = out;
}

function calcAcc(arr) {
    let plays = [], diffs = 0, S = 0, T = 0;
    if( arr != [] ){
        for(let i = 0; i < N; i++){
            let [s, t] = arr[i];
            S += s;
            T += t;
            if( S-T > 0 ) {
                plays.push([1, S-T]);
                (S-T) > diffs? diffs = (S-T): diffs = diffs;
            } else {
                plays.push([2, T-S]);
                (T-S) > diffs? diffs = (T-S): diffs = diffs;
            }
        }
    }
    // search for this big difference
    let winner = plays.filter(function (x) { [a, b] = x; return (b == diffs)? true : false });
    //console.log('p', plays, diffs);
    return [winner, diffs];
}

process.stdin.on('end',function(){
    //console.log(arr);
    prepareInput();
    //console.log(arr);
    let win = calcAcc(arr);
    console.log((win[0].toString()).replace(',',' '));
});