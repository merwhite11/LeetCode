/*
input: sorted array, target
use binary search to determine if target is in array
output: index of target if in array, otherwise -1

array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
target = 35


lowIndex = 0;
highIndex = array.length
recursive 
find the midIndex = floor(array.length - startIndex / 2)

    while(arr[midIndex] !== target && lowIndex <= highIndex)
    if target is greater than arr[mid]
        left = mid
        call bs (left, right)
    if target is less than arr[mid]
        right = mid
        call bs (left, right)
        
recursive(lowIndex, highIndex)
if(arr[midIndex] === target) return true;
else return -1

low = 0
high = 9
mid = 4

low = 0
high = 4
mid = 2

low = 2
high = 4
mid = 3
*/

function binarySearch(array, target) {
    var lowIndex = 0;
    var highIndex = array.length - 1;
    var midIndex = Math.floor((highIndex + lowIndex)/2);
    while(array[midIndex] !== target && lowIndex <= highIndex) {
        if(array[midIndex] < target) {
            lowIndex = midIndex + 1;
        } else {
            highIndex = midIndex - 1
        }
        midIndex = Math.floor((highIndex + lowIndex)/2)
    }

    if(array[midIndex] === target) return midIndex;
    else return -1;
  }

  var array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
  console.log(binarySearch(array, 33))