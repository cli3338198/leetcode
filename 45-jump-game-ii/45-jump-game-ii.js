/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let farthest = 0
    let currentJumpMax = 0
    let jumps = 0
    for (let i=0; i < nums.length-1; i++) {
        farthest = Math.max(farthest, i + nums[i])
        if (i === currentJumpMax) {
            jumps++
            currentJumpMax = farthest
        }
    }
    return jumps
};