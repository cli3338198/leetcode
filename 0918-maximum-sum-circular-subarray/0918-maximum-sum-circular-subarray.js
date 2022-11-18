/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let total = 0
    let max = nums[0]
    let curMax = 0
    let min = nums[0]
    let curMin = 0
    for (const n of nums) {
        total += n
        curMax = Math.max(n, curMax + n)
        max = Math.max(max, curMax)
        curMin = Math.min(n, curMin + n)
        min = Math.min(min, curMin)
    }
    return max > 0 ? Math.max(max, total - min) : max
};