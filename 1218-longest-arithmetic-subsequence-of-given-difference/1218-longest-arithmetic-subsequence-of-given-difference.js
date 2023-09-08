/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    const dp = {}
    let res = 1
    for (const cur of arr) {
        const prev = dp[cur - difference] || 0
        dp[cur] = prev + 1
        res = Math.max(res, dp[cur])
    }
    return res
};