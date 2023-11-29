/*
input: non-empty string
output: true if palindrome, false if not

a b c d c b a

i = 0, j = 6
a = a

i = 1, j = 5
b = b

i = 2, j = 4
c =c

i = 3, j = 3
d = d

racecar


loop i thru starting at front of array
    while j >= i
        j++
        if arr[i] !== arr[j] break
*/

function isPalindrome(string) {
    var j = string.length - 1;
    for(let i = 0; i <= j; i++) {
        if(string[i] !== string[j]) return false;
        j--
    }
    return true;
  }

console.log(isPalindrome('abcdkpopdcba'))