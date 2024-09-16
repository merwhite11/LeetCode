/*
input: 2d array of 0s and 1s
output: num of islands of 1s

*island: group of adjacent cells that are all 1s
*adj cell: up, down, left, right

example:

binaryMatrix = [ [0,    1,    0,    1,    0],
                 [0,    0,    1,    1,    1],
                 [1,    0,    0,    1,    0],
                 [0,    1,    1,    0,    0],
                 [1,    0,    1,    0,    1] ]

output: 6

with queue:

queue = [[0, 1], [0, 3], [1, 2], [1, 3], [1, 4], [2, 1], [2, 2], [3, 0], [3, 1], [3, 4]]

plan/walk-thru:

create island count:

loop thru each row
  loop thru each cell
    recursive (row, col, matrix)
        if cell val = 0 -> return
        if cell val = 1 ->
          cell val = 0

        if left is in range -> call recur(row, col - 1)
        if right in in range -> call recur(row, col + 1)
        if up is in range -> call recur(row + 1, col)
        if down in in range -> call recur(row - 1, col)

        island count ++
        recursive()

    call recursive(row, col, matrix)
*/

function checkAdjacents(row, col, bm) {
  if(bm[row][col] === 0) return;
  if(bm[row][col] === 1) bm[row][col] = 0;
  if (col - 1 >= 0) checkAdjacents(row, col - 1, bm);
  if (col + 1 < bm[0].length) checkAdjacents(row, col + 1, bm);
  if (row - 1 >= 0) checkAdjacents(row - 1, col, bm);
  if (row + 1 < bm.length) checkAdjacents(row + 1, col, bm);
}

function getNumberOfIslands(bm) {
  let islandCount = 0;
  for(let row = 0; row < bm.length; row++) {
    for(let col = 0; col < bm[0].length; col++) {
        if(bm[row][col] === 1) {
          islandCount++;
          checkAdjacents(row, col, bm)
        }
    }
  }
  return islandCount;
}

var binaryMatrix = [ [0,    1,    0,    1,    0],
[0,    0,    1,    1,    1],
[1,    0,    0,    1,    0],
[0,    1,    1,    0,    0],
[1,    0,    1,    0,    1] ]

console.log(getNumberOfIslands(binaryMatrix))