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

uniquePaths = function(m, n) {
    const dp = Array(m).fill(0).map(() => Array(n).fill(0))
    for (let r=m-1; r >= 0; r--) {
        dp[r][n-1] = 1
    }
    for (let c=n-1; c >= 0; c--) {
        dp[m-1][c] = 1
    }
    for (let r=m-2; r >= 0; r--) {
        for (let c=n-2; c >= 0; c--) {
            dp[r][c] += dp[r+1][c] + dp[r][c+1]
        }
    }
    return dp[0][0]
}

uniquePaths = function(m, n) {
    const dp = Array(m).fill(0).map(() => Array(n).fill(1))
    for (let i=1; i < m; i++) {
        for (let j=1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1] 
        }
    }
    return dp[m-1][n-1]
}