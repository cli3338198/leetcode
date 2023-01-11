function eraseOverlapIntervals(intervals: number[][]): number {
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