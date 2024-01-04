/*
input: 9 x 9 array with els 1 - 9 OR '.' for blank
fill the blank spaces with chars according to rules
output: true if valid sudoku no blanks //false if not

RULES:
every row 1 -9
every column 1 -9
every 3x3 sub-board 1 -9

row = 0
column = 0

rule functions:

rowRule :
   is there already a 1 -> yes? return false

columnRule
  is there already curr? -

subBoard rule
  row -> row + 2
  col -> col + 2


traverse the board
when you encounter a '.' aka blank ->
  start looping thru nums 1 -9
    for each num, check if it breaks any rules
    call row rule -> potential num and row num
    call colu -> potential num and column num
    call subboard rule -> potential num, row, col

el 4 -> (0, 4)