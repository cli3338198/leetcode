/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length
    let res = 0
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (matrix[r][c] === 1) {
                const tl = r-1 in matrix && c-1 in matrix[r] ? matrix[r-1][c-1] : 0
                const l = c-1 in matrix[r] ? matrix[r][c-1] : 0
                const t = r-1 in matrix ? matrix[r-1][c] : 0
                matrix[r][c] = 1 + Math.min(tl, l, t)
                res += matrix[r][c]
            }
        }
    }
    return res
};