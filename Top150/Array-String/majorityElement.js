/*
input: array of nums , size n
output: return the majority element -- appears more than n / 2 times

nums = [3, 2, 3]
output: 3

nums = [2, 2, 1, 1, 1, 2, 2]
output: 2

if nums is length 1 -> return nums[0]

create storage object
loop thru nums

if el isn't in storage -> instantiate w [index, 1]
else add 1 to el in storage at 1

var highest
loop thru vals of storage
    if curr[1] > n/2 && > highest[1]
    curr becomes new highest

return nums[highest[0]]


*/

var majorityElement = function(nums) {
    var storage = {};
    for(let i = 0; i < nums.length; i++) {
        var el = nums[i]
        if(!storage[el]) storage[el] = 1;
        else storage[el]++;
    }
    console.log(storage)
    var highest = [0, 0];
    for(let key in storage) {
        var curr = storage[key];
        if(curr > (nums.length/2) && curr > highest[1]) {
            highest = [key, curr]
        }
    }
    return highest[0];
};

var nums = [2, 2, 1, 1, 1, 2, 2]
console.log(majorityElement(nums))