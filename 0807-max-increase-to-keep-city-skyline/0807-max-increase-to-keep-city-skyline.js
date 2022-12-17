/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    const row = []
    const col = []
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            row[r] = Math.max(grid[r][c], row[r] || 0)
            col[c] = Math.max(grid[r][c], col[c] || 0)
        }
    }
    let res = 0
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            res += Math.min(row[r], col[c]) - grid[r][c]
        }
    }
    return res
};