/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let min = nums[0], res = -1
    for (let i=1; i < nums.length; i++) {
        res = Math.max(res, nums[i] - min)
        min = Math.min(min, nums[i])
    }
    return res === 0 ? -1 : res
};