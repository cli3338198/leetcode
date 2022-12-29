/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(mat) {
    const rows = mat.length
    const cols = mat[0].length
    const dp = Array(rows).fill(0).map(() => Array(cols).fill(0))
    let res = 1
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            dp[r][c] = Math.max(dp[r][c], helper(r, c))
            res = Math.max(res, dp[r][c])
        }
    }
    return res
    
    function helper(r, c) {
        if (dp[r][c] !== 0) {
            return dp[r][c]
        }
        dp[r][c] = 1
        for (let [rr, cc] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
            const rrr = rr + r
            const ccc = cc + c
            if (rrr in mat && ccc in mat[rrr] && mat[r][c] < mat[rrr][ccc]) {
                dp[r][c] = Math.max(dp[r][c], 1 + helper(rrr, ccc))
            }
        }
        return dp[r][c]
    }
};