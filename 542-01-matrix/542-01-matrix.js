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
        const [r, c, dist] = q.shift()
        for (let [r1, c1] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
            const rr = r + r1
            const cc = c + c1
            if (rr in mat && cc in mat[rr] && dist + 1 < dp[rr][cc]) {
                dp[rr][cc] = 1 + dist
                q.push([rr, cc, 1 + dist])
            }
        }
    }
    return dp
};