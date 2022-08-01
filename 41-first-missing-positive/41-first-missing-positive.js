/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let one = false
    for (let num of nums) {
        if (num === 1) {
            one = true
            break
        }
    }
    if (!one) return 1
    const n = nums.length
    if (n === 1) return 2
    for (let i=0; i < nums.length; i++) {
        if (nums[i] <= 0 || nums[i] > n) nums[i] = 1
    }
    for (let i=0; i < nums.length; i++) {
        const n = Math.abs(nums[i])
        if (nums[n-1] > 0) nums[n-1] *= -1
    }
    for (let i=0; i < nums.length; i++) {
        if (nums[i] > 0) return i + 1
    }
    return n + 1
};