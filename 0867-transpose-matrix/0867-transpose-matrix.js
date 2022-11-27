/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(mat) {
    const rows = mat.length
    const cols = mat[0].length
    const res = Array(cols).fill(0).map(() => Array(rows))
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            res[c][r] = mat[r][c]
        }
    }
    return res
};