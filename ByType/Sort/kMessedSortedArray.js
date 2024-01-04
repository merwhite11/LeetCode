/*
input: array where each el is at most k places away from sorted position
output: sorted array

arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9]
k = 2

plan:
insertion sort

i = 1
optimize with only looking at 2 up or 2 down

*/
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function sortKMessedArray(arr, k) {
  for(let i = 1; i < arr.length; i++) {
    var curr = arr[i];
    var lastSortedIdx = i - 1;

    while(lastSortedIdx >= 0 && arr[lastSortedIdx] > curr) {
      arr[lastSortedIdx + 1] = arr[lastSortedIdx];
      lastSortedIdx--;
    }
    arr[lastSortedIdx + 1] = curr;
  }
  return arr;
}


var arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9]
var k = 2

console.log(sortKMessedArray(arr, k))