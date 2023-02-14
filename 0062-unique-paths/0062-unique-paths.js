/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = {}
    return helper(0, 0)
    
    function helper(r, c) {
        const key = `${r} ${c}`
        if (key in dp) return dp[key]
        if (r >= m || c >= n) return 0
        if (r === m-1 && c === n-1) return 1
        return dp[key] = helper(r+1, c) + helper(r, c+1)
    }
};