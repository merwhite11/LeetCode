/*
input: array of prices - each el is prive of a stock on ith day
output: max profit you can get by buying one day, selling another

prices: [7, 1, 6, 1, 5, 4]
output: 5

low = 0 
7 > 1
low = 1
high = 2

low = 1
maxProfit = 5
high = 3



]*/

function bubbleSort(arr){
    var noSwap;
    for(var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(var j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                noSwaps = false;
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        if (noSwaps) break;
    }
    return arr
}

var maxProfit = function(prices) {
  let low = 0; //buy
  let high = 1 //sell
  let maxProfit = 0;

  while(low < prices.length) {
    if(prices[low] < prices[high]) {
        let profit = prices[high] - prices[low];
        maxProfit = Math.max(maxProfit, profit);
    } else {
        low = high;
    }
    high++;
  }
  return maxProfit
};

var prices = [7, 2, 5, 1, 6, 4]
console.log(maxProfit(prices))

/*
naive
var maxProfit = function(prices) {
    var maxProfit = 0;
    for(let i = 0; i < prices.length - 1; i ++) {
        var curr = prices[i];
        for(let j = i + 1; j < prices.length; j++) {
            var next = prices[j];
            if(next > curr && (next-curr) > maxProfit) {
                maxProfit = next - curr;
            } 
        }
    }
    return maxProfit;
};
*/
