/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const m = s1.length
    const n = s2.length
    if (m + n !== s3.length) return false
    const dp = Array(m+1).fill(0).map(() => Array(n+1).fill(false))
    dp[m][n] = true
    for (let r=m; r >= 0; r--) {
        for (let c=n; c >= 0; c--) {
            if (r < s1.length && s1[r] === s3[r+c] && dp[r+1][c] === true) {
                dp[r][c] = true
            }
            if (c < s2.length && s2[c] === s3[r+c] && dp[r][c+1] === true) {
                dp[r][c] = true
            }
        }
    }
    return dp[0][0]
};