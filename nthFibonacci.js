/*
input: integer n
output: nth number in fibonacci

0 , 1 , (n-1 + n-2)

0, 1, 1, 2, 3, 5, 8, 13, 21
n = 5
output = 6

start with curr = 0
next = 1
counter = 1

recursive (curr, next, counter)
    if counter === input, return curr 

    var newNext = curr + next;
    curr = next
    counter ++
    call recursive(curr, newNext, counter)

call recursive (0, 1, 1)

curr = 0
next = 1
counter = 1

curr = 1
next = 1
counter = 2

curr = 1
next = 2
counter = 3

curr = 2
next = 3
counter = 4

curr = 3
next = 5
counter = 5

curr = 5
next = 8
counter = 6
*/

function getNthFib(n) {
    function build(curr, next, counter) {
        if(counter === n) {
            return curr;
        };
        var newNext = curr + next;
        curr = next;
        counter ++;
        return build(curr, newNext, counter)
    }
    return build(0, 1, 1)
  }

console.log(getNthFib(2))