/*
input: array of arrays of mxn length
output: array 1d of all input els in spiral order

spiral order
L -> R
R -> B
R -> L
B -> T

base case
L > R || T > B

each loop:
L +1
R -1
B -1
T +1

plan:
set
l = 0
r = n - 1
b = m - 1
t = 0

while L > R || T > B

L->R
i = l -> r; i++
 push each el to result
  [1, 2, 3, 4, 5]
t++

T->B
i = top ; i < bottom ; i++
  arr[i][right] push to result
  [1, 2, 3, 4, 5, 10, 15, 20]
r--

R->L
i = r -> l; i--
  arr[bottom][i] -> result
  [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16]
b--

B->T
  i = bottom; i > top; i--
  arr[i][left] -> result
l++

return result