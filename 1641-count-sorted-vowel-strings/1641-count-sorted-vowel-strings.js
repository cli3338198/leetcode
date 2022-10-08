/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    const m = 'aeiou'.length
    const dp = Array(n+1).fill(0).map(() => Array(m).fill(0))
    for (const row of dp) {
        row[row.length-1] = 1
    }
    dp[0].fill(1)
    for (let r=1; r <= n; r++) {
        for (let c=m-2; c >= 0; c--) {
            for (let i=m-1; i >= c; i--) {
                dp[r][c] += dp[r-1][i]
            }
        }
    }
    return dp[n][0]
};