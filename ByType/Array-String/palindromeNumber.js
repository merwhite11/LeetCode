/*
input: integer
output: true if palindrome, false if not

//examples:
x = 121
output: true

x = -121
output: false

x = 10
output: false

plan :
start pointer = 0
end pointer = length - 1

if they're not equal, return
else start pointer ++
end pointer --

if start pointer > end pointer return true

*/
/* naive solution
var isPalindrome = function(x) {
  x = x.toString();
  console.log(x)
  var left = 0;
  var right = x.length - 1;
  while(left <= right) {
    if(x[left] !== x[right]) return false;
    else left++; right--;
  }
  return true;
};
*/

var isPalindrome = function(x) {
  var reverse = 0;
  var copy = x;
  while(copy > 0) {
    var digit = copy % 10;
    reverse = reverse * 10 + digit;
    copy = ~~(copy/10)
  }
  if(reverse !== x) return false;
  else return true;
}
x = -121
console.log(isPalindrome(x))