/*
input: string
output: string with words in reverse order concatted w single space

//defs
word = sequence of non-space chars
words in s will be separated by at least 1 space

//edge
s may have leading or trailing spaces, or mult spaces between words

//examples
var s = "the sky is blue"
output: "blue is sky the"

var s1 = "  hello world  "
output: "world hello"

var s2 = "a good   example"
output: "example good a"
gen plan:
create result array
loop thru string starting from end
  if it's a space
    check if next is a letter -> if so push empty array to result array
  if it's a letter push all letters to last array of result
plan:
create result array
trim string to remove leading and trailing
loop thru string starting at end

*/

var reverseWords = function(s) {
  var result = [[]];
  s = s.trim();
  for(let i = 0; i < s.length; i++) {
    var currWordArr = result[0]
    if(s[i] === ' ' && s[i+1] !== ' ') result.unshift([]);
    if(s[i] !== ' ') currWordArr.push(s[i])
  }
  result = result.map(word => word.join('')).join(' ')
  return result;
}

var s = "the sky is blue"
console.log(reverseWords(s))