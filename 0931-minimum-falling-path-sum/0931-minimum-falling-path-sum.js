/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length
    for (let r=1; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            matrix[r][c] = matrix[r][c] + Math.min(
                matrix[r-1][c-1] || Infinity,
                matrix[r-1][c],
                matrix[r-1][c+1] || Infinity
            )
        }
    }
    return Math.min(...matrix[rows-1])
};