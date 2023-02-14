/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    let start
    let cnt = 1
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] === 0) {
                cnt++
            } else if (grid[r][c] === 1) {
                start = [r, c]
            }
        }
    }
    return dfs(start[0], start[1])
    
    function dfs(r, c) {
        if (!(r in grid) || !(c in grid[r]) || grid[r][c] < 0) return 0
        if (grid[r][c] === 2) {
            return cnt === 0 ? 1 : 0
        }
        let res = 0
        grid[r][c] = -2
        cnt--
        res += dfs(r+1, c)
        res += dfs(r-1, c)
        res += dfs(r, c-1)
        res += dfs(r, c+1)
        cnt++
        grid[r][c] = 0
        return res
    }    
};