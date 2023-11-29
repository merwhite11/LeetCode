/*
input: two int arrays sorted in ascending order, 2 intos repping the number of els in arrays
output: single array sorted in ascending order
constraints: final sorted array stored in nums1. nums 1 has length of m + n ( 0 for n) and nums 2 has length of n

nums1 = [1, 2, 3, 0, 0, 0]
nums 2 = [2, 5, 6]
m = 3
n = 3
output: [1, 2, 2, 3, 5, 6]

set i pointer:  m - 1 (the last num1 before the 0's)
set j pointer: n -1 last el in nums2 
set k to nums1.length -1 (last 0)

is nums1[i] greater than nums2[j]
    NO -> so now update, k to be nums2[j]

*/

var merge = function(nums1, m, nums2, n) {
   let i = m - 1;
   let j = n - 1;
   let k = (m+n) - 1;

   while(i >= 0 && j >= 0) {
        if(nums1[i] >= nums2[j]) {
            nums1[k] = nums1[i]
            k --;
            i --;
        } else {
            nums1[k] = nums2[j]
            k --;
            j --;
        }
    }
    console.log(nums1)
    while(i >= 0) {
        nums1[k] = nums1[i]
        k--;
        i--;
    }
    while(j >= 0) {
        nums1[k] = nums2[j]
        k --;
        j --;
    }
    console.log('nums2', nums2)
};

var nums1 = [1, 2, 3, 0, 0, 0]
var nums2 = [2, 5, 6]
var m = 0
var n = 1
console.log(merge(nums1, m, nums2, n))


/*
[1, 2, 3, 0, 0, 0]
[2, 5, 6]

i = 2
j = 2
k = 5

3 < 6
1, 2, 3, 0, 0, 6

k = 4
j = 1
i = 2
3 < 5
1, 2, 3, 0, 5, 6

k = 3
j = 0
i = 2
3 > 2
1, 2, 3, 3, 5, 6

k = 2
i = 1
j = 0
2 >= 2
1, 2, 2, 3, 5, 6







*/