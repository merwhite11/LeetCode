/*
input:string of lowercase letters
output: index of the strings first non-repeating char (first char in string that appears only once), return -1 if no non-reps

string = "abcdcaf"
output: b

need to keep track of :
current char
current char's index
how many times it appears 

a: first seen: 0, freq: 2
b: first seen: 1, freq: 1
c: first seen: 2, freq: 2
d: first seen: 3: freq: 1
f: first seen: 6: freq 1

create storage 
loop thru string
    if not in storage
        instantiate w [i, ]
loop thru obj
    if frq is 1
    return letter

else return -1
*/

function firstNonRepeatingCharacter(string) {
    var storage = {};
    for(let i in string) {
        var char = string[i];
        if(!storage[char]) storage[char] = [Number(i), 1];
        else storage[char][1] ++
    }
    for(let j in storage) {
        if(storage[j][1] === 1) return storage[j][0]
    }
    return -1;
  }

var string = "abcdcaf"
console.log(firstNonRepeatingCharacter(string))