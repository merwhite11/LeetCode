/*
input: array of int nums, sorted in ascending order
output: change the array nums in place so that first k els contain unique els 
in their original order
return k

nums = [1, 1, 2]
output: 2, nums = [1, 2, _]

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] && j < duplicates
output: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _, _]

i = 0
j = 1
count = 1
duplicates = array.length - 1 
while the curr el is equal to the next el 
    keep increasing j until el does not equal curr

    when you find the first different el
    set next to equal that element 
    i becomes j index
    j becomes j + 1
    count ++ 

i = 0 
j = 1
count = 1
duplicates = 2

1 = 1
j++

i = 0
j = 1
count = 0

1 !== 2
[1, 2, 1]
i = 1
j = 2
count = 2


[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

[1, 1, 2, 3]
*/

// var removeDuplicates = function(nums) {
//     var i = 0;
//     var j = 1;
//     var repeat = false;
//     var count = 0;

//     while(i < nums.length) {
//         if(nums[i] === nums[j]) {
//             j++;
//             repeat = true;
//         } else if(nums[i] != nums[j] && repeat) {
//             count ++;
//             nums[count] = nums[j];
//             i = j;
//             j++;
//             // repeat = false;
//         } else {
//             j++;
//             i++;
//             count++;
//             repeat = false;
//         }
//     }
//     console.log(nums)
//     return count;
// };

var removeDuplicates = function(nums) {
    if(nums.length === 0) {
        return 0;
    }
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[count-1]) {
            nums[count] = nums[i];
            count++;
        }
    }
    console.log(nums)
    return count;
}
var nums = [1, 1, 2, 3]
var nums1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums))

/*
count = 1
i = 1 // 0
prev = 0 

count = 1
i = 2 // 1
count prev = 0
[0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
count = 2

i = 3 // 1
count prev = 1

i = 4 //1
count prev = 1

i = 5 //2
count prev = 1
[0, 1, 2, 1, 1, 2, 2, 3, 3, 4]
count = 3

i = 6 //2
count prev = 2

i = 7 // 3
count prev = 2
[0, 1, 2, 3, 1, 2, 2, 3, 3, 4]
count = 4

i = 8 //3
count prev = 3

i = 9 //4
count prev = 3
[0, 1, 2, 3, 4, 2, 2, 3, 3, 4]



*/

