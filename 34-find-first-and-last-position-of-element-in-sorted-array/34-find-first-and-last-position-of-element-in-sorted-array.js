/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let l = 0
    let r = nums.length-1
    while (l <= r) {
        const m = Math.floor((l+r)/2)
        if (nums[m] === target) {
            l = m
            r = m
            while (nums[l-1] === nums[m]) l--
            while (nums[r+1] === nums[m]) r++
            return [l, r]
        } else if (nums[m] < target) {
            l = m + 1
        } else {
            r = m - 1
        }
    }
    return [-1, -1]
};