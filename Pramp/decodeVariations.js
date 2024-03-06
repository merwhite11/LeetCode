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

make counter array s.length, filled with 0's
[0, 0, 0, 0, 0]
set counter[0] = 1
loop i from 1 to end of storage arr

if s[i] != 0
  counter[i] += counter[i-1]

if s[i-1] == 1 ||
s[i-1] == 2 && s[i] < 7
  counter[i] += counter[i - 1] + counter[i-2]

return last el of counter



*/

function decodeVariations(s) {
  const n = s.length
  let counter = new Array(n).fill(0);
  console.log(counter)
  if(s[0] === '0') return 0;
  counter[0] = 1;
  for(let i = 1; i < n; i++) {

    if(s[i] != '0') counter[i]++;

    if(i > 0) {

      if(s[i-1] == '1') counter[i] += counter[i-1];

      if(
        s[i-1] == '2' && s[i] < 7
      ) counter[i] += counter[i-1];
    }

  }
  console.log('counter', counter)
  return counter[n-2]
}

var s = '1262'
console.log(decodeVariations(s))

/*
i=0
1 -> [1, 2, 0, 0, 0]

i=1
2 -> [1, 1, 1]

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

  if prev char forms valid 2 digit num with cur
    dp[i] = dp[i-2]

  return dp[n]

  walk thru

  dp = [1, 0, 0, 0, 0]

  i = 1
  cur = 2
  d[i] += d[i-1]
  [1, 1, 0, 0, 0 ]

  i = 2
  cur = 6
  not 0 -> dp[1] += dp[0] -> [1, 1, 1, 0, 0]
  prev is 2 -> [1, 1, 3, 0, 0]
  [1, 1, 3, 0, 0]

  i = 3
  cur = 2
  not 0 -> dp[3] += dp[2] -> [1, 1, 3, 3]

  i = 4
  cur = 2
  not 0 -> [1, 1, 2, 3]

  return 3
*/