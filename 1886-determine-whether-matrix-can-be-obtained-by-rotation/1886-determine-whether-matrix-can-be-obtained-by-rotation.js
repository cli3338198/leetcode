/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    const rotations = [true, true, true, true]
    const width = mat.length
    for (let r=0; r < width; r++) {
        for (let c=0; c < width; c++) {
            if (mat[r][c] !== target[r][c]) rotations[0] = false
            if (mat[r][c] !== target[width-c-1][r]) rotations[1] = false
            if (mat[r][c] !== target[width-r-1][width-c-1]) rotations[2] = false
            if (mat[r][c] !== target[c][width-r-1]) rotations[3] = false
        }
    }
    return rotations.some(rot => rot === true)
};