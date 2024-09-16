function compareNumbers(a, b) {
  return a - b;
}

function minimizeCost(arr) {
  let cost = 0;
  const length = arr.length;
  arr.sort(compareNumbers);
  let count = 0
  while (count < length - 1) {
      if (length < 4) {

      }
      cost += arr[0] + arr[1]
      console.log('cost', cost)
      arr = arr.slice(2, arr.length);
      arr.unshift(cost)
      console.log('ARR', arr)
      count ++;
  }
  return cost;
}

var arr = [95, 37, 33, 19, 92, 94, 16, 2, 18, 50]

console.log(minimizeCost(arr))