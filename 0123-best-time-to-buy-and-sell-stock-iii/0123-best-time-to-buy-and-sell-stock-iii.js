/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    return kTransactions(2)
    
    function kTransactions(k) {
        const n = prices.length
        const dp = Array(k+1).fill(0).map(() => Array(n+1).fill(0))
        for (let i=1; i <= k; i++) {
            let profit = -Infinity
            for (let j=1; j < n; j++) {
                profit = Math.max(profit, dp[i-1][j-1] - prices[j-1])
                dp[i][j] = Math.max(dp[i][j-1], profit + prices[j])
            }
        }
        return dp[k][n-1]
    }
};

maxProfit = function(prices) {
    const n = prices.length
    const left = Array(n).fill(0)
    let min = prices[0]
    for (let i=1; i < n; i++) {
        min = Math.min(min, prices[i])
        left[i] = Math.max(left[i-1], prices[i] - min)
    }
    let max = prices[prices.length-1]
    const right = Array(n).fill(0)
    for (let i=n-2; i >= 0; i--) {
        max = Math.max(max, prices[i])
        right[i] = Math.max(right[i+1], max - prices[i])
    }
    let maxProfit = 0
    for (let i=0; i < n; i++) {
        maxProfit = Math.max(maxProfit, left[i] + right[i])
    }
    return maxProfit
}
