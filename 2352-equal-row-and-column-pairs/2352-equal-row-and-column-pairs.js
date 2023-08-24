/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const n = grid.length
    const cnts = {}
    for (const row of grid) {
        const key = "|" + row.join("|")
        cnts[key] = cnts[key] + 1 || 1
    }
    let res = 0
    for (let c=0; c < n; c++) {
        let key = ""
        for (let r=0; r < n; r++) {
            key += "|" + grid[r][c]
        }
        res += cnts[key] || 0
    }
    return res
};