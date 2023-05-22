/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let res = 0
    for (const row of grid) {
        let l = 0, r = row.length-1
        while (l <= r) {
            const m = Math.floor((l+r)/2)
            if (row[m] < 0) {
                r = m - 1
            } else {
                l = m + 1
            }
        }
        res += row.length - l
    }
    return res
};