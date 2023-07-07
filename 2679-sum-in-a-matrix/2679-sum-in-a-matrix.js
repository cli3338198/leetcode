/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function(nums) {
    nums.forEach(row => row.sort((a, b) => b - a))
    let res = 0
    for (let i=0; i < nums[0].length; i++) {
        let max = -Infinity
        for (const row of nums) {
            max = Math.max(max, row[i])
        }
        res += max
    }
    return res
};