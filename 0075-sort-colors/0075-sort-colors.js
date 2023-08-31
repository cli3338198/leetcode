/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let red = 0, white = 0, blue = nums.length-1
    while (white <= blue) {
        if (nums[white] === 0) {
            [nums[red], nums[white]] = [nums[white], nums[red]]
            red++
        } else if (nums[white] === 2) {
            [nums[white], nums[blue]] = [nums[blue], nums[white]]
            blue--
            white--
        }
        white++
    }
};