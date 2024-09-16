/*
input: unsorted arr of ints, target sum number
output: four nums in arr that sum up to target sum,return in arr in ascending order
edge: no quadruplet -> return empty array
edge: may be more than one quadruplet, return first encountered

//example:
arr = [2, 7, 4, 0, 9, 5, 1, 3]
s = 20
output: [0, 4, 7, 9]

english:
go through the array, add up every combo of 4, if equal to target -> sort and return

code plan:
sort arr
[0, 1, 2, 3, 4, 5, 7, 9]

loop i thru arr start at 0
  let first = arr[i]
  loop j thru arr start at i + 1
    let second = arr[j]
    get  first + second -> subtract from target -> diff
    let last = arr.length - 1
    let mid = j + 1
    while mid < last



[0, 1, 2, 3, 4, 5, 7, 9]

loop i thru arr
  let curr = arr[i]
  while next < last && next > curr
    next = 1
    last = 9
    threeSum = 10
    diff = 10


    if diff < arr[last]
      last --
    if diff > arr[last]
      next ++


//i = 0
first = 0
  second = 1
  startsum = 1
  diff = 19
  mid = 2
  last = 7
  //while mid < last
  endSum = 11

  if endSum > diff
  last --
  if endSum < diff
  mid ++
  //while
  mid++
  endsum = 12
  //while
  endsum = 13
  mid++
  //while
  endsum = 14
  mid ++
  //while
  endsum = 16


//i = 1
curr = 1
  //while
  next = 2
  last = 9
  sum = 12
  diff = 8
  next ++ -> 3
    //while
    next = 3
    last = 9
    sum = 13
    diff = 7
    last -- -> 7






*/

function compareNumbers(a, b) {
  return a - b;
}

function findArrayQuadruplet(arr, s) {
  arr.sort(compareNumbers);
  console.log(arr)
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i];
    for (let j = i + 1; j < arr.length - 1; j++) {
      let second = arr[j];
      let diff = s - (first + second);
      let mid = j + 1;
      let last = arr.length - 1;
      while (mid < last) {
        console.log('mid', arr[mid])
        console.log('last', arr[last])
        let endSum = arr[mid] + arr[last];
        if (endSum == diff) return [first, second, arr[mid], arr[last]]
        else if (endSum < diff) mid++;
        else last--;
      }
    }
  }
  return [];
}

var arr = [1, 2, 3, 4, 5, 9, 19, 12, 12, 19]
var s = 40
console.log(findArrayQuadruplet(arr, s))