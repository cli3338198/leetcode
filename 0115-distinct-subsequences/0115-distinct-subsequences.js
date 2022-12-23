/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const m = s.length
    const n = t.length
    const dp = Array(m+1).fill(0).map(() => Array(n+1).fill(0))
    for (const row of dp) {
        row[0] = 1
    }
    for (let r=1; r <= m; r++) {
        for (let c=1; c <= n; c++) {
            dp[r][c] = dp[r-1][c]
            if (s[r-1] === t[c-1]) {
                dp[r][c] += dp[r-1][c-1]
            }
        }
    }
    return dp[m][n]
};