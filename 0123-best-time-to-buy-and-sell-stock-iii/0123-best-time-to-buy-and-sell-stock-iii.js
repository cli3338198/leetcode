/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    return kTransactions(2, prices)
    
    function kTransactions(k, prices) {
        const n = prices.length
        const dp = Array(k+1).fill(0).map(() => Array(n+1).fill(0))
        for (let i=1; i <= k; i++) {
            let temp = -Infinity
            for (let j=1; j < n; j++) {
                temp = Math.max(temp, dp[i-1][j-1] - prices[j-1])
                dp[i][j] = Math.max(dp[i][j-1], temp + prices[j])
            }
        }
        return dp[k][n-1]
    }
};