/*
input:
arr of non-overlapping ints ints[i] = [start, end]
sorted in ascending order by start
newInterval = [start, end]

output:
insert newInterval into intervals such that intervals is sorted in ascheding order
intervals has no overlapping
return intervals after insertion

var intervals = [[1,3],[6,9]]
var newInterval = [2,5]
output: [[1,5],[6,9]]

var intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]]
var newInterval = [4,8]
output: [[1,2],[3,10],[12,16]]

merge conditions:
first el of new is less than curr[0] -> new[0]
end el of new is greater than curr[1] -> new[1] replaces

compare first el to curr start and ends
new[0] < curr[1]
  compare new[1] to curr[1] ->
  if curr is less than -> store start -> move on to next el
    is new[1] < curr[1] -> set curr[1] to new[1]
    while new[1] > curr[0] and curr[1] -> move on to next el

  if curr is greater than new[1] -> already included in range

compare new[0] to curr and 0 and 1
when new[0] is less than -> store the curr[0] -> start comparing new[1]
when new[1] is less than curr[0]-> make range out of stored start and new end
when new[1] is less than curr[1] -> make range out of stored start and curr end


plan:
result arr
loop thru the outer arr

//in front
if(new[1] < curr[0]) ->
  insert newint in front of arr

//between
if(new[0] < curr[1]) ->
  set start to curr[0]
  check end value
  move up curr to next el
  if(new[1] < curr[0])
    push [start, new[1]] to result

if(new[0] < curr[1] && new[1] > curr[1]) ->
  set start to be curr[0]
  while(new[1] > curr[0] && curr[1]) -> move to next el

  push

push curr to result

*/