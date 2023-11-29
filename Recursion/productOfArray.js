/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

output: product of all els in an array
input: array of nums

PLAN

if length of array == 0 ; return 1;
create a product var set equal to arr[0]
set equal to product multiplied by calling function with 'new array' with first el sliced off
return product

[1,2,3,4]

var prod = 1 * 24
*/

function productOfArray(arr) {
    if(arr.length === 0) return 1;
    var product = arr[0] * productOfArray(arr.slice(1))
    return product
}

console.log(productOfArray([1, 2, 3, 4]))