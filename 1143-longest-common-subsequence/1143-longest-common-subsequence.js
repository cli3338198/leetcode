/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length
    const n = text2.length
    const dp = Array(m+1).fill(0).map(() => Array(n+1).fill(""))
    for (let i=1; i <= m; i++) {
        for (let j=1; j <= n; j++) {
            if (text1[i-1] === text2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + text1[i-1]
            } else {
                if (dp[i-1][j].length > dp[i][j-1].length) {
                    dp[i][j] = dp[i-1][j]
                } else {
                    dp[i][j] = dp[i][j-1]
                }
            }
        }
    }
    return dp[m][n].length
};