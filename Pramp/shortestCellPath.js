/*
input: grid of 0 and 1s , starting row and column - sr and sc
target row and column - tr and tc

output: length of the shortest path from sr, sc to tr, tc that walks along 1 vals only

examples:
grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 1, 1, 1]]
sr = 0, sc = 0, tr = 2, tc = 0
output: 8

1 1 1 1
0 0 0 1
1 1 1 1

grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 0, 1, 1]]
sr = 0, sc = 0, tr = 2, tc = 0
output: -1
1 1 1 1
0 0 0 1
1 0 1 1


*/

function shortestCellPath(grid, sr, sc, tr, tc) {
  let q = [];
  let distance = 1;
  q.push([sr, sc, distance]);
  if(grid[sr][sc] === 0) return -1;
  let dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]]

  while (q.length) {
    var [row, col, dist] = q.shift();
    console.log('current', row, col)
    for(let [dirX, dirY] of dirs) {
      var newX = row + dirX;
      var newY = col + dirY;
      console.log(newX, newY)
      if (newX === tr && newY === tc) return dist;
      //out of bounds or node val = 0
      if (newX < 0 || newX > grid[0].length - 1 || newY < 0 || newY > grid.length - 1 || grid[newX][newY] === 0) continue;
      //inbounds and node val = 1
      q.push([newX, newY, dist + 1])
      grid[newX][newY] = 0;
      console.log(q)
      }
    }
    return -1;
  }

function visit(grid, queue, row, col) {
  if (row === tr && nc === tc) return dist;
  if (nr >= 0 && nc >= 0 && grid[nr][nc] === 1 && (!visited.has([nr, nc]))) {
    queue.push([nr, nc, dist + 1])
    visited.add([sr, sc])
    console.log(queue)
    console.log(visited)
  }

}



var grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 1, 1, 1]]
var sr = 0
var sc = 0
var tr = 2
var tc = 0
console.log('result', (shortestCellPath(grid, sr, sc, tr, tc)))