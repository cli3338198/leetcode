/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    const dp = {}
    return helper(0, k)
    
    function helper(i, k) {
        const key = `${i} ${k}`
        if (k === 1) {
            return sum(i)
        }
        if (key in dp) {
            return dp[key]
        }
        let res = Infinity
        let curSum = 0
        for (let j=i; j < nums.length-1; j++) {
            curSum += nums[j]
            const maxSum = Math.max(curSum, helper(j+1, k-1))
            res = Math.min(res, maxSum)
            if (curSum > res) {
                break
            }
        }
        return dp[key] = res
    }
    
    function sum(idx) {
        return nums.slice(idx).reduce((acc, val) => acc + val, 0)
    }
};