/*
input: array containing 0s and 1s where 0 means empty and 1 means not empty
int n
output: return true if n flowers can be planted in flowerbed without any adjacent 1s
false if not

examples
var flowerbed = [1,0,0,0,1]
var n = 1
output: true

var flowerbed = [1,0,0,0,1]
var n = 2
output: false

loop thru arr
if cur = 0
  check prev and next -> if not 1
  update arr[idx] = 1
  n--

if n = 0 return true
else false

i = 0 -> 1
empty = false

i = 1 -> 0
prevEmpty = false -> true

i = 2 -> 0
prevEmpty = true && next === 0 -> update cur val = 1
set prevEmpty to false

i = 3
prevEmpty = false -> true

i = 4 -> 1

*/

var canPlaceFlowers = function (flowerbed, n) {
  let prevEmpty = true;
  for (let i = 0; i < flowerbed.length; i++) {
    if(
      i === flowerbed.length - 1 &&
      flowerbed[i] === 0 &&
      prevEmpty === true) {
        n--;
        break;
      }
    if (flowerbed[i] === 1) prevEmpty = false;
    else if(
      flowerbed[i] === 0 && (
        flowerbed[i + 1] === 0 && prevEmpty
      )){
        console.log('can place')
      flowerbed[i] = 1;
      prevEmpty = false;
      n--;
    }
    else prevEmpty = true;
  }
  if(n === 0) return true;
  else return false;
};

var flowerbed = [0,0,1,0,0]
var n = 2
// var flowerbed = [1,0,0,0,1]
// var n = 1
console.log(canPlaceFlowers(flowerbed, n))

//BETTER SOLUTION

var canPlaceFlowers = function(flowerbed, n) {
  let count = 0;
  let pre = -1;
  let next = 1;

  for (let i = 0; i < flowerbed.length; i++, pre++, next++) {
      if ((getValue(flowerbed, pre) + getValue(flowerbed, i) + getValue(flowerbed, next)) == 0) {
          flowerbed[i] = 1;
          count++;
      }
  }

  return count >= n;
};

var getValue = function(flowerbed, i) {
  if (i < 0 || i >= flowerbed.length) {
      return 0;
  }
  return flowerbed[i];
}