/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[1] - b[1])
    let poppedUpTo = -Infinity, res = 0
    for (const [widthStart, widthEnd] of points) {
        if (widthStart > poppedUpTo) {
            poppedUpTo = widthEnd
            res++
        }
    }
    return res
};