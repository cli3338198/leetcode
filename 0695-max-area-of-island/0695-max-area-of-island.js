/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let res = 0
    const set = new Set()
    const rows = grid.length
    const cols = grid[0].length
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] === 1 && !set.has(`${r} ${c}`)) {
                res = Math.max(res, dfs(r, c))
            }
        }
    }
    return res
    
    function dfs(r, c) {
        if (!(r in grid) || !(c in grid[r]) || grid[r][c] !== 1 || set.has(`${r} ${c}`)) return 0
        set.add(`${r} ${c}`)
        let res = 1
        res += dfs(r+1, c)
        res += dfs(r-1, c)
        res += dfs(r, c+1)
        res += dfs(r, c-1)
        return res
    }
};