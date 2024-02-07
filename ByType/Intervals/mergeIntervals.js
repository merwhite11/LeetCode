/*
input: array of intervals where ints[i] = [start, end]
merge all overlapping ints
output: return array of the non-overlapping ints that cover all the ints in the input

//example:
var ints = [[1,3], [2, 6], [8, 10], [15, 18]]
output: [[1,6], [8,10], [15,18]]

var ints = [[1,4], [4,5]]
output: [[1, 5]]

plan:


pointer for curr
pointer for next

if curr[1] >= next[0] -> combine range -> push to result
set curr to last of result arr[1]
next++

else curr++ next++
*/

var  merge = function(intervals) {
  let ans = [];
  intervals.sort((a, b) => a[0] - b[0]);

  if(intervals.length === 0) {
    return ans;
  }

  let temp = intervals[0];
  for(let i = 0; i < intervals.length; i++) {
    if(intervals[i][0] <= temp[1]) {
      temp[1] = Math.max(temp[1], intervals[i][1]);
    } else {
      ans.push(temp);
      temp = intervals[i];
    }
  }
  ans.push(temp);
  return ans;
}

var ints = [[1,3], [2, 6], [8, 10], [15, 18]]
var ints1 = [[1,4], [4,5]]
var ints2 = [[1,4],[0,4]]
merge(ints2)