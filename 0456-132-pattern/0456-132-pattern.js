/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let min = Infinity
    const stack = []
    for (const num of nums) {
        while (stack.length && stack[stack.length-1].num < num) {
            stack.pop()
        }
        if (stack.length) {
            const {min: i, num: k} = stack[stack.length-1]
            const j = num
            if (i < j && j < k) {
                return true
            }
        }
        stack.push({num, min})
        min = Math.min(min, num)
    }
    return false
};