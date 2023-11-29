function swap(arr, idx1, idx2) {
    var temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}
/*
pseudocode

create swap flag
loop i starting from end of array
    loop j starting from beginning of array 
        compare j current value to j next value -> swap if greater
        set noswap flag to false 
    if there are no swaps, break out of i loop
return sorted arr

*/

// const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
// }

function bubbleSort(arr){
    var noSwap;
    for(var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(var j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                noSwaps = false;
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        if (noSwaps) break;
    }
    return arr
}
const arr = [37, 45, 29, 8]
console.log(bubbleSort(arr))
/*

37, 45, 29, 8 // i = 4, j = 0
37, 29, 45, 8// i = 4, j = 1
37, 29, 8, 45// i = 4, j = 2


5, 12, 2, 18, 6, 10 //i = 5, j= 0
5, 2, 12, 18, 6, 10 //i = 5, j=1
5, 2, 12, 18, 6, 10 //i = 5, j=2
5, 2, 12, 6, 18, 10 //i =5, j=3
5, 2, 12, 18, 6, 10 //i =5, j=4

2, 5, 12, 18, 6, 10//i=4, j=0
2, 5, 12, 18, 6, 10//i=4, j=1
2, 5, 12, 18, 6, 10//i=4, j=2
2, 5, 12, 6, 18, 10//i=4, j=3

2, 5, 12, 18, 6, 10//i=3, j=0
2, 5, 12, 18, 6, 10//i=3, j=1





*/