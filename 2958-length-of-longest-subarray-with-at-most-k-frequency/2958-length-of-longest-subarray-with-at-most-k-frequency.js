/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    const freq = {}
    let l = 0, res = 0
    for (let r=0; r < nums.length; r++) {
        freq[nums[r]] = freq[nums[r]]+ 1 || 1
        while (l < r && freq[nums[r]] > k) {
            freq[nums[l]]--
            l++
        }
        res = Math.max(res, r - l + 1)
    }
    return res
};