/*
input: array of positive integers
output: min sum that you cannot create

coins = [5, 7, 1, 1, 2, 3, 22]

loop thru coins in ascending order, 
sort array
[1, 1, 2, 3, 5, 7, 22]
make var for amount of change you can make
change = 0 // 1 // 1 +1 = 2 // 4 // 7 (but can you make 6 and 5, yes) //12 (check 8, 9, 10, 11) //19 (check 12-19)
//41 (check 19 -41) 

if you hit a coin that is greater than the amount w prev coins plus 1 -> that means you cannot make current amt + 1

if you hit a coin that is smaller than the amount - add curr el to accumulation

[1, 2, 2, 20] 
total = 26

*/
function bubbleSort(arr) {
    for (var i = arr.length; i > 0; i--) {
        var noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                var noSwaps = false
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        if(noSwaps) break;
    }
    return arr;
}
function nonConstructibleChange(coins) {
    var sortedCoins = bubbleSort(coins)
    var change = 0;
    for (let i = 0; i < sortedCoins.length; i++) {
        var curr = sortedCoins[i];
        if(curr <= change + 1) change += curr;
        else return change + 1
    }
    return change + 1;
  }

var coins = [5, 7, 1, 1, 2, 3, 22]
console.log(nonConstructibleChange(coins))