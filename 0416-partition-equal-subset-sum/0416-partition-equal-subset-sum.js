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