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

// find number of ways to divide nums into two sets such that set1 + set2 === target
// s1 + s2 = sum
// s1 - s2 = target
// s1 - (sum - s1) = target
// s1 = (target + sum) / 2
// find number of ways to get s1
findTargetSumWays = function(nums, target) {
    const n = nums.length
    const sum = nums.reduce((acc, val) => acc + val, 0)
    if (Math.abs(target) > sum || (sum + target) % 2 !== 0) return 0
    const s1 = Math.floor((target + sum) / 2)
    const dp = Array(n+1).fill(0).map(() => Array(s1 + 1).fill(0))
    dp[0][0] = 1
    for (let i=1; i <= n; i++) {
        for (let j=0; j <= s1; j++) {
            dp[i][j] += dp[i-1][j]
            if (nums[i-1] <= j) {
                dp[i][j] += dp[i-1][j-nums[i-1]]
            }
        }
    }
    return dp[n][s1]
}