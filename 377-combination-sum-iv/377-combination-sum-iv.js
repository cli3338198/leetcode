/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const dp = {}
    dp[0] = 1
    for (let i=1; i <= target; i++) {
        dp[i] = 0
        for (let n of nums) {
            if (n <= i && dp[i - n]) {
                dp[i] += dp[i-n]
            }
        }
    }
    return dp[target]
};