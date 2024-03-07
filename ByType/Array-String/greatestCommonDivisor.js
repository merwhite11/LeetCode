/*
input: two strings
output: the largest string that divides both str1 and str2

t divides s if one of the strings can be made by adding the other string multiple times

examples//
var str1 = "ABCABC" //made by output + output
var str2 = "ABC" //made by one output
output: "ABC"

var str1 = "ABABAB" // output + output + output
var str2 ="ABAB" // output + output
outptu: "AB"

var str1 = "LEFT"
var str2 = "CODE"
output: ""

plan:
get the shorter of the two strings or str1 if equal length

keep making substrings of short
  see if you repeat the substring, would you be able to make short
  check to see if length short % substring length === 0
  check to see how many copies you need to make long

let j =  4
loop thru shorter
  make a substring from i to j
  check if length of short % length of substring === 0
    if yes
      check if length of long % length of ss == 0
        if also yes
          divide short length by ss length to see how many copies of ss you need
          concat for short copies ->
          does it match short ?
          divide longer length by ss length to see how many copies of ss you need
          concat for long copies
          does it match long






*/
var gcdOfStrings = function(str1, str2) {
  var longer = str1.length >= str2.length ? str1 : str2;
  var shorter = str1.length < str2.length ? str1 : str2;
  let j = shorter.length;

  var isDivisor = function(string, j) {
    if(longer.length % j || shorter.length % j) return false;
    var shortCopies = shorter.length / j;
    console.log(shortCopies)
    console.log('copied', string.repeat(shortCopies))
    if(string.repeat(shortCopies) == shorter) {
      var longCopies = longer.length / j;
      if(string.repeat(longCopies) == longer) return true;
    }
    return false;
  }

  while(j > 0) {
    var substring = shorter.substring(0, j);
    console.log(substring)
    if(isDivisor(substring, j)) return substring;
    j--;
  }
  return ""
}

var strA = "LEETCODECODE"
var strB = "CODE"
var str1 = "ABABAB" //made by output + output
var str2 = "ABAB" //made by one output
console.log('solution', gcdOfStrings(strA, strB))