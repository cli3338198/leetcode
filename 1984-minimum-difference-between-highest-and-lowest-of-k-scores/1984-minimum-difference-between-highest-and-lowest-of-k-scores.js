/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    nums.sort((a, b) => a - b)
    let min = Infinity
    let l = 0
    for (let r=0; r < nums.length; r++) {
        if (r - l + 1 < k) continue
        min = Math.min(min, nums[r] - nums[l])
        l++
    }
    return min
};