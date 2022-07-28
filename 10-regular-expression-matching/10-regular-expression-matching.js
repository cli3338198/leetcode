/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length
    const n = p.length
    const dp = Array(m+1).fill(0).map(() => Array(n+1).fill(false))
    dp[0][0] = true
    for (let i=1; i <= n; i++) {
        if (p[i-1] === '*') {
            dp[0][i] = dp[0][i] || dp[0][i-2]
        }
    }
    for (let i=1; i <= m; i++) {
        for (let j=1; j <= n; j++) {
            if ((s[i-1] === p[j-1]) || (p[j-1] === '.')) {
                dp[i][j] = dp[i-1][j-1]
            } else if (p[j-1] === '*') {
                dp[i][j] = dp[i][j-2]
                if (p[j-2] === '.' || s[i-1] === p[j-2]) {
                    dp[i][j] = dp[i][j] || dp[i-1][j]
                }
            }
        }
    }
    return dp[m][n]
};