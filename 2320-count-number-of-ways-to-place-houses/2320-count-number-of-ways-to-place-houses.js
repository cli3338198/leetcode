/**
 * @param {number} n
 * @return {number}
 */
var countHousePlacements = function(n) {
    const mod = BigInt(1e9 + 7)
    const dp = Array(n+1).fill(0n)
    dp[0] = 1n
    dp[1] = 2n
    for (let i=2; i <= n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % mod
    }
    return (dp[n] * dp[n]) % mod
};