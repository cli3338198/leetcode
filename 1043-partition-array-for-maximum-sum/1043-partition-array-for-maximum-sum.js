/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    const n = arr.length
    const dp = Array(n+1).fill(0)
    for (let i=1; i <= n; i++) {
        let max = 0, curBest = 0
        for (let j=1; j <= k && i - j >= 0; j++) {
            max = Math.max(max, arr[i-j])
            curBest = Math.max(curBest, dp[i - j] + max * j)
        }
        dp[i] = curBest
    }
    return dp[n]
};

maxSumAfterPartitioning = function(arr, k) {
    const n = arr.length
    const dp = Array(n+1).fill(0)
    for (let i=1; i <= n; i++) {
        let curmax = 0
        for (let j=1; j <= Math.min(k, i); j++) {
            curmax = Math.max(curmax, arr[i-j])
            dp[i] = Math.max(dp[i], dp[i-j] + curmax * j)
        }
    }
    return dp[n]
}