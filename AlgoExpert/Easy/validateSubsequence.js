/*
input: 2 arrays of integers
output: true if second array is a subsequence of first, false if not
the subsequence in second array has to be same order, but not adjacent els

array2 = [1, 4, 2]
array1 = [1, 5, 3 , 2, 4]

[[2,3], [4,4]]

loop through main array
    check if there is a match to the first el in the subsequence
    if yes
    increase subsequence index by 1 - new curr
    push to storage

    increase main array index by 1

*/

function isValidSubsequence(array, sequence) {
    if(sequence.length > array.length) return false;
    var storage = [];
    var sqIdx = 0;
    for(let i = 0; i < array.length; i++) {
        if(sequence[sqIdx] === array[i]){
            storage.push(array[i]);
            sqIdx ++;
        }
    }
    if(storage.length === sequence.length) return true;
    else return false;
}

// function isValidSubsequence(array, sequence) {
//     var storage = []
//     for(let i = 0; i < sequence.length; i++) {
//         for(let j = 0; j < array.length; j++) {
//             if(sequence[i] === array[j]) {
//                 if(storage.length) {
//                     var lastPushedIndex = storage[storage.length - 1][1]
//                 }
//                 if(lastPushedIndex <= j || storage.length === 0) {
//                     storage.push([array[j], j])
//                 }
//             }
//         }
//         console.log('storage', storage)
//     }
//     if(storage.length > 0) return true;
//     else return false;
//   }

  console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 6, -1, 8, 10]))

  /*
  5, 1, 22, 25, 6, -1, 8, 10
  5, 1, 22, 22, 6, -1, 8, 10
  */