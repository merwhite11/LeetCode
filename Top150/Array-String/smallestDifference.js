/*
input: 2 int arrays
find pair of numbers (one from each arr) whose absolute dif is closest to 0
output: array containing smallest dif pair, first el from first arr

arr1 = [-1, 5, 10, 20, 28, 3]
arr2 = [26, 134, 135, 15, 17]

output: [28, 26]

sort arrays

[-1, 3, 5, 10, 20, 28]
[15, 17, 26, 134, 135]

create smallestDiff = null;

pointer 1 = arr1[0]
pointer 2 = arr2[0]

while pointer1 < arr1.length && pointer2 < arr2.length
get diff of arr1[0] and arr2[0] 
if product is neg (1 pos 1 neg) -> get abs val of both -> add
if product is pos (both neg or pos) -> abs value of both -> substract big from small

if smaller than smallestDiff -> update sD

increment the array that has the smaller num 
smallestDif = 16

increment arr w/ smaller el

15 - 3 -> sD = 12

15 - 5 -> sD = 10
15 - 10 -> sD = 10 

20 -15 -> sD = 5

20 -17 -> sD = 3
26 - 20 -> sD = 6

28 - 26 -> sD = 2

134 - 28 
135 - 28 





*/
function compareNumbers(a, b) {
    return a - b;
}
function smallestDifference(arrayOne, arrayTwo) {
    arrayOne = arrayOne.sort(compareNumbers);
    arrayTwo = arrayTwo.sort(compareNumbers);
    
    var smallestDif = Infinity;
    var dif;
    var result;
    pointer1 = 0;
    pointer2 = 0;

    while(pointer1 < arrayOne.length && pointer2 < arrayTwo.length) {
        var currArr1 = arrayOne[pointer1];
        var currArr2 = arrayTwo[pointer2];
        var bigger = Math.max(currArr1, currArr2);
        var smaller = Math.min(currArr1, currArr2)
        if((currArr1 * currArr2) < 0) {
            dif = Math.abs(currArr1) + Math.abs(currArr2);
        } else {
            dif = bigger - smaller;
        }
        console.log('dif', dif)
        if(dif < smallestDif) {
            smallestDif = dif;
            result = [currArr1, currArr2]
        }
        if(currArr1 === smaller) pointer1++;
        else pointer2++;
    }
    return result;
  }

var arr1 = [-1, 5, 10, 20, 28, 3]
var arr2 = [26, 134, 135, 15, 17]

console.log(smallestDifference(arr1, arr2))