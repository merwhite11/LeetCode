/*
input: arr of ints, each el is k away from sorted position
output: sorted arr

example:
arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9]
k = 2

output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

plan/walk-thru:

loop i thru array
  store current
  loop j from curr position - 1 back down k spots
    if curr j is greater than curr i -> swap

i = 1 // j = -1
[1, 4, 5, 2, 3, 7, 8, 6, 10, 9]

i = 1 // j = 0 // curr = 4
1 < 4

i = 2 // j = 1 // curr = 5
4 < 5 , 1 < 5

i = 3 // j = 2 // curr = 2
5 > 2 -> SWAP
[1, 4, 2, 5, 3, 7, 8, 6, 10, 9]
4 > 2 -> SWAP
[1, 2, 4, 5, 3, 7, 8, 6, 10, 9]

*/

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function sortKMessedArray(arr, k) {
  for(let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    for(let j = i - 1; j >= i - k; j--) {
      if (arr[j] > curr) swap(arr, arr.indexOf(curr), j)
    }
  }
  return arr;
}

var arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9]
var k = 2
console.log(sortKMessedArray(arr, k))