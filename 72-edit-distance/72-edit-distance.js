/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length
    const n = word2.length
    const dp = []
    for (let i=0; i <= m; i++) {
        const row = []
        for (let j=0; j <= n; j++) {
            if (i === 0) {
                row.push(j)
            } else if (j === 0) {
                row.push(i)
            } else {
                row.push(Infinity)
            }
        }
        dp.push(row)
    }
    for (let i=1; i <= m; i++) {
        for (let j=1; j <= n; j++) {
            if (word1[i-1] === word2[j-1]) {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = 1 + Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])
            }
        }
    }
    return dp[m][n]
};