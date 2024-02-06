/*
input: sorted unique integer arry nums
range is the set of all ints from a to b inclusive
output: smallest sorted list of ranges that cover all the nums in the array exactly.

//examples
var nums = [0,1,2,4,5,7]
output: ["0->2", "4->5", "7"]

var nums = [0, 2, 3, 4, 6, 8, 9]
output: ["0","2->4","6","8->9"]

//plan:
pointer s for start range : set to 0
pointer e for end range : set to 1

result arr

if next is curr + 1
  while next is +1 of curr
    end ++
format start and end as strings, push to resutl

format start -> push to result
*/

var summaryRanges = function(nums) {
  var s = 0;
  var n = s;
  var e = 1;
  var result = [];
 while(e <= nums.length) {
   if(nums[n] + 1 === nums[e]) {
     while(nums[n] + 1 === nums[e]) {
       n++;
       e++;
     }
     var range = `"${nums[s]} -> ${nums[n]}"`
     result.push(range)
     s = e;
     n = s;
     e = e + 1
   } else {
    result.push(`"${nums[s]}"`)
    s++;
    n++;
    e++;
   }
 }
return result
};

var nums = [0, 2, 3, 4, 6, 8, 9]

summaryRanges(nums)

//walkthru
/*
s = 0
n = 0
e = 1
0 + 1 = 1
  n = 1
  e = 2
1 + 1 = 2
  n = 2
  e = 4
PUSH RANGE 0 -> 2
BREAK out of inner while
s = 4
n = 4
e = 5
4 + 1 = 5
  n = 5
  e = 7
PUSH RANGE 4 -> 5
BREAK

*/