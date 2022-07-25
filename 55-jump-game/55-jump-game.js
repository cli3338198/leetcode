/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const n = nums.length
    const dp = Array(n).fill(false)
    dp[0] = true
    for (let i=0; i < nums.length; i++) {
        if (!dp[i]) continue
        for (let j=i; j <= i + nums[i]; j++) {
            dp[j] = dp[i]
        }
    }
    return dp[n-1]
};