/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for (let i=0; i < nums.length-1; i++) {
        if (nums[i] === nums[i+1]) {
            nums[i] *= 2
            nums[i+1] = 0
        }
    }    
    return shiftZeroes(nums)
    
    function shiftZeroes(arr) {
        const nonZeroes = []
        const zeroes = []
        for (const n of arr) {
            if (n === 0) {
                zeroes.push(n)
            } else {
                nonZeroes.push(n)
            }
        }
        return [...nonZeroes, ...zeroes]
    }
};