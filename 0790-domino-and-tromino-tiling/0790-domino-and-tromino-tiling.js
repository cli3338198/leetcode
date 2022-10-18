/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const mod = 10 ** 9 + 7
    const dp = Array(n+1).fill(0)
    dp[1] = 1
    dp[2] = 2
    dp[3] = 5
    for (let i=4; i <= n; i++) {
        // dp[i] = dp[i-1] + dp[i-2] + 2*(dp[i-3] + ... dp[0])
        dp[i] = ((2 * dp[i-1] % mod) + (dp[i-3] % mod)) % mod
    }
    return dp[n] % mod
    
};