/*
input: array of arrays 
output: array of array that switches row and column indices of og matrix

[ 
[1, 2]
] 
///arr[0][0] becomes arr[0]
///arr[0][1] becomes arr[]
[
[1],
[2]
]

[
[1, 3, 5],  (0,0) -> (0, 0) , (0, 1) -> (1, 0), (0, 2) -> (2, 0)
[2, 4, 6]   (1, 0) -> (0, 1), (1, 1) -> (1, 1), (1, 2) -> (2, 1)
]

[1, 2],
[3, 4],
[5, 6]

create empty array
for each el, flip the row index w it's position index 
set val to new row and index in new array
*/

function transposeMatrix(matrix) {
    var newMatrix = {};
    for(let i = 0; i < matrix.length; i++) {
        var row = matrix[i];
        for(let j = 0; j < row.length; j++) {
            var column = row[j]
            if(!newMatrix[j]) newMatrix[j] = [column];
            else newMatrix[j].push(column)
        }
    }
    return Object.values(newMatrix)
  }

  var matrix = [
    [1, 3, 5], 
    [2, 4, 6]   
    ]
transposeMatrix(matrix)