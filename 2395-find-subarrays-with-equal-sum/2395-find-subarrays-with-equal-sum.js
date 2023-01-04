/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    let sum = 0
    const set = new Set()
    let l = 0
    for (let r=0; r < nums.length; r++) {
        sum += nums[r]
        if (r - l + 1 === 2) {
            if (set.has(sum)) return true
            set.add(sum)
            sum -= nums[l]
            l++
        }
    }
    return false
};