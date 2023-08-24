/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const arr = Array(Math.pow(10, 5) + 1).fill(0)
    const res = []
    for (const n of nums) {
        arr[n]++
        if (arr[n] > 1) res.push(n)
    }
    return res
};