/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    return nums.sort((a, b) => a - b).map((n, i) => [n, i]).filter(([n]) => n === target).map(([,i]) => i)
};