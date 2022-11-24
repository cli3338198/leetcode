/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function(nums, k) {
    const dp = {}
    return helper(nums.length, k)
    
    function helper(n, k) {
        const key = `${n} ${k}`
        if (key in dp) return dp[key]
        if (n < k) return 0
        if (k === 1) {
            return dp[key] = avg(nums.slice(0, n))
        }
        let res = 0
        let prefixSum = 0
        for (let i=n-1; i > 0; i--) {
            prefixSum += nums[i]
            res = Math.max(res, (prefixSum / (n - i)) + helper(i, k-1))
        }
        return dp[key] = res
    }
    
    function avg(nums) {
        return (nums.reduce((acc, val) => acc + val, 0) / nums.length)
    }
};