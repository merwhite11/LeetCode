/*
input: int nums
output: array where answer[i] equals product of all the els of nums except nums[i]
constraint: must be O(n) time , no division

example:

var nums = [1, 2, 3, 4]
output: [24, 12, 8, 6] //[2*3*4], [1*3*4], [1*2*3]

var nums = [-1,1,0,-3,3]
output: [0,0,9,0,0]

plan/walk-thru:
[1, 2, 3, 4]
 c
create a result arr
saveProduct = 1
loop thru arr
currProduct = 1
factorIdx = i + 1
while factorIdx < length
  currProduct *= arr[factorIdx]
  factorIdx ++
push (currProduct * saveProduct)
store saveProduct *= arr[i]

saved = 1
i = 0
curr = 1
factorIdx = 1
WHILE -> (1*2) -> 2
  factorIdx 2
  (2*3) -> 6
  factorIdx 3
  (6*4) -> 24
push (24 * 1)
saveProduct *= 1

saved = 1
i = 1
curr = 1
factorIdx = 2
WHILE -> (1 * 3) -> 3
  factorIdx 3
  (3 * 4) -> 12
push (12 * 1)
saveProduct *= 2

saved = 2
i = 2
curr = 1
factorIdx = 3
WHILE -> (1 * 4) -> 4
push (4 * 2)
saveProduct *= 3

saved = 6
i = 3
curr = 1
factorIdx = 4
push (4 * 6)
saveProduct *= 4


/////

const n = nums.length
const result = []
leftProd = []
rightProd = []
leftProd[0] = 1
rightProd[n - 1] = 1

loop i from 1 to length
  curr left prod = prev left prod * prev nums
  i = 1
  leftProd = 1 * 1 -> [1, 1]
  i = 2
  leftProd = 1 * 2 -> [1, 1, 2]
  i = 3
  leftProd = 2 * 3 -> [1, 1, 2, 6]

loop i from n - 2 to 0
  curr right prod = next right prod * next nums
  i = 2
  rightProd = 1 * 4 -> [    4, 1]
  i = 1
  rightProd = 4 * 3 -> [ 12, 4, 1]
  i = 0
  rightProd = 12 * 2 -> [24, 12, 4, 1]

loop from 0 to n
  curr output = curr leftprod * curr rightProd
  i = 0
  [24]
  i = 1
  [24, 12]
  i = 2
  [24, 12, 8]
  i = 3
  [24, 12, 8, 6]



//time complexity O(m * n)
i = 0 -> loop thru 1 -> 4 multiply to sum
i = 1 -> loop thru 0 -> 1 AND 2 -> 5
i = 2 -> loop thru 0 -> 2 AND 3 -> 5
i = 3 -> loop thru 0 -> 3 AND 4 -> 5

create a result arr
loop i from 0 to end
  let product = 1
  if i > 0
    create subarray from 0 to i -> reduce subarray -> multiply to product
  create subarray from i + 1 to end -> reduce subarry -> multiply to product
  push to result arr

i = 0
slice(1, 5) -> reduce([0, 3, 2, 5]) -> 1
product *= 1
result = [1]

i = 1
slice (0, 1) -> reduce(1) -> 1
slice (2, 5) -> recudec([3, 2, 5])
*/

/*
var productExceptSelf = function(nums) {
  let result = [];
  let savedProd = 1;
  for (let i = 0; i < nums.length; i++) {
    let currProd = 1;
    let factorIdx = i + 1;
    while (factorIdx < nums.length) {
      currProd *= nums[factorIdx];
      factorIdx++;
    }
    result.push(savedProd * currProd);
    savedProd *= nums[i]
  }
  return result;
};
var nums1 = [-1,1,0,-3,3]
var nums = [1, 2, 3, 4]
console.log(productExceptSelf(nums1))
*/

var productExceptSelf = function(nums) {
  const n = nums.length;
  const output = [];

  const leftProducts = [];
  const rightProducts = [];
  const leftProducts[0] = 1;
  const rightProducts[n - 2] = 1;

  for (let i = 1; i < n; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }
  for (let i = n - 2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
  }
  for(let i = 0; i < n; i++) {
    output[i] = leftProducts[i] * rightProducts[i]
  }
}