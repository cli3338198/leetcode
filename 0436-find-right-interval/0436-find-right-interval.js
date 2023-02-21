/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    if (intervals.length <= 1) return [-1]
    intervals = intervals.map((int, i) => [...int, i]).sort((a, b) => a[0] - b[0])
    for (let i=0; i < intervals.length; i++) {
        const [si, ei] = intervals[i]
        intervals[i].push(binarySearch(si, ei))
    }
    intervals.sort((a, b) => a[2] - b[2])
    return intervals.map(i => i[3])
    
    function binarySearch(si, ei) {
        let l = 0
        let r = intervals.length-1
        let idx = -1
        while (l <= r) {
            const m = Math.floor((l+r)/2)
            const [sj, ej, i] = intervals[m]
            if (sj >= ei) {
                idx = i
                r = m-1
            } else {
                l = m+1
            }
        }
        return idx
    }
};