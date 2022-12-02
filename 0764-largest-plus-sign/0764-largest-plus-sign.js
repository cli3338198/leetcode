/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(n, mines) {
    const grid = Array(n).fill(0).map(() => Array(n).fill(n))
    for (const [r, c] of mines) {
        grid[r][c] = 0
    }
    for (let i=0; i < n; i++) {
        let l = 0, r = 0, u = 0, d = 0
        for (let j=0, k=n-1; j < n && k >= 0; j++, k--) {
            grid[i][j] = Math.min(grid[i][j], l = grid[i][j] === 0 ? 0 : l + 1)
            grid[i][k] = Math.min(grid[i][k], r = grid[i][k] === 0 ? 0 : r + 1) 
            grid[j][i] = Math.min(grid[j][i], u = grid[j][i] === 0 ? 0 : u + 1) 
            grid[k][i] = Math.min(grid[k][i], d = grid[k][i] === 0 ? 0 : d + 1) 
        }
    }
    let res = 0
    for (let r=0; r < n; r++) {
        for (let c=0; c < n; c++) {
            res = Math.max(res, grid[r][c])
        }
    }
    return res
};