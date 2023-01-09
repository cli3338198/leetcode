/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const dp = {}
    return helper(0, target)
    
    function helper(idx, target) {
        const key = `${idx} ${target}`
        if (key in dp) return dp[key]
        if (idx === nums.length) {
            if (target === 0) return 1
            return 0
        }
        return dp[key] = helper(idx+1, target-nums[idx]) + helper(idx+1, target+nums[idx])
    }
};