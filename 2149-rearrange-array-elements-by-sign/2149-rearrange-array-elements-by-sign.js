/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const res = []
    let i = 0
    let j = 1
    for (const num of nums) {
        if (num > 0) {
            res[i] = num
            i += 2
        } else {
            res[j] = num
            j += 2
        }
    }
    return res
};