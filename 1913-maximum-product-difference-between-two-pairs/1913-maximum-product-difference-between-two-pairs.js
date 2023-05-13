/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a, b) => b - a)
    const a = nums.at(0), b = nums.at(1), c = nums.at(-1), d = nums.at(-2)
    return (a * b) - (c * d)
};