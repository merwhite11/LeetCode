/*
input: 1-indexed arr if ints that is sorted in asc order, target sum
output: 2 nums that add up to target - return indexes

//example
nums = [2, 7, 11, 15] target = 9
output: [1, 2]

nums1 = [2, 3, 4] target = 6
output: [1, 3]

nums2 = [-1, 0] target = -1
output: [1, 2]

//plan
start pointer i = 0
start pointer j = arr.length - 1

add them together

if sum > target , bring j down 
if sum < target, bring i up
if sum = target, return

*/
var twoSum = function(numbers, target) {
    var left = 0;
    var right = numbers.length - 1;
    while(left < right) {
        var sum = numbers[left] + numbers[right]
        console.log(sum)
        if(sum === target) return [left + 1, right +1];
        if(sum > target) right--;
        if(sum < target) left++;
    }
};

var nums = [2, 7, 11, 15]
var nums2 = [2, 3, 4]
var nums3 = [-1, 0]
var target = 9;

console.log(twoSum(nums3, -1))