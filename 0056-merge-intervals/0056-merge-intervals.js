/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    const res = [intervals[0]]
    for (let i=1; i < intervals.length; i++) {
        const [start, end] = intervals[i]
        if (start <= res.at(-1)[1]) {
            res.at(-1)[1] = Math.max(res.at(-1)[1], end)
        } else {
            res.push(intervals[i])
        }
    }
    return res
};