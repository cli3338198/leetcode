/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let res = 0
    while (grid.every(row => row.length > 0)) {
        let gridMax = -Infinity
        for (let r=0; r < grid.length; r++) {
            let idx = null, rowMax = -Infinity
            for (let c=0; c < grid[r].length; c++) {
                if (idx === null || grid[r][c] > rowMax) {
                    idx = c
                    rowMax = grid[r][c]
                }
            }
            grid[r] = grid[r].slice(0, idx).concat(grid[r].slice(idx+1))
            gridMax = Math.max(gridMax, rowMax)
        }
        res += gridMax
    }
    return res
};