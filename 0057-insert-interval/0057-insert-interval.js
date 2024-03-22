/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let left = 0, right = intervals.length - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const [start, end] = intervals[mid]
        if (start < newInterval[0]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    intervals = intervals.slice(0, left).concat([newInterval, ...intervals.slice(left)])
    let res = [intervals[0]]
    for (let i=1; i < intervals.length; i++) {
        const [start, end] = intervals[i]
        if (start <= res.at(-1)[1]) {
            res.at(-1)[1] = Math.max(res.at(-1)[1], end)
        } else {
            res.push(intervals[i])
        }
    }
    return res
    
    //
    
    intervals.push(newInterval)
    intervals.sort((a, b) => a[0] - b[0])
    res = [intervals[0]]
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