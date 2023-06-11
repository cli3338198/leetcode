/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    const res = Array(grid[0].length).fill(-1)
    for (let c=0; c < grid[0].length; c++) {
        res[c] = dfs(0, c)
    }
    return res
    
    function dfs(r, c) {
        if (r === grid.length) return c
        if (c === 0 && grid[r][c] === -1) return -1
        if (c === grid[0].length-1 && grid[r][c] === 1) return -1
        if (grid[r][c] === 1 && grid[r][c+1] === -1) return -1
        if (grid[r][c-1] === 1 && grid[r][c] === -1) return -1
        if (grid[r][c] === 1) {
            return dfs(r+1, c+1)
        } else {
            return dfs(r+1, c-1)
        }
    }
};