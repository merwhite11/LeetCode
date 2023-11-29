// var nums = [2,7,1,5]
// var target = 9

var twoSum = function(nums, target) {
    var storage = {}
    for (var i = 0; i < nums.length; i++) {
        var current = nums[i]
        var complement = target - current
        console.log('complement', complement)
        if (storage[complement] !== undefined) {
            console.log('test')
            console.log(i, storage[complement])
            return [i, storage[complement]]
        } else {
            storage[current] = i
        }
    } 
    console.log('storage', storage) 
};

var result = twoSum([2,7,1,5], 9)
console.log('result:', result)
