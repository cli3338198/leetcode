/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    for (let r=rows-1; r >= 0; r--) {
        for (let c=cols-1; c >= 0; c--) {
            if (r === rows-1 && c === cols-1) continue
            if (r === rows-1) {
                grid[r][c] += grid[r][c+1]
            } else if (c === cols-1) {
                grid[r][c] += grid[r+1][c]
            } else {
                grid[r][c] += Math.min(grid[r+1][c], grid[r][c+1])
            }
        }
    }
    return grid[0][0]
};