/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    const map = {}
    let res = 0
    for (const num of nums) {
        const pos = k + num
        const neg = num - k
        if (pos in map) res += map[pos]
        if (neg in map) res += map[neg]
        map[num] = map[num] + 1 || 1
    }
    return res
};