/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    const n = nums.length
    nums = [1, ...nums, 1]
    const dp = Array(n+2).fill(0).map(() => Array(n+2).fill(0))
    for (let len=1; len <= n; len++) {
        for (let i=0; i <= n - len + 1; i++) {
            const j = i + len - 1
            for (let k=i; k <= j; k++) {
                dp[i][j] = Math.max(
                    dp[i][j], 
                    dp[i][k-1] + nums[i-1]*nums[k]*nums[j+1] + dp[k+1][j]
                )
            }
        }
    }
    return dp[1][n]
};