/*
Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

output: factorial
input: a number

PLAN
multiply the number by one less than the number
create a var that stores the result
substract one from the number
if the number equals 1, return 1
the result with be set to the number multipled by a call to the function, with the subtracted number
return the result

*/

function factorial(num) {
    if (num === 1) return 1;

    var result = num * factorial(num -1)
    return result
}

console.log(factorial(4))

