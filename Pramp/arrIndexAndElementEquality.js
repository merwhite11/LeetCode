/*
Given a sorted array arr of
distinct integers, write a function
indexEqualsValueSearch that returns the
lowest index i for which arr[i] == i.
Return -1 if there is no such index.
Analyze the time and space complexities of your
solution and explain its correctness.

input: arr = [-8,0,2,5]
output: 2 # since arr[2] == 2

input: arr = [-1,0,3,6]
output: -1 # since no index in arr satisfies arr[i] == i.


plan/walk-thru

//naive
[2, 5, 8, 11, 14, 21, 24]
target = 21
linear -> for loop, check if each el matches -> O(n)

create var to store lowest so far
loop i thru arr
if i === arr[i] && i < lowestSoFar
  update lowestSoFar

return lowestSoFar


input: arr = [-8,0,2,5]
//binary search

let left = 0
let right = arr.length - 1

while left < right
  let midIdx = Math.floor(left + right)/2 //1 //2
  let midVal = arr[midIdx] -> val = 0 //2
  if val === idx -> return
  if val < idx
    left = midIdx + 1 //2
  else
    right = midIdx - 1
*/

function indexEqualsValueSearch(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let midIdx = Math.floor((left + right)/2);
    let midVal = arr[midIdx];
    if (midVal === midIdx) return midVal;
    if (midVal < midIdx) left = midIdx + 1;
    else right = midIdx -1
  }
  return -1;
}

var arr = [-1,0,3,6]
console.log(indexEqualsValueSearch(arr))