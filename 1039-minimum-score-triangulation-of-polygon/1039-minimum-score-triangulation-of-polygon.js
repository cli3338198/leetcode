/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function(values) {
    const n = values.length
    const dp = Array(n).fill(0).map(() => Array(n).fill(0))
    for (let len=2; len < n; len++) {
        for (let i=1; i < n-len+1; i++) {
            const j = i+len-1
            dp[i][j] = Infinity
            for (let k=i; k < j; k++) {
                dp[i][j] = Math.min(dp[i][j], dp[i][k] + (values[i-1] * values[j] * values[k]) + dp[k+1][j])
            }
        }
    }
    return dp[1][n-1]
};