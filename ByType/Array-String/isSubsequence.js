/*
input: 2 strings, s and t
output: true is s is subsequence of t, false if not

subsequence is string formed from og string by deleting some or none of chars w/out changing order

examples
s = "abc", t= "ahbgdc"
output: true

s = "axc" t="ahbgdc"
output: false

//plan
j= 0
loop thru t 
if char equal s[j] -> j++

if j == length of s -> return true
else return false


*/

var isSubsequence = function(s, t) {
    var j = 0;
    for(let i = 0; i < t.length; i++) {
        if(t[i] === s[j]) j++;
    }
    console.log(j)
    if(j === s.length) return true;
    else return false;
    
};
var s = "axc"
var t = "ahbgdc"
console.log(isSubsequence(s, t))