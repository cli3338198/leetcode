/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const n = nums.length
    let maxJump = 0
    for (let i=0; i < n; i++) {
        if (i > maxJump) return false
        maxJump = Math.max(maxJump, i + nums[i])
    }
    return true
};