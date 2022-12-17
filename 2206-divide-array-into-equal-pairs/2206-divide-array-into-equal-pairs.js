/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    nums.sort((a, b) => a - b)
    for (let i=0; i < nums.length; i += 2) {
        if ((nums[i] ^ nums[i+1]) !== 0) return false
    }
    return true
};