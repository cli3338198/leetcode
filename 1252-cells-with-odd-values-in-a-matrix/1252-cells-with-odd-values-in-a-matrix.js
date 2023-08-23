/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    const grid = Array(m).fill(0).map(() => Array(n).fill(0))
    for (const [r, c] of indices) {
        for (let col=0; col < n; col++) {
            grid[r][col]++
        }
        for (let row=0; row < m; row++) {
            grid[row][c]++
        }
    }
    let res = 0
    for (let r=0; r < m; r++) {
        for (let c=0; c < n; c++) {
            if (grid[r][c] % 2 !== 0) res++
        }
    }
    return res
};