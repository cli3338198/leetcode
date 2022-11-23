/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */

var kthLargestNumber = function(nums, k) {
    return nums.map(BigInt).sort((a, b) => b - a >= 0 ? 1 : -1)[k-1] + ""
};