function numberOfPaths(grid: number[][], k: number): number {
    const mod = Math.pow(10, 9) + 7
    const rows = grid.length
    const cols = grid[0].length
    const dp: number[][][] = Array(rows).fill(0).map(() => Array(cols).fill(0).map(() => Array(k).fill(0)))
    for (let c=0, j=0; c < cols; c++) {
        j = (j + grid[0][c]) % k
        dp[0][c][j] = 1
    }
    for (let r=0, j=0; r < rows; r++) {
        j = (j + grid[r][0]) % k
        dp[r][0][j] = 1
    }
    for (let r=1; r < rows; r++) {
        for (let c=1; c < cols; c++) {
            const val = grid[r][c]
            for (let j=0; j < k; j++) {
                const newJ = (j + val) % k
                dp[r][c][newJ] += (dp[r-1][c][j] + dp[r][c-1][j]) % mod
            }
        }
    }
    return dp[rows-1][cols-1][0]
};