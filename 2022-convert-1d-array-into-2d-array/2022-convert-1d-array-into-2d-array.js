/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, rows, cols) {
    if (rows * cols !== original.length) return []
    const res = Array(rows).fill(0).map(() => Array(cols).fill(0).map(() => ([])))
    let i = 0
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            res[r][c] = original[i++]
        }
    }
    return res
};