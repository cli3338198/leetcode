/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = Array(n+1).fill(Infinity)
    dp[0] = 0, dp[1] = 1, dp[2] = 2
    for (let i=3; i <= n; i++) {
        for (let j=1; j * j <= i; j++) {
            if (j * j <= i) {
                dp[i] = Math.min(dp[i], 1 + dp[i-j*j])
            }
        }
    }
    return dp[n]
};