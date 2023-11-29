/*
input: array
output: array sorted by selection sort

create current min var - set to arr[0]
min index = 0
loop through array
    if curr < min -> update min to become curr, updat minIndex
swap curr with min

var array = [8, 5, 2, 9, 5, 6, 3]
i = 0
min = 8
index = 0
swap 
var oldMind = arr[i]
arr[i] = arr[minIndex]
arr[minIndex] = oldMin
*/

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        var min = arr[i];
        var minIndex = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < min) {
                min = arr[j];
                minIndex = j;
            }
        }
        var oldMin = arr[i];
        arr[i] = min;
        arr[minIndex] = oldMin;
    }
    return arr;
}

var array = [8, 5, 2, 9, 5, 6, 3]
console.log(selectionSort(array))