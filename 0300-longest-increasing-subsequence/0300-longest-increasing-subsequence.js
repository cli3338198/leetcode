/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length
    const dp = Array(n).fill(1)
    for (let i=1; i < n; i++) {
        for (let j=0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
    }
    return Math.max(...dp)
};