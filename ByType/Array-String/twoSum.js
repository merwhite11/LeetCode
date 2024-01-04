/*
input: array of ints and target
output: indices of the 2 nums that add up to target

examples:
nums = [2, 7, 11, 15]
target = 9
[0, 1]

var nums = [3, 2, 4]
var target = 6
[1,2]

var nums = [3, 3]
var target = 6
[0, 1]

plan:
create result array
loop thru array
subtract current from target = diff
check if diff is in array
if it is -> push index of diff to result

*/
//MORE MEMORY , BUT FAST
var twoSum = function(nums, target) {
  const numsMap = new Map();
  for(let i = 0; i < nums.length; i++) {
    var diff = target - nums[i];
    if(numsMap.has(diff)) {
      console.log(numsMap)
      return [numsMap.get(diff), i]
    }
    numsMap.set(nums[i], i)
  };
};

/*
//LESS MEM, BUT SLOW
var twoSum = function(nums, target) {
  var result = [];
  for(let i = 0; i < nums.length; i++) {
    var diff = target - nums[i];
    if(nums.indexOf(diff) > -1 && nums.indexOf(diff) !== i) {
      result.push(i, nums.indexOf(diff))
      return result;
    }
  }
  return result;
};
*/
// var nums = [2, 7, 11, 15]
// var target = 9

// var nums = [3, 3]
// var target = 6

var nums = [3, 2, 4]
var target = 6
console.log(twoSum(nums, target))