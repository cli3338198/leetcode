/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const rows = mat.length
    const cols = mat[0].length
    const dp = Array(rows).fill(0).map(() => Array(cols).fill(Infinity))
    const q = []
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (mat[r][c] === 0) {
                dp[r][c] = 0
                q.push([r, c, 0])
            }
        }
    }
    while (q.length) {
        const [r, c, d] = q.shift()
        for (const [rr, cc] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
            const rrr = rr + r
            const ccc = cc + c
            if (!(rrr in mat) || !(ccc in mat[rrr]) || 1 + d >= dp[rrr][ccc]) continue
            dp[rrr][ccc] = 1 + d
            q.push([rrr, ccc, 1 + d])
        }
    }
    return dp
};