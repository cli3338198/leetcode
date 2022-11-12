/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    const n = arr.length
    const dp = Array(n+1).fill(0)
    for (let i=1; i <= n; i++) {
        let max = 0
        let curBest = 0
        for (let subarraySize=1; subarraySize <= k && i - subarraySize >= 0; subarraySize++) {
            max = Math.max(max, arr[i - subarraySize])
            curBest = Math.max(curBest, dp[i - subarraySize] + (max * subarraySize))
        }
        dp[i] = curBest
    }
    return dp[n]
};