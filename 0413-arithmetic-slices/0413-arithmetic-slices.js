/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    const n = nums.length
    const dp = Array(n).fill(0)
    let res = 0
    for (let i=2; i < n; i++) {
        if (nums[i-2]-nums[i-1] === nums[i-1]-nums[i]) {
            dp[i] = 1 + dp[i-1]
        } 
        res += dp[i]
    }
    return res
};