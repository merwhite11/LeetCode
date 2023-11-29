/*
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
*/

/*
output: based raised to the exponent
input: 2 nums, base and exponent
constraints: don't worry about negs

plan:
multiply the base by itself
subtract the exponent by 1 each time to keep track of how many times you've multiplied
when exponent is 1, return the value

if (expo === 1) return 1;
base * base
result = power(base, expo-1)

return newBase

2,4

base * 16
      8
                        
                                    

expo = expo -1 
result = 16
                    4
                            1
                

*/

function power(base, expo) {
    if (expo === 0) return 1;

    var result = base * power(base, expo - 1)
    return result
}

console.log(power(2, 4))

