/*
input: string
output: true if palindrome, false if not
constraints: convert to lowercase, remove non-alphanumeric chars

//examples
s = "A man, a plan, a canal: Panama"
output: true

s = "race a car"
output: false

//plan
remove all non alphas
make string all lowercase

start one pointer at beg
start one pointer at end

if the char at both pointers ===
move left up
move right down

when left > right -> break
if they're not equal return false

return true

*/
var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    console.log(s)
    var left = 0;
    var right = s.length - 1;

    while(s[left] === s[right]) {
        if(left >= right) return true;
        left++;
        right--;
    }
    return false;
    
};

//race a car

/*
l = 0 , r = 9
r = r

l = 1 , r = 8
a = a

l = 2, r = 7
c = c

l = 3, r = 6
e != ' '
*/

var s = "ab_a"
console.log(isPalindrome(s))