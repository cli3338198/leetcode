/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length
    const left = Array(n).fill(0)
    let min = prices[0]
    for (let i=1; i < n; i++) {
        left[i] = Math.max(left[i-1], prices[i] - min)
        min = Math.min(min, prices[i])
    }
    let max = prices[n-1]
    const right = Array(n).fill(0)
    for (let i=n-2; i >= 0; i--) {
        right[i] = Math.max(right[i+1], max - prices[i])
        max = Math.max(max, prices[i])
    }
    let profit = -Infinity
    for (let i=0; i < n; i++) {
        profit = Math.max(profit, left[i] + right[i])
    }
    return profit    
};