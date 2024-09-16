/*
input: arr of unique nonneg ints
output: smallest nonneg that is NOT in arr
max_int = 2^31 - 1

first solve for time complexity: modify input arr
then solve for space complexity: don't modify input arr

//example
arr = [0, 1, 2, 3]
output: 4

arr = [0, 10, 3, 6, 9, 100, 1]
output: 2

english/plan:
//modify arr
sort the arr
set smallest = 0
loop thru arr
if curr == smallest -> increment smallest
return smallest

//no modify
create a set
create a smallest val
while smallest is not in set , increment smallest

//no modify, no set
push every num to corresponding index in array
[1, 3, 0, 2]
i = 0
temp = 1
arr[temp] = 3
swap(1, 3) -> [3, 1, 0, 2]

i = 1
temp = 1
arr[temp] = 1

i = 2
temp = 0
arr[temp] = 3
swap(0, 3) -> [0, 1, 3, 2]

i = 3
temp = 2
arr[temp] = 3
swap(2, 3) -> [0, 1, 2, 3]

*/

//WITH SORT
/*
function compareNumbers(a, b) {
  return a - b;
}

function getDifferentNumber(arr) {
  arr.sort(compareNumbers);
  let smallest = 0;
  for (var i in arr) {
    if (arr[i] === smallest) smallest++;
  }
  return smallest;
}
*/

//NO SORT , USE SET


/*
function getDifferentNumber(arr) {
  const arrSet = new Set(arr);
  let smallest = 0;
  while (arrSet.has(smallest)) smallest++;
  return smallest;
}

*/

//NO SORT, NO SET

function swap(arr, idx1, idx2){
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function getDifferentNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    if(arr[temp] !== temp) swap(arr, temp, arr[temp])
  }

  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    if(arr[temp] !== temp) swap(arr, temp, arr[temp])
  }

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== i) return i;
  }
  return arr.length;

}

var arr2 = [1, 0, 3, 4, 5]
var arr = [0, 10, 3, 6, 9, 100, 1]
console.log(getDifferentNumber(arr))