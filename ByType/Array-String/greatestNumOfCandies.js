/*
input: int array - each el represents how many candies ith kid has
extra candies int
output: boolean arr of same length as input array
result[i] = true if el[i] + extra candies > all other els
result[i] = false if el[i] + extra candies is not the greatest

examples:
var candies = [2, 3, 5, 1, 3]
var extra= 3
output: [true, true, true, false, true]

var candies = [4,2,1,1,2]
var extraCandies = 1
output: [true,false,false,false,false]

var candies = [12, 1, 12]
var extra = 10
output: [true, false, true]

result = []
make a copy of arry and sort
loop thru the array
curr = add extra to curr
  if curr >= last el of sorted
  push true
  else push false

sorted = [1, 2, 3, 3, 5]
i = 0
curr = 2 + 3 >= 5 -> true

i = 1
cur= 3 + 3 > 5 -> true

i = 2
cur = 5 + 3 > 5 -> true

i = 3
cur = 1 + 3 < 5 -> false

i = 4
cur = 3 + 3 > 5 -> true

*/

var kidsWithCandies = function(candies, extraCandies) {
  let result = [];
  var sorted = [...candies].sort((a, b) => a -b)
  for(let el in candies) {
    if((candies[el] + extraCandies) >= sorted[sorted.length - 1]) result.push(true)
    else result.push(false)
  }
  return result;

};

// var candies = [2, 3, 5, 1, 3]
// var extra= 3

// var candies = [4,2,1,1,2]
// var extraCandies = 1

var candies = [12, 1, 12]
var extra = 10

console.log(kidsWithCandies(candies, extra))