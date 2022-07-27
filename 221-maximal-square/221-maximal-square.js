/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let res = 0
    const rows = matrix.length
    const cols = matrix[0].length
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (r === 0 || c === 0) {
                if (matrix[r][c] === "1") {
                    res = Math.max(res, 1)
                }
            } else {
                if (matrix[r][c] === "1") {
                    matrix[r][c] = 1 + Math.min(matrix[r-1][c-1], matrix[r-1][c], matrix[r][c-1])
                }
                res = Math.max(res, matrix[r][c] * matrix[r][c])
            }
        }
    }
    return res
};