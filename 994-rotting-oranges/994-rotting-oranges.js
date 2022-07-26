/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    const fresh = new Set()
    const q = []
    for (let r=0; r < rows; r++) {
        for (let c=0; c < cols; c++) {
            if (grid[r][c] === 2) {
                q.push([r, c, 0])
            }
            if (grid[r][c] === 1) {
                fresh.add(`${r} ${c}`)
            }
        }
    }
    let res = 0
    while (q.length) {
        const [r, c, time] = q.shift()
        res = Math.max(res, time)
        if (fresh.has(`${r} ${c}`)) fresh.delete(`${r} ${c}`)
        for (let [r1, c1] of [[0,1], [1,0], [0,-1], [-1,0]]) {
            const rr = r + r1
            const cc = c + c1
            if (rr in grid && cc in grid[rr] && grid[rr][cc] === 1) {
                grid[rr][cc] = 2
                q.push([rr, cc, time+1])
            }
        }
    }
    if (fresh.size > 0) return -1
    return res
};