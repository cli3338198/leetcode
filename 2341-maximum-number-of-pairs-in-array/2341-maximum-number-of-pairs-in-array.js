/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    const map = {}
    for (const n of nums) {
        map[n] = map[n] + 1 || 1
    }
    const res = [0, 0]
    for (const k in map) {
        if (map[k] >= 2) {
            res[0] += Math.floor(map[k] / 2)
            res[1] += map[k] % 2
        } else {
            res[1] += map[k]
        }
    }
    return res
};