/*
input: two ints a and b
output: sum without using operators + or -

exmaple:
var a = 1
var b = 2
output: 3

var a = 2
var b = 3
output: 5

ideas/plan:

*
* *

* *
* * *

for each num
loop from 1 to num
push each num to an array
get the length of the array

5 in base 2 form = 101
1 * 2^2 = 4
0 * 2^1 = 0
1 * 2^0 = 1
4 + 0 + 1 = 5

2 in base 2 ->
0 * 2^0 = 0
1 * 2^1 = 2

3 in base 2 ->
1 * 2^0 = 1
1 * 2^1 = 2

01
11

xOR -> if they're the same (0 in the output, different - 1)
if they're both ones -> 0 in the output, carry the one
if one one -> one in the output
if both 0s -> 0 in the output

if we have 2 ones -> we get a carry

how do we know if we have a carry? if a and b are both one
how do we carry ? a + b and then shift to the left

create a loop
xor operation
and then and operation on remaining

xOR
1001 //a = 9
1011 //b = 11
______
0010 -> 2 , but not the sum

AND
1001 //a = 9
1011 //b = 11
_____
1001 -> << -> 10010

xOR
 0010
10010
______
10000

AND
 0010
10010
______
00100

xOR
10000
00100
______
101000 -> 16 + 4

AND
10000
00100
______
000000

//base case -> no carry, finished adding

//time complexity -> constant
*/


var getSum = function(a, b) {
    while(b != 0) {
      let temp = (a & b) << 1;
      a = a ^ b;
      b = temp;
    }
    return a;
};
var a = 9
var b = 11
console.log(getSum(a, b))