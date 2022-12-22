/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const n = nums.length
    const dp = Array(n).fill(Infinity)
    dp[0] = 0
    for (let i=0; i < n; i++) {
        for (let j=i+1; j < n && j <= i + nums[i]; j++) {
            dp[j] = Math.min(dp[j], 1 + dp[i])
        }
    }
    return dp[n-1]
};