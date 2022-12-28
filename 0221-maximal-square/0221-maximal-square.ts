function maximalSquare(mat: string[][]): number {
    const rows = mat.length
    const cols = mat[0].length
    const dp: number[][] = Array(rows).fill(0).map(() => Array(cols).fill(0))
    let res = 0
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (r === 0 || c === 0) {
                if (mat[r][c] === '1') {
                    dp[r][c] = 1
                }
            } else if (mat[r][c] === '1') {
                dp[r][c] = 1 + Math.min(dp[r-1][c-1], dp[r-1][c], dp[r][c-1])
            }
            res = Math.max(res, dp[r][c] * dp[r][c])
        }
    }
    return res
};