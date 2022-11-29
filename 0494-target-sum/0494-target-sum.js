/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const dp = {}
    return helper(0, 0)
    
    function helper(i, total) {
        if (i === nums.length) return total === target ? 1 : 0
        if ([i, total] in dp) return dp[[i, total]]
        return dp[[i, total]] = helper(i+1, total-nums[i]) + helper(i+1, total+nums[i])
    }
};