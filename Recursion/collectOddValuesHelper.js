function collectOdds(arr) {

    var odds = []
    
    function recursiveOdds(newArr) {
        
        if (newArr.length === 0) return;
        if (newArr[0] % 2 !== 0) {
            odds.push(newArr[0])
        }
        
        newArr.shift()
        console.log(newArr)
        
        recursiveOdds(newArr)
    }
    
    recursiveOdds(arr)
    return odds;
}

console.log(collectOdds([5, 6, 8, 9, 10, 11]))




/*
set collection arr

call recursive function

recursive will unshift first num of array
    if odd, push to collection array
    else, unshift
*/
