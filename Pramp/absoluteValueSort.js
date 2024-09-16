/*
input: array of ints
output: array sorted in ascending order of absolute values of ints
edge: if two nums have the same abs val -> sort neg before pos

example:
var arr = [2, -7, -2, -2, 0]
output: [0, -2, -2, 2, -7]

plan/walk-through:

insertion sort
  loop i from 1 to end of arr
    store currVal
    loop j from i - 1 to 0
      if abs val of currVal < abs val of curr j -> SWAP
      if abs vals are equal && currVal < curr j -> SWAP
  return arr

  i = 1 // currVal = -7
    j = 2
  i = 2 // currVal = -2
    j = 1
      2 < 7 -> SWAP
    j = 0
      2 === 2 && -2 < 2 --> SWAP
  [-2, 2, -7, -2, 0]

  i = 2 // currVal = -7

  i = 3 // currVal = -2
    j = 2
      2 < 7 --> SWAP


selection sort

loop i from 0 to end of arr
  set min val to arr[i]
  set minIdx to 0
  loop j from i + 1 to end
    if abs of arr[j] < abs of min OR
    if arr[j] === min AND arr[j] < min
      set min to arr[j]
      store j as minIdx
      swap arr[i] with arr[minIdx]

*/

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

function smaller(a, b) {
  if(Math.abs(a) < Math.abs(b)) return true;
  if(Math.abs(a) > Math.abs(b)) return false;
  return a < b;
}

function absSort(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(smaller(arr[j], arr[minIdx])) {
        minIdx = j
      }
    }
    swap(arr, i, minIdx)
  }
  return arr;
}

var arr = [0, 1, 2]
console.log(absSort(arr))