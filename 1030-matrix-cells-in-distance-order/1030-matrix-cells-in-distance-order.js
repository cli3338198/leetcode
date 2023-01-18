/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    const res = []
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            res.push([r, c])
        }
    }
    return res.sort(mySort)
    
    function mySort([a, b], [c, d]) {
        return (Math.abs(a - rCenter) + Math.abs(b - cCenter)) < (Math.abs(c - rCenter) + Math.abs(d - cCenter)) ? -1 : 1
    }
};