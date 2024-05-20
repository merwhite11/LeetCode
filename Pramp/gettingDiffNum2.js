/*
input: arr of unique nonneg ints
output: smallest nonneg int that's NOT in the array

example:
var arr = [0, 1, 2, 3]
output: 4

var arr1 = [13, 10, 1, 2, 0]
sorted = [0, 1, 2, 13, 10]

plan/walk-thru:
//BEST TIME
create variable for smallest so far: 0
make a set of the arr
loop thru the arr
  if smallest is in set -> smallest + 1
return smallest

//BEST SPACE
sort the array
create smallest = 0
loop through the arr
  if smallest = curr -> smallest + 1
return smallest


//

solve for best time complexity: use a storage objecct - no modify
solve for best space complexity: loops - sort array

*/
// function getDifferentNumber(arr) {
//   let smallest = 0;
//   const arrSet = new Set(arr);

//   for(let i = 0; i < arr.length; i++) {
//     if(arrSet.has(smallest)) smallest ++;
//   }
//   return smallest;
// }

function getDifferentNumber(arr) {
  let smallest = 0;
  let sortedArr = arr.sort();
  for(let i = 0; i < arr.length; i++) {
    if(smallest === arr[i]) smallest++;
  }
  return smallest;
}

var arr = [0, 1, 2, 3]
var arr1 = [13, 10, 1, 2, 0]
console.log(getDifferentNumber(arr))