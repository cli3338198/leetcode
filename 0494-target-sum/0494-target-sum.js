/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const sum = nums.reduce((acc, val) => acc + val, 0)
    if (Math.abs(target) > sum || (sum + target) % 2 !== 0) return 0
    const s1 = (sum + target) / 2
    const dp = Array(nums.length+1).fill(0).map(() => Array(s1+1).fill(0))
    dp[0][0] = 1
    for (let i=1; i <= nums.length; i++) {
        for (let j=0; j <= s1; j++) {
            if (nums[i-1] <= j) {
                dp[i][j] = dp[i-1][j] + dp[i-1][j-nums[i-1]]
            } else {
                dp[i][j] = dp[i-1][j]
            }
        }
    }
    return dp[nums.length][s1]
};