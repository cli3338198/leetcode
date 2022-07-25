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
            let count = 0
            for (let n=num; set.has(n); n++) {
                count++
            }
            res = Math.max(res, count)
        }
    }
    return res
};