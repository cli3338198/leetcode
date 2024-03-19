function removeCoveredIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1])
    const stack = [intervals[0]]
    for (let i=1; i < intervals.length; i++) {
        if (stack.at(-1)[0] <= intervals[i][0] && stack.at(-1)[1] >= intervals[i][1]) {
            continue
        } else {
            stack.push(intervals[i])
        }
    }
    return stack.length
};