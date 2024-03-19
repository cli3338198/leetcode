function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1])
    const stack = [intervals[0]]
    for (let i=1; i < intervals.length; i++) {
        const [, e1] = stack.at(-1)
        const [s2, e2] = intervals[i]
        if (s2 <= e1) {
            stack.at(-1)[1] = Math.max(e1, e2)
        } else {
            stack.push([s2, e2])
        }
    }
    return stack
};