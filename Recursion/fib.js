/*
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

output: the nth number in the fibonacci sequence
input: a number that will be the index of what you're looking for in fi

PLAN

if the index of the fibonacci sequence is equal to the input, return 

create variable to keep track of fib index
create var to keep track of fib prev
if the index = input, return the fib value

recursive function -- takes in index and newvalue

value = value + prev

index = index + 1

call recursive(1, 0)

return prev


4

index = 0
val = 0
next = 0

recursion (value, index)


recur(0, 0)

val = next //0 
next = 1 + next //1 
index = 1 + index //1

recur(0, 1)

val = next //1
next = 1 + next //2
index = 1 + index //2

recur(1, 2)

val = 2
index = 1 + index //3
next = 1 + next //3

recur(2, 3)

val = 3
next = 1 + next // 4
index = 1 + index // 4

if index = input, return value




*/

function fib(num) {
  if (num <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

/*
return 2 + 1
        2
        1 + 1

*/

/*
//what is value at 4 index
1, 1, 2, 3

//





/*
val = 1
valIndex = 2
next = 2

recursive(1, 2, 2)
sum = prev + sum  
prev = 2
valIndex = 2 + 1

recursive(2, 3, 3)

sum = 2 + 3
prev = 3
valIndex = 4
if valIndex = num return prev

*/