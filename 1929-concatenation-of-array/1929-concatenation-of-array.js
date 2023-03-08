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