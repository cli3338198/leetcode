function matrixScore(grid: number[][]): number {
    const rows = grid.length
    const cols = grid[0].length
    let res = (1 << cols - 1) * rows
    for (let c=1; c < cols; c++) {
        let count = 0
        for (let r=0; r < rows; r++) {
            count += grid[r][c] === grid[r][0] ? 1 : 0
        }
        res += Math.max(count, rows - count) * (1 << (cols - c - 1))
    }
    return res
};