/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    const sorted = nums.slice()
    sorted.sort((a, b) => a - b)
    let start = nums.length-1, end = 0 
    for (let i=0; i < nums.length; i++) {
        if (sorted[i] !== nums[i]) {
            start = Math.min(start, i)
            end = Math.max(end, i)
        }
    }
    return end - start > 0 ? end - start + 1 : 0
};