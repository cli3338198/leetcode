/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0]
    let curMax = nums[0]
    for (let i=1; i < nums.length; i++) {
        curMax = Math.max(curMax + nums[i], nums[i])
        max = Math.max(max, curMax)
    }
    return max
};

maxSubArray = function(nums) {
    const n = nums.length
    const dp = nums.slice()
    for (let i=1; i < n; i++) {
        dp[i] = Math.max(dp[i] + dp[i-1], dp[i])
    }
    return Math.max(...dp)
}