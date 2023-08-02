/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const n = nums.length
    const left = Array(n).fill(0)
    let curSum = 0
    for (let i=0; i < n; i++) {
        left[i] = curSum
        curSum += nums[i]
    }
    curSum = 0
    const right = Array(n).fill(0)
    for (let i=n-1; i >= 0; i--) {
        right[i] = curSum
        curSum += nums[i]
    }
    const res = Array(n).fill(0)
    for (let i=0; i < n; i++) {
        res[i] = Math.abs(left[i]-right[i])
    }
    return res
};