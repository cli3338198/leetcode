/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const res = []
    for (let i=0; i < nums.length; i++) {
        res[i] = nums[nums[i]]
    }
    return res
};