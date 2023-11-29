/*
input: array
output: array sorted by insertion sort

loop i starting at 1 to array.length 
    set j = i
        while j > 0 and if curr j is less than prev j
            swap
            decrease j

return array
*/
function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}
function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        j = i
        while(j > 0 && arr[j] < arr[j-1]) {
                swap(arr, j, j-1);
                j --;
            }
        }
        return arr;
    }

var array = [8, 5, 2, 9, 5, 6, 3]
console.log(insertionSort(array))
/*
i = 1 , curr = 5
    j = 0
    5, 8, 2, 9, 5, 6, 3 
i = 2 
    j = 1
    5, 2, 8, 9, 5, 6, 3 
    j = 0
    2, 5, 8, 9, 5, 6, 3
i = 3, curr = 9
    j = 2
    j = 1
    j = 0
i = 4, curr = 5
    j = 3
    2, 5, 8, 5, 9, 6, 3
    j = 2
    2, 5, 5, 8, 9, 6, 3
    j = 1
    2, 5, 5, 8, 9, 6, 3
    j = 0
i = 5, curr = 6
    j = 4
    2, 5, 5, 8, 6, 9, 3
    j = 3
    2, 5, 5, 6, 8, 9, 3
i = 6, curr = 3
    j = 5
    2, 5, 5, 6, 8, 3, 9
    j = 4
    2, 5, 5, 6, 3, 8, 9
    j = 3
    2, 5, 5, 3, 6, 8, 9
    j = 2
    2, 5, 3, 5, 6, 8, 9
    j = 1









    

*/
