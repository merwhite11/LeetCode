


function shortestCellPath(grid, sr, sc, tr, tc) {
  const queue = [];
  queue.push([sr, sc, 0]); // [row, column, distance]
  const visited = new Set();

  while (queue.length > 0) {
      const [row, col, distance] = queue.shift();

      if (row === tr && col === tc) {
          return distance;
      }

      const currentCell = `${row},${col}`;
      if (!visited.has(currentCell)) {
          visited.add(currentCell);

          // Explore adjacent cells
          const neighbors = getNeighbors(grid, row, col);
          for (const [nr, nc] of neighbors) {
              if (isValid(grid, nr, nc) && grid[nr][nc] === 1) {
                  queue.push([nr, nc, distance + 1]);
              }
          }
      }
  }

  return -1; // Target not reachable
}

function getNeighbors(grid, row, col) {
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // Up, Down, Left, Right
  const neighbors = [];

  for (const [dr, dc] of dirs) {
      const nr = row + dr;
      const nc = col + dc;
      neighbors.push([nr, nc]);
  }

  return neighbors;
}

function isValid(grid, row, col) {
  const rows = grid.length;
  const cols = grid[0].length;
  return row >= 0 && row < rows && col >= 0 && col < cols;
}





function shortestCellPath(grid, sr, sc, tr, tc) {
	/**
	@param grid: integer[][]
	@param sr: integer
	@param sc: integer
	@param tr: integer
	@param tc: integer
	@return: integer
	*/

  /*
  1 1 1 1
  0 0 0 1
  1 1 1 1

      const currentCell = `${row},${col}`;
      if (!visited.has(currentCell)) {
          visited.add(currentCell);
  */

	// your code goes here
  let minVal = Infinity
  const visited = new Set()


  function dfs(grid, r, c, tr, tc, count) {
    if (visited.has(`${r}-${c}`)) return

    if (r === tr && c === tc) {
      minVal = Math.min(count, minVal)
      return
    }

    visited.add(`${r}-${c}`)

    if (r+1 < grid.length && grid[r+1][c] === 1) dfs(grid, r+1, c, tr, tc, count+1)
    if (r-1 >= 0 && grid[r-1][c] === 1) dfs(grid, r-1, c, tr, tc, count+1)
    if (c+1 < grid[0].length && grid[r][c+1] === 1) dfs(grid, r, c+1, tr, tc, count+1)
    if (c-1 >= 0 && grid[r][c-1] === 1) dfs(grid, r, c-1, tr, tc, count+1)
  }

  dfs(grid, sr, sc, tr, tc, 0)

  return minVal === Infinity ? -1 : minVal
}
