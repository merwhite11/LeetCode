/*
input: integer n, stairs
output: number of distinct ways to climb stairs
climb either 1 or 2 steps
//how many ways can you sum 1s and 2s to total the input

//examples
n = 1
output: 1

n = 2
output: 2

n = 3
output: 3

n = 4
output: 5

plan:
so long as n > 0 -> at least 1 way
counter = 0
total = 0
while total <= n
    total ++
counter++

//3
with ones -> one way
with twos -> remainder = n % 2 // 1 (x 2 for both directions)

//5
count = 0
with ones -> count = 1
with twos -> 5 / 2 = 2

//recursive

recursive(stepsTaken, n)
    //base case:
    stepsTaken == n -> return 1

    //base case:
    stepsTaken > n -> return

    //recursive call
    return recursive(stepsTaken + 1, n)  + recursive(stepsTaken + 2, n)

recursive(0, 5, 1)
count ++


n = 3
                                0
                    /                                 \
                   1, (0+1) step=1                    2,(0+2) stepsTaken2
                 /            \ 2,(1+2) step 3        /             \
                1, (1+1)step=2       return 1       1, step=3
               /           \                       = return 1
              1, step=3    2,step=4
    - return 1  \             return 0
                 2, step = 5
                  return 0



                  (0+1) = 1
                    0
                  stack
*/