/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
    cuts = [0, ...cuts, n]
    cuts.sort((a, b) => a - b)
    const dp = Array(cuts.length+1).fill(0).map(() => Array(cuts.length+1).fill(0))
    for (let i=0; i < cuts.length; i++) {
        dp[i][i+1] = 0
    }
    for (let i=0; i < cuts.length-1; i++) {
        dp[i][i+2] = cuts[i+2] - cuts[i]
    }
    for (let len=3; len < cuts.length; len++) {
        for (let i=0; i <= cuts.length-len; i++) {
            const j = i + len
            dp[i][j] = Infinity
            for (let k=i+1; k <= j; k++) {
                dp[i][j] = Math.min(dp[i][j], cuts[j] - cuts[i] + dp[i][k] + dp[k][j])
            }
        }
    }
    return dp[0][cuts.length-1]
};