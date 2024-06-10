/*
input: sorted arr of ints shifted to left by unknown offset, int num
output: index of num
edge: num isnt in arr, return -1

examples:
var shiftArr = [9, 1, 2, 3, 4, 6, 7]
var num = 4
output: 3

// 0 + 1
plan/walk-thru

find pivot point
  loop i thru from 0 to end
    if next < curr
    return i


  pivot idx = 1
  num === arr[pivotIdx] -> return pivot idx

  is num < arr[0] ?
    left = pivot idx + 1 //6
    right = length

  else
    left = 0
    right = pivot idx - 1

find idx of num, binary search -> while left < right

  var mid = Math.floor((left + right) / 2)

  if arr[mid] = num -> return mid

  if num > arr[mid]
    left = mid

  if num < arr[mid]
    right = mid

return - 1

*/

function findPivotPoint(arr) {
  let begin = 0;
  let end = arr.length - 1;

  while(begin <= end) {
    let mid = begin + Math.floor((end - begin)/2);
    if(mid == 0 || arr[mid] < arr[mid-1]) return mid;
    if(arr[mid] > arr[0]) begin = mid + 1;
    else end = mid - 1;
  }
  return 0;
}

function shiftedArrSearch(arr, num) {
  var pivotPoint = findPivotPoint(arr);

  if(num === arr[pivotPoint]) return pivotPoint;
  let left, right;
  if(num < arr[0]) {
    left = pivotPoint;
    right = arr.length - 1;
  }
  else {
    left = 0;
    right = pivotPoint;
  }

  console.log('left', left)
  console.log('right', right)
  while(left < right) {
    var mid = Math.floor((right + left)/2);
    console.log('mid', mid)
    if(arr[mid] === num) return mid;
    if(arr[left] === num) return left;
    if(arr[right] === num) return right;
    if(arr[mid] > num) right = mid - 1;
    if(arr[mid] < num) left = mid + 1;
  }

  return -1;
}

var arr = [9, 10, 12, 1, 2, 3, 4, 6, 7]
var num = 4
console.log(shiftedArrSearch(arr, num))