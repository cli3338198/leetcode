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