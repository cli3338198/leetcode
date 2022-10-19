/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const n = nums.length
    let max = 0
    for (let i=0; i < n; i++) {
        if (i > max) return false
        max = Math.max(max, i + nums[i])
    }
    return true
};