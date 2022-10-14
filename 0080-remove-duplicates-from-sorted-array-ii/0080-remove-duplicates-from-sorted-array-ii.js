/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const n = nums.length
    if (n < 3) return n
    let i = 2
    for (let j=2; j < n; j++) {
        if (nums[j] !== nums[i-2]) {
            nums[i] = nums[j]
            i++
        }
    }
    return i
    
};