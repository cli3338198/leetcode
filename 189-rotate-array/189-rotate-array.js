/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length
    const n = nums.length
    reverse(0, n-1)
    reverse(0, k-1)
    reverse(k, n-1)
    
    function reverse(l, r) {
        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l++
            r--
        }
    }
};
