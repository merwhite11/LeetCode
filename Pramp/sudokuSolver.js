/*
input: 9 x 9 matrix, filled with nums 1-9 or '.' for blank space
output: if board is solvable -> true. Else false

//brute force skeleton
loop thru each square
  when curr is a blank
    recursive call ->
      loop thru nums 1-9
      check if curr num is validRow, validCol and validSquare
      if curr num passes all three checks, place num

//helper functions
isValid(row, col, board)
  checkRows
  checkCols
  checkSubgrid

getCandidates(board, row, col)
  returns list of vals that can be placed in empty cell

function sudokuSolve(board)
  let fewestCandidates = {count: 9, row: 0, col: 0, candidates: []}

  for each empty cell (row, col)
    if cell has fewer candidates than fewestCandidates
      update fewestCandidates

  If no empty cell;
    return true

  for candidates of fewestCandidates
    set board[row][col] to currCandidate
    if solve(board) -> return true

  return false;



var board = [
[5, 3, ., ., 7, ., ., ., .],

]
*/

function getCandidates(board, row, col) {
  let candidates = [];
  let numStrs = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for(let num of numStrs) {
    let collision = false;
    for(let i = 0; i < 9; i++) {
      if(board[row][i] == num ||
        board[i][col] == num ||
        board[(row - row % 3) + Math.floor(i / 3)][(col - col % 3) + i % 3] == num
      ) {
        collision = true;
        break;
      }
    }
    if(!collision) candidates.push(num)
  }
return candidates;
}

function sudokuSolve(board) {
  let row = -1;
  let col = -1;
  let candidates = null;

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if(board[r][c] == '.') {
        let newCandidates = getCandidates(board, r, c);
        if (candidates == null || newCandidates.length < candidates.length) {
          candidates = newCandidates;
          row = r;
          col = c;
        }
      }
    }
  }
  //no empty cell, board is already filled
  if (candidates == null) {
    return true;
  }
  //test out each candidate to see if board can be solved
  for(let val of candidates) {
    board[row][col] = val;
    if (sudokuSolve(board)) {
      return true;
    }
  }
  //tried candidate didn't work, restore to blank
  board[row][col] = '.';

  //no candidate can solve the board
  return false;
}


///BRUTE FORCE

var solveSudoku = function(board) {
  const isValid = (row, col, board, val) => {
      let rowDiff = Math.floor(row / 3) * 3;
      let colDiff = Math.floor(col / 3) * 3;

      for(let i = 0; i < board.length; i++) {
          if(board[row][i] === val) return false;
          if(board[i][col] === val) return false;
          // trick to check subbox(row change every 3, col change every 3)
          // allowing us to check box without extra loop
          if(board[rowDiff + Math.floor(i / 3)][colDiff + i % 3] === val) {
              return false;
          }
      }

      // for(let r = 0 + rowDiff; r < 3 + rowDiff; r++) {
      //     for(let c = 0 + colDiff; c < 3 + colDiff; c++) {
      //         if(board[r][c] === val) {
      //             return false;
      //         }
      //     }
      // }

      return true;
  }

  const solve = (board) => {
//	1. Go through each element
      for(let row = 0; row < board.length; row++){
          for(let col = 0; col < board[row].length; col++){
// 2a. If element is a valid choice, part 1,
              if(board[row][col] === '.') {
                  for(let i = 1; i <= 9; i++) {
// 2b. If element is a valid choice, we tempoarily set element as part of the solution
                      if(isValid(row, col, board, String(i))) {
                          board[row][col] = String(i);
// 3. Recurse over the rest of the elements
                          if(solve(board)) {
              // all elements are filled out, let's return this baby
                              return true;
                          }
// 4. If answer isn't valid, or we need to add the rest of the combinations, we undo step 2
                          board[row][col] = '.';
                      }
                  }
        // backtrack initiator, previous choice was bad, we didn't get a valid choice in the recursion
                  return false;
              }
          }
      }
  // all elements are filled out, we solved it
      return true;
  }

  solve(board);
  return board;
};