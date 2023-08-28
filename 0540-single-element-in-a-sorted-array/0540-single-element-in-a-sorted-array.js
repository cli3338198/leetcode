/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let l = 0, r = nums.length-1
    while (l < r) {
        let m = Math.floor((l+r)/2)
        if (m % 2 !== 0 && m > 0) m--
        if (nums[m] !== nums[m+1]) {
            r = m
        } else {
            l = m + 2
        }
    }
    return nums[l]
};