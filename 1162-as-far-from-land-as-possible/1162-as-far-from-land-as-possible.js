/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    const dp = Array(rows).fill(0).map(() => Array(cols).fill(Infinity))
    const q = []
    let hasLand = false
    let hasWater = false
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] === 1) {
                hasLand = true
                q.push([r, c, 0])
                dp[r][c] = 0
            } else {
                hasWater = true
            }
        }
    }
    if (hasLand === false || hasWater === false) return -1
    while (q.length) {
        const [r, c, cost] = q.shift()
        for (const [rr, cc] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
            const rrr = r + rr
            const ccc = c + cc
            if (rrr in grid && ccc in grid[rrr] && grid[rrr][ccc] === 0 && cost + 1 < dp[rrr][ccc]) {
                dp[rrr][ccc] = cost + 1
                q.push([rrr, ccc, cost + 1])
            }
        }
    }
    let res = 0
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] === 0) {
                res = Math.max(res, dp[r][c])
            }
        }
    }
    return res
};