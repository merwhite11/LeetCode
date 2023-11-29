/*
input: array of ints and val
output: array with all occurences of int removed in place (no new array) 
return number of els in nums which aren't equal to val

constraints: change the array nums so that first k els are the els that don't equal val. 
return k

nums = [3, 2, 2, 3], val = 3
output: 2 nums = [2,2,_,_]

nums = [0, 1, ,2 2, 3, 0, 4, 2], val = 2
output: 5, nums = [0, 1, 4, 0, 3, _, _]

need a pointer to keep track of last position of vals stored at back of array

end = array.length - 1
count = 0

while i is < length

    if curr = val
            var temp = nums[0]
            nums[0] = nums[k]
            nums[k] = temp
            end --
    if curr does not equal val
        count ++
        i++

end = 3
count = 0
i = 0

3 = 3
[3, 2, 2, 3]
end --

////
end = 2
count = 0
i = 0

3=3
nums[0] = nums[2]
[2, 2, 3, 3]
end--

///
end = 1
count = 0
i = 0

2 != 3
count = 1
i++

//
end = 1
count = 1
i = 1

2 != 3
count = 2
i++
///
end = 1
count = 2
i = 2

if count > end -> return 


*/

var removeElement = function(nums, val) {
    var end = nums.length - 1;
    var count = 0;
    var i = 0;
    console.log(end)
    while(i <= end) {
        if(nums[i] === val) {
            nums[i] = nums[end];
            nums[end] = 'x'
            end --;
            console.log('swap', nums)
        } else {
            count ++;
            i++;
        }
    }
    console.log('nums', nums)
    return count;
};

var nums = [0, 1, 2, 2, 3, 0, 4, 2]
var val = 2

console.log(removeElement(nums, val))

/*
0
end = 7
count = 0
i = 0

[0, 1, 2, 2, 3, 0, 4, 2]

1
end = 7
count = 1
i = i

[0, 1, 2, 2, 3, 0, 4, 2]

2
end = 7
count = 2
i = 2

[0, 1, 2, 2, 3, 0, 4, 2]

2
end = 6
count = 2
i = 2

[0, 1, 4, 2, 3, 0, 2, 2]

2
end = 5
count = 3
i = 3

[0, 1, 4, 2, 3, 0, 2, 2]

2


*/