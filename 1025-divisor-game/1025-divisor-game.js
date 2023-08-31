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

divisorGame = function(n) {
    const dp = Array(n+1).fill(false)
    dp[2] = true
    for (let i=3; i <= n; i++) {
        for (let x=1; x < i; x++) {
            if (i % x === 0 && !dp[i-x]) {
                dp[i] = true
                break
            }
        }
    }
    return dp[n]
}