/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let a = 0
    let b = nums.length-1
    while (a <= b) {
        const m = Math.floor((a + b) / 2)
        const num = nums[m]
        if (num === target) {
            return m
        } else if (num > target) {
            b--
        } else {
            a++
        }
    }
    return -1
};