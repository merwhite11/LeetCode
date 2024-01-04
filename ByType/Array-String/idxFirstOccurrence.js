/*
input: 2 strings n and h
output: first occurrence of n in h, -1 if no n in h

//examples
h = "sadbutsad" n = "sad"
output: 0 "sad" begins at indx 0 

h = "leetcode" needle = "leeto"
output: -1

//plan
if n.length > h.length -> return -1 
tempIndex = ;
create counter = 0; 
firstOcc = 
loop i thru h up to h.length ; i ++ 
    if n[i] == h[i] -> store index
       increase counter
       if counter = n.length -> return index , else index back to null

*/

var strStr = function(haystack, needle) {
    if(needle.length > haystack.length) return -1;
    for(let i = 0; i <= haystack.length - needle.length; i++) {
        if(haystack.substr(i, needle.length) === needle) return i;
    }
    return -1;
};

var h = "avasesadbutsad";
var n = "sad"
var l = "leetcode"
var c = "leeto"
console.log(strStr(h, n))