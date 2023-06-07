/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const rows = Array(matrix.length).fill(Infinity)
    const cols = Array(matrix[0].length).fill(-Infinity)
    for (const r in matrix) {
        for (const c in matrix[r]) {
            rows[r] = Math.min(rows[r], matrix[r][c])
            cols[c] = Math.max(cols[c], matrix[r][c])
        }
    }
    const res = []
    for (const r in matrix) {
        for (const c in matrix[r]) {
            if (matrix[r][c] === rows[r] && matrix[r][c] === cols[c]) {
                res.push(matrix[r][c])
            }
        }
    }
    return res
};

luckyNumbers = function(mat) {
    const res = []
    for (const r in mat) {
        for (const c in mat[r]) {
            if (mat[r][c] === Math.min(...mat[r]) && mat[r][c] === Math.max(...mat.map((a) => a[c]))) {
                res.push(mat[r][c])
            }
        }
    }
    return res
}