/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = []
    const map = {}
    for (const num of nums2) {
        while (stack.length && num > stack[stack.length-1]) {
            const smaller = stack.pop()
            map[smaller] = num
        }
        stack.push(num)
    }
    const res = []
    for (const num of nums1) {
        res.push(map[num] || -1)
    }
    console.log(map)
    return res
};