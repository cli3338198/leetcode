/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort(([a,c], [b,d]) => a - b || c - d)
    const n = pairs.length
    const dp = Array(n).fill(1)
    let res = 1
    for (let i=1; i < n; i++) {
        const [c, d] = pairs[i]
        for (let j=0; j < i; j++) {
            const [a, b] = pairs[j]
            if (b < c) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
        res = Math.max(res, dp[i])
    }
    return res
};