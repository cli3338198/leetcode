/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let min = 0
    let prefixSum = 0
    for (const num of nums) {
        prefixSum += num
        min = Math.min(min, prefixSum)
    }
    return min < 0 ? Math.abs(min) + 1 : 1
};