/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    const n = nums.length
    const dp = {}
    const suffixSums = Array(n).fill(0)
    for (let i=n-1; i >= 0; i--) {
        suffixSums[i] = (suffixSums[i+1] || 0) + nums[i] 
    }
    return helper(0, k)
    
    function helper(i, k) {
        const key = `${i} ${k}`
        if (key in dp) return dp[key]
        if (k === 1) return suffixSums[i]
        let res = Infinity
        let curSum = 0
        for (let j=i; j < n - 1; j++) {
            curSum += nums[j]
            const maxSum = Math.max(curSum, helper(j+1, k-1))
            res = Math.min(res, maxSum)
            if (curSum > res) break
        }
        return dp[key] = res
    }
};

splitArray = function(nums, k) {
    const n = nums.length
    const sums = Array(n+1).fill(0)
    for (let i=1; i <= n; i++) {
        sums[i] = sums[i-1] + nums[i-1]
    }
    // #splits x arrayLength
    const dp = Array(k).fill(0).map(() => Array(n).fill(Infinity))
    for (let i=0; i < n; i++) {
        // first row, no splits 
        dp[0][i] = sums[n] - sums[i]
    }
    for (let s=1; s < k; s++) {
        for (let i=0; i < n; i++) {
            for (let j=i+1; j < n; j++) {
                // not enough numbers, continue
                if (n - j < s - 1) continue
                // split for all j
                dp[s][i] = Math.min(dp[s][i], Math.max(dp[s-1][j], sums[j]-sums[i]))
            }
        }
    }
    return dp[k-1][0]
}