/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    let rows = matrix.length, cols = matrix[0].length, firstRow = false, firstCol = false
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (matrix[r][c] === 0) {
                if (r === 0) firstRow = true
                if (c === 0) firstCol = true
                matrix[0][c] = 0
                matrix[r][0] = 0
            }
        }
    }
    for (let r=1; r < rows; r++) {
        for (let c=1; c < cols; c++) {
            if (!matrix[r][0] || !matrix[0][c]) {
                matrix[r][c] = 0
            }
        }
    }
    if (firstRow) {
        for (let c=0; c < cols; c++) {
            matrix[0][c] = 0
        }
    }
    if (firstCol) {
        for (let r=0; r < rows; r++) {
            matrix[r][0] = 0
        }
    }
};