/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const rows = mat.length
    const cols = mat[0].length
    if ((r === rows && c === cols) || (rows*cols !== r*c)) return mat
    const newMat = Array(r).fill(0).map(() => Array(c))
    let m = 0
    let n = 0
    for (let i=0; i < rows; i++) {
        for (let j=0; j < cols; j++) {
            const num = mat[i][j]
            newMat[m][n] = num
            n++
            if (n >= c) {
                m++
                n = 0
            }
        }
    }
    return newMat
};