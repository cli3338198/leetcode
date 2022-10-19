/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const n = nums.length
    const dp = Array(n).fill(false)
    dp[0] = true
    for (let i=0; i < n; i++) {
        if (dp[i] === true) {
            for (let j=i; j <= i + nums[i] && j < n; j++) {
                dp[j] = true
            }
        }
    }
    return dp[n-1]
};