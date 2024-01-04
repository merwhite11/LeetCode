/*
input: sorted arr of unique ints
output: smallest sorted list of ranges that cover all the numbers in the arr exactly. List of strings: ["a", "b->c", "d->f"]
range = [a,b] -> set of all ints from a to b inclusive

examples:
var nums = [0, 1, 2, 4, 5, 7]
output: ["0->2", "4->5", "7"]

var nums = [0, 2, 3, 4, 6, 8, 9]
output: ["0", "2->4", "6", "8->9"]

plan:
result
create a range pointer = 1
i = 0
if the range is 1 greater than curr
  while the range el is 1 greater than curr
    keep adding to range
push ["nums[i]->nums[range"] to result
else push "nums[i]" to result

i = 0
range = 0
str = 0
  WHILE
    str = 0->1
    range = 1

    str = 0 -> 2
    range = 2
  PUSH STR
    range = 3
    i = 3



*/

var summaryRanges = function(nums) {
  let res = [];
  let range = 0;
  let i = 0;
  while(range < nums.length) {
    let str = nums[range].toString();
    while(range + 1 < nums.length && nums[range] + 1 === nums[range + 1]) {
      str = `${nums[i]} -> ${nums[range+1]}`;
      range++;
    }
    res.push(str);
    range++;
    i = range;
  }
  return res;

};

var nums = [0, 2, 3, 4, 6, 8, 9]
console.log(summaryRanges(nums))