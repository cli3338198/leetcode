function updateMatrix(mat: number[][]): number[][] {
    const rows = mat.length
    const cols = mat[0].length
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (mat[r][c] === 0) continue
            if (r === 0 && c === 0) {
                mat[r][c] = Infinity
                continue
            }
            const left = c > 0 ? mat[r][c-1] : Infinity
            const up = r > 0 ? mat[r-1][c] : Infinity
            mat[r][c] = 1 + Math.min(left, up)
        }
    }
    for (let r=rows-1; r >= 0; r--) {
        for (let c=cols-1; c >= 0; c--) {
            if (r === rows-1 && c === cols-1) continue
            if (mat[r][c] === 0) continue
            const right = c < cols-1 ? mat[r][c+1] : Infinity
            const down = r < rows-1 ? mat[r+1][c] : Infinity
            mat[r][c] = Math.min(mat[r][c], 1 + Math.min(right, down))
        }
    }
    return mat
};