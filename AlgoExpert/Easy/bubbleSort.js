/*
input: array of ints
output: sorted version 

loop i through array starting at end, going down
    set noSwaps to true
    loop j through array starting at 0, up to i - 1, going up
        if j > j + 1
            set noSwaps to false
            SWAP
    if noSwaps break
    return array

*/

function bubbleSort(array) {
    for(let i = array.length; i > 0; i--) {
        var noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            if(array[j] > array[j+1]) {
                noSwaps = false;
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
             }
        }
        if(noSwaps) break;
    }
    return array;
}

var array = [8, 5, 2, 9, 5, 6, 3]
console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]))