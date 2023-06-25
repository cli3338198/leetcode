/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    const rows = Array(mat.length).fill(0)
    const cols = Array(mat[0].length).fill(0)
    for (let r=0; r < mat.length; r++) {
        for (let c=0; c < mat[r].length; c++) {
            if (mat[r][c] === 1) {
                rows[r]++
                cols[c]++
            }
        }
    }
    let res = 0
    for (let r=0; r < mat.length; r++) {
        for (let c=0; c < mat[r].length; c++) {
            if (mat[r][c] === 1 && rows[r] === 1 && cols[c] === 1) {
                res++
            }
        }
    }
    return res
};