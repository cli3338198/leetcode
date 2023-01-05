/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    const n = nums.length
    const suffixSums = Array(n).fill(0)
    for (let i=n-1; i >= 0; i--) {
        suffixSums[i] = (suffixSums[i+1] || 0) + nums[i]
    }
    const dp = {}
    return helper(0, k)
    
    function helper(i, k) {
        const key = `${i} ${k}`
        if (key in dp) return dp[key]
        if (k === 1) return suffixSums[i]
        let res = Infinity
        let curSum = 0
        for (let j=i; j < n-1; j++) {
            curSum += nums[j]
            const maxSum = Math.max(curSum, helper(j+1, k-1))
            res = Math.min(res, maxSum)
            if (curSum > res) break
        }
        return dp[key] = res
    }
};