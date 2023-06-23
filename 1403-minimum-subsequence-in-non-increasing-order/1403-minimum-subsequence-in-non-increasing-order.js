/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    const sum = nums.reduce((acc, val) => acc + val, 0)
    nums.sort((a, b) => b - a)
    const res = []
    let curSum = 0
    for (const n of nums) {
        curSum += n
        res.push(n)
        if (curSum > sum - curSum) break
    }
    return res
};