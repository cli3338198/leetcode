/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((acc, val) => acc + val, 0)
    if (sum % 2 !== 0) return false
    const halfSum = sum / 2
    const dp = Array(halfSum+1).fill(false)
    dp[0] = true
    for (let i=0; i < nums.length; i++) {
        for (let j=halfSum; j >= i; j--) {
            if (dp[j-nums[i]] === true) {
                dp[j] = true
            }
        }
    }
    return dp[halfSum]
};

canPartition = function(nums) {
    const sum = nums.reduce((acc, val) => acc + val, 0)
    if (sum % 2 !== 0) return false
    const halfSum = sum / 2
    const n = nums.length
    const dp = Array(n+1).fill(0).map(() => Array(halfSum+1).fill(false))
    dp[0][0] = true
    for (let i=1; i <= n; i++) {
        for (let j=1; j <= halfSum; j++) {
            dp[i][j] = dp[i-1][j]
            if (nums[i-1] <= j) {
                dp[i][j] = dp[i][j] || dp[i-1][j-nums[i-1]]
            }
            if (j === halfSum && dp[i][j] === true) return true
        }
    }
    return false
}
