/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const map = {}
    for (const num of nums) {
        map[num] = map[num] + 1 || 1
    }
    let res = 0
    for (const num in map) {
        if (map[num] > 1) {
            res += Math.floor((map[num] * (map[num]-1)) / 2)
        }
    }
    return res
};