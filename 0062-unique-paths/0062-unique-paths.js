/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(rows, cols) {
    const dp = Array(rows).fill(0).map(() => Array(cols).fill(0))
    dp[rows-1][cols-1] = 1
    for (let r=rows-1; r >= 0; r--) {
        dp[r][cols-1] = 1
    }
    for (let c=cols-1; c >= 0; c--) {
        dp[rows-1][c] = 1
    }
    for (let r=rows-2; r >= 0; r--) {
        for (let c=cols-2; c >= 0; c--) {
            dp[r][c] = dp[r+1][c] + dp[r][c+1]
        }
    }
    return dp[0][0]
};