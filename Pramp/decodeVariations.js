/*
input: string of digits from 0-9 repping encode message, return the number of ways to decode it
output: number of ways to decode it

example:
input: s = '126214'
output: 3

1 -> 1 or 12
2 -> 2 or 26
6 -> 6
2 -> 2 or 21

counter = 1

for each position, find the possible nums they can be
make an array of arrays
[[1, 12], [2, 26], [6], [2, 21], [1, 4], [4]]

make array with all 0 els -> [A, B, F, B]

loop i thru arr
  curr = arr[i]
  loop j thru arr
    if there's a 1 el at curr
    add one to counter
    skip next j++

i = 0
j = 0
counter = 2

i = 1
j = 1
counter = 3


make array with all 1 els
if there is a 1 el skip next el
if no 1 el, use 0 el -> [L, F, B]


one by one -> 1, 2, 6, 2 -> ABFB

two by two -> 12, 6, 2 -> LFB
              1, 26, 2 -> AZB


loop thru once to get one by ones

loop thru again to get two by twos
  if there's a next
    if el is 1
      decode 'curr + next'
      push to result
      i ++
    if el is 2 and next is < 7
      decode 'curr + next'
      push to result
      i++
  else push to result

  walk-thru

  counter

  one by one loop
  1 -> A -> res = [A]
  2 -> B //res = [AB]
  6 -> F //res = [A,B,F]
  2 -> B // res = [A, B, F, B]

loop thru array

  i= 0
  curr = 1
  next = 2
  cur = 12
  res = [L]
  i++

  i = 2
  curr = 6
  res = [L, F]

  i = 3
  curr = 2
  res = [L, F, B]



*/

function decodeVariations(s) {
  let count = 1;
  possibles = []
  for (let i = 0; i < s.length; i++) {
    let curr = s[i]
    if (
      s[i + 1] &&
      ((curr === '1') ||
        (curr === '2' && s[i + 1] < 7))
    ) {
      function recursive()

    }
  }
  console.log(count)
}

var s = '126214'
decodeVariations(s)

/*
1, 2, 6, 2, 1, 4
1, 26, 2, 1, 4
1, 26, 21, 4
1, 26, 2, 14

12, 6, 2, 1, 4
12, 6, 21, 4
12, 6, 2, 14



1, 26,
12, 6, 2, 1, 4
1, 26, 2, 1, 4

1, 2

create empty arr = length of input arr
[0, 0, 0, 0]

loop thru input arr back to front
  if el === 0
  set poss[i] = 0

  if el == 1
    dp[i] = dp[i+1] + dp[i+2]

  if el == 2
    dp[i] = dp[i+1]
    if s[i+1] && s[i+1] < 7
      dp[i] += dp[i+2]
  else
    dp[i] = dp[i+1]

  ///walk-thru '1262'

  i = 3
  el = 2

  dp[3] = dp[4] ..doesn't exist??
  //////////////////////////

  decision tree

  edge -> if starts with 0, break

  subproblem:
  take a char -> how many diff ways can we decode remaining chars

  start at end of arr

  1262

  i = 3
  cur = 6
  dp[i] = 1 //[-,-,-,1]

  i = 2
  cur= 6
  dp[i] += dp[i+1] // [-,-,1,1]

dp = [s.length] or 1 //dp ={4: 1}


///////////////////////////////

iterate through string
build up array where each idx represents the number of ways to decode the substring to that index

initialize an array 'dp' of size s.length + 1 [0, 0, 0, 0, 0]

edge: set dp[0] = 1 -> only one way to decode empty string [1, 0, 0, 0, 0]

iterate thru string starting at 1
  if cur char is not '0'
    update d[i] = d[i-1]

  if prev char to see if forms valid 2 digit num with cur
    dp[i] = dp[i-2]

  return dp[n]

  walk thru

  dp = [1, 0, 0, 0, 0]

  i = 1
  cur = 1
  d[i] += d[i-1]
  [1, 1, 0, 0, 0 ]

  i = 2
  cur = 2
  not 0 -> dp[2] += dp[1] -> [1, 1, 1, 0, 0]
  12 is valid two digit dp[2] += dp[0]
  [1, 1, 2, 0, 0]

  i = 3
  cur = 6
  not 0 -> dp[3] += dp[2] -> [1, 1, 2, 2]
  valid with prev -> dp[3] += dp[1]
  [1, 1, 2, 3]

  i = 4
  cur = 2
  not 0 -> [1, 1, 2, 3]

  return 3
*/