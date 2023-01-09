/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    const n = nums.length
    const dp = Array(n).fill(0).map(() => [1, 1])
    let maxLen = 0
    let res = 0
    for (let i=0; i < n; i++) {
        for (let j=0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (dp[j][0] + 1 === dp[i][0]) {
                    dp[i][1] += dp[j][1]
                }
                if (dp[j][0] + 1 > dp[i][0]) {
                    dp[i] = [dp[j][0] + 1, dp[j][1]]
                }
            }
        }
        if (maxLen == dp[i][0]) {
            res += dp[i][1]
        } else if (maxLen < dp[i][0]) {
            maxLen = dp[i][0]
            res = dp[i][1]
        }
    }
    return res
};