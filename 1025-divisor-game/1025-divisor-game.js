/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    const dp = {}
    return helper(n)
    
    function helper(n) {
        if (n in dp) return dp[n]
        if (n === 1) return false
        if (n === 2) return true
        for (let x=1; x < n; x++) {
            if (n % x === 0 && !helper(n - x)) return true
        }
        return dp[n] = false
    }
};