/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const dp = Array(n+1).fill(1)
    for (let numNodes=2; numNodes <= n; numNodes++) {
        let total = 0
        for (let root=1; root <= numNodes; root++) {
            const left = root-1
            const right = numNodes - root
            total += dp[left] * dp[right]
        }
        dp[numNodes] = total
    }
    return dp[n]
};