/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a, b) => a - b)
    let l = 0, r = nums.length-1, res = -Infinity
    while (l < r) {
        res = Math.max(res, nums[l++] + nums[r--])
    }
    return res
};