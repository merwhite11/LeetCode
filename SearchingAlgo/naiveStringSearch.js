/*
count number of times a small string appears in long string

plan
create score var
loop thru long string
    for each char, loop thru short string
    continue looping thru short string until there is no match
    if you are able to get to the end of the inner loop, add 1 to score
  
score: 

wowomgzomg 'omg'
       o
*/

function stringSearch(bigString, littleString) {
    var score = 0;
    for (let i = 0; i < bigString.length; i++){
        for (let j = 0; j < littleString.length; j++) {
            console.log(littleString[j], bigString[i+j])
            if(littleString[j] !== bigString[i+j]){
                console.log('BREAK')
                break;
            } 
            if(j === littleString.length-1) score++;
        }   
    }
    return score;
}

// console.log(stringSearch('lolie loled lollie', 'lol'))

var arr = [4, 5]
console.log(arr.sort())