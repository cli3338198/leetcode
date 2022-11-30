/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a, b) => a - b)
    for (let i=0; i < nums.length && nums[i] < 0 && k > 0; i++, k--) {
        nums[i] = -nums[i]
    }
    let sum = 0, min = Infinity
    for (const n of nums) {
        sum += n
        min = Math.min(min, n)
    }
    return sum - (k % 2) * min * 2 
};