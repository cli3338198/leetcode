/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    const dp = Array(n+1).fill(0).map((_,i) => i)
    dp[1] = 0
    for (let i=4; i <= n; i++) {
        for (let j=2; j <= i; j++) {
            // can use some number of j subunits to make i
            if (i % j === 0) {
                dp[i] = Math.min(dp[i], (i / j) + dp[j])
            }
        }
    }
    return dp[n]
};