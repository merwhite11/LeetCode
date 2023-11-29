/*
input: an array of ints and nested arrays
output: product sum 

arrays are summed and then multipled by level of depth

var sum = 0
depth = 1
recursive funct (depth, sum, sum)
    loop through array
        if it's an array
            depth ++ 
            call recur
            
        if not an array 
            innerSum =+ curr
            summ = curr * depth
    innerSum = innerSum * depth  
    sum += innersum
recursive (depth, innerSum sum)

array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]

5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)

sum = 5
sum = 7
sum = 2 * prodSum(arr, 2) 
                return 6
sum = 15
sum = 0 
sum = 2 * product(curr, 2)
                sum = 3 * product(c)


            

sum = 15



*/

function productSum(array, depth = 1) {
    var sum = 0;
    for(let i = 0; i < array.length; i++) {
        var curr = array[i];
        if(Array.isArray(curr)) {
            sum += productSum(curr, depth + 1)
        } else {
            sum += curr
        }
    }
    return sum * depth;
}

var array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
console.log(productSum(array))
