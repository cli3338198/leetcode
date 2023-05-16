/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let res = 0
    for (let i=0; i < nums.length-1; i++) {
        if (nums[i] < nums[i+1]) continue
        while (nums[i] >= nums[i+1]) {
            res++
            nums[i+1]++
        }
    }
    return res
};