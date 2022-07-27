/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const rows = triangle.length
    for (let i=rows-2; i >= 0; i--) {
        for (let j=0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.min(triangle[i+1][j], triangle[i+1][j+1])
        }
    }
    return triangle[0][0]
};