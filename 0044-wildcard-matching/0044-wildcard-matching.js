/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const rows = s.length
    const cols = p.length
    const dp = Array(rows+1).fill(0).map(() => Array(cols+1).fill(false))
    dp[0][0] = true
    for (let c=1; c <= cols; c++) {
        if (p[c-1] === '*') {
            dp[0][c] = dp[0][c-1]
        }
    }
    for (let r=1; r <= rows; r++) {
        for (let c=1; c <= cols; c++) {
            if (s[r-1] === p[c-1] || p[c-1] === '?') {
                dp[r][c] = dp[r-1][c-1]
            } else if (p[c-1] === '*') {
                dp[r][c] = dp[r-1][c] || dp[r][c-1]
            }
        }
    }
    return dp[rows][cols]
};