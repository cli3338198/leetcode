/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    let res = 0
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] === 1) {
                res += 4
                if (grid[r-1] && grid[r-1][c] === 1) {
                    res -= 2
                }
                if (grid[r][c-1] === 1) {
                    res -= 2
                }
            }
        }
    }
    return res
};