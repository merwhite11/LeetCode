/*
input: num weight limit, array of item weights
output: pair of idices whose values sum equals weight limit. i > j
edge: no pair exists, return empty array

examples:
var arr = [4, 6, 10, 15, 16]
var lim = 21

output: [3, 1]

plan/walk-thru:

create set of arr
loop thru arr
  find diff: subtract curr from limit
  check if diff is in set
  if it is, return [curr idx, indexOf(diff)]

return []
*/

function getIndicesOfWeights(arr, limit) {
  var arrMap = new Map();
  for(let i = 0; i < arr.length; i++) {
    let diff = limit - arr[i];
    if(arrMap.has(diff)) return [i, arrMap.get(diff)]
    else arrMap.set(arr[i], i)
  }
  return []
}

var arr = [4, 4]
var lim = 8
console.log(getIndicesOfWeights(arr, lim))