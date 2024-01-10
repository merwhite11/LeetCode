/*
array method takes in a callback function
write the callback function

1. myMap takes in a callback function
callback function takes in curr val, curr idx, array
gets called on every el of array
returns a new array containing the results of all the calls in same order
don't mutate og array

2. myFilter takes in callback
callback takes in curr val, curr idx, array
call on every el of array
return array of els that return true when passed into callback

3. myReduce takes in callback and initial val
callback takes in
  acc: return of val of prev call to callback. set acc to initial val for first call
  if initialVal is undefined, then set to first val in array.
  callback skips call on first el, calls on second el.
  curr val
  curr idx
  array

  plan:
  1. myMap
  create a result array
  loop through array aka this
  push return of calling callback with each el to result

  plan myReduce
  create an acc var set to initial val
  if initial val = undefined, set i = 1
  loop thru the arr
  call callback with each el and add to acc

*/
var addOne = (curr, idx, arr) => curr + 1

var isEven = (curr, idx, arr) => {
  return (curr + idx + arr[1]) > 5;
}

var total = (acc, curr, idx, arr) => {
  console.log('sum', acc + curr + idx + arr[1])
  return acc + curr + idx + arr[1];
}

Array.prototype.myMap = function (callback) {
  var result = [];
  var arr = this;
  for(i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr))
  }
  return result;
};

Array.prototype.myFilter = function(callback) {
  var result = [];
  var arr = this;
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i], i, arr) !== null) result.push(arr[i])
  }
  return result;
}

Array.prototype.myReduce = function(callback, initialValue) {
  const arr = this;
  let acc = initialValue;
  //if it's an empty arr -> return acc
  if(arr.length === 0) return acc;
  //if the first el is undefined, set acc to second el
  let i;
  if(initialValue === undefined) {
    i = 1;
    acc = arr[0];
  } else i = 0;
  for(i; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr)
  }
  return acc;
}

var arr = new Array();
arr.push(0);
arr.push(2);
arr.push(3);
// arr.push(5)

// console.log(arr.myMap(addOne))

// console.log(arr.myFilter(isEven))

console.log(arr.myReduce(total, 0))