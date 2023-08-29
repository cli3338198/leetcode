/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    const n = nums.length
    const dp = Array(n).fill(0).map(() => ({}))
    let max = 0
    for (let i=1; i < n; i++) {
        for (let j=0; j < i; j++) {
            const diff = nums[i] - nums[j]
            dp[i][diff] = Math.max((dp[i][diff] || 0), 1 + (dp[j][diff] || 0))
            max = Math.max(max, 1 + dp[i][diff])
        }
    }
    return max
};