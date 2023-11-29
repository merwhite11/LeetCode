/*
tandemSpeed = max(speedA, speedB)
input: fastest = T/F, 2 arrays of pos ints. arr1 - els represent speed of riders wearing red shirts. arr2 - speed of blues
pair each red to a blue to return the max possible total speed or min total speed of all bikers. 
output: if fastest = T, return max speed. if false, return min speed. 

total speed = sum of speeds of all bikes

red = [5, 5, 3, 9, 2]
blue = [3, 6, 7, 2, 1]
fastest = true

[2, 3, 5, 5, 9]
[7, 6, 3, 2, 1]

7 + 6 + 5 + 5 + 9 = 32

3, 6, 7, 2, 1
5, 5, 3, 9, 2

1, 2, 3, 6, 7
2, 3, 5, 5, 9

2 + 3 + 5 + 6 + 9 = 25

sort red small to big
sort blue big to small

create sum var

loop thru red
    if fastest
        add max of red[i], blue[i]
    else 
        add min of red[i], blue[i]
return sum
*/
function sort(arr, ascend) {
    for(let i = arr.length; i > 0; i --) {
        var noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            if(ascend) {
                if(arr[j] > arr[j+1]) {
                    noSwaps = false;
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            } else {
                if(arr[j] < arr[j+1]) {
                    noSwaps = false;
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    var reds;
    var blues;
    var sum = 0;
    if(fastest) {
        reds = sort(redShirtSpeeds, true);
        blues = sort(blueShirtSpeeds, false);
        for(let i = 0; i < reds.length; i++) {
            sum += Math.max(reds[i], blues[i])
        }
    } else {
        reds = sort(redShirtSpeeds, true);
        blues = sort(blueShirtSpeeds, true);
        for(let i = 0; i < reds.length; i++) {
            sum += Math.max(reds[i], blues[i])
        }
    }
    return sum;
}

var reds = [1, 2, 1, 9, 12, 3]
var blues = [3, 3, 4, 6, 1, 2]

console.log(tandemBicycle(reds, blues, false))
