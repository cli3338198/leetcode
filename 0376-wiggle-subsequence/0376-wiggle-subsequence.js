/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    if (nums.length < 2) {
        return nums.length
    }
    let up = 1
    let down = 1
    for (let i=0; i < nums.length-1; i++) {
        if (nums[i] < nums[i+1]) {
            up = down + 1
        } else if (nums[i] > nums[i+1]) {
            down = up + 1
        }
    }
    return Math.max(up, down)
};