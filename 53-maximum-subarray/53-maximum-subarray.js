/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -Infinity
    let curSum = -Infinity
    for (let num of nums) {
        curSum = Math.max(num, curSum + num)
        maxSum = Math.max(maxSum, curSum)
    }
    return maxSum
};