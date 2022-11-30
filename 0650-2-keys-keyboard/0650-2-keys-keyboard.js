/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    const dp = Array(n+1).fill(0).map((_,i) => i)
    dp[0] = 0
    dp[1] = 0
    dp[2] = 2
    dp[3] = 3
    for (let i=4; i <= n; i++) {
        for (let j=2; j <= i; j++) {
            if (i % j === 0) {
                dp[i] = Math.min(dp[i], (i/j) + dp[j])
            }
        }
    }
    return dp[n]
};