/*
input: arr of integers // arr of 3 distinct ints
first arr only contains ints that are in second arr
second arr represents desired order of ints in first arr

output: first arr sorted to order defined in second arr

constraints: sort first arr in place. should run with constant space

example:
firstArr = [x, x, y, x, z, x, y, z, z]
second Arr = [x, y, z]
output: [x, x, x, x, y, y, z, z, z]

var arr = [1, 0, 0, -1, -1, 0, 1, 1]
var order = [0, 1, -1]

plan:
create an obj with indexes of order els stored

//first pass -> move last index to end
set i = 0
set j = arr.length - 1

if curr === last index of order arr
  swap with j
  j--
else
  i++
if i === j -> break

//second pass -> move first index matches to front
set i = 0
set k = 0

if curr matches first index of order
  swap with k
  k++
else
  i++
if k === j -> break


[0, 1, 2]
//first pass --> move 2's to end
[1, 2, 0, 0, 3, 2, 1, 0]
  i                   j
no swap

[1, 0, 0, 0, 3, 2, 1, 2]
    i                 j
move 2 to end of array
j--

[1, 0, 0, 0, 3, 2, 1, 2]
                i   j
swap i and j
j--

[1, 0, 0, 0, 3, 1, 2, 2]
                ij
break when i = j

//second pass only go up to j-1-> move 0's to front
set i to 0 , keep j
set k to 0
if there's a swap, k++
[1, 0, 0, 0, 3, 1, 2, 2]
    ki              j

[0, 1, 0, 0, 3, 1, 2, 2]
       i               j

[0, 0, 1, 0, 3, 1, 2, 2]
    k  i

*/
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// function threeNumberSort(array, order) {
//   const firstEl = order[0];
//   const lastEl = order[2];

//   let m = 0;
//   let k = 0;
//   while(m < array.length) {
//     if(array[m] === firstEl && m !== k) {
//       swap(array, m, k);
//       k++
//     } else m++;
//   }
//   console.log(array)
//   console.log('m', k)
//   let i = k;
//   let j = array.length - 1;
//   while(i < j) {
//     if(array[i] === lastEl && i !== j) {
//       swap(array, i, j);
//       j--
//     } else {
//       i++;
//     }
//   }
//   console.log('array', array)
//   return array;
// }

//ONE PASS SOLUTION


var arr = [9, 9, 9, 7, 9, 7, 9, 9, 7, 9]
var order = [7, 11, 9]

// var arr = [1, 0, 0, -1, -1, 0, 1, 1]
// var order = [0, 1, -1]

threeNumberSort(arr, order)