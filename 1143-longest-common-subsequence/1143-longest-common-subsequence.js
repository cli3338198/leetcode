/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length
    const n = text2.length
    const dp = Array(m+1).fill(0).map(() => Array(n+1).fill(0))
    let res = 0
    for (let i=1; i <= m; i++) {
        for (let j=1; j <= n; j++) {
            dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            if (text1[i-1] === text2[j-1]) {
               dp[i][j] = Math.max(dp[i][j], 1 + dp[i-1][j-1])
            }
            res = Math.max(res, dp[i][j])
        }
    }
    return res
};