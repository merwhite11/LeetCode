/*
input: competitions: array of tuples representing teams that have competed [homeTeam, awayTeam]
       results: array of results from each competition 
       if results[i] = 1 -> home team at competitions[i] won
       if results[i] = 0 -> away team at competitions[i] won
output: winner of the tournament

competitions = [
                ['A', 'B'], //B: 1
                ['B', 'C'], //C: 1
                ['C', 'A'] //C:2
                ]
results = [0, 0, 1]
create highest score tuple -> set to [0, '']
create a score obj

loop i through competitions array 
  loop j through results array
  if 0 -> 
    check if competitions[i][1] exists in obj
    if yes -> add 1
    if greater than highest -> update highest
    else -> create a key competitions[i][1] and set to 1
  if 1 ->
    check if competitions[i][0] exists in obj
    if yes -> add 1
    if greater than highest -> update highest
    else -> create a key competitions[i][0] and set to 1

*/

function tournamentWinner(competitions, results) {
    var highScore = {score: 0, team: null}
    var storage = {};
    for (let i = 0; i < competitions.length; i++) {
            var currComp = competitions[i];
            var currRes = results[i];
            if(currRes === 0) var team = currComp[1]
            else team = currComp[0]
            if(storage[team]) {
                storage[team] ++
            } else {
                console.log('else block')
                storage[team] = 1
                console.log('storage', storage)
            }
            if(storage[team] > highScore.score) {
                highScore.score = storage[team]
                highScore.team = team
            }
        }
        console.log('storage:', storage)
        return highScore['team'];
    }

  var competitions = [['A', 'B']]
var results = [1]
console.log(tournamentWinner(competitions, results))
  