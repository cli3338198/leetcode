/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let res = 0
    for (let r=0, c=0; r < mat.length && c < mat[0].length; r++, c++) {
        res += mat[r][c]
    }
    for (let r=0, c=mat[0].length-1; r < mat.length && c >= 0; r++, c--) {
        res += mat[r][c]
    }
    if (mat.length % 2) res -= mat[Math.floor(mat.length/2)][Math.floor(mat.length/2)]
    return res
};

diagonalSum = function(mat) {
    let left = 0, right = mat[0].length-1, res = 0
    for (let r=0; r < mat.length; r++) {
        if (left === right) {
            res += mat[r][left]
        } else {
            res += mat[r][left] + mat[r][right]   
        }
        left++
        right--
    }
    return res
}