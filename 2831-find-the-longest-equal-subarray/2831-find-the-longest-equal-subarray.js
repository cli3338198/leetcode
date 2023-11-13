/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestEqualSubarray = function(nums, k) {
    const map = {}
    let l = 0, res = 0
    for (let r=0; r < nums.length; r++) {
        map[nums[r]] = map[nums[r]] + 1 || 1
        res = Math.max(res, map[nums[r]])
        if (r-l+1-res > k) {
            map[nums[l++]]--
        }
    }
    return res
};