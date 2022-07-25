/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval)
    intervals.sort(([a], [b]) => a - b)
    const res = []
    for (let interval of intervals) {
        if (!res.length) {
            res.push(interval)
        } else {
            const [s1, e1] = res[res.length-1]
            const [s2, e2] = interval
            if (s2 <= e1) {
                res.pop()
                res.push([Math.min(s1, s2), Math.max(e1, e2)])
            } else {
                res.push(interval)
            }
        }
    }
    return res
};