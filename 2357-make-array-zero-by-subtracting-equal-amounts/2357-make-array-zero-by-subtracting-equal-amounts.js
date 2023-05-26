/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let res = 0
    while (true) {
        let min = Infinity
        for (const num of nums) {
            if (num > 0) min = Math.min(min, num)
        }
        if (min === Infinity) break
        for (let i=0; i < nums.length; i++) {
            if (nums[i] - min >= 0) nums[i] -= min
        }
        res++
    }
    return res
};