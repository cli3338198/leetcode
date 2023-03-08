/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    return nums.concat(nums)
};

getConcatenation = function(nums) {
    return [...nums, ...nums]
}

getConcatenation = function(nums) {
    const n = nums.length
    for (let i=0; i < n; i++) {
        nums[i+n] = nums[i]
    }
    return nums
}