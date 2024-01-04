/*
input: non-empty arr of ints, target sum int
find all triplets in arr that sum up to target
output: arr of triplets that add up to target sum
constraints: triplets in ascending order internally
            triplets in outer array in ascending order

make a set out of array
input: [12, 3, 1, 2, -6, 5, -8, 6], target = 0
output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

sort array
[-8, -6, 1, 2, 3, 5, 6, 12]
loop
    




*/
function compareNumbers(a, b) {
    return a - b;
}

function threeNumberSum(array, targetSum) {
    array = array.sort(compareNumbers);
    var result = [];
    console.log('array', array)
    for(let i = 0; i < array.length; i++) {
        var curr = array[i];
        var next = i + 1;
        var last = array.length - 1;
        while(next < last) {
            var sum = curr + array[next] + array[last]
            if(sum > targetSum) {
                last --;
            }
            if(sum < targetSum) {
                next ++;
            }
            if(sum === targetSum) {
                result.push([curr, array[next], array[last]])
                next++;
            }
        }
    }
    return result;
  }

var array = [12, 3, 1, 2, -6, 5, -8, 6]
var targetSum = 0;
console.log(threeNumberSum(array, targetSum))