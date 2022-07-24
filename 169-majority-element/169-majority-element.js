/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let maxEl
    let maxCount = 0
    for (let num of nums) {
        if (!maxEl) {
            maxEl = num
            maxCount = 1
        } else if (maxEl === num) {
            maxCount++
        } else if (maxEl !== num && maxCount === 1) {
            maxEl = num
        } else {
            maxCount--
        }
    }
    return maxEl
};