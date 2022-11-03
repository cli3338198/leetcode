/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
    const mod = 10**9 + 7
    const dp = {}
    dp[1] = 1
    dp[2] = 6
    for (let i=3; i <= n; i++) {
        const odd = 2 * i - 1
        const permutations = odd * (odd + 1)/2
        dp[i] = (dp[i-1] * permutations) % mod
    }
    return dp[n] % mod
};