/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    const res = []
    for (const row of grid) {
        for (let i=0; i < row.length; i++) {
            if (i in res) {
                res[i] = Math.max(res[i], String(row[i]).length)
            } else {
                res[i] = String(row[i]).length
            }
        }
    }
    return res
};