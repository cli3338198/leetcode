/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length
    const map = {}
    const stack = []
    const ans = []
    nums = nums.concat(nums)
    for (let i=0; i < nums.length; i++) {
        while (stack.length && nums[i] > nums[stack.at(-1)]) {
            map[stack.pop()] = i
        }
        stack.push(i)
    }
    for (let i=0; i < n; i++) {
        ans[i] = i in map ? nums[map[i]] : -1
    }
    return ans
};