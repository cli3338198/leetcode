function insert(intervals: number[][], newInterval: number[]): number[][] { 
    intervals.push(newInterval)
    intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1])
    const res = [intervals[0]]
    for (let i=1; i < intervals.length; i++) {
        if (intervals[i][0] <= res.at(-1)[1]) {
            res.at(-1)[1] = Math.max(res.at(-1)[1], intervals[i][1])
        } else {
            res.push(intervals[i])
        }
    }
    return res
};