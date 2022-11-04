/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length
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
        for (let [rr, cc] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
            const rrr = r + rr
            const ccc = c + cc
            if (rrr in matrix && ccc in matrix[rrr] && matrix[r][c] < matrix[rrr][ccc]) {
                dp[r][c] = Math.max(dp[r][c], 1 + helper(rrr, ccc))
            }
        }
        return dp[r][c]
    }
};