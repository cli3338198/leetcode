/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    nums = nums.map(arr => new Set(arr.sort((a, b) => a - b)))
    const res = []
    for (const n of nums[0]) {
        if (nums.every(row => row.has(n))) res.push(n)
    }
    return res
};