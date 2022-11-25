/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0
    for (let i=0; i <= nums.length; i++) {
        sum += i
    }
    for (const n of nums) {
        sum -= n
    }
    return sum
};