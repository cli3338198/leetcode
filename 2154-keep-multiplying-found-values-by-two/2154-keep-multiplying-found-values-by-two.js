/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    nums = new Set(nums)
    while (nums.has(original)) {
        original *= 2
    }
    return original
};