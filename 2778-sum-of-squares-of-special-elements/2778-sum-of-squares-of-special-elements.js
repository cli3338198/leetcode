/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    const n = nums.length
    return nums.reduce((acc, num, i) => acc + (n % (i + 1) === 0 ? num * num : 0), 0)
};