/*
input: array of ints, integer
output: true if there are 2 duplicate els (at indices i and j) and if abs(i - j) <= integer

examples:
var nums = [1,2,3,1]
var k = 3
i = 0, j = 3 // 0 - 3 <= 3

var nums = [1, 0, 1, 1]
var k = 1
i = 2, j = 3 // 2 -3 <= 1

var nums = [1, 2, 3, 1, 2, 3]
var k = 2

plan :
create map of arr
loop j through arr
if curr is in map
  i = get the value (index) of curr in map
  if abs(i - j) <= k -> return true

store curr val, j in map

return false
*/

var containsNearbyDuplicate = function(nums, k) {
  var numsMap = new Map();
  for(let i = 0; i < nums.length; i++) {
    if(numsMap.has(nums[i])) {
      var j = numsMap.get(nums[i]);
      console.log(numsMap)
      if(Math.abs(i -j) <= k) return true;
    }
    numsMap.set(nums[i], i)
  }
  return false;
};

// var nums = [1,2,3,1]
// var k = 3
// var nums = [1, 0, 1, 1]
// var k = 1
var nums = [1, 2, 3, 1, 2, 3]
var k = 2
console.log(containsNearbyDuplicate(nums, k))

