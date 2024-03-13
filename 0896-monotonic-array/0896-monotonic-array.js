/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let inc = true, dec = true
    for (let i=1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) dec = false
        if (nums[i - 1] > nums[i]) inc = false
    }
    return inc || dec
    
    //
    
    if (nums.length <= 1) {
        return true
    }
    let increasing = false, decreasing = false
    for (let i=1; i < nums.length; i++) {
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