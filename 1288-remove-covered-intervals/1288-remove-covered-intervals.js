/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals.sort(([a], [b]) => a - b)
    let res = 0, start = -1, end = -1
    for (const [s, e] of intervals) {
        if (s > start && e > end) {
            res++
            start = s
        }
        end = Math.max(end, e)
    }
    return res
};