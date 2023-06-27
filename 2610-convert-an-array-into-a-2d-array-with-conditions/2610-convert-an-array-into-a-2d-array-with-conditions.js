/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const map = {}
    for (const n of nums) {
        map[n] = map[n] + 1 || 1
    }
    const res = []
    while (Object.values(map).some(n => n > 0)) {
        const subarr = []
        for (const n in map) {
            if (map[n] > 0) {
                map[n]--
                subarr.push(n)
            }
        }
        res.push(subarr)
    }
    return res
};