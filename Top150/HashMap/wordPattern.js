/*
input: pattern and string s, find if s follows the same pattern
output: true if follows, false if not
follows means that each letter in the pattern is repped by a word in string

examples:
pattern = "abba"
s = "dog cat cat dog"
output: true

pattern = "abba"
s = "dog cat cat fish"
output: false

pattern = "aaaa"
s= "dog cat cat dog"
output: false

plan:
pattern index = 0
loop through s
if pattern index === pattern.length -> pattern index = 0
for every word in s, store the pattern val at matching index as key, s el as value.
  a: dog
  b: cat

check if the patter el is already in storage
  if it is, get the value and see if it matches current s value
    if it doesn't -> return false

if it isn't add to storage with current s value

*/
/* naive solution
var wordPattern = function(pattern, s) {
  var patIdx = 0;
  var storage = {};
  s = s.split(' ')
  for(let i = 0; i < s.length; i++) {
    if(patIdx === pattern.length) patIdx = 0;
    var currPat = pattern[patIdx]
    console.log(currPat)
    console.log(storage)
    if(storage[currPat]) {
      if(storage[currPat] !== s[i]) return false;
    } else if(Object.values(storage).includes(s[i])) return false;
    else storage[currPat] = s[i]
    patIdx++;
    }
    return true;
  }
*/

var wordPattern = function(pattern, s) {
  let p = pattern.split('');
  s = s.split(" ");
  if(s.length != p.length) return false;
  let sobj = new Map();
  let pobj = new Map();
  for(let i = 0; i < p.length; i++) {
    if(sobj.has(s[i]) && sobj.get(s[i]) !== p[i]) return false;
    else sobj.set(s[i], p[i])
    if(pobj.get(p[i]) && pobj.get(p[i]) !== s[i]) return false;
    else pobj.set(p[i], s[i])
  }
  console.log('sobj', sobj)
  console.log('pobj', pobj)
  return true;
}

var pattern = "abba"
var s = "cat dog dog fish"

console.log(wordPattern(pattern, s))