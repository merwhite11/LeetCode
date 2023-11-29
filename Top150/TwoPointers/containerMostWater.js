/*
input: int array height, length n -- each el reps a line starting at (i, 0) and ending at (i, height[i])

output: two lines whose height is the tallest and whose diff in indeces is the greatest -> return the diff in indeces x the min of the two heights

//examples
height = [1,8,6,2,5,4,8,3,7]
output: 49

height = [1, 1]
output: 1

//plan

height = 0
create var for left = 0
create var for right = 0
width = right - left
volume 

loop thru arra
while loop: 
for each el, compart to els right -> left
get width -> diff of indeces -> 8
get height -> min of array[left] arr[right]
multiply w x h
if > volume -> set to new volume 
right -- 
*/

var maxArea = function(height) {
    var volume = 0;
    for(let i = 0; i < height.length; i++) {
        let left = i;
        let right = height.length - 1;
        while(left < right) {
            var w = right - left;
            var h = Math.min(height[left], height[right]);
            var vol = w * h;
            volume = Math.max(vol, volume);
            if(height[left] < height[right]) left++;
            else right--;
        }
    }
    return volume;
};
var height = [1,1]

console.log(maxArea(height))