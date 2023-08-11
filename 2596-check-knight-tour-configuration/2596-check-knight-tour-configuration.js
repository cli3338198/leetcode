/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkValidGrid = function(grid) {
    const moves = [[-1, -2], [-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2]]
    const visited = Array(grid.length).fill(0).map(() => Array(grid[0].length).fill(false))
    visited[0][0] = true
    if (dfs(0, 0, 0) === false) return false
    return true
    
    function dfs(r, c, i) {
        if (visited.every(row => row.every(cell => cell === true))) return true
        if (grid[r][c] !== i) return false
        let res = false
        for (const [y, x] of moves) {
            if (r+y in grid && c+x in grid[r+y] && visited[r+y][c+x] === false) {
                visited[r+y][c+x] = true
                res = res || dfs(r+y, c+x, i+1)
                visited[r+y][c+x] = false
            }
        }
        return res
    }
};