# Stock Profit Maximization

## Description

You are given an array `prices` where `prices[i]` is the price of a given stock on the ith day. The goal is to maximize the profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you

## Examples

### Example 1

```plaintext
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

### Example 2

```plaintext
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

## Constraints

* `1 <= prices.length <= 10^5`
* `0 <= prices[i] <= 10^4`

## Solution

### High-level Idea

* The idea is to keep track of the cheapest price we've seen so far and the maximum profit we can make if we sell on the current day.
  * We can do this by iterating through the array and updating the cheapest price and maximum profit as we go.
  * If the current price is cheaper than the cheapest price we've seen so far, we update the cheapest price.
  * If the current price minus the cheapest price is greater than the maximum profit, we update the maximum profit.
  * Otherwise, we do nothing.
  * Return the maximum profit at the end.
  * If the array is empty, return 0.
