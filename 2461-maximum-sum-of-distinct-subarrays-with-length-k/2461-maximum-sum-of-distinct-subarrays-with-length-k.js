/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    const map = {}
    let l = 0, curSum = 0, max = 0
    for (let r=0; r < nums.length; r++) {
        map[nums[r]] = map[nums[r]] + 1 || 1
        curSum += nums[r]
        while (map[nums[r]] > 1 || r - l + 1 > k) {
            map[nums[l]]--
            curSum -= nums[l]
            l++
        }
        if (r - l + 1 === k) {
            max = Math.max(max, curSum)
        }
    }
    return max
};