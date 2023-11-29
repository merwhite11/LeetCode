/*
input: array of ints, integer 
output: moves all instances of that int in the array to the end of the array, return array
constraints: perform in place

//example
array = [2, 1, 2, 2, 2, 3, 4, 2]
move = 2

[1, 2, 3, 2, 2, 2, 2, 2]



//plan 
[2, 1, 2, 2, 2, 3, 4, 2] // j = move, leave in place, j --
 i                    j

[2, 1, 2, 2, 2, 3, 4, 2] //j != move, swap with i, i++
 i                 j

[4, 1, 2, 2, 2, 3, 2, 2] // j = move, leave in place, j --
    i              j

[4, 1, 2, 2, 2, 3, 2, 2] // j!=move, swap with i, i++
    i           j

[4, 3, 2, 2, 2, 1, 2, 2] // j!=move, swap with i, i++
       i        j

[4, 3, 1, 2, 2, 2, 2, 2] // j = move, leave, j --
          i     j

[4, 3, 1, 2, 2, 2, 2, 2] // j = move, leave, j --
          i  j

i === j --> break 


create left pointer = 0
create right pointer = array.length - 1

while right > left 
    if arr[j] != move
        swap with arr[i]
        i++
    else j --

return array

*/

function moveElementToEnd(array, toMove) {
    var left = 0;
    var right = array.length - 1;
    while(right > left) {
        if(arr[right] !== toMove) {
            console.log('right', arr[right])
            console.log('left', arr[left])
            var temp = arr[right];
            arr[right] = arr[left];
            arr[left] = temp;
            left ++;
            console.log(array)
        } else right --;
    }
    return array;
  }

var arr = [2, 2, 2, 2, 2, 3, 2, 2]
var toMove = 2
console.log(moveElementToEnd(arr, toMove))