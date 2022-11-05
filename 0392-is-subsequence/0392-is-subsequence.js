/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const m = s.length
    const n = t.length
    const dp = Array(m+1).fill(0).map(() => Array(n+1).fill(false))
    dp[0].fill(true)
    for (let i=1; i <= m; i++) {
        for (let j=1; j <= n; j++) {
            if (s[i-1] === t[j-1]) {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = dp[i][j-1]
            }
        }
    }
    return dp[m][n]
};