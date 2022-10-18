/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    const n = nums.length
    const sum = nums.reduce((acc, val) => acc + val, 0)
    const kSum = sum / k
    if (Math.floor(sum / k) !== kSum) return false
    const dp = {}
    return helper(Array(nums.length).fill(false), k, kSum)
    
    function helper(used, k, curSum) {
        if ([used, k, curSum] in dp) {
            return dp[[used, k, curSum]]
        }
        if (k === 0) {
            return used.every(u => u === true)
        }
        if (curSum === 0) {
            return helper(used, k-1, kSum)
        }
        let res = false
        for (let i=0; i < n; i++) {
            if (used[i] === false && nums[i] <= curSum) {
                used[i] = true
                res = res || helper(used, k, curSum - nums[i])
                used[i] = false
            }
        }
        return dp[[used, k, curSum]] = res
    }
};