/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let res = 0
    for (let i=1; i < nums.length; i++) {
        if (nums[i-1] < nums[i]) continue
        const diff = Math.abs(nums[i]-nums[i-1]) + 1
        nums[i] += diff
        res += diff
    }
    return res
};