/*
input: arr of coin types, int amt representing total value
output: fewest coins you need to make amount
edge: if you can't make amt return -1

examples:
var coins = [1, 2, 5]
var amt = 11
output :3

var coins = [2]
var amt = 3
output: -1

var coins = [1]
var amt = 0
output: 0

//plan/walk-thru

1 -> 11
2 -> 5 + 1 (1)
5 -> 2 + 1(1)

edge case: which coin val < amt -> return -1;
edge case: when coins > amt -> return 0;
base case: when val = amt -> return numCoins

                                                  5
                               /                  |        \
                              4                   3         0 Return 1
                            / | \                 |
                           3  2  -1 Return        1
                          /                       |
                         2                        -1 Return 0
                      /  |            \
                     1   0 Return 4   -3 X
                   /
                  0 Return 5

bottom up dp (leaf up)
start at 0 -> 0 coins sum to 0
how many coins sum to 1 -> 1 coin
let minCoins = 1
[1, 3, 4, 5]
dp[0] -> 0
dp[1] -> 1
dp[2] -> check coins, if they're less than sum, add until you get target -> 2
  1 + dp[1] -> 2
dp[3] -> check coins, if they're less than or equal to -> 1
dp[4] -> 1
dp[5] -> 1
dp[6] -> dp[5] + dp[1]
dp[7] -> 1 + dp[6] -> 3
         1 + dp[4] -> 2

let dp = [amt + 1] * (amt + 1) //default val so you can check at the end
dp[0] = 0

loop i from 1 to amt
  get diff for each coin
  amount = i - current value of coin -> if it's >=0 //1
  check dp[diff] + 1 //dp[1] = 6 //dp[2] = 6 //dp[2] = 2 //dp[3] = 6
  compare dp[i] vs. dp[diff] + 1 ->  update dp[i] with min //dp[1] = 1 //dp[2] = 1



*/
var coinChange = function(coins, amount) {
  var dp = Array(amount + 1).fill(amount + 1)
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let c in coins) {
      let coinVal = coins[c];
      if (i - coinVal >= 0) {
        let diff = i - coinVal;
        dp[i] = Math.min(dp[i], 1 + dp[diff])
      }
    }
  }
  if (dp[amount] == amount + 1) return -1;
  else return dp[amount]
};

let coins = [1, 3, 4, 5]
let amount = 7
console.log(coinChange(coins, amount))