/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let lastIdx = -Infinity
    for (let i=0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (i - lastIdx <= k) return false
            lastIdx = i
        }
    }
    return true
};