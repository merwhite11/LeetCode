/*
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

output: sum of all numbers from 0 to input
input: num

PLAN

if input = 0 return 0;
create a var result 
set result to input plus the call of input - 1
return result

4 
sum = 4 + range(3) //10
            3 + range(2) //6
                    2 + range(1) //3
                            1 + range(0) //1
                                    0
*/

function range(num) {
    if(num === 0) return 0;
    var result = num + range(num - 1)
    return result
}

console.log(range(4))