/*
input: arr of nums
output: true if val appears at least twice, false if every el is unique

//example:
nums = [1, 2, 3, 1]
output: true

nums1= [1, 2, 3, 4]
output: false

nums3: [1,1,1,3,3,4,3,2,4,2]
output: true

numbs4: [10, 5, 6, 5]
//plan / walk-thru

//using set
make set of arr
if size of set is same as length of arr
return false

//no set - insertion sort
loop i through arr starting at 1
store curr val
loop j through array from i - 1
if arr[j] === curr val -> return
*/

//using set
/*
var containsDuplicate = function(nums) {
  const numsSet = new Set(nums);
  if (numsSet.size === nums.length) return false;
  return true;
};
*/

//using insertion sort to compare
var containsDuplicate = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    let currVal = nums[i];
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] === currVal) return true;
    }
  }
  return false;
}
var nums1= [1, 2, 3, 4]
var nums3 = [1,1,1,3,3,4,3,2,4,2]
console.log(containsDuplicate(nums1))