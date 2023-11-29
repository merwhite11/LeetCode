/*
input: array of integers sorted in ascending order
output: array of squares of each integer

create result array

arr.map(el => result.push(el*el))

return result

[-3, -2, -1, 4, 5, 6]
[9, 4, 1, 16, 25, 36] i = 6 //j = 0
[4, 9, 1, 16, 25, 36] i = 6 //j = 1
[4, 1, 9, 16, 25, 36] i = 6 //j = 2
[1, 4, 9, 16, 25, 36] i = 5 //j = 0
[1, 4, 9, 16, 25, 36] i = 4 //j = 0


square all values put into results
bubble sort results array



*/

function sortedSquaredArray(array) {
    var result = [];
    array.map(el => result.push(el*el))
    console.log('result', result)
    function bubbleSort(arr) {
        var noSwaps;
        for(let i = arr.length; i > 0; i--) {
            noSwaps = true;
            for(let j = 0; j < i - 1; j++) {
                if(arr[j] > arr[j+1]) {
                    noSwaps = false;
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp
                }
            }
            if(noSwaps) break;
        }
        return arr
    }
    var sortedResult = bubbleSort(result)
    console.log(sortedResult)
    return sortedResult;
}

sortedSquaredArray([-3, -2, -1, 3, 4, 5])