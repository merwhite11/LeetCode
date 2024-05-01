/*
input: arr of ints where each el is at most k places away from sorted position
output: sorted arr

examples:
var arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9]
var k = 2
output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

[1, 4, 5, 2, 3, 7, 8, 6, 10, 9]
 i
[1, 4, 5, 2, 3, 7, 8, 6, 10, 9]
       j   i //SWAP
[1, 4, 2, 5, 3, 7, 8, 6, 10, 9]
    j   i
[1, 2, 4, 5, 3, 7, 8, 6, 10, 9]
          j  i
[1, 2, 4, 3, 5, 7, 8, 6, 10, 9]
        j   i
[1, 2, 3, 4, 5, 7, 8, 6, 10, 9]
                      i //swap 8 & 6 //swap 7 & 6
[1, 2, 3, 4, 5, 6, 7, 8, 10, 9]
create smallestSoFar obj = {val: arr[0], index: 0}
go thru arr

go forward k spots to find smallest
  if els in k loop are smaller than smallestSoFar -> update ssf, store index
swap with smallest so far



*/
function swap(arr, idx1, idx2) {
  var temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp;
}

function sortKMessedArray(arr, k) {
  for(let i = 0; i < arr.length; i++) {
    var curr = arr[i]
    for(let j = i - 1; j >= i - k; j--) {
      if(arr[j] > curr) swap(arr, arr.indexOf(curr), j)
    }
  }
  return arr;
}


var arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9]
var k = 2
console.log(sortKMessedArray(arr, k))