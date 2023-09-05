/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    const max = Math.max(...nums)
    const freq = Array(max+1).fill(0)
    for (const n of nums) {
        freq[n]++
    }
    const dp = Array(max+1).fill(0)
    for (let i=1; i <= max; i++) {
        dp[i] = Math.max(dp[i-1], (dp[i-2] || 0) + i * freq[i])
    }
    return dp[max]
};