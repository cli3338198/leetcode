/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const grid = Array(m).fill(0).map(() => Array(n).fill(0))
    for (let r=m-1; r >= 0; r--) {
        for (let c=n-1; c >= 0; c--) {
            if (r === m-1 || c === n-1) {
                grid[r][c] = 1
            } else {
                grid[r][c] = grid[r+1][c] + grid[r][c+1]
            }
        }
    }
    return grid[0][0]
};