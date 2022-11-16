/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let res = 0
    let l = 0
    let curProduct = 1
    for (let r=0; r < nums.length; r++) {
        curProduct *= nums[r]
        while (curProduct >= k) {
            curProduct /= nums[l]
            l++
        }
        if (curProduct < k) res += r - l + 1
    }
    return res
};