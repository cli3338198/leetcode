/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0 
    let r = nums.length-1
    while (l < r) {
        const m = Math.floor((l+r)/2)
        if (nums[m] > nums[r]) {
            l = m + 1
        } else if (nums[m] === nums[r]) {
            r--
        } else {
            r = m
        }
    }
    return nums[l]
};