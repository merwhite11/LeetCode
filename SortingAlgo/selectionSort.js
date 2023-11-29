/*
places small values into sorted position

output: sorted array
input: array

loop i through array 
set min var to arr[i]
set min idx to 0
    loop j through array starting at i + 1
    is arr[j] smaller than min?
    if yes set min to arr[j]
    store j as min idx
        swap arr[i] with arr[min idx]


[8, 6, 10, 3, 7]

i = 0
min = 8
min =3 //idx = 3
swap
[3, 6, 10, 8, 7]

i = 1
min = 6
[3, 6, 10, 8, 7]

i = 2
min = 10
min = 7
min idx = 4
swap 10 with 7
[3, 6, 7, 8, 10]

i = 3
min = 8

8 <
*/

const swap = (arr, idx1, idx2) => {
    var temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

const selectionSort = (arr) => {
    var min = arr[0]
    var minIdx = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++){
            if (arr[j] < min) {
                min = arr[j]
                minIdx = j
            }
        }
        swap(arr, i, minIdx)
    }
    return arr;
}

console.log(selectionSort([8, 6, 10, 3, 7]))

