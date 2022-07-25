/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    // greedy
    // sort, then compare two intervals, remember the later end time, if overlap take 1
    intervals.sort(([a], [b]) => a - b)
    let res = 0
    let lastEnd = intervals[0][1]
    for (let i=1; i < intervals.length; i++) {
        const [start, end] = intervals[i]
        if (start >= lastEnd) {
            lastEnd = end
        } else {
            res++
            lastEnd = Math.min(lastEnd, end)
        }
    }
    return res
};