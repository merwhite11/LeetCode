/*
input: int array , int repping how much you need to rotate by
output: array rotated by k ints

//example
nums = [1, 2, 3, 4, 5, 6, 7] k = 3
output: [5,6,7,1,2,3,4]

nums = [-1,-100,3,99], k = 2
output: [3,99,-1,-100]


[4, 2, 3, 1, 5, 6, 7]
 i           s

[4, 2, 3, 1, 5, 6, 7]
    i           s

[5, 6, 3, 4, 1, 2, 7]
       i           s 

start by swapping 0 and array.length -k - 1

[1, 2, 3, 4]

[3, 2, 1, 4]

[3, 4, 1, 2]
k is how many els from end you need to start

loop thru array starting at array.length -k
push to res arr

then loop thru og arr starting at 0 -> array.length -k 
push to res arr
*/
function reverseArr(nums, l, r) {
    while(l < r) {
        let temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
        l++;
        r--;
    }
}

var rotate = function(nums, k) {
    var k = k % nums.length;
    l = 0;
    r = nums.length - 1;
    nums = reverseArr(nums, l, r)

    l = 0;
    r = k - 1;
    nums = reverseArr(nums, l, r);

    l = k;
    r = nums.length - 1;
    nums = reverseArr(nums, l, r);
    
}

var arr = [1, 2, 3, 4, 5, 6, 7]

var nums = [-1,-100,3,99]
var k = 3
console.log(rotate(arr, k))
