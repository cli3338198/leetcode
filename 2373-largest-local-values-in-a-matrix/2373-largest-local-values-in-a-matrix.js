/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    const n = grid.length
    const res = Array(n-2).fill(0).map(() => Array(n-2).fill(-Infinity))
    for (let r=1; r <= n-2; r++) {
        for (let c=1; c <= n-2; c++) {
            for (let i=r-1; i <= r+1; i++) {
                for (let j=c-1; j <= c+1; j++) {
                    res[r-1][c-1] = Math.max(res[r-1][c-1], grid[i][j])
                }
            }
        }
    }
    return res
};