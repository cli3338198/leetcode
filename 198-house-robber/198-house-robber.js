/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length
    const dp = Array(n)
    dp[0] = nums[0]
    for (let i=1; i < n; i++) {
        dp[i] = Math.max(dp[i-1], nums[i] + (dp[i-2] || 0))
    }
    return dp[n-1]
};