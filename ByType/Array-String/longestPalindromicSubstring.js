/*
input:  string
output: longest palindromic substring

var string = "abaxyzzyxf"
output: "xyzzyx"

longest so far: 3

if the next el === prev el
  while p > 0 and n < string.length

  start counting out p & n in both directions

OR if prev el === curr ell -> set next to current
  -> starting counting out p & n in both directions

create substring p -> n
get length of substring -> if it's longer than length of longest -> update longest


a   b   a   x   y   z   z   y   x   f
                p               n               i           j
*/

function longestPalindromicSubstring(string) {
  if(string.length === 1) return string;
  string = string.split('')
  let longest = [];
  for(let c = 1; c < string.length; c++) {
    let p = c - 1;
    let n = c + 1;
    while(p >= 0 && n < string.length) {
      console.log(string[c])
      if(string[p] === string[c]) {
        n--;
      }
      if(string[p] === string[n]) {
        let palindrome = string.slice(p, n+1)
        if(palindrome.length > longest.length) longest = palindrome;
        console.log(longest)
        p--;
        n++;
      } else break;
    }
  }
  return longest.join(string)
}

console.log(longestPalindromicSubstring("abcdefghfedcbaa"))