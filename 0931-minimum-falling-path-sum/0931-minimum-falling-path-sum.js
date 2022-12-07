/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length
    const dp = Array(rows).fill(0).map(() => Array(cols).fill(101))
    dp[0] = matrix[0].slice()
    for (let r=1; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            dp[r][c] = matrix[r][c] + Math.min(
                dp[r-1][c-1] || Infinity,
                dp[r-1][c],
                dp[r-1][c+1] || Infinity
            )
        }
    }
    return Math.min(...dp[rows-1])
};