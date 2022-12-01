/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function(n, delay, forget) {
    const mod = Math.pow(10, 9) + 7
    const dp = Array(n+1).fill(0)
    dp[1] = 1
    let sharing = 0
    for (let i=2; i <= n; i++) {
        const nowSharing = dp[Math.max(i-delay, 0)]
        const nowForgetting = dp[Math.max(i-forget, 0)]
        sharing = (sharing + nowSharing - nowForgetting) % mod
        dp[i] = sharing
    }
    let res = 0
    for (let i=n-forget+1; i <= n; i++) {
        res = (res + dp[i]) % mod
    }
    return (res % mod + mod) % mod
};