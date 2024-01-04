/*
input:
array of arrays with 1s and 0s,
starting row & starting column
 and target row and column

output: length of the shortest path from sr, sc to tr, tc that walks along 1 values only
if impossible, return -1

var grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 1, 1, 1]]
var sr = 0;
var sc = 0;
var tr = 2
var tc = 0

1 1 1 1
0 0 0 1
1 1 1 1
create path var = 0
set sr to 0, set sc to 0
loop thru arrs in grid
  check if the curr row's curr col el is a 1
  if it is -> update sr to i (curr row) //add 1 to path
  if it's a 0 -> move a column over sc++ // add 1 to path
  if you have moved across entire starting row and can't find an el below that is a 1 -> return - 1

  q = first in first out
BFS implemented with queue to decide order of cells visited
load source cell to queue
start from the source cell

visit all adjacent cells ->
keep going in direction of each adjac cell->
stop when cell is 0 or reaches edge

store the edge or 0 node to the queue
get the next node from queue

if node matches with destination -> return dist

///SOLUTION PLAN
node is a grid el with val 1
neighbors is they are adjacent on 1 of 4 sides

bfs given a source in graph
explores all  nodes from source at dist 0, 1, 2...
Record the node's distances when it visits

visit nodes in order from distance to the source, if we find target, we know it is least dist

//SOLUTION PSEUDO
create empty queue
set dist to 0
add (sr, sc, dist) to queue
create new set to record cells visited
add (sr, sc) to set

while there is length in queue
  shift r, c, dist from queue

//base case
if r is tr and c is tc -> return dist

//else call
//UP
row - 1
call visit

//LEFT
col - 1
call visit

//DOWN
row + 1
call visit

//RIGHT
col + 1
call visit

//VISIT HELPER
add (nr, nc and depth + 1) to queue
add (nr, nc) to seen

//IS VALID AND UNVISITED
if (nr, nc) not in seen -> add to set
//check if nr, nc are valid
if 0 <= nr < R
if 0<= nc < C
if grid[nr][nc] is 1

if all yes -> call helper with nr, nc





*/

function shortestCellPath(grid, sr, sc, tr, tc):
    queue = Queue()
    queue.add((sr, sc, 0))
    seen = new HashSet()
    seen.add((sr, sc))

    while queue:
        r, c, depth = queue.popfront()
        if r == tr and c == tc: return depth
        for (nr, nc) in ((r-1, c), (r+1, c), (r, c-1), (r, c+1)):
            if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] == 1 and (nr, nc) not in seen:
                queue.append((nr, nc, depth + 1))
                seen.add((nr, nc))

    return -1

