/*
pick a pivot point - a random element
all els smaller move to left, all bigger move to right

keep track of how many elements are less than pivot point
    if it's smaller, swap with the first unsorted el
    add to smallerThan count
    if it's bigger, swap to make it bubble to the end


pivot helper
[3, 5, 1, 2, 8]

picking a pivot -- median val in data set ideally 
choose the first el for simplicity 

input: array, start index, end index
output: 
set start index to 0 
set end index to arr.length + 1

store the start as current swap index in a variable
loop thru array starting one after pivot
    compare pivot to current
    if current is less than pivot, 
        increase pivot index var (there is one thing smaller)
        swap current with el at pivot index
pivot = 3
pivIn = 0
i = 1
3 < 5

i = 2
3 > 1
    pivIn = 1
    swap arr[1] with arr[2]
[3, 1, 5, 2, 8]

i = 3
3 > 2
    pivIn = 2
    swap arr[2] with arr[3]
[3, 1, 2, 5, 8]

i = 4
3 < 8

swap pivot el with pivIn
[1, 2, 3, 5, 8]

pivIn = 2

[ 3, 1, 2, 5, 8 ]

swap the pivot with swap index 

split the array in half at the pivot index

[1, 2, 3] [5, 8]

recursively call pivot on the halves




*/

function swap(arr, idx1, idx2){
    var temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

function pivot(arr, start=0, end=arr.length + 1) {
    var pivot = arr[start]
    //keep track of how many els are smaller than pivot
    var swapIdx = start

    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
            // console.log('swapped', arr)
        }
    }
    swap(arr, swapIdx, start)
    return swapIdx
}

function quickSort(arr, left=0, right=arr.length-1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right) //2
        //left
        quickSort(arr, left, pivotIndex - 1) //0, 1
        //right
        quickSort(arr, pivotIndex + 1, right) //3, 4
        console.log('sorted', arr)
    }
    return arr;
}

console.log(quickSort([3, 5, 1, 2, 8]))

/*
[ 3, 1, 2, 5, 8 ]
       2

[3, 1]   [5, 8]
1       5
*/