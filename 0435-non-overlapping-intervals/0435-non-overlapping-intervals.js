/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    // greedy
    // sort, then compare two intervals, remember the later end time, if overlap take 1
    const n = intervals.length
    intervals.sort(([a], [b]) => a - b)
    let res = 0
    let lastEnd = intervals[0][1]
    for (let i=1; i < n; i++) {
        const [s, e] = intervals[i]
        if (s < lastEnd) {
            res++
            lastEnd = Math.min(lastEnd, e)
        } else {
            lastEnd = e
        }
    }
    return res
};

eraseOverlapIntervals = function(intervals) {
    const n = intervals.length
    intervals.sort(([a], [b]) => a - b)
    let lastEnd = intervals[0][1]
    const dp = Array(n).fill(0)
    for (let i=1; i < n; i++) {
        if (intervals[i][0] < lastEnd) {
            lastEnd = Math.min(lastEnd, intervals[i][1])
            dp[i] = 1 + dp[i-1]
        } else {
            lastEnd = intervals[i][1]
            dp[i] = dp[i-1]
        }
    }
    return dp[n-1]
}