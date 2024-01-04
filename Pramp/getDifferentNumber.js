/*
input: arr of nonneg ints
output: smallest nonneg int that is NOT in the arr

max val: consider all vals less than max int that aren't in arr

examples:
var arr = [0, 1, 2, 3]
output: 4

var arr1 = [0, 900, 23, 54]
output: 1

var arr2 = [0, 1, 2, 5, 200]
output: 3

plan:
create a set out of the array
create a smallest so far var -> set to 0
sort the array

loop thru each el of arr
  add 1
  check if increased val is in set
  if it is not && it is smaller than smallest so far
    -> update smallest

  return smallest

*/
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function sortArr(arr) {
  for(let i = 0; i < arr.length; i++) {
    var curr = arr[i];
    for(let j = i - 1; j >= 0; j--) {
      if(arr[j] > curr) {
        swap(arr, arr.indexOf(curr), j)
      }
    }
  }
  return arr;
}

// function getDifferentNumber(arr) {
//   var smallest = 0;
//   arr = sortArr(arr);
//   for(let el in arr) {
//     var curr = arr[el];
//     if(curr === smallest) smallest++;
//     if(curr > smallest) return smallest;
//   }
//   return smallest;
// }

function getDifferentNumber(arr) {
  var smallest = 0;
  var arrSet = new Set(arr);
  var max_int = 2^31-1;
  while(smallest < max_int){
    if(!arrSet.has(smallest)) return smallest;
    else smallest++;
  }
}
var arr2 = [0, 1, 2, 5, 200]
var arr1 = [0, 900, 23, 54]
var arr = [1000]
console.log(getDifferentNumber(arr))