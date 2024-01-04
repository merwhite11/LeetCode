/*
input: arr of unique chars, str
output: smallest substring containing all chars in arr or '' if doesn't exit

example:
var arr = ['x', 'y', 'z']
var str = 'xyyzyzyx'

plan:

create a smallest substring var set to length of string
left = 0
right = 0

keep moving right up 1
if visited is not already in arr, store visited in arr
x: 1
y: 2
z: 1

if storage keys.length === arr.length
create slice arr from l -> [x, y, y, z]
store as smallest

move l up 1
set r  to l
clear obj

x y y z y z y x
          l   r

[y, z, x]

slice arr from l -> r : [y, y, z, y, z, y, z]
if length is smaller, store as smallest




*/
function getShortestUniqueSubstring(arr, str) {
  var storage = [];
  var left = 0;
  var right = 0;
  var smallest = str;
while(left < str.length - arr.length) {

  while(storage.length < arr.length) {
    if(!storage.includes(str[right])) storage.push(str[right])
    right++;
  }
  var temp = str.substring(left, right)
  console.log('temp', temp)
  if(temp.length < smallest.length) {
    smallest = temp;
  }
  left ++;
  right = left;
  console.log(smallest)
}
}

var arr = ['x','y','z']
var str = "xyyzyzyx"
console.log(getShortestUniqueSubstring(arr, str))