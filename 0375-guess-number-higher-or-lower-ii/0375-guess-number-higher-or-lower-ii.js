/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
    if (n === 1) return 0
    const dp = Array(n+2).fill(0).map(() => Array(n+2).fill(0))
    for (let len=2; len <= n; len++) {
        for (let i=1; i <= n-len+1; i++) {
            const j = i+len-1
            let min = Infinity
            for (let k=i; k <= j; k++) {
                const temp = k + Math.max(dp[i][k-1], dp[k+1][j])
                min = Math.min(min, temp)
            }
            dp[i][j] = min
        }
    }
    return dp[1][n]
};