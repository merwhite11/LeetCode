/*
input: 2 unsorted arrays
output: 1 sorted arrays

SORT pseudocode:

breakup function
basecase: if length of array <= 1 --> return array
break up array in 2 halves
for each half, call break up function

merge split arrays until array length is equal to original length



*/

function merge(arr1, arr2) {
    var result = []
    var i = 0;
    var j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i])
            console.log('result', result)
            i++
        }
        if(arr1[i] > arr2[j]) {
            result.push(arr2[j])
            console.log('result', result)
            j++
        }
    }
    while(i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while(j < arr2.length) {
        result.push(arr2[j])
    }
    return result   
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    var mid = Math.floor(arr.length/2)
    var left = mergeSort(arr.slice(0, mid))
    var right = mergeSort(arr.slice(mid))
    console.log('left', left, right)
    return merge(left, right)

}

console.log(mergeSort([2, 5, 1]))

/*
[2, 5, 1, 7, 4, 6, 8]

left = mergeSort([2, 5, 1])                                   right = mergeSort([7, 4, 6, 8])                    
    left = mergeSort[2]    right = mergseSort[5, 1]                       l = [7, 4] right = mergeSort([6, 8])
                                                                     l = [7] r = [4]               l = [6] r = [8]


*/