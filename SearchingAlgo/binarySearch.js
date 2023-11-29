/*
leftIndex = 0
rightIndex = arr.length - 1
middIndex = Math.floor(rightIndex - leftIndex)

target

if target < middle
    middle index becomes right index
    new middle index becomes right - left

if target > middle
    middle index becomes left index
    new mid = right - left / 2

if right - left <= 1

[1, 4, 7, 9, 15, 24, 30]

target = 6

leftIndex = 0
rightIndex = 6
middleIndex = 3

6 < 9

rightIndex = 3
middleIndex = 1

6 > 4

if rightIndex - leftIndex <= 2
and if leftIndex != target
and if rightIndex != target

return false


*/

function binarySearch(arr, target) {
    var lowIndex = 0
    var highIndex = arr.length - 1
    var midIndex = Math.floor((highIndex + lowIndex)/2)
    console.log('before loop', lowIndex, highIndex, midIndex)
    
    while (arr[midIndex] !== target && lowIndex <= highIndex) {
        if (target < arr[midIndex]) {
            highIndex = midIndex - 1;
        }
        else lowIndex = midIndex + 1
        midIndex = Math.floor((highIndex + lowIndex)/2)
    }
    console.log('after loop', lowIndex, highIndex, midIndex)
    if (arr[midIndex] === target) return midIndex;
    else return false;
}

console.log(binarySearch([1, 4, 7, 9, 15, 24, 30], 6))