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

deleteGreatestValue = function(grid) {
    let res = 0, rows = grid.length, cols = grid[0].length
    for (let c = 0; c < cols; c++) {
        let gridMax = -Infinity
        for (let r = 0; r < grid.length; r++) {
            const row = grid[r]
            const max = Math.max(...row)
            const idx = row.indexOf(max)
            gridMax = Math.max(gridMax, max)
            grid[r] = row.slice(0, idx).concat(row.slice(idx+1))
        }
        res += gridMax
    }
    return res
}