/*
input: array of strings
output: longest common prefix, if none, return ""

//examples
strs = ["flower", "flow", "flight", "flounder", "flook"]
output: "fl"

strs = ["dog", "racecar", "car"]
output: ""

create an array to push common letters to
start with arr[0] and arr[1]
count chars in common = 4

loop thru array
    current and next vars
    loop jthru string start at 1, going up to chars in common 
        compare curr to next
        if curr[j] !== next[j]
            chars in common = j
            break
        else push to array
            j ++
    

*/

var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return "";
    commonPrefix = "";
    console.log(strs)
    for(let i = 0; i < strs[0].length; i++) {
        if(strs.every(str => str[i] === strs[0][i])) {
            console.log(commonPrefix)
            commonPrefix += strs[0][i];
        }
        else break;
    }
    console.log(commonPrefix)
};

var strs = ["flower", "flow", "flight", "flounder", "flook"]
var strs2 = ["dog", "racecar", "car"]
console.log(longestCommonPrefix(strs))