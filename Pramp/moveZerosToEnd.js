/*
input: static arr of ints
output: move all zeroes in arr to the end
constraint: preserve the relative order of els in arr

//examples
var arr = [1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0]
output: [1, 10, 2, 8, 3, 6, 4, 5, 7, 0, 0, 0, 0, 0]

var arr1 = [1, 10, 0, 2, 8]

two-pointer solution:
write-head - don't increment when there's a zero. holds the spot of the index to insert non-zero at
read-head: will read each nonzero element from l -> r
  write the val to the write-head and increment the write head

count the 0s
write = 0
read = 0
1 -> [1, 10, 0, 2, 8] // write = 1

write = 1
read = 1
10 -> [ 1, 10, 0 , 2, 8] write = 2

write = 2
read = 2
0

write = 2
read = 3
2 -> [1, 10, 2, 0, 8] // write = 3

write = 3
read = 4
8 -> [1, 10, 2, 8, 0]

for(i = 4; i <, arr.length - 1; i++)


*/
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function moveZerosToEnd(arr) {
  var zeroIndexHolder = 0;
  for(let i = 0; i < arr.length; i++) {

  }
}

var arr1 = [1, 10, 0, 0, 2, 8]
console.log(moveZerosToEnd(arr1))