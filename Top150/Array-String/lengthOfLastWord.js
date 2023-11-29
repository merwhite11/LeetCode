/*
input: string with words and spaces
output: length of the last word in the string where word is a maximal substring of non-space characters only

s = "Hello World"
output: 5

s = "  fly me  to  the moon "
output: 4

s = "luffy is still joyboy"
output: 6

remove spaces at the end
go to last el and get length
*/

var lengthOfLastWord = function(s) {
    if(s[s.length-1] === ' ') {
        s = s.trimEnd();
    }
    sArr = s.split(' ')
    return sArr[sArr.length-1].length
    
};

var s = "Hello World"
var s1 = "  fly me  to  the moon "
var s2 = s = "luffy is still joyboy"
console.log(lengthOfLastWord(s2))