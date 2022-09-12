/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set()
    for (let num of nums) {
        set.add(num)
    }
    let res = 0
    for (let num of nums) {
        if (!set.has(num-1)) {
            let len = 0
            for (let i=num; set.has(i); i++) {
                len++
            }
            res = Math.max(res, len)
        }
    }
    return res
};