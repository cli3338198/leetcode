/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    points.sort((a, b) => euclid([0, 0], a) - euclid([0, 0], b))
    return points.slice(0, k)
    
    function euclid([x0, y0], [x1, y1]) {
        return Math.sqrt(Math.pow(Math.abs(x0 - x1), 2) + Math.pow(Math.abs(y0 - y1), 2))
    }
};