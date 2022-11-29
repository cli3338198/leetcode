/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn, dp={}) {
    const key = `${maxMove} ${startRow} ${startColumn}`
    if (key in dp) return dp[key]
    if (startRow < 0 || startRow >= m || startColumn < 0 || startColumn >= n) return 1
    if (maxMove <= 0) return 0
    return dp[key] = (
        findPaths(m, n, maxMove-1, startRow+1, startColumn, dp) + 
        findPaths(m, n, maxMove-1, startRow-1, startColumn, dp) + 
        findPaths(m, n, maxMove-1, startRow, startColumn+1, dp) + 
        findPaths(m, n, maxMove-1, startRow, startColumn-1, dp)
    ) % ((10**9) + 7)
};
