/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    nums = nums.map((num, i) => ({num, i}))
    nums.sort(({num: a}, {num: b}) => a - b)
    let a = 0
    let b = nums.length-1
    while (a < b) {
        const sum = nums[a].num + nums[b].num
        if (sum === target) {
            return [nums[a].i, nums[b].i]
        } else if (sum > target) {
            b--
        } else {
            a++
        }
    }
};