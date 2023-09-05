/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const mod = Math.pow(10, 9) + 7
    const dp = {}
    return helper(n) % mod
    
    function helper(n) {
        if (n in dp) return dp[n]
        if (n === 1) return 1
        if (n === 2) return 2
        if (n === 3) return 5
        return dp[n] = (2 * helper(n-1) + helper(n-3)) % mod
    }
};

numTilings = function(n) {
    const mod = Math.pow(10, 9) + 7
    const dp = Array(n+1).fill(0)
    dp[1] = 1
    dp[2] = 2
    dp[3] = 5
    for (let i=4; i <= n; i++) {
        dp[i] = ((2 * dp[i-1] % mod) + (dp[i-3] % mod)) % mod
    }
    return dp[n] % mod
}