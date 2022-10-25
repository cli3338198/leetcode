/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    const n = piles.length
    const dp = Array(n).fill(0).map(() => Array(n))
    for (let i=0; i < n; i++) {
        dp[i][i] = [piles[i], 0]
    }
    for (let len=2; len <= n; len++) {
        for (let i=0; i < n - len + 1; i++) {
            const j = i + len - 1
            dp[i][j] = [Math.max(dp[i][j-1][0], dp[i+1][j][0]), Math.min(dp[i][j-1][1], dp[i+1][j][1])]
        }
    }
    return !!dp[0][n-1][0]
};