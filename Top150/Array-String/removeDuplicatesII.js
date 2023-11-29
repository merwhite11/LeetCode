/*
input: array of ints in ascending order
if there are repeat els, remove repeats so that there are only 2
output: return k after placing final result in first k slots of nums

nums = [1, 1, 1, 2, 2, 3]
output: 5, nums = [1, 1, 2, 2, 3, _]

nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
output: 7, nums = [0, 0, 1, 1, 2, 3, 3, _, _]

create count var set to 1 -- this is where the next unique el will be 'inserted' at
loop i thru arr starting at 1
    if curr == count prev // 0 = 0 
    duplicate = true
    count ++ // 2

count = 2
i = 2 // 1
prev = 0
1 != 0
    count ++

count = 3
i = 3 // 1
prev = 1
1 === 1

count = 3
i = 4 //1
prev = 1
1 = 1

count = 3
i = 5 //1
prev = 1
1 = 1

count = 3
i = 6
prev = 1
2 != 1
nums[i] = nums[count+1]
[0, 0, 1, 1, 2, 1, 2, 3, 3]
count += 2

count = 5
i = 7
prev = 2
3 != 2

*/

var removeDuplicates = function(nums) {
    if(nums.length <= 2) return nums.length;
    let prev1 = nums[0];
    let prev2 = nums[1];
    let pivot = 2;
    for(let i = 2; i < nums.length; i++) {
        var curr = nums[i];
        if(curr !== prev1 || curr !== prev2) {
            nums[pivot] = curr;
            pivot++;
        }
        prev1 = prev2;
        prev2 = curr;
    }
    console.log(nums)
    return pivot;
}


var nums = [1, 1, 1, 2, 2, 3]
console.log(removeDuplicates(nums))

/*
[0, 0, 1, 1, 1, 1, 2, 3, 3]

i = 2 // 1
prev 1 = 0
prev 2 = 0
pivot = 2
nums[2] = 1
pivot ++

prev 1 = 0
prev2 = 1

i = 3 //1
nums[3] = 1
pivot = 4
prev1 = 1
prev2 = 1

i = 4 //1
prev1 = 1
prev2 = 1

i = 5 //1
prev1 = 1
prev2 = 1

i = 6 //2
nums[4] = 2
[0, 0, 1, 1, 2, 1, 2, 3, 3]
pivot = 5

prev1 = 1
prev = 2

i = 7 //3
nums[5] = 3
[0, 0, 1, 1, 2, 3, 2, 3, 3]
pivot = 6

prev1 = 2
prev2 = 3

i = 8 // 3
nums[6] = 3

prev1 = 3
prev2 = curr

*/