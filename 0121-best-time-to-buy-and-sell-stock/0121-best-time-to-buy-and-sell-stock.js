/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity, profit = 0
    for (const price of prices) {
        profit = Math.max(profit, price - min)
        min = Math.min(min, price)
    }
    return profit
};

maxProfit = function(prices) {
    const dp = Array(prices.length).fill(0)
    let min = prices[0]
    for (let i=1; i < prices.length; i++) {
        dp[i] = Math.max(dp[i-1], prices[i] - min)
        min = Math.min(min, prices[i])
    }
    return dp[prices.length-1]
}