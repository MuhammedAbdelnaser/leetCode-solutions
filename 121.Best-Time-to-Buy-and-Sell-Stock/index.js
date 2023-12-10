
const maxProfit = function(prices) {
  let min = prices[0]
  let highestProfit = 0;
  let profit;
  for (let i = 0; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i]
    }
    profit = prices[i] - min
    if (profit > highestProfit) {
      highestProfit = profit
    }
  }
  return highestProfit
}

maxProfit([7,6,4,3,1])