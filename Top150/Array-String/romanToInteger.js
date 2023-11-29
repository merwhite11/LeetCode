/*
input: roman number
output: integer

create an object of romans and values

{
'I': 1,
'V': 5,
'X': 10,
'L': 50,
'C': 100,
'D': 500,
'M': 1000
}
s = 'III'
output: 3

s = 'LVIII'
output: 58
L = 50, V = 5, III = 3

s = "mCMXCIV"
output: 1994
M = 1000, CM = 900, XC = 90, IV = 4

create result = 0
loop thru input string
if curr > next -> add curr to result
increase i 1

if curr < next --> subtract cur from next->add to result
increase i 2


*/

var ints = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
    }

var romanToInt = function(s) {
    var result = 0;
    i = 0;
   for(let i = 0; i < s.length; i++) {
        var currRom = s[i];
        var nextRom = s[i+1];
        var currVal = ints[currRom];
        var nextVal = ints[nextRom];
        console.log(currVal, nextVal)
        if(currVal < nextVal) {
            result += nextVal - currVal;
            i++;
        } else {
          result += currVal
        }
    }
        return result;
};

var s = 'LVIII'
console.log(romanToInt(s))

/*
curr = 1000
next = 100
1000 > 100 -> res = 1000
i++

curr = 100
next = 1000
100 < 1000 -> 1000 - 100 = 900 -> res + 900 = 1900
i += 2

cur = 10
next = 100
10 < 100 -> 100 - 10 = 90 -> res + 90 = 1990
i += 2

curr = 1
next = 5
cur < next -> 5 - 1 -> res + 4 -> 1994


*/