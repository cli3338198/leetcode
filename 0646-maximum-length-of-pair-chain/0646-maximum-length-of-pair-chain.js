/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort((a, b) => a[0] - b[0])
    const n = pairs.length
    const dp = Array(n).fill(1)
    let max = 1
    for (let i=1; i < n; i++) {
        for (let j=0; j < i; j++) {
            const [a, b] = pairs[j], [c, d] = pairs[i]
            if (b < c) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
        max = Math.max(max, dp[i])
    }    
    return max
};

findLongestChain = function(pairs) {
    pairs.sort((a, b) => a[1] - b[1])
    let b = -Infinity, res = 0
    for (const [c, d] of pairs) {
        if (b < c) {
            b = d
            res++
        }
    }
    return res
}