/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    const n = nums.length
    const totalSum = nums.reduce((acc, val) => acc + val, 0)
    let prefixSum = 0
    let res = 0
    for (let i=0; i < n-1; i++) {
        prefixSum += nums[i]
        if (prefixSum >= totalSum - prefixSum) {
            res++
        }
    }
    return res
};