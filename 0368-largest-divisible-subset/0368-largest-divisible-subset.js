/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort((a, b) => a - b)
    const n = nums.length
    if (n === 0) return res
    let max = 1
    const dp = Array(n).fill(1)
    for (let i=1; i < n; i++) {
        for (let j=0; j < i; j++) {
            if (nums[i] % nums[j] === 0) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
        max = Math.max(max, dp[i])
    }
    let prev = null
    const res = []
    for (let i=n-1; i >= 0 && max > 0; i--) {
        if ((prev % nums[i] === 0 || prev === null) && dp[i] === max) {
            res.push(nums[i])
            prev = nums[i]
            max--
        }
    }
    return res.reverse()
};