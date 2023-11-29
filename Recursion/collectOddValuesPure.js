function collectOdds(arr) {

    var odds = []

    if (arr.length === 0) return odds;

    if (arr[0] % 2 !== 0) {
        odds.push(arr[0])
    }

    odds = odds.concat(collectOdds(arr.slice(1)))

    return odds;
}

console.log(collectOdds([1, 2, 5]))

1


