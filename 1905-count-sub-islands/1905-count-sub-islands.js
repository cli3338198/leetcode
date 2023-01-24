/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    const rows = grid1.length
    const cols = grid1[0].length
    let res = 0
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid2[r][c] === 1) {
                res += dfs(r, c)
            }
        }
    }
    return res
    
    function dfs(r, c) {
        if (!(r in grid2) || !(c in grid2[r]) || grid2[r][c] !== 1) return 1
        let mask = 1
        grid2[r][c] = 0
        mask &= dfs(r+1, c)
        mask &= dfs(r-1, c)
        mask &= dfs(r, c+1)
        mask &= dfs(r, c-1)
        return mask & grid1[r][c]
    }
};