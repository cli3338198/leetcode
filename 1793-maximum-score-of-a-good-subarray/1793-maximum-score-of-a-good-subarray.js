/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
    const n = nums.length
    let l = k
    let r = k
    let res = nums[k]
    let min = nums[k]
    while (l > 0 || r < n - 1) {
        if (l > 0 && r < n - 1) {
            if (nums[l-1] > nums[r+1]) {
                l--
                min = Math.min(min, nums[l])
            } else {
                r++
                min = Math.min(min, nums[r])
            }
        } else if (l > 0) {
            l--
            min = Math.min(min, nums[l])
        } else {
            r++
            min = Math.min(min, nums[r])
        }
        res = Math.max(res, (r-l+1) * min)
    }
    return res
};