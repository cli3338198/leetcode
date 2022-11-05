/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    const total = nums.reduce((acc, val) => acc + val, 0)
    let prefix = 0
    let res = 0
    for (let i=0; i < nums.length; i++) {
        prefix += nums[i]
        if (i < nums.length-1 && prefix >= total - prefix) {
            res++
        }
    }
    return res
};