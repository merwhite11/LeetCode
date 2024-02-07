/*
input: array of pos ints
output: max sum of non adjacent els in array
edge: if input arr is empty, return 0

//examples
var arr1 = [75, 105, 120, 75, 90, 135]
output: 330 // 75 + 120 + 135

varr arr2 = [7, 10, 12, 7, 9, 14]
//plan
loop thru arr
create arr w max sums you can make at 0-> inclusive curr idx

[7, 10, 19, 19, 28, 33]
output: last index of og arr 14 + prev - 1 sum

the preceding sum can't be used because could containting adj

get the max of second to last maxSums el, or third to last maxSums el + last sums el

create maxSums arr = [arr[0], max(arr[0], arr[i])]
loop i thru arr starting at 2
  compare maxSum of i - 1 to curr + maxSum[i - 2]
  push bigger to maxSums

*/

function maxSubsetSumNoAdjacent(arr) {
  var maxSums = [arr[0], Math.max(arr[0], arr[1])];
  for(let i = 2; i < arr.length; i++) {
    maxSums.push(Math.max(maxSums[i - 1], maxSums[i - 2] + arr[i]))
  }
  return maxSums[maxSums.length - 1]
}

var arr1 = [75, 105, 120, 75, 90, 135]
var arr2 = [7, 10, 12, 7, 9, 14]
console.log(maxSubsetSumNoAdjacent(arr1))