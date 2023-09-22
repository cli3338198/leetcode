/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const dirs = [-1, 0, 1]
    for (let r=matrix.length-2; r >= 0; r--) {
        for (let c=0; c < matrix[r].length; c++) {
            let min = Infinity
            for (const cc of dirs) {
                const ccc = cc + c
                if (!(ccc in matrix[r])) continue
                min = Math.min(min, matrix[r+1][ccc])
            }
            matrix[r][c] += min
        }
    }
    return Math.min(...matrix[0])
};