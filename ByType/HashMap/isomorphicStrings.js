/*
input: two strings - s and t
output: true if chars in s can be replaced to get t

all chars must be replaced by another
no two chars can map to same chars, but char can map to itself

//examples
s = "egg" t = "add"
output: true

s = "foo" t = "bar"
output: false

s = "paper" t = "title"

//plan
create storage
create empty array
loop thru s
    check if curr char is in storage
        if it is -> push val to array
    if not
        check if t char is in replaced -> if it is return false
        set curr char to t char of same index
        push to array

join storage.values -> does it equal t?



*/

/*
var getRandomLetter = function() {

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetter = alphabet[Math. floor(Math. random() * alphabet. length)]
    return randomLetter;
}

var isIsomorphic = function(s, t) {
    var storage = {};
    var replaced = [];
    for(let i = 0; i < s.length; i++) {
        var char = s[i]
        if(!storage[char]) {
            storage[char] = getRandomLetter();
        }
        replaced.push(storage[char]);
    }
    console.log('stor', storage)
    replaced = replaced.join('')
    console.log('rep', replaced)
    if(t === replaced) return true;
    else return false;
};
*/

//better solution

var isIsomorphic = function(s, t) {
    for(let i = 0; i < s.length; i++) {
        console.log('s', s[i])
        console.log('t', t[i])
        if(s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) {
            return false;
        }
    }
    return true;
}

var s = "badc"
var t = "baba"
console.log(isIsomorphic(s, t))

const str = "Brave new world";

console.log(str.indexOf("w", 9))