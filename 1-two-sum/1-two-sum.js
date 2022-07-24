/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {}
    for (let i=0; i < nums.length; i++) {
        const num = nums[i]
        const complement = target - num
        if (complement in map) {
            return [i, map[complement]]
        }
        map[num] = i
    }
};