function uniquePathsWithObstacles(grid: number[][]): number {
    if (grid[0][0] === 1 || grid[grid.length-1][grid[0].length-1] === 1) return 0
    for (let r=0; r < grid.length; r++) {
        for (let c=0; c < grid[r].length; c++) {
            if (r === 0 && c === 0) {
                grid[r][c] = 1
            } else if (grid[r][c] === 1) {
                grid[r][c] = 0
            } else if (r === 0) {
                grid[r][c] = grid[r][c-1]
            } else if (c === 0) {
                grid[r][c] = grid[r-1][c]
            } else {
                grid[r][c] = grid[r-1][c] + grid[r][c-1]
            }
        }
    }
    return grid[grid.length-1][grid[0].length-1]
};