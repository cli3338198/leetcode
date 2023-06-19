function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
    const rows = rowSum.length
    const cols = colSum.length
    const mat: number[][] = Array(rows).fill(0).map(() => Array(cols).fill(0))
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            mat[r][c] = Math.min(rowSum[r], colSum[c])
            rowSum[r] -= mat[r][c]
            colSum[c] -= mat[r][c]
        }
    }
    return mat
};