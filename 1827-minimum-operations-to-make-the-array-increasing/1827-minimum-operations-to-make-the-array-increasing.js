/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let res = 0
    for (let i=0; i < nums.length-1; i++) {
        if (nums[i] < nums[i+1]) continue
        const diff = Math.abs(nums[i+1] - nums[i]) + 1
        nums[i+1] += diff
        res += diff
    }
    return res
};