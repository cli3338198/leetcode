/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const dp = Array(n+1).fill(1)
    for (let nodes=2; nodes <= n; nodes++) {
        let res = 0
        for (let root=1; root <= nodes; root++) {
            const left = root - 1
            const right = nodes - root
            res += dp[left] * dp[right]
        }
        dp[nodes] = res
    }
    return dp[n]
};