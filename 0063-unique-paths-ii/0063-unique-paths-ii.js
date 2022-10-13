/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    if (grid[rows-1][cols-1] === 1 || grid[0][0] === 1) return 0
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] === 1) {
                grid[r][c] = -1
            }
        }
    }
    grid[rows-1][cols-1] = 1
    for (let r=rows-1; r >= 0; r--) {
        for (let c=cols-1; c >= 0; c--) {
            if (grid[r][c] === -1 || (r === rows-1 & c === cols-1)) continue
            if (r === rows-1) {
                const right = grid[r][c+1] !== -1 ? grid[r][c+1] : 0
                grid[r][c] += right
            } else if (c === cols-1) {
                const bottom = grid[r+1][c] !== -1 ? grid[r+1][c] : 0
                grid[r][c] += bottom
            } else {
                const right = grid[r][c+1] !== -1 ? grid[r][c+1] : 0
                const bottom = grid[r+1][c] !== -1 ? grid[r+1][c] : 0
                grid[r][c] = right + bottom
            }
        }
    }
    return grid[0][0]
};