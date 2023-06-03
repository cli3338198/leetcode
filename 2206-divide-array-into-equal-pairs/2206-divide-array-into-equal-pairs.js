/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    return Object.values(nums.reduce((acc, val) => ({...acc, [val]: acc[val] + 1 || 1}), {})).every((x) => x % 2 === 0)
};