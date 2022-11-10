/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const n = nums.length
    const map = {}
    for (let i=0; i < n; i++) {
        if (nums[i] in map && Math.abs(i - map[nums[i]]) <= k) {
            return true
        }
        map[nums[i]] = i
    }
    return false
};