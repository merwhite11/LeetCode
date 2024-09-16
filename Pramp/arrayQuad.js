/*
input: unsorted arr of ints, number s
output: four nums that sum up to s -> returned in arr in ascending order
edge: if no quad, return empty arr

example:
arr = arr = [2, 7, 4, 0, 9, 5, 1, 3]
var s = 20

plan/english:
first sort the array
[0, 1, 2, 3, 4, 5, 7, 9]

then get all the two num sums and find the remainder
get mid idx -> j + 1
get last idx
while mid < last
  add up mid and last to see if they == remainder
  if testSum > remainder -> last --
  if textSum < remainder -> mid ++
  if === remainder -> push to result arr -> return result arr

return empty arr

get first num -> loop i thru arr
  get second num -> loop j thru arr starting at i + 1
    let diff = target - (first + second)
    set mid idx to j + 1
    set end idx to arr.length - 1

    while mid < end
      if arr[mid] + arr[end] < target -> mid ++
      if arr[mid] + arr[end] > target -> end --
      if == -> push to result arr -> return

return empty arr

walk thru:

first = 0
  second = 1
  diff = 19
    mid + end = 11 -> 16 -> EXIT WHILE
  second = 2
  diff = 18
    mid + end = 16 -> exit while
  second = 3
  diff = 17
    mid + end = 16 -> exit while
  second = 4
  diff = 16
    mid + end = 16 -> RETURN [0, 4, 7, 9]


*/

function compareNumbers(a, b) {
  return a - b;
}

function findArrayQuadruplet(arr, s) {
  if (arr.length < 4) return [];
  arr.sort(compareNumbers)
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i];
    for (let j = i+1; j < arr.length; j++) {
      let second = arr[j];
      let diff = s - (first + second);
      let midIdx = j + 1;
      let endIdx = arr.length - 1;
      while (midIdx < endIdx) {
        if (arr[midIdx] + arr[endIdx] == diff) return [first, second, arr[midIdx], arr[endIdx]]
        else if (arr[midIdx] + arr[endIdx] < diff) midIdx ++;
        else endIdx --;

      }
    }
  }
  return [];
}

var arr = [2, 7, 4, 0, 9, 5, 1, 3];
var s = 20;
console.log(findArrayQuadruplet(arr, s))