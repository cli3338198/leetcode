/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
    const map = {}
    for (const [start, end] of intervals) {
        map[start] = map[start] || 0
        map[end + 1] = map[end + 1] || 0
        map[start]++
        map[end + 1]--
    }
    let cur = 0, res = 0
    for (const n of Object.values(map)) {
        cur += n
        res = Math.max(res, cur)
    }
    return res
};