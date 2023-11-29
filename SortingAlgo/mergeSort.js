/*
input: unsorted array
output: sorted array

merge function:
input: two sorted arrays
output: 1 sorted array

create an empty result array
set i counter to 0
set j counter to 0

while i & j are both less than the lengths of arrays
    compare array1 at pos i to arr2 at pos j
    if arr1 is less than arr2
        push curr i val to result arr
        i++
    else
        push curr j val to result arr
        j++

while there's still els in arr1
    push to result
    i++
while there's still els in arr2
    push to result
    j++


[1, 5, 7] [2, 8, 9]

sort 
base case is when arr length is <=1
recursively break array into halves
for each half call sort
then call merge on both halves
*/

function merge(arr1, arr2) {
    var result = []
    var j = 0
    var i = 0

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }
    while(i < arr1.length){
        result.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        result.push(arr2[j])
        j++
    }
   return result 
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr
    var mid = Math.floor(arr.length/2)
    var left = mergeSort(arr.slice(0, mid))
    console.log('left', left)
    var right = mergeSort(arr.slice(mid))
    console.log('right', right)
    return merge(left, right)
}

console.log(mergeSort([3, 1, 7, 2, 9, 4]))

console.log(merge([1, 2, 7], [2, 8, 9]))

/*
O log n time complexity - to split up the array
log base 2 of n
2 of what power gives us n
32 (2 to the 3rd)
as n grows, the number of times we split the array, grows at the rate of log n

O(n) comparisons per decomposition - 8 comparisons for an array of 8

*/