/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let left = 0
    let right = matrix[0].length-1
    let top = 0
    let bottom = matrix.length-1
    const res = []
    while (left <= right && top <= bottom) {
        for (let c=left; c <= right; c++) {
            res.push(matrix[top][c])
        }
        top++
        for (let r=top; r <= bottom; r++) {
            res.push(matrix[r][right])
        }
        right--
        if (top > bottom) break
        for (let c=right; c >= left; c--) {
            res.push(matrix[bottom][c])
        }
        bottom--
        if (left > right) break
        for (let r=bottom; r >= top; r--) {
            res.push(matrix[r][left])
        }
        left++
    }
    return res
};