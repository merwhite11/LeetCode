/*
input: n = size of the grid's axes
output: num of possible paths to get from bottom-left (0,0) -> top-right (4,4)

square in grid (i, j)
initial (0, 0)
destination (n-1, n-1)

constraints:
i must always be >= j
can only move +1 on x axis OR +1 on y axis , not both

bfs approach:
start (0,0) -> (n-1, n-1)
//////
create count var set to 0
create empty queue
load it w start value // [[0,0]]

while q has length

shifting off coords //[0,0]

if i === n-1 OR j === n-1 -> path is valid -> add 1 to count

call helper to get nex poss squares

push next possible squares to queue


nextPossSquares
  i + 1, j -> [[1, 0]]

  if j + 1 <= i
    i, j+ 1 -> [[i, j]]
*/

function getNextPosSquares(i, j, coords, visited) {
  if(!visited.has(`${i}, ${j}`)) {
  coords.push([i+1, j])
  visited.add(`${i+1}, ${j}`)
  if(j + 1 <= i) {
    coords.push([i, j+1])
    visited.add(`{i}, {j+1}`)
  }
  }

}

function numOfPathsToDest(n) {
  let count = 0;
  let coords = [[0, 0]];
  let visited = new Set()
  visited.add('0, 0')
  while(coords.length) {
    let [i, j] = coords.shift();
    if(i === n-1 || j === n-1) count++;
    else getNextPosSquares(i, j, coords, visited);
  }
  return count;
}