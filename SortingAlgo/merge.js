/*
splitting up, sorting and merging 

merge function pseudocode
input: 2 sorted arrays
output: 1 sorted array

create an empty array
get smallest val from each array
while still els in smaller array

    if first array's val is smaller than second array's val
        push first array val to result array
        move on to compare first array's second val with second array's first val
    if second array's val is smaller than first array's val
        push second array val to result array
        compare second array's second val with first array's first val

Once at end of smaller array, push all remaining values from longer array to result array


[1, 4, 6, 8] [2, 5, 7]

[] 

while i < smallArr.length

    i = 0 // j = 0
    arr1[0] < arr2[0]
    [1]
    i++

    i = 1 // j = 0
    4 > 2
    [1, 2]
    j ++

    i = 1 // j = 1
    arr2[1] > arr1[1]
    [1, 2, 4]
    i++

    i = 2 // j = 1
    arr1[2] > arr2[1]
    [1, 2, 4, 5]
    j++

    i = 2 // j = 2
    arr1[2] < arr2[2]
    [1, 2, 4, 5, 6]
    i ++

    i = 3 // j = 2
    arr1[3] > arr2[2]
    [1, 2, 4, 5, 6, 7]
    --end of while loop

push remaining val from arr1

[1, 2, 3, 4, 5, 6, 7, 8]


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

console.log(merge([1, 4, 6, 8], [2, 5, 7]))