/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let a = 0
    let b = 0
    let c = nums.length-1
    while (b <= c) {
        if (nums[b] === 0) {
            [nums[a], nums[b]] = [nums[b], nums[a]]
            a++
        } else if (nums[b] === 2) {
            [nums[b], nums[c]] = [nums[c], nums[b]]
            c--
            b--
        }
        b++
    }
    return nums
};