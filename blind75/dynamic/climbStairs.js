/*
input: number of stairs
output: how many combinations of 1 and 2 can sum up to input n

example:
n = 2
output: 2 -> 1 + 1 // 2

n = 3
output: 3 -> 1 + 1 + 1 // 1 + 2 // 2 + 1

//plan
recursive approach

recursive func takes in stairsClimbed
base case
when stairsClimbed = n -> return 1

base case
stairsClimbed > n return

call recursive(stairsClimbed + 1) + recursive(stairsClimbed + 2)

recursive(0)

// first call: rec(0)
second : 2 +                   1
           1  + 1                  1 + 0
            1   +  1                   return 1    return 0
             return 1


                                                   0
                                     /                           \
                                    1                             2
                                   / \                           / \
                                  1   2 -> return 1   return 1<-1   2 -> return 0
                                 / \
                      return 1<-1   2 -> return 0
                                 \
                                  2 -> return 0




*/

//RECURSIVE SOLUTION
//2^n time complexity -> tree the height of n
/*
var climbStairs = function(n) {
  const countWays = (stairsClimbed) => {
    if (stairsClimbed === n) return 1;
    if (stairsClimbed > n) return 0;
    return countWays(stairsClimbed + 1) + countWays(stairsClimbed + 2);
  }
  return countWays(0)
};

var n = 3
console.log(climbStairs(n))
*/

//DYNAMIC SOLUTION

/*
store decision tree in cache aka dp
eliminate repeated work
only solve each subproblem once -> subproblem of 1, 2, 3..n -> time complexity O(n)

//
start at the bottom, solve the base case -> bottom up dp
start at second to last el -> last 2 will always be 1, 1
work backwards -> take next two els and add them to make prev
      X
0 1 2 3 4 5
8 5 3 2 1 1

initialize two vars - first and second - they will store vals you need to create next step

store first in temp // temp = 1
let first = temp + second  //first = 1 + 1
let second = temp //second = 1

//top up dp
create a numOfWays arr w 0 idx = 1 and 1 idx = 1 [1, 1]

numWays[2] = numWays[2-1] + numWays[2-2] -> 1 + 1 -> 2
numWays[3] = numWays[3-1] + numWays[3-2] => 2 + 1 -> 3

s, 1, 2, 3
1, 1, 2, 3

while numWays.length < n
  let next = numWays.length
  numWays[next] = numWays[next - 1] + numWays[next - 2]

return numWays[numWays.length - 1]
*/
var climbStairs = function(n) {
  let first = 1;
  let second = 1;
  let steps = n - 2;
  while (steps >= 0) {
    let temp = first;      //1 //2 //3 //5
    first = temp + second; //2 //3 //5 //8
    second = temp;         //1 //2 //3 //5
    steps--;               //4 //3 //2 //1
  }
  return first;
}

var n = 5
console.log(climbStairs(n))