/*
input: n
output: true if happy, false if not

happy:
replace num by the sum of squares of digits
repeat until the num equals 1 -> happy
if loops and never equals 1 -> unhappy

example:
n = 19
1*1 + 9*9 = 82
8*8 + 2*2 = 68
6*6 + 8*8 = 100
1*1 + 0*0 + 0*0 = 1 -> true

n = 25
2*2 + 5*5 = 29
2*2 + 9*9 = 85
8*8 + 5*5 = 89
8*8 + 9*9 = 64 + 81 = 145

recursive (newNum)
  if(1) break;
  split num
  square each digit
  add together
  call recursive
*/

var isHappy = function(n) {
  var storage = new Set()
  function findOne(n) {

    if(n === 1) return true;
    n = n.toString().split('');
    var squares = n.map(num => Math.pow(Number(num), 2))
    var total = squares.reduce((acc, val) => acc + val, 0)
    if(storage.has(total)) return false;
    else storage.add(total);
    return findOne(total)
  }
  return findOne(n)
};

var n = 2;
console.log(isHappy(n))