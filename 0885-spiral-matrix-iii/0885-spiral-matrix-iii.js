/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, r0, c0) {
    const dirs = [[0,1], [1,0], [0,-1], [-1,0]]
    let dirIdx = 0
    const total = rows*cols
    let steps = 1
    let increment = 1
    const res = [[r0, c0]]
    while (res.length < total) {
        for (let i=0; i < increment; i++) {
            r0 = r0 + dirs[dirIdx][0]
            c0 = c0 + dirs[dirIdx][1]
            if (r0 >= 0 && r0 < rows && c0 >= 0 && c0 < cols) {
                res.push([r0, c0])
            }
        }
        dirIdx = (dirIdx + 1) % 4
        if (steps % 2 === 0) {
            increment++
        }
        steps++
    }
    return res
};