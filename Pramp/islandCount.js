/*
input: array of arrays
output: count of islands

islands: adjacents 1
adjacents: A, B, L, R

checkAdjacents(rol, col, bm)
  base case: curr = 0  -> return;
  base case: curr out of range -> return;
  above: row + 1
  below: row - 1
  left: col + 1
  right: col - 1

  return 1

count = 0
loop rows
  loop cols
    if curr is a 1 ->
    count += call checkAdjacents with row, col, binaryMatrix
return count


*/
function checkAdjacents(row, col, bm) { //0, 3 //1,3 //2,3 //3,3
  if(bm[row][col] === 0) return;
  if(bm[row][col] === 1) bm[row][col] = 0;
  if(row+1 < bm.length) checkAdjacents(row+1, col, bm) //1, 3 //2, 3 //3,3
  if(row-1 >=0) checkAdjacents(row-1, col, bm) //-1, 3 //
  if(col+1 < bm[0].length) checkAdjacents(row, col+1, bm) //0, 4
  if(col-1 >=0) checkAdjacents(row, col-1, bm) //0, 2
}

function getNumberOfIslands(bm) {
  let count = 0;
  for(let row = 0; row < bm.length; row++) {
    for(let col = 0; col < bm[0].length; col++) {
      if(bm[row][col] === 1) {
        count++;
        checkAdjacents(row, col, bm);
      }
    }
  }
  return count;
}

var matrix =
[ [0,    1,    0,    1,    0],
  [0,    0,    1,    1,    1],
  [1,    0,    0,    1,    0],
  [0,    1,    1,    0,    0],
  [1,    0,    1,    0,    1] ]

console.log(getNumberOfIslands(matrix))