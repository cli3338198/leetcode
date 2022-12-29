/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    const dp = Array(n+1).fill(0)
    dp[2] = 1
    dp[3] = 2
    for (let i=4; i <= n; i++) {
        for (let j=2; j < i; j++) {
            dp[i] = Math.max(dp[i], Math.max(j, dp[j]) * Math.max(i-j, dp[i-j]))
        }
    }
    return dp[n]
};