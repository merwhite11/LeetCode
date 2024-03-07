/*
input: two strings word1 and word2
merge by adding letters in alternating order starting w word1
longer string letters get appended to end of result string

examples:
var word1 = 'abc'
var word2 = 'pqr'
output: "apbqcr"

var word1 = "ab"
var word2 = "pqrs"
output: "apbqrs"

var word1 = "abcd"
var word2 = "pq"
output: "apbqcd"

plan:
create result array
min length = min(word1, word2)
iterate i from 0 to min length
  push word1[i] to array
  push word2[i] to array

if word1 is longer
  push substring of i to end to array
else push remaining word2 letters to arrya

return joined array

*/

var mergeAlternately = function(word1, word2) {
  const minLength = Math.min(word1.length, word2.length);
  const result = [];

  for(let i = 0; i < minLength; i++) {
    result.push(word1[i]);
    result.push(word2[i]);
  }
  if(word1.length > word2.length) {
    const remaining = word1.substring(word2.length, word1.length);
    result.push(remaining)
  }
  if(word2.length > word1.length) {
    const remaining = word2.substring(word1.length, word2.length);
    result.push(remaining)
  }
  return result.join('')
};

var word2 = 'doesit'
var word1 = 'matter'

console.log(mergeAlternately(word1, word2))