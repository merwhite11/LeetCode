/*
input: array of unique integers
output: returns an array of all perms of those ints in no particular order

example:
const arr = [1, 2, 3]

output:
[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

plan:

swap helper

helper takes in i, current perm and all perms
  if i is last index -> push to perms
  else for j from i to end in arr
    swap i and j
    helper(i+1, arr, perms)
    unswap aka back to
*/

function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
  return arr;
}

function getPermutations(array) {
  var permutations = [];
  permutationsHelper(0, array, permutations)
  return permutations
}

function permutationsHelper(arr, currPerm, perms) {
  let i = 0;
  if (i === arr.length - 1) {
    perms.push(arr);
  }
  else {
    for (let j = i; j < arr.length; j++) {
      swap(arr, i, j)
      var newPerm = currPerm.push(arr[i])
      permutationsHelper(i+1, arr, permutations);
      swap(arr, i, j)
    }
  }
}

var arr = [1, 2, 3]
console.log(getPermutations(arr))

/*walk thru
i = 0
swap(0, 0) [1, 2, 3]
helper(1, arr, perms)

i = 1
swap(1, 1)
helper(2, arr, perms)

i = 2
push to perms
un

*/