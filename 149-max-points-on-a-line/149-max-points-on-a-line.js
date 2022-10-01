/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    const n = points.length
    if (n < 2) return n
    const slopes = {}
    let max = 0
    for (let i=0; i < n; i++) {
        for (let j=i+1; j < n; j++) {
            const key = findLine(points[i], points[j])
            slopes[key] = slopes[key] || new Set()
            slopes[key].add(JSON.stringify(points[i]))
            slopes[key].add(JSON.stringify(points[j]))
            max = Math.max(max, slopes[key].size)
        }
    }
    console.log(slopes)
    return max
};

function findLine([x1, y1], [x2, y2]) {
    if (y1 === y2) {
        return [0, y1]
    }
    if (x1 === x2) {
        return [Infinity, x1]
    }
    const slope = ((y2 - y1)) / (x2 - x1)
    const intercept = y1 - slope * x1
    return [slope, intercept]
}

