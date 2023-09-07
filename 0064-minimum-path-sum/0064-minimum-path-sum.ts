function minPathSum(grid: number[][]): number {
    for (let r=grid.length-1; r >= 0; r--) {
        for (let c=grid[0].length-1; c >= 0; c--) {
            if (r === grid.length-1 && c === grid[0].length-1) {
                continue
            } else if (r === grid.length-1) {
                grid[r][c] += grid[r][c+1]
            } else if (c === grid[0].length-1) {
                grid[r][c] += grid[r+1][c]
            } else {
                grid[r][c] += Math.min(grid[r+1][c], grid[r][c+1])
            }
        }
    }
    return grid[0][0]
};