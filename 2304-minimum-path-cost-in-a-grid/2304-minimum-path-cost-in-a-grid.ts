function minPathCost(grid: number[][], moveCost: number[][]): number {
    const rows = grid.length
    const cols = grid[0].length
    const dp: number[][] = Array(rows).fill(0).map(() => Array(cols).fill(Infinity))
    dp[0] = grid[0].slice()
    for (let r=1; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            for (let k=0; k < cols; k++) {
                dp[r][c] = Math.min(dp[r][c], grid[r][c] + dp[r-1][k] + moveCost[grid[r-1][k]][c])
            }
        }
    }
    return Math.min(...dp.at(-1))
};