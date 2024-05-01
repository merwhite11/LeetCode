/*
input: arr of unique neg ints
output: smallest nonneg int that is NOT in the arr
constraints: MAX_INT = 2^31-1

solve for optimal time complexity -> modify array
solve for optimal space complexity -> do NOT modify array

examples:
var arr = [0, 1, 2, 3]
output: 4

var arr = [0, 900, 23, 54]
output: 1

time complexity:
create smallestSoFar var = 0
sort arr
loop thru arr
  if arr[i] == smallest -> smallest ++
return smallest

space complexity:



*/
//SPACE COMPLEXITY
// function getDifferentNumber(arr) {
//   var smallest = 0;
//   arr.sort();
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === smallest) smallest++;
//   }
//   return smallest;
// }


//TIME COMPLEXITY
function getDifferentNumber(arr) {
  var smallest = 0;
  var arrSet = new Set(arr);
  var max_int = 2^31-1;
  while(smallest < max_int) {
    if(!arrSet.has(smallest)) return smallest;
    else smallest++;
  }
}
var arr = [0, 1, 2, 3]
var arr1= [0, 900, 23, 54]
console.log(getDifferentNumber(arr1))