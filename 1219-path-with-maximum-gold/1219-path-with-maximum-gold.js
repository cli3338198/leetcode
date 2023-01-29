/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    let res = 0
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] > 0) {
                res = Math.max(res, helper(r, c))
            }
        }
    }
    return res
    
    function helper(r, c) {
        if (!(r in grid) || !(c in grid[r]) || grid[r][c] === 0) return 0
        const temp = grid[r][c]
        grid[r][c] = 0
        let res = 0
        for (const [rr, cc] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
            const rrr = rr + r
            const ccc = cc + c
            res = Math.max(res, helper(rrr, ccc))
        }
        grid[r][c] = temp
        return temp + res
    }
};