/*
[4, 1, 7, 9, 2, 5]
loop thru array starting at end
store current val as var
    if curr < prev
        swap
        current 
    else keep looping down array

i = 5
5 > 2

[4, 1, 7, 9, 2, 5]
i = 4
2 < 9 -> SWAP i --
[4, 1, 7, 2, 9, 5]
i = 3
2 < 7 --> SWAP i --
[4, 1, 2, 7, 9, 5]













[4, 7, 1, 2 , 9, 5]
    loop thru array
    store current val to arr [i] -- this is so you can continue comparing it, even if index gets swapped!
    i = 1  //currVal = 7
        loop back thru array
        j = 0
        compare current val to arr[j]
        7 > 4 -> break
    i = 2 //currVal = 1
        j = 1
        1 < 7 -> SWAP index of currVal trades with arr[j]
        [4, 1, 7, 9, 2, 5]
        j = 0
        1 < 4 -> SWAP index of currVal trades with arr[0]
    [1, 4, 7, 9, 2, 5]
    i = 3
        j = 2
        9 > 7 -> break
    i = 4
        j = 3
        2 < 9 -> SWAP arr[3] trades with arr[4]
        [1, 4, 7, 2, 9, 5]
        j = 2
        2 < 7 -> SWAP
        [1, 4, 2, 7, 9, 5]
        j = 1
        2 < 4 -> SWAP
        [1, 2, 4, 7, 9, 5]
        j = 0
        2 > 1

    [1, 4, 7, 2, 9, 5]

pseudocode

loop i starting at index 1
    loop j starting at i - 1 , going backwards
        compare current j to current i --> if greater, swap 
    
*/ 

function swap(arr, idx1, idx2) {
    var temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        var currVal = arr[i]
        for (let j = i -1; j >= 0; j--) {    
            if(arr[j] > currVal) {
                swap(arr, arr.indexOf(currVal), j)
            }
        }
    }
    return arr;
}

console.log(insertionSort([4, 7, 1, 5, 2 , 9, 5]))