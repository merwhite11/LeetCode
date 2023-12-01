/*
input: 2 strings - ransomNote, magazine
output: true if ransomNote can be constructed w letters of mag, false if not
constraints: each letter in mag can only be used once

//examples
input: note = "a", mag = "b"
output: false

input: note = "aa", mag = "ab"
output: false

input: "aa", mag = "aab"
output: true

//plan
loop through note 
for each char, check if it's in mag
    if it's in mag and not in storage -> push to storage
        move it to the end, pop it off


if storage.length === note.length -> true, else false 

*/

//naive 
/*
var canConstruct = function(note, mag) {
    mag = mag.split('')
    var storage = []
    for(let char in note) {
        if(mag.indexOf(note[char]) >= 0) {
            var idx = mag.indexOf(note[char])
            storage.push(mag[idx])
            var temp = mag[idx]
            mag[idx] = mag[0]
            mag.shift()
        }
    }
    if(storage.length === note.length) return true;
    else return false;
    
};
*/
//
var canConstruct = function(note, mag) {
    for(var char of mag) {
        console.log(char)
        note = note.replace(char, "")
    }
    if(!note) return true;
    else return false;
}
var note = "aaab"
var mag = "aabbb"

console.log(canConstruct(note, mag))
