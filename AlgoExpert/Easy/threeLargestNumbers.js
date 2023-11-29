/*
input: array of at least 3 ints
output: sorted array of 3 largest ints from input
constraints: cannot sort input array

small = 0
med = arr[1]
biggest = arr[2]

keep track of how many els are bigger
    if 1 el bigger -> med
    if 2 els bigger -> small
    if no els bigger -> big

loop through array starting at 1st el
elsBigger = 0;
    while elsBigger < 3
        loop through arr starting at 1 after i 
            if curr is greater than j curr
                elsBigger ++
        if els bigger < 3 push to array

sort array

array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
*/
function bubbleSort(arr) {
    //loop i thru arr starting at end
    for(let i = arr.length; i > 0; i--) {
        var noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                noSwaps = false;
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        if(noSwaps) break;
    }
    return arr;
}
function findThreeLargestNumbers(array) {
    var biggestThree = []
    for(let i = 0; i < array.length; i++) {
        var elsBigger = 0;
        for(let j = 0; j < array.length; j++) {
            if(i === j) continue;
            if(array[i] < array[j]) {
                console.log(array[i])
                elsBigger++;
            }
            if(elsBigger > 2) break;
            // console.log(array[i], elsBigger)
        }
        if(elsBigger <= 2) {
            biggestThree.push(array[i])
        }
  }
//   console.log(biggestThree)
  var sorted = bubbleSort(biggestThree)
  console.log(sorted)
  if(sorted.length > 3) {
      sorted = sorted.slice(array.length - 3)
    }
      return sorted;
}
  var array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
  console.log(findThreeLargestNumbers(array))