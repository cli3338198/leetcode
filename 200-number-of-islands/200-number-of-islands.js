/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    let res = 0
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] === '1') {
                res++
                helper(r, c)
            }
        }
    }
    return res
    
    function helper(r, c) {
        if (!(r in grid) || !(c in grid[r]) || grid[r][c] !== '1') return
        grid[r][c] = '0'
        helper(r + 1, c)
        helper(r - 1, c)
        helper(r, c + 1)
        helper(r, c - 1)
    }
};