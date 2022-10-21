/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length
    let res = 0
    const dp = Array(n).fill(1)
    for (let i=0; i < n; i++) {
        for (let j=0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
        res = Math.max(res, dp[i])
    }
    
    return res
};