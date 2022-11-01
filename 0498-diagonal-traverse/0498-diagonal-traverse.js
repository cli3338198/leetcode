/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const rows = mat.length
    const cols = mat[0].length
    if (rows === 0 || cols === 0) return []
    let row = 0
    let col = 0
    let up = true
    const res = []
    while (row < rows && col < cols) {
        if (up) {
            while (row > 0 && col < cols-1) {
                res.push(mat[row][col])
                row--
                col++
            }
            res.push(mat[row][col])
            if (col === cols-1) {
                row++
            } else {
                col++
            }            
        } else {
            while (row < rows-1 && col > 0) {
                res.push(mat[row][col])
                row++
                col--
            }
            res.push(mat[row][col])
            if (row === rows-1) {
                col++
            } else {
                row++
            }
        }
        up = !up
    }
    return res
};