/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, faces, target) {
    const mod = 10 ** 9 + 7
    const dp = Array(n+1).fill(0).map(() => Array(target+1).fill(0))
    dp[0][0] = 1
    for (let i=1; i <= n; i++) {
        for (let j=1; j <= target; j++) {
            for (let k=1; k <= faces; k++) {
                if (k <= j) {
                    dp[i][j] += dp[i-1][j-k] 
                    dp[i][j] %= mod
                }
            }
        }
    }
    return dp[n][target] % mod
};