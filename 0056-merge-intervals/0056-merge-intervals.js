/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    const res = []
    for (const interval of intervals) {
        if (!res.length || interval[0] > res.at(-1)[1]) {
            res.push(interval)
        } else {
            res.at(-1)[1] = Math.max(res.at(-1)[1], interval[1])
        }
    }
    return res
};