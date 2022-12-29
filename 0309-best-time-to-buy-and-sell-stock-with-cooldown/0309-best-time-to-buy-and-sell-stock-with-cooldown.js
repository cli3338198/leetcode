/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length
    const buy = Array(n).fill(0)
    const sell = Array(n).fill(0)
    buy[0] = -prices[0]
    for (let i=1; i < n; i++) {
        buy[i] = Math.max(buy[i-1], (sell[i-2] || 0) - prices[i])
        sell[i] = Math.max(sell[i-1], buy[i-1] + prices[i])
    }
    return sell[n-1]
};