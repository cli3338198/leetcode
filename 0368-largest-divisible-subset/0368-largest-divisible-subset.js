/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort((a, b) => a - b)
    const n = nums.length
    const dp = Array(n).fill(1)
    let len = 1
    for (let i=1; i < n; i++) {
        for (let j=0; j < i; j++) {
            if (nums[i] % nums[j] === 0) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
        len = Math.max(len, dp[i])
    }
    const res = []
    let prev = null
    for (let i=n-1; i >= 0 && len > 0; i--) {
        if ((prev === null || prev % nums[i] === 0) && dp[i] === len) {
            res.push(nums[i])
            prev = nums[i]
            len--
        }
    }
    return res.reverse()
};