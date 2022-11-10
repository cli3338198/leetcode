/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    const n = nums.length
    let l = 0
    let avg = -Infinity
    let sum = 0
    for (let r=0; r < n; r++) {
        sum += nums[r]
        if (r - l + 1 === k) {
            avg = Math.max(avg, sum / k)
            sum -= nums[l]
            l++
        }
    }
    return avg
};