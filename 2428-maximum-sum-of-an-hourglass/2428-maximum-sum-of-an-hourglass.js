/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function(grid) {
    let res = 0
    for (let r=0; r < grid.length-2; r++) {
        for (let c=0; c < grid[r].length-2; c++) {
            res = Math.max(res, sum(r, c))
        }
    }
    return res
    
    function sum(r, c) {
        return grid[r][c] + grid[r][c+1] + grid[r][c+2] + grid[r+1][c+1] + grid[r+2][c] + grid[r+2][c+1] + grid[r+2][c+2]
    }
};