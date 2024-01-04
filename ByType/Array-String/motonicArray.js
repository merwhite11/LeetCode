/*
input: arr of ints
output: tru if motonic (if asc or desc order) , false if not

//example

arr = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
output: true

arr = [1, 3, 6, 8, -10, 10]
output: false

arr = [-1, -5, -2, -10]
output: false

loop i thru arr

    if they're equal to each other -> nothing
    if curr > next and !des -> give asc tag
    if curr < next !asc -> give des tag

    else return false 


*/

function isMonotonic(arr) {
    var desc = false;
    var asc = false;
    for(let i = 0; i < arr.length -1; i++) {
        var curr = arr[i];
        var next = arr[i+1];
        if(curr === next) continue;
        else if(curr < next && !asc) desc = true;
        else if(curr > next && !desc) asc = true;
        else return false;
    }
    return true;
}

var arr = [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11]
var arr2 = [1, 2, -3, 4, 5]
var arr3 = [-1, -5, -2, -1100, -1100, -1101, -1102, -9001]
console.log(isMonotonic(arr3))
