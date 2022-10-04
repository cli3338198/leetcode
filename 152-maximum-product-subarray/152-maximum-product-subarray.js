/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0]
    let minSoFar = nums[0]
    let maxSoFar = nums[0]
    for (let i=1; i < nums.length; i++) {
        const temp = maxSoFar
        maxSoFar = Math.max(nums[i], nums[i] * maxSoFar, nums[i] * minSoFar)
        minSoFar = Math.min(nums[i], nums[i] * temp, nums[i] * minSoFar)
        max = Math.max(max, maxSoFar)
    }
    return max
};