/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let increasing = false, decreasing = false
    for (let i=0; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            increasing = true
        } else if (nums[i - 1] > nums[i]) {
            decreasing = true
        }
        if (increasing && decreasing) {
            return false
        }
    }
    return true
};