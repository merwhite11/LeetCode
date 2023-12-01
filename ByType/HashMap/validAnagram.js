/*
input: 2 strings s and t
output: true if t is anagram of s, false if not
anagram t can be spelled by rearranging letters of s

example:
s = "anagram"
t = "nagaram"
output: true

s ="rat"
t = "car"
output: false

plan
go through t
check if char is in s
if it is, splice it out of s to avoid it counting for 2 letters

or go through s
for every char, add to hashmap with val 1
add 1 for duplicate

loop through t
for every char - 1 from char in hashmap
object.values should be all 0's
*/

/* SPLICE SOLUTiON
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    s = s.split("")
    for(let i = 0; i < t.length; i++) {
      var curr = t[i];
      console.log('curr', curr)
      console.log('s', s)
      if(s.indexOf(curr) > -1) {
        var idx = s.indexOf(curr)
        s.splice(idx, 1)
      } else return false;
    }
    console.log(s)
    return true
};

*/

var isAnagram = function(s, t) {
  var storage = {};
  for(let i = 0; i < s.length; i++) {
    var char = s[i];
    if(!storage[char]) storage[char] = 1;
    else storage[char] ++;
  }
  for(let char in t) {
    var letter = t[char];
    if(storage[letter]) storage[letter]--;
    else return false;
  }
  return Object.values(storage).every(val => val === 0);
}

var s = "car"
var t = "rat"

console.log(isAnagram(s, t))