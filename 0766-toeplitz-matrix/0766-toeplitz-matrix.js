/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (r === 0 || c === 0) continue
            if (matrix[r][c] !== matrix[r-1][c-1]) return false
        }
    }
    return true
};